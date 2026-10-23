export default function SectionTitle({ kicker, title, light = false }) {
  return (
    <div className={`section-title reveal ${light ? 'is-light' : ''}`}>
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 className="script">{title}</h2>
      <svg className="ornament" viewBox="0 0 220 24" aria-hidden="true">
        <path d="M0 12 H86" stroke="currentColor" strokeWidth="1" />
        <path d="M134 12 H220" stroke="currentColor" strokeWidth="1" />
        <circle cx="94" cy="12" r="2.5" fill="currentColor" />
        <circle cx="126" cy="12" r="2.5" fill="currentColor" />
        <path d="M110 3 C116 8 116 16 110 21 C104 16 104 8 110 3 Z" fill="currentColor" />
      </svg>
    </div>
  );
}
