import { useState } from 'react';
import { wedding } from '../data/weddingData';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const data = { title: `${wedding.bride.name} & ${wedding.groom.name}`, text: 'You are invited to our wedding!', url: window.location.href };
    if (navigator.share) {
      navigator.share(data).catch(() => {});
      return;
    }
    try {
      await navigator.clipboard.writeText(data.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <footer className="footer">
      <p className="kicker">With love &amp; gratitude</p>
      <h2 className="script">
        {wedding.bride.name} &amp; {wedding.groom.name}
      </h2>
      <p className="footer-hashtag">{wedding.hashtag}</p>

      <div className="footer-contacts">
        {wedding.contacts.map((c) => (
          <a key={c.phone} href={`tel:${c.phone.replace(/\s/g, '')}`}>
            <span>{c.name}</span>
            {c.phone}
          </a>
        ))}
      </div>

      <div className="event-actions center">
        <button type="button" className="btn btn-gold" onClick={share}>
          {copied ? 'Link Copied!' : 'Share Invitation'}
        </button>
        <a href="#home" className="btn btn-outline light">Back to Top</a>
      </div>

      <p className="footer-note">Made with ♥ for our forever</p>
    </footer>
  );
}
