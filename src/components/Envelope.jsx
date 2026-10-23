import { useEffect, useRef, useState } from 'react';

export default function Envelope({ initials, names, onStart, onDone }) {
  const [opening, setOpening] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const open = () => {
    if (opening) return;
    setOpening(true);
    onStart?.();
    timer.current = setTimeout(onDone, 2700);
  };

  return (
    <div className={`envelope-overlay ${opening ? 'is-opening' : ''}`}>
      <div className="envelope-stage">
        <p className="env-kicker">You are cordially invited</p>
        <div
          className="envelope"
          role="button"
          tabIndex={0}
          aria-label="Open the invitation"
          onClick={open}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && open()}
        >
          <div className="env-back" />
          <div className="env-letter">
            <small>The Wedding of</small>
            <span className="script">{names}</span>
          </div>
          <div className="env-pocket" />
          <div className="env-flap" />
          <div className="env-seal">{initials}</div>
        </div>
        <p className="env-hint">Tap the seal to open</p>
      </div>
    </div>
  );
}
