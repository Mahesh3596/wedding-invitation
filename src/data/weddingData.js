// Edit everything in this file to personalise the invitation.
// Images: drop your photos into /public/images and use paths like './images/couple.jpg'.

const img = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const wedding = {
  bride: {
    name: 'Femi',
    fullName: 'Femi Johnest',
    parents: 'Daughter of Mrs. Reji & Mr. Johnest',
    bio: 'Travel enthusiast and a lover of culinary adventures.',
    // photo: img('bride-portrait', 600, 600),
    photo: './images/bride.jpg',
  },
  groom: {
    name: 'Mahesh',
    fullName: 'Mahesh Sebastion',
    parents: 'Son of Mrs. Mary & Mr. Sebastion',
    bio: 'An engineer by day, a home chef by night, and forever her biggest fan.',
    // photo: img('groom-portrait', 600, 600),
    photo: './images/groom.jpg',
  },
  initials: 'F & M',
  hashtag: '#FemiWedsMahesh',
  // heroImage: img('wedding-hero', 1920, 1280),
  heroImage: './images/hero.jpg',
  timeZone: 'Asia/Kolkata',

  // Optional: path to an mp3 in /public (e.g. './music/song.mp3'). Leave empty to hide the music button.
  music: '',

  events: [
    {
      id: 'engagement',
      title: 'Engagement Ceremony',
      subtitle: 'The Ring Exchange',
      start: '2026-12-26T16:30:00+05:30',
      end: '2026-12-26T20:30:00+05:30',
      description: 'An evening of rings, rhythm and blessings, followed by dinner.',
      dressCode: 'Indo-Western · Pastels',
      venue: {
        name: 'Beach House by Palmyra, Varkala',
        address: 'Varkala, Kerala 695141',
        mapQuery: 'Beach House by Palmyra, Varkala',
      },
    },
    {
      id: 'wedding',
      title: 'Wedding Ceremony',
      subtitle: 'The Sacred Vows',
      start: '2027-01-09T10:00:00+05:30',
      end: '2027-01-09T14:00:00+05:30',
      description: 'Join us as we take the seven sacred steps, followed by a traditional lunch.',
      dressCode: 'Traditional · Reds & Golds',
      venue: {
        name: 'Holy Spirit Church, Mampally',
        address: 'Mampally, Kerala 695141',
        mapQuery: 'Holy Spirit Church, Mampally',
      },
    },
  ],

  story: [
    { year: '2021', title: 'First Hello', text: 'We met at church youth committee kalolsavam (Utsav\'21) and both of us got struck by the cupid\'s arrow.' },
    { year: '2022', title: 'Bye Bye India', text: 'After a six months of meeting and growing closer, she bid farewell to India for new adventures abroad.' },
    { year: '2024', title: 'Just a peek meetup', text: 'All of a sudden, we found ourselves together for a brief but memorable meetup.' },
    { year: '2025', title: 'The Family Confession', text: 'After much anticipation, we shared our love story with our families and received their heartfelt blessings.' },
    { year: '2026', title: 'The Wedding', text: 'After whole 5 years of love, distance, and cherished memories, we finally going to unite and tie the knot in a grand celebration.' }
  ],

  // gallery: [
  //   { src: img('couple-1', 800, 1000), alt: 'Couple portrait' },
  //   { src: img('couple-2', 800, 560), alt: 'Walking together' },
  //   { src: img('couple-3', 800, 800), alt: 'Candid laughter' },
  //   { src: img('couple-4', 800, 1100), alt: 'Sunset moment' },
  //   { src: img('couple-5', 800, 600), alt: 'Holding hands' },
  //   { src: img('couple-6', 800, 900), alt: 'Engagement shoot' },
  //   { src: img('couple-7', 800, 640), alt: 'Travel memories' },
  //   { src: img('couple-8', 800, 1000), alt: 'Together forever' },
  // ],

  gallery: [
    { src: './images/gallery-01.jpg', alt: 'Candid 01' },
    { src: './images/gallery-02.jpg', alt: 'Candid 02' },
    { src: './images/gallery-03.jpg', alt: 'Candid 03' },
    { src: './images/gallery-04.jpg', alt: 'Candid 04' },
    { src: './images/gallery-05.jpg', alt: 'Candid 05' },
    { src: './images/gallery-06.jpg', alt: 'Candid 06' },
    { src: './images/gallery-07.jpg', alt: 'Candid 07' },
    { src: './images/gallery-08.jpg', alt: 'Candid 08' }
  ],

  travel: [
    { icon: 'train', title: 'Getting There by Train', text: 'Nearest railway station: Varkala Sivagiri (VAK), ~20 minutes from wedding venue and ~10 minutes from the engagement venue.' },
    { icon: 'hotel', title: 'Where to Stay', text: 'Rooms are reserved for guests in a nearby hotel. it is nearby engagement venue.' },
    // { icon: 'plane', title: 'Getting There by Plane', text: 'Nearest airport: Trivandrum International Airport (TRV), ~45 minutes from the wedding venue.' },
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
    { name: 'Febin (Bride’s Brother)', phone: '+91 88486 17383' },
    { name: 'Sneha (Groom’s Sister)', phone: '+91 81369 25432' },
  ],
};
