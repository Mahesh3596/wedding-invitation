import { useState } from 'react';
import { wedding } from '../data/weddingData';
import SectionTitle from './SectionTitle';

const icons = {
  plane: <path d="M2 16l20-8-6 16-4-6-10-2zm10 2l10-10" />,
  train: <path d="M6 3h12a2 2 0 012 2v11a3 3 0 01-3 3H7a3 3 0 01-3-3V5a2 2 0 012-2zM4 13h16M8 7h.01M16 7h.01M7 21l2-2M17 21l-2-2" />,
  hotel: <path d="M3 21V7l9-4 9 4v14M8 21v-6h8v6M8 10h2M14 10h2" />,
  dress: <path d="M9 3h6l-1 4 5 14H5l5-14-1-4z" />,
  sun: <path d="M12 7a5 5 0 100 10 5 5 0 000-10zM12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />,
};

export default function Info() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="info" className="section section-tinted">
      <SectionTitle kicker="Good to Know" title="Guest Information" />

      <div className="info-grid">
        {wedding.travel.map((t, i) => (
          <article className="info-card reveal" style={{ '--stagger': `${i * 0.1}s` }} key={t.title}>
            <svg viewBox="0 0 24 24" className="info-icon" aria-hidden="true">
              {icons[t.icon]}
            </svg>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </article>
        ))}
      </div>

      {/* <h3 className="faq-heading reveal">Frequently Asked Questions</h3>
      <div className="faq reveal">
        {wedding.faqs.map((f, i) => {
          const open = openFaq === i;
          return (
            <div className={`faq-item ${open ? 'is-open' : ''}`} key={f.q}>
              <button className="faq-q" aria-expanded={open} onClick={() => setOpenFaq(open ? null : i)}>
                {f.q}
                <span className="faq-plus" aria-hidden="true" />
              </button>
              <div className="faq-a">
                <div>
                  <p>{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
    </section>
  );
}
