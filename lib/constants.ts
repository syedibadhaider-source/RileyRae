export const siteConfig = {
  name: "Riley Rae",
  tagline: "Timeless voice. Unforgettable experiences.",
  description:
    "Performing and producing elevated live music experiences for luxury events around the world.",
  copyright: "© 2026 Riley Rae. All rights reserved.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Music", href: "#music" },
  { label: "Shows", href: "#shows" },
  { label: "Events", href: "#events" },
  { label: "Press", href: "#press" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export const footerLinks = {
  column1: [
    { label: "About", href: "#about" },
    { label: "Music", href: "#music" },
    { label: "Shows", href: "#shows" },
  ],
  column2: [
    { label: "Events", href: "#events" },
    { label: "Press", href: "#press" },
    { label: "Gallery", href: "#gallery" },
  ],
  column3: [
    { label: "Contact", href: "#contact" },
    { label: "Book Riley Rae", href: "#booking" },
  ],
};

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/rileyrae_music/", icon: "instagram" as const },
  { label: "Spotify", href: "https://open.spotify.com/artist/2nYfYBvZnfVZRY31XmmS0S", icon: "spotify" as const },
  { label: "YouTube", href: "https://www.youtube.com/@rileyrae_music", icon: "youtube" as const },
  { label: "Apple Music", href: "https://music.apple.com/search?term=Riley%20Rae", icon: "music" as const },
  { label: "Facebook", href: "https://www.facebook.com/rileyraemusic", icon: "facebook" as const },
  { label: "Email", href: "mailto:hello@rileyraemusic.com", icon: "email" as const },
];

export const youtubeChannelUrl = "https://www.youtube.com/@rileyrae_music";

export const heroSlides = [
  {
    src: "/images/riley-hero.jpg",
    alt: "Riley Rae in a luxury lounge setting",
  },
  {
    src: "/images/riley-performance.jpg",
    alt: "Riley Rae performing live",
  },
  {
    src: "/images/riley-booking.jpg",
    alt: "Riley Rae on stage at a premium event",
  },
];

export const partners = [
  {
    id: "four-seasons",
    name: "Four Seasons",
    logo: "/logos/partners/four-seasons.svg",
    width: 160,
    height: 40,
    className: "max-w-[8.5rem] md:max-w-[9.5rem]",
  },
  {
    id: "ritz-carlton",
    name: "The Ritz-Carlton",
    logo: "/logos/partners/ritz-carlton.svg",
    width: 40,
    height: 40,
    className: "max-w-[2.5rem] md:max-w-[2.75rem]",
  },
  {
    id: "sofitel",
    name: "Sofitel",
    logo: "/logos/partners/sofitel.svg",
    width: 120,
    height: 28,
    className: "max-w-[6.5rem] md:max-w-[7rem]",
  },
  {
    id: "conde-nast-traveler",
    name: "Condé Nast Traveler",
    logo: "/logos/partners/conde-nast-traveler.svg",
    width: 180,
    height: 36,
    className: "max-w-[9rem] md:max-w-[10rem]",
  },
  {
    id: "timeout",
    name: "Time Out",
    logo: "/logos/partners/timeout.svg",
    width: 110,
    height: 34,
    className: "max-w-[6.5rem] md:max-w-[7rem]",
  },
] as const;

export const services = [
  { label: "Hotels & Resorts", icon: "hotel" as const },
  { label: "Corporate Functions", icon: "briefcase" as const },
  { label: "Private Events", icon: "cocktail" as const },
  { label: "Live Shows & Residencies", icon: "mic" as const },
];

export const performancePackages = [
  {
    id: "intimate-lounge",
    name: "Intimate Lounge Set",
    description:
      "Soulful vocals and refined jazz arrangements for boutique hotels, lounges, and private salons.",
    includes: ["Solo or duo performance", "Curated song list", "60–90 minute set"],
  },
  {
    id: "corporate-gala",
    name: "Corporate Gala Experience",
    description:
      "Elevated live entertainment for awards ceremonies, brand launches, and executive gatherings.",
    includes: ["Full band option", "Custom staging consultation", "Professional sound coordination"],
  },
  {
    id: "private-celebration",
    name: "Luxury Private Celebration",
    description:
      "Tailored performances for weddings, milestone events, and exclusive private parties.",
    includes: ["Personalized repertoire", "Event flow planning", "Premium presentation"],
  },
  {
    id: "residency",
    name: "Residency & Cultural Events",
    description:
      "Extended engagements and curated music experiences for resorts, festivals, and cultural programs.",
    includes: ["Multi-date bookings", "Experience design", "Artist & venue liaison"],
  },
] as const;

