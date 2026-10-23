import { useEffect, useState } from 'react';
import { wedding } from '../data/weddingData';

const links = [
  ['home', 'Home'],
  ['couple', 'Couple'],
  ['dates', 'Dates'],
  ['events', 'Events'],
  ['venues', 'Venues'],
  ['story', 'Story'],
  ['gallery', 'Gallery'],
  ['info', 'Info'],
  ['rsvp', 'RSVP'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <a href="#home" className="nav-brand script" onClick={() => setMenuOpen(false)}>
        {wedding.initials}
      </a>
      <button className="nav-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
        <span />
        <span />
        <span />
      </button>
      <nav className="nav-links">
        {links.map(([id, label], i) => (
          <a key={id} href={`#${id}`} style={{ '--i': i }} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
