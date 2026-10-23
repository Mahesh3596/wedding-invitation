import { useEffect, useRef, useState } from 'react';

export default function Envelope({ names, onStart, onDone }) {
  const [opening, setOpening] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const open = () => {
    if (opening) return;
    setOpening(true);
    onStart?.();
    timer.current = setTimeout(onDone, 1350);
  };

  return (
    <div className={`curtain-overlay ${opening ? 'is-opening' : ''}`}>
      <div className="curtain-panel curtain-panel-left" aria-hidden="true" />
      <div className="curtain-panel curtain-panel-right" aria-hidden="true" />
      <div className="curtain-stage">
        <p className="curtain-kicker">You are cordially invited</p>
        <p className="curtain-title script">{names}</p>
        <button className="curtain-open" type="button" onClick={open} disabled={opening}>
          Open invitation
        </button>
      </div>
    </div>
  );
}
