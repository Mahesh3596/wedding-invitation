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
  music: './music/wedding-song.mp3',

  events: [
    {
      id: 'engagement',
      title: 'Engagement Ceremony',
      subtitle: 'The Ring Exchange',
      start: '2026-12-26T16:00:00+05:30',
      end: '2026-12-26T20:00:00+05:30',
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
      start: '2027-01-09T11:00:00+05:30',
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
    {
      year: '2021',
      title: 'Where Our Forever Began',
      text: 'At Utsav ’21, a church youth committee kalolsavam, two hearts crossed paths. What began with a simple hello soon became something neither of us could explain — as if Cupid had quietly written the first page of our forever.'
    },
    {
      year: '2022',
      title: 'Miles Apart, Hearts Together',
      text: 'Just six months after our worlds intertwined, she left India to chase new dreams in a distant land. Saying goodbye was never easy, but our hearts had already chosen each other. And so began a love story that distance could stretch, but never break.'
    },
    {
      year: '2024',
      title: 'A Little Time, A Lifetime of Memories',
      text: 'After years of longing and counting moments, destiny gave us another beautiful chance to meet. It was only a brief glimpse of togetherness, but sometimes a few precious moments are enough to remind two hearts why they waited so long.'
    },
    {
      year: '2025',
      title: 'When Our Love Found Its Blessings',
      text: 'What had lived quietly in our hearts finally found its way into the hearts of our families. With nervous smiles, hopeful prayers, and overwhelming happiness, we shared our love story and received their blessings — turning our little dream into a beautiful promise of forever.'
    },
    {
      year: '2026',
      title: 'From Two Hearts to One Forever',
      text: 'Five years of stolen moments, heartfelt prayers, distant goodbyes, and endless hope have led us here. Soon, the distance will become a memory, the waiting will become a celebration, and two hearts that chose each other long ago will finally promise to walk together for a lifetime. Our forever begins now.'
    }
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
    // { src: './images/gallery-01.jpg', alt: 'Couple portrait' },
    { src: './images/gallery-02.jpg', alt: 'Candid 02' },
    { src: './images/gallery-03.jpg', alt: 'Candid 03' },
    { src: './images/gallery-04.jpg', alt: 'Candid 04' },
    // { src: './images/gallery-05.jpg', alt: 'Candid 05' },
    { src: './images/gallery-06.jpg', alt: 'Candid 06' },
    { src: './images/gallery-07.jpg', alt: 'Candid 07' },
    { src: './images/gallery-08.jpg', alt: 'Candid 08' }
  ],

  travel: [
    { icon: 'train', title: 'Getting There by Train', text: 'Nearest railway station: Varkala Sivagiri (VAK), ~20 minutes from wedding venue and ~10 minutes from the engagement venue.' },
    { icon: 'hotel', title: 'Where to Stay', text: 'Rooms are reserved for guests in a nearby hotel. it is nearby engagement venue.' },
    // { icon: 'plane', title: 'Getting There by Plane', text: 'Nearest airport: Trivandrum International Airport (TRV), ~45 minutes from the wedding venue.' },
    { icon: 'dress', title: 'Dress Code', text: 'Engagement: Indo-Western in pastels. Wedding: Traditional attire in reds, golds and jewel tones.' },
    { icon: 'plane', title: 'Getting There by Plane', text: 'Nearest airport: Trivandrum International Airport (TRV), ~45 minutes from the wedding venue.' },
  ],

  faqs: [
    { q: 'Can I bring a plus one?', a: 'Your invitation lists the number of guests reserved for you. Please mention the count in your RSVP.' },
    { q: 'Are children welcome?', a: 'Absolutely! We love little ones — please include them in your RSVP count.' },
    { q: 'Is parking available?', a: 'Yes, complimentary valet parking is available at both venues.' },
    { q: 'What about gifts?', a: 'Your presence is our present. If you wish to bless us, a token of love is gracefully accepted.' },
  ],

  rsvp: {
    deadline: '2027-01-01',
    // Google Apps Script web app URL that saves RSVPs to a Google Sheet. Leave empty to keep responses on the guest's device only.
    sheetUrl: 'https://script.google.com/macros/s/AKfycbyb67TSGP4CYRwGIpld0Sq1sVrdCltlD-TubT_zHiIcTVmu7If2y7VBKeRwjFZ_2DAhFQ/exec',
    whatsappNumber: '+918921694588', // country code + number, no "+" or spaces
  },
  //sheet deployment id : AKfycbyb67TSGP4CYRwGIpld0Sq1sVrdCltlD-TubT_zHiIcTVmu7If2y7VBKeRwjFZ_2DAhFQ
  //sheet web app url : https://script.google.com/macros/s/AKfycbyb67TSGP4CYRwGIpld0Sq1sVrdCltlD-TubT_zHiIcTVmu7If2y7VBKeRwjFZ_2DAhFQ/exec

  contacts: [
    { name: 'Febin (Bride’s Brother)', phone: '+91 88486 17383' },
    { name: 'Feba (Bride’s Sister)', phone: '+91 73561 30906' },
    { name: 'Sneha (Groom’s Sister)', phone: '+91 81369 25432' },
  ],
};
