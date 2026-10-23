import { wedding } from '../data/weddingData';

const tz = wedding.timeZone;

export const formatDate = (iso) =>
  new Intl.DateTimeFormat('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: tz }).format(new Date(iso));

export const formatTime = (iso) =>
  new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: tz }).format(new Date(iso));

export const dateParts = (iso) => {
  const parts = new Intl.DateTimeFormat('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: tz })
    .formatToParts(new Date(iso))
    .reduce((acc, p) => ({ ...acc, [p.type]: p.value }), {});
  return { weekday: parts.weekday, day: parts.day, month: parts.month, year: parts.year };
};

const toCalStamp = (iso) => new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

export const googleCalendarUrl = (event) => {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${event.title} — ${wedding.bride.name} & ${wedding.groom.name}`,
    dates: `${toCalStamp(event.start)}/${toCalStamp(event.end)}`,
    details: event.description,
    location: `${event.venue.name}, ${event.venue.address}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

const icsEscape = (s) => s.replace(/\\/g, '\\\\').replace(/([,;])/g, '\\$1').replace(/\n/g, '\\n');

export const downloadIcs = (event) => {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wedding Invitation//EN',
    'BEGIN:VEVENT',
    `UID:${event.id}-${toCalStamp(event.start)}@wedding-invitation`,
    `DTSTAMP:${toCalStamp(new Date().toISOString())}`,
    `DTSTART:${toCalStamp(event.start)}`,
    `DTEND:${toCalStamp(event.end)}`,
    `SUMMARY:${icsEscape(`${event.title} — ${wedding.bride.name} & ${wedding.groom.name}`)}`,
    `DESCRIPTION:${icsEscape(event.description)}`,
    `LOCATION:${icsEscape(`${event.venue.name}, ${event.venue.address}`)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
  const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = `${event.id}.ics`;
  a.click();
  URL.revokeObjectURL(url);
};

export const mapEmbedUrl = (query) => `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;
export const directionsUrl = (query) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
