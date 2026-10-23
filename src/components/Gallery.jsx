import { useCallback, useEffect, useRef, useState } from 'react';
import { wedding } from '../data/weddingData';
import SectionTitle from './SectionTitle';

export default function Gallery() {
  const photos = wedding.gallery;
  const [index, setIndex] = useState(null);
  const touchX = useRef(null);

  const close = () => setIndex(null);
  const step = useCallback((dir) => setIndex((i) => (i + dir + photos.length) % photos.length), [photos.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, step]);

  return (
    <section id="gallery" className="section">
      <SectionTitle kicker="Captured Moments" title="Our Gallery" />
      <div className="gallery">
        {photos.map((p, i) => (
          <button key={p.src} className="gallery-item reveal" style={{ '--stagger': `${(i % 4) * 0.1}s` }} onClick={() => setIndex(i)}>
            <img src={p.src} alt={p.alt} loading="lazy" />
            <span className="gallery-hover">View</span>
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={photos[index].alt}
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          }}
        >
          <button className="lb-btn lb-close" aria-label="Close" onClick={close}>×</button>
          <button className="lb-btn lb-prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1); }}>‹</button>
          <img key={index} src={photos[index].src} alt={photos[index].alt} onClick={(e) => e.stopPropagation()} />
          <button className="lb-btn lb-next" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1); }}>›</button>
          <p className="lb-count">{index + 1} / {photos.length}</p>
        </div>
      )}
    </section>
  );
}
