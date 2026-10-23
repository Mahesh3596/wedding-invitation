import { wedding } from '../data/weddingData';
import { dateParts, formatTime } from '../utils/helpers';
import SectionTitle from './SectionTitle';
import ScratchCard from './ScratchCard';
import Countdown from './Countdown';

export default function DateReveal({ revealed, onReveal }) {
  const weddingEvent = wedding.events.find((e) => e.id === 'wedding') ?? wedding.events[wedding.events.length - 1];
  const allRevealed = wedding.events.every((e) => revealed[e.id]);

  return (
    <section id="dates" className="section section-tinted">
      <SectionTitle kicker="Save the Dates" title="Our Special Days" />
      <p className="section-lead reveal">A little surprise awaits — scratch the golden cards to uncover our dates.</p>

      <div className="dates-grid">
        {wedding.events.map((event, i) => {
          const d = dateParts(event.start);
          return (
            <div className="reveal" style={{ '--stagger': `${i * 0.15}s` }} key={event.id}>
              <p className="date-event-name">{event.title}</p>
              <ScratchCard label={event.subtitle} revealed={!!revealed[event.id]} onReveal={() => onReveal(event.id)}>
                <span className="date-weekday">{d.weekday}</span>
                <span className="date-day">{d.day}</span>
                <span className="date-month">
                  {d.month} {d.year}
                </span>
                <span className="date-time">{formatTime(event.start)} onwards</span>
              </ScratchCard>
            </div>
          );
        })}
      </div>

      {revealed[weddingEvent.id] && (
        <div className="countdown-wrap pop-in">
          <p className="kicker">Counting down to forever</p>
          <Countdown target={weddingEvent.start} />
        </div>
      )}
      {allRevealed && <p className="section-lead closing-note pop-in">We can’t wait to celebrate with you!</p>}
    </section>
  );
}
