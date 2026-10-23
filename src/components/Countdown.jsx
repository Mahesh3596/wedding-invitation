import { useEffect, useState } from 'react';

const getRemaining = (target) => {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    done: diff === 0,
    units: [
      ['Days', Math.floor(diff / 86400000)],
      ['Hours', Math.floor((diff / 3600000) % 24)],
      ['Minutes', Math.floor((diff / 60000) % 60)],
      ['Seconds', Math.floor((diff / 1000) % 60)],
    ],
  };
};

export default function Countdown({ target }) {
  const [remaining, setRemaining] = useState(() => getRemaining(target));

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (remaining.done) {
    return <p className="countdown-done script">We are married! Thank you for your blessings.</p>;
  }

  return (
    <div className="countdown">
      {remaining.units.map(([label, value]) => (
        <div className="count-box" key={label}>
          <span className="count-value" key={value}>
            {String(value).padStart(2, '0')}
          </span>
          <span className="count-label">{label}</span>
        </div>
      ))}
    </div>
  );
}
