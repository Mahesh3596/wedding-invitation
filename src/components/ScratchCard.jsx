import { useEffect, useRef, useState } from 'react';

const BRUSH = 42;

function Burst() {
  const [pieces] = useState(() =>
    Array.from({ length: 26 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 26 + Math.random() * 0.3;
      const dist = 90 + Math.random() * 90;
      return {
        id: i,
        tx: `${Math.cos(angle) * dist}px`,
        ty: `${Math.sin(angle) * dist}px`,
        rot: `${Math.random() * 360}deg`,
        heart: i % 3 === 0,
      };
    })
  );
  return (
    <div className="burst" aria-hidden="true">
      {pieces.map((p) => (
        <span key={p.id} className={p.heart ? 'heart' : 'spark'} style={{ '--tx': p.tx, '--ty': p.ty, '--rot': p.rot }}>
          {p.heart ? '♥' : ''}
        </span>
      ))}
    </div>
  );
}

export default function ScratchCard({ label, revealed, onReveal, children }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const stroke = useRef({ drawing: false, last: null, moves: 0 });

  useEffect(() => {
    if (revealed) return;
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    let paintedWidth = 0;

    const paint = (force = false) => {
      const { width, height } = wrap.getBoundingClientRect();
      if (!width || (!force && Math.round(width) === paintedWidth)) return;
      paintedWidth = Math.round(width);
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalCompositeOperation = 'source-over';

      const g = ctx.createLinearGradient(0, 0, width, height);
      g.addColorStop(0, '#a87b32');
      g.addColorStop(0.35, '#f1dca0');
      g.addColorStop(0.55, '#c9a052');
      g.addColorStop(0.8, '#f5e3ae');
      g.addColorStop(1, '#9c6f28');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 160; i++) {
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.55})`;
        ctx.beginPath();
        ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.strokeStyle = 'rgba(109,31,47,0.45)';
      ctx.lineWidth = 1;
      ctx.strokeRect(10, 10, width - 20, height - 20);

      ctx.fillStyle = '#6d1f2f';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '42px "Great Vibes", cursive';
      ctx.fillText(label, width / 2, height / 2 - 18);
      ctx.font = '500 11px Montserrat, sans-serif';
      ctx.fillText('S C R A T C H   T O   R E V E A L', width / 2, height / 2 + 26);
    };

    const ro = new ResizeObserver(() => paint());
    ro.observe(wrap);
    document.fonts?.ready.then(() => paint(true));
    return () => ro.disconnect();
  }, [revealed, label]);

  const pointFrom = (e) => {
    const r = canvasRef.current.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const checkProgress = () => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;
    const { data } = canvas.getContext('2d', { willReadFrequently: true }).getImageData(0, 0, canvas.width, canvas.height);
    let clear = 0;
    let total = 0;
    for (let i = 3; i < data.length; i += 4 * 37) {
      total++;
      if (data[i] < 40) clear++;
    }
    if (total && clear / total > 0.45) onReveal();
  };

  const scratchTo = (p) => {
    const ctx = canvasRef.current.getContext('2d', { willReadFrequently: true });
    const { last } = stroke.current;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.strokeStyle = '#000';
    ctx.lineWidth = BRUSH;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(p.x + 0.01, p.y);
    ctx.stroke();
    stroke.current.last = p;
    if (++stroke.current.moves % 12 === 0) checkProgress();
  };

  const onPointerDown = (e) => {
    if (revealed) return;
    stroke.current.drawing = true;
    stroke.current.last = pointFrom(e);
    canvasRef.current.setPointerCapture(e.pointerId);
    scratchTo(pointFrom(e));
  };

  const onPointerMove = (e) => {
    if (stroke.current.drawing) scratchTo(pointFrom(e));
  };

  const onPointerUp = () => {
    stroke.current.drawing = false;
    checkProgress();
  };

  return (
    <div className={`scratch ${revealed ? 'is-revealed' : ''}`}>
      <div className="scratch-card" ref={wrapRef}>
        <div className="scratch-content">{children}</div>
        <canvas
          ref={canvasRef}
          className="scratch-canvas"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          aria-hidden="true"
        />
        {revealed && <Burst />}
      </div>
      {!revealed && (
        <button type="button" className="link-btn" onClick={onReveal}>
          Can’t scratch? Tap to reveal
        </button>
      )}
    </div>
  );
}
