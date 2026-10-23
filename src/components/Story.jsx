import { wedding } from '../data/weddingData';
import SectionTitle from './SectionTitle';

export default function Story() {
  return (
    <section id="story" className="section section-tinted">
      <SectionTitle kicker="How It All Began" title="Our Love Story" />
      <ol className="timeline">
        {wedding.story.map((item, i) => (
          <li key={item.year} className={`timeline-item reveal ${i % 2 ? 'from-right' : 'from-left'}`}>
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-card">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
