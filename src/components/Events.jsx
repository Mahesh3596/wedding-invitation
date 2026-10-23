import { wedding } from '../data/weddingData';
import { directionsUrl, downloadIcs, formatDate, formatTime, googleCalendarUrl } from '../utils/helpers';
import SectionTitle from './SectionTitle';

const RingIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <circle cx="19" cy="29" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="30" cy="29" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M19 18l-3-6h6l-3 6z" fill="currentColor" />
  </svg>
);

const MandapIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <path d="M6 18 Q24 2 42 18" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M8 18h32M11 18v24M37 18v24M6 42h36" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M24 26c-3 3-3 6 0 9 3-3 3-6 0-9z" fill="currentColor" />
  </svg>
);

export default function Events({ revealed }) {
  return (
    <section id="events" className="section">
      <SectionTitle kicker="Join the Celebration" title="Wedding Events" />
      <div className="events-grid">
        {wedding.events.map((event, i) => {
          const isRevealed = !!revealed[event.id];
          return (
            <article className="event-card reveal" style={{ '--stagger': `${i * 0.15}s` }} key={event.id}>
              <div className="event-icon">{event.id === 'engagement' ? <RingIcon /> : <MandapIcon />}</div>
              <p className="kicker">{event.subtitle}</p>
              <h3>{event.title}</h3>
              <p className="event-desc">{event.description}</p>

              <ul className="event-meta">
                <li>
                  <strong>When</strong>
                  {isRevealed ? (
                    <span>
                      {formatDate(event.start)}
                      <br />
                      {formatTime(event.start)} – {formatTime(event.end)}
                    </span>
                  ) : (
                    <a href="#dates" className="locked">Scratch the card above to reveal</a>
                  )}
                </li>
                <li>
                  <strong>Where</strong>
                  <span>
                    {event.venue.name}
                    <br />
                    <small>{event.venue.address}</small>
                  </span>
                </li>
                <li>
                  <strong>Attire</strong>
                  <span>{event.dressCode}</span>
                </li>
              </ul>

              <div className="event-actions">
                <a className="btn btn-outline" href={directionsUrl(event.venue.mapQuery)} target="_blank" rel="noopener noreferrer">
                  Directions
                </a>
                {isRevealed && (
                  <>
                    <a className="btn btn-outline" href={googleCalendarUrl(event)} target="_blank" rel="noopener noreferrer">
                      Google Calendar
                    </a>
                    <button type="button" className="btn btn-outline" onClick={() => downloadIcs(event)}>
                      Apple / Outlook
                    </button>
                  </>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