export const liveAudioTracks = [
  {
    id: "fmu",
    title: "FMU",
    subtitle: "Original — Live Studio Session",
    artist: "Riley Rae",
    platform: "spotify" as const,
    spotifyId: "22IRA4w4i1nseXneC375Jg",
    artworkUrl:
      "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e983edd6dcba5680d2b0352c",
    listenUrl: "https://open.spotify.com/track/22IRA4w4i1nseXneC375Jg",
  },
  {
    id: "changed",
    title: "Changed My Miind",
    subtitle: "Live Performance Recording",
    artist: "Riley Rae",
    platform: "spotify" as const,
    spotifyId: "6RKHzedIWjjpsoMRawEw5e",
    artworkUrl:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0264af237ecf9d7abdc89f2027",
    listenUrl: "https://open.spotify.com/track/6RKHzedIWjjpsoMRawEw5e",
  },
  {
    id: "in-the-mood",
    title: "In The Mood",
    subtitle: "Studio Session",
    artist: "Riley Rae",
    platform: "spotify" as const,
    spotifyId: "1MvjiMQDmqCESQaNLLKslY",
    artworkUrl:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0261677ac0623af9c3192486ef",
    listenUrl: "https://open.spotify.com/track/1MvjiMQDmqCESQaNLLKslY",
  },
  {
    id: "holding-out",
    title: "Holding Out",
    subtitle: "Live Recording",
    artist: "Riley Rae",
    platform: "spotify" as const,
    spotifyId: "1CIdvZU9FOoPG8irqGfgtA",
    artworkUrl:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d4d0fc23b818823b3f0d0ba9",
    listenUrl: "https://open.spotify.com/track/1CIdvZU9FOoPG8irqGfgtA",
  },
  {
    id: "walk-with-me",
    title: "Walk with Me",
    subtitle: "feat. Riley Rae",
    artist: "Lawrence Goin' Up",
    platform: "apple" as const,
    artworkUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/f0/9c/2e/f09c2e8a-797b-239d-2f73-6aca3eecc5d6/artwork.jpg/300x300bb.jpg",
    listenUrl:
      "https://music.apple.com/us/album/walk-with-me-feat-riley-rae/1655444833?i=1655444834",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/fe/44/8e/fe448e6c-6db6-8de2-1956-3b75779c92ff/mzaf_10727781444823714091.plus.aac.p.m4a",
  },
  {
    id: "getaway-driver",
    title: "Getaway Driver",
    subtitle: "feat. Riley Rae",
    artist: "Bird the Bricklayer",
    platform: "apple" as const,
    artworkUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/35/3e/27/353e27d4-7a69-1a78-9a55-be5eef34d7ad/artwork.jpg/300x300bb.jpg",
    listenUrl:
      "https://music.apple.com/us/album/getaway-driver-feat-riley-rae/1529308125?i=1529308127",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/8c/df/bc/8cdfbc94-180c-862e-0ab2-43be409ee350/mzaf_16014047853160432753.plus.aac.p.m4a",
  },
];


export { galleryImages } from "./gallery";

export const pressKit = {
  eyebrow: "Press Kit",
  heading: "Electronic Press Kit",
  body: "Download official assets, biography, and performance materials for media, venues, and event partners.",
  downloads: [
    { label: "Download Bio (PDF)", href: "#", type: "bio" as const },
    { label: "High-Res Photos (ZIP)", href: "#", type: "photos" as const },
    { label: "Technical Rider (PDF)", href: "#", type: "rider" as const },
    { label: "Press One-Sheet (PDF)", href: "#", type: "sheet" as const },
  ],
  highlights: [
    "International vocalist & event producer",
    "Luxury hospitality & corporate events",
    "Jazz, soul, and curated live experiences",
    "Available for worldwide bookings",
  ],
};

export const inquiryFormCopy = {
  eyebrow: "Inquire",
  heading: "Request a Booking",
  body: "Share your event details and our team will respond within 48 hours with availability and next steps.",
  eventTypes: [
    "Hotel / Resort",
    "Corporate Event",
    "Private Celebration",
    "Live Show / Residency",
    "Other",
  ],
};

export const videos = [
  {
    id: "video-1",
    youtubeId: "i_b39lpiUIE",
    thumbnail: "/images/riley-video-1.jpg",
    title: "Live Performance Highlights",
  },
  {
    id: "video-2",
    youtubeId: "wQdAv9ZFBNE",
    thumbnail: "/images/riley-video-2.jpg",
    title: "Jazz Band Highlights",
  },
  {
    id: "video-3",
    youtubeId: "VC2Zajd1xYY",
    thumbnail: "/images/riley-video-3.jpg",
    title: "Party Band Highlights",
  },
];

export const featuredVideo = {
  youtubeId: "_oMFVOZXWN8",
  thumbnail: "/images/riley-video-featured.jpg",
  caption: "Live at Luxury Lounge",
  title: "Riley Rae — Featured Performance",
};

export const aboutCopy = {
  eyebrow: "About",
  heading: "Voice. Vision. Atmosphere.",
  body: "Riley Rae is a professional vocalist and event producer specializing in high end hospitality, corporate, and cultural events. With a signature blend of soulful vocals, curated experiences, and refined stage presence, Riley creates unforgettable moments for discerning audiences across the globe.",
};

export const aboutSlides = [
  {
    src: "/images/riley-performance.jpg",
    alt: "Riley Rae performing live",
  },
  {
    src: "/images/riley-booking.jpg",
    alt: "Riley Rae on stage at a premium event",
  },
  {
    src: "/images/riley-hero.jpg",
    alt: "Riley Rae in a luxury lounge setting",
  },
  {
    src: "/images/lounge-detail.jpg",
    alt: "Luxury lounge atmosphere",
  },
];

export const bookingCopy = {
  eyebrow: "Luxury Events. Curated Experiences.",
  heading: "Book Riley Rae",
  body: "Now accepting bookings for luxury events, residencies, corporate functions, private celebrations, and curated live music experiences worldwide.",
};

export const newsletterCopy = {
  heading: "Join The List",
  body: "Be the first to know about upcoming shows, new music, and exclusive events.",
  placeholder: "Your email address",
  button: "Join",
};

export const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];
