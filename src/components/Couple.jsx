import { wedding } from '../data/weddingData';
import SectionTitle from './SectionTitle';

function Person({ person, role, side }) {
  return (
    <article className={`person reveal from-${side}`}>
      <div className="person-frame">
        <img src={person.photo} alt={person.fullName} loading="lazy" />
      </div>
      <p className="kicker">{role}</p>
      <h3 className="script">{person.fullName}</h3>
      <p className="person-parents">{person.parents}</p>
      <p className="person-bio">{person.bio}</p>
    </article>
  );
}

export default function Couple() {
  return (
    <section id="couple" className="section">
      <SectionTitle kicker="Happily Ever After" title="The Couple" />
      <div className="couple-grid">
        <Person person={wedding.bride} role="The Bride" side="left" />
        <div className="couple-heart reveal" aria-hidden="true">
          <svg viewBox="0 0 64 64">
            <path d="M32 54S8 40 8 24C8 15 15 9 22.5 9c4.4 0 7.6 2.2 9.5 5.4C33.9 11.2 37.1 9 41.5 9 49 9 56 15 56 24c0 16-24 30-24 30z" />
          </svg>
        </div>
        <Person person={wedding.groom} role="The Groom" side="right" />
      </div>
    </section>
  );
}
