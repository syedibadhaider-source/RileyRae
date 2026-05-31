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
    name: "Intimate Lounge Set",
    description: "Soulful vocals and refined jazz arrangements for boutique hotels, lounges, and private salons.",
    includes: ["Solo or duo performance", "Curated song list", "60–90 minute set"],
  },
  {
    name: "Corporate Gala Experience",
    description: "Elevated live entertainment for awards ceremonies, brand launches, and executive gatherings.",
    includes: ["Full band option", "Custom staging consultation", "Professional sound coordination"],
  },
  {
    name: "Luxury Private Celebration",
    description: "Tailored performances for weddings, milestone events, and exclusive private parties.",
    includes: ["Personalized repertoire", "Event flow planning", "Premium presentation"],
  },
  {
    name: "Residency & Cultural Events",
    description: "Extended engagements and curated music experiences for resorts, festivals, and cultural programs.",
    includes: ["Multi-date bookings", "Experience design", "Artist & venue liaison"],
  },
];

export const liveAudioTracks = [
  {
    id: "fmu",
    title: "FMU",
    subtitle: "Original — Live Studio Session",
    spotifyId: "6RKHzedIWjjpsoMRawEw5e",
  },
  {
    id: "changed",
    title: "Changed My Miind",
    subtitle: "Live Performance Recording",
    spotifyId: "1CIdvZU9FOoPG8irqGfgtA",
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
