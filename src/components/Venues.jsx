import { useState } from 'react';
import { wedding } from '../data/weddingData';
import { directionsUrl, mapEmbedUrl } from '../utils/helpers';
import SectionTitle from './SectionTitle';

export default function Venues() {
  const [activeId, setActiveId] = useState(wedding.events[0].id);
  const active = wedding.events.find((e) => e.id === activeId);

  return (
    <section id="venues" className="section section-dark">
      <SectionTitle kicker="Find Your Way" title="The Venues" light />

      <div className="tabs reveal" role="tablist">
        {wedding.events.map((e) => (
          <button
            key={e.id}
            role="tab"
            aria-selected={e.id === activeId}
            className={`tab ${e.id === activeId ? 'is-active' : ''}`}
            onClick={() => setActiveId(e.id)}
          >
            {e.title.replace(' Ceremony', '')}
          </button>
        ))}
      </div>

      <div className="reveal">
      <div className="venue-panel fade-swap" key={active.id}>
        <div className="venue-info">
          <p className="kicker">{active.title}</p>
          <h3 className="script">{active.venue.name}</h3>
          <p>{active.venue.address}</p>
          <a className="btn btn-gold" href={directionsUrl(active.venue.mapQuery)} target="_blank" rel="noopener noreferrer">
            Get Directions
          </a>
        </div>
        <div className="map-frame">
          <iframe
            title={`Map of ${active.venue.name}`}
            src={mapEmbedUrl(active.venue.mapQuery)}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
      </div>
    </section>
  );
}
