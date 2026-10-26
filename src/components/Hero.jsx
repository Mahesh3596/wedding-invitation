import { useState } from 'react';
import { wedding } from '../data/weddingData';

const makePetals = (n) =>
  Array.from({ length: n }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    size: `${10 + Math.random() * 14}px`,
    duration: `${9 + Math.random() * 10}s`,
    delay: `${-Math.random() * 15}s`,
    drift: `${-80 + Math.random() * 160}px`,
  }));

export default function Hero() {
  const [petals] = useState(() => makePetals(22));
  const heroImage = new URL(wedding.heroImage, document.baseURI).href;

  return (
    <section id="home" className="hero">
      <div className="hero-bg" style={{ '--hero-image': `url("${heroImage}")` }} />
      <div className="hero-overlay" />
      <div className="petals" aria-hidden="true">
        {petals.map((p) => (
          <span
            key={p.id}
            className="petal"
            style={{ '--x': p.x, '--s': p.size, '--d': p.duration, '--delay': p.delay, '--drift': p.drift }}
          />
        ))}
      </div>

      <div className="hero-content">
        <p className="hero-kicker fade-up" style={{ '--delay': '0.2s' }}>Together with their families</p>
        <h1 className="hero-names">
          <span className="script fade-up" style={{ '--delay': '0.5s' }}>{wedding.bride.name}</span>
          <span className="hero-amp fade-up" style={{ '--delay': '0.8s' }}>&amp;</span>
          <span className="script fade-up" style={{ '--delay': '1.1s' }}>{wedding.groom.name}</span>
        </h1>
        <p className="hero-sub fade-up" style={{ '--delay': '1.4s' }}>request the pleasure of your company as they begin their forever</p>
        <div className="hero-divider fade-up" style={{ '--delay': '1.7s' }} />
        <p className="hero-hashtag fade-up" style={{ '--delay': '1.9s' }}>{wedding.hashtag}</p>
        <a href="#dates" className="btn btn-gold fade-up" style={{ '--delay': '2.1s' }}>Reveal Our Dates</a>
      </div>

      <a href="#couple" className="scroll-cue" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
