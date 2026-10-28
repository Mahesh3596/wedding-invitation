import { useEffect, useRef, useState } from 'react';
import { wedding } from './data/weddingData';
import Envelope from './components/Envelope';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Couple from './components/Couple';
import DateReveal from './components/DateReveal';
import Events from './components/Events';
import Venues from './components/Venues';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Info from './components/Info';
import Rsvp from './components/Rsvp';
import Footer from './components/Footer';

export default function App() {
  const [opened, setOpened] = useState(false);
  const [revealed, setRevealed] = useState({});
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden';
  }, [opened]);

  // Scroll-triggered fade-in for any element with the .reveal class
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) audio.play().then(() => setMusicOn(true)).catch(() => {});
    else {
      audio.pause();
      setMusicOn(false);
    }
  };

  const revealDate = (id) => setRevealed((r) => ({ ...r, [id]: true }));

  return (
    <>
      {!opened && (
        <Envelope
          names={`${wedding.bride.name} & ${wedding.groom.name}`}
          onStart={() => wedding.music && toggleMusic()}
          onDone={() => setOpened(true)}
        />
      )}

      <Navbar />
      <main>
        <Hero />
        <Couple />
        <DateReveal revealed={revealed} onReveal={revealDate} />
        <Events revealed={revealed} />
        <Venues />
        <Story />
        <Gallery />
        <Info />
        <Rsvp />
      </main>
      <Footer />

      {wedding.music && (
        <>
          <audio ref={audioRef} src={wedding.music} loop preload="none" />
          <button className={`music-btn ${musicOn ? 'is-playing' : ''}`} onClick={toggleMusic} aria-label={musicOn ? 'Pause music' : 'Play music'}>
            <span>{musicOn ? '❚❚' : '♪'}</span>
          </button>
        </>
      )}
    </>
  );
}
