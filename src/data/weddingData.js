// Edit everything in this file to personalise the invitation.
// Images: drop your photos into /public/images and use paths like './images/couple.jpg'.

const img = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const wedding = {
  bride: {
    name: 'Ananya',
    fullName: 'Ananya Sharma',
    parents: 'Daughter of Mrs. Lakshmi & Mr. Rajesh Sharma',
    bio: 'A dreamer with a sketchbook, a lover of filter coffee and long monsoon walks.',
    photo: img('bride-portrait', 600, 600),
  },
  groom: {
    name: 'Arjun',
    fullName: 'Arjun Mehta',
    parents: 'Son of Mrs. Priya & Mr. Vikram Mehta',
    bio: 'An engineer by day, a home chef by night, and forever her biggest fan.',
    photo: img('groom-portrait', 600, 600),
  },
  initials: 'A & A',
  hashtag: '#AnanyaWedsArjun',
  heroImage: img('wedding-hero', 1920, 1280),
  timeZone: 'Asia/Kolkata',

  // Optional: path to an mp3 in /public (e.g. './music/song.mp3'). Leave empty to hide the music button.
  music: '',

  events: [
    {
      id: 'engagement',
      title: 'Engagement Ceremony',
      subtitle: 'The Ring Exchange',
      start: '2027-01-24T18:30:00+05:30',
      end: '2027-01-24T22:30:00+05:30',
      description: 'An evening of rings, rhythm and blessings, followed by dinner.',
      dressCode: 'Indo-Western · Pastels',
      venue: {
        name: 'The Grand Palace Hotel',
        address: 'Marine Drive, Mumbai, Maharashtra 400020',
        mapQuery: 'Marine Drive, Mumbai',
      },
    },
    {
      id: 'wedding',
      title: 'Wedding Ceremony',
      subtitle: 'The Sacred Vows',
      start: '2027-02-14T10:00:00+05:30',
      end: '2027-02-14T14:00:00+05:30',
      description: 'Join us as we take the seven sacred steps, followed by a traditional lunch.',
      dressCode: 'Traditional · Reds & Golds',
      venue: {
        name: 'Royal Heritage Gardens',
        address: 'Juhu Tara Road, Juhu, Mumbai, Maharashtra 400049',
        mapQuery: 'Juhu Beach, Mumbai',
      },
    },
  ],

  story: [
    { year: '2019', title: 'First Hello', text: 'We met at a friend’s birthday party and talked for hours about books and bad movies.' },
    { year: '2020', title: 'First Date', text: 'A rainy evening, a tiny café, and the best cup of coffee either of us ever had.' },
    { year: '2023', title: 'Adventures Together', text: 'Mountains, beaches and countless road trips — every journey felt like home.' },
    { year: '2026', title: 'The Proposal', text: 'Under a sky full of stars, he asked and she said yes (before he finished the question).' },
  ],

  gallery: [
    { src: img('couple-1', 800, 1000), alt: 'Couple portrait' },
    { src: img('couple-2', 800, 560), alt: 'Walking together' },
    { src: img('couple-3', 800, 800), alt: 'Candid laughter' },
    { src: img('couple-4', 800, 1100), alt: 'Sunset moment' },
    { src: img('couple-5', 800, 600), alt: 'Holding hands' },
    { src: img('couple-6', 800, 900), alt: 'Engagement shoot' },
    { src: img('couple-7', 800, 640), alt: 'Travel memories' },
    { src: img('couple-8', 800, 1000), alt: 'Together forever' },
  ],

  travel: [
    { icon: 'plane', title: 'Getting There', text: 'Nearest airport: Chhatrapati Shivaji Maharaj International Airport (BOM), ~30 minutes from both venues.' },
    { icon: 'hotel', title: 'Where to Stay', text: 'Rooms are reserved for guests at The Grand Palace Hotel. Mention our names for a special rate.' },
    { icon: 'dress', title: 'Dress Code', text: 'Engagement: Indo-Western in pastels. Wedding: Traditional attire in reds, golds and jewel tones.' },
    { icon: 'sun', title: 'Weather', text: 'Expect pleasant days around 24–30°C. Carry a light shawl for the evening breeze.' },
  ],

  faqs: [
    { q: 'Can I bring a plus one?', a: 'Your invitation lists the number of guests reserved for you. Please mention the count in your RSVP.' },
    { q: 'Are children welcome?', a: 'Absolutely! We love little ones — please include them in your RSVP count.' },
    { q: 'Is parking available?', a: 'Yes, complimentary valet parking is available at both venues.' },
    { q: 'What about gifts?', a: 'Your presence is our present. If you wish to bless us, a token of love is gracefully accepted.' },
  ],

  rsvp: {
    deadline: '2027-01-10',
    whatsappNumber: '919999999999', // country code + number, no "+" or spaces
  },

  contacts: [
    { name: 'Rahul (Bride’s Brother)', phone: '+91 99999 11111' },
    { name: 'Neha (Groom’s Sister)', phone: '+91 99999 22222' },
  ],
};
