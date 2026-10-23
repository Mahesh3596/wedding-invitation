import { useState } from 'react';
import { wedding } from '../data/weddingData';
import { formatDate } from '../utils/helpers';
import SectionTitle from './SectionTitle';

const STORAGE_KEY = 'wedding-rsvp';
const emptyForm = { name: '', phone: '', attending: 'yes', guests: 1, events: wedding.events.map((e) => e.id), message: '' };

const loadSaved = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
};

export default function Rsvp() {
  const [saved, setSaved] = useState(loadSaved);
  const [form, setForm] = useState(() => saved ?? emptyForm);
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const toggleEvent = (id) =>
    setForm((f) => ({ ...f, events: f.events.includes(id) ? f.events.filter((x) => x !== id) : [...f.events, id] }));

  const validate = () => {
    const errs = {};
    if (form.name.trim().length < 2) errs.name = 'Please enter your name';
    if (form.phone && !/^[+\d\s-]{7,16}$/.test(form.phone)) errs.phone = 'Please enter a valid phone number';
    if (form.attending === 'yes' && form.events.length === 0) errs.events = 'Please choose at least one event';
    const guests = Number(form.guests);
    if (form.attending === 'yes' && (!Number.isInteger(guests) || guests < 1 || guests > 10)) errs.guests = 'Guests must be between 1 and 10';
    return errs;
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const data = { ...form, name: form.name.trim(), message: form.message.trim(), submittedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setSaved(data);
  };

  const whatsappLink = (data) => {
    const eventNames = wedding.events.filter((ev) => data.events.includes(ev.id)).map((ev) => ev.title).join(', ');
    const text =
      data.attending === 'yes'
        ? `Hi! This is ${data.name}. Happy to confirm ${data.guests} guest(s) for: ${eventNames}. ${data.message}`
        : `Hi! This is ${data.name}. Sorry, I won't be able to attend, but sending my love and blessings. ${data.message}`;
    return `https://wa.me/${wedding.rsvp.whatsappNumber}?text=${encodeURIComponent(text.trim())}`;
  };

  return (
    <section id="rsvp" className="section rsvp-section">
      <SectionTitle kicker={`Kindly respond by ${formatDate(wedding.rsvp.deadline)}`} title="Will You Join Us?" />

      <div className="rsvp-card reveal">
        {saved ? (
          <div className="rsvp-thanks pop-in">
            <h3 className="script">Thank you, {saved.name}!</h3>
            <p>
              {saved.attending === 'yes'
                ? `We’ve noted ${saved.guests} guest(s). We can’t wait to celebrate with you!`
                : 'We’ll miss you dearly. Thank you for your blessings!'}
            </p>
            <p className="muted">Please send your response to the family on WhatsApp so we receive it.</p>
            <div className="event-actions center">
              <a className="btn btn-gold" href={whatsappLink(saved)} target="_blank" rel="noopener noreferrer">
                Send via WhatsApp
              </a>
              <button type="button" className="btn btn-outline" onClick={() => setSaved(null)}>
                Edit Response
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            <div className="field">
              <label htmlFor="name">Your Name</label>
              <input id="name" maxLength={80} value={form.name} onChange={update('name')} placeholder="Full name" />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="field">
              <label htmlFor="phone">Phone (optional)</label>
              <input id="phone" type="tel" maxLength={16} value={form.phone} onChange={update('phone')} placeholder="+91 98765 43210" />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>

            <fieldset className="field">
              <legend>Will you attend?</legend>
              <div className="choice-row">
                {[
                  ['yes', 'Joyfully Accept'],
                  ['no', 'Regretfully Decline'],
                ].map(([val, label]) => (
                  <label key={val} className={`choice ${form.attending === val ? 'is-selected' : ''}`}>
                    <input type="radio" name="attending" value={val} checked={form.attending === val} onChange={update('attending')} />
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>

            {form.attending === 'yes' && (
              <div className="fade-swap">
                <fieldset className="field">
                  <legend>Which events?</legend>
                  <div className="choice-row">
                    {wedding.events.map((ev) => (
                      <label key={ev.id} className={`choice ${form.events.includes(ev.id) ? 'is-selected' : ''}`}>
                        <input type="checkbox" checked={form.events.includes(ev.id)} onChange={() => toggleEvent(ev.id)} />
                        {ev.title}
                      </label>
                    ))}
                  </div>
                  {errors.events && <span className="error">{errors.events}</span>}
                </fieldset>
                <div className="field">
                  <label htmlFor="guests">Number of Guests</label>
                  <input id="guests" type="number" min={1} max={10} value={form.guests} onChange={update('guests')} />
                  {errors.guests && <span className="error">{errors.guests}</span>}
                </div>
              </div>
            )}

            <div className="field">
              <label htmlFor="message">Wishes for the Couple</label>
              <textarea id="message" rows={3} maxLength={300} value={form.message} onChange={update('message')} placeholder="Leave a little love note..." />
            </div>

            <button type="submit" className="btn btn-gold btn-block">Send RSVP</button>
          </form>
        )}
      </div>
    </section>
  );
}
