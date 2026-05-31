import sharp from "sharp";
import { mkdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, "..", "public", "images");

const images = [
  { name: "riley-hero.jpg", width: 1200, height: 1600, variant: "hero" },
  { name: "riley-performance.jpg", width: 900, height: 1125, variant: "performance" },
  { name: "riley-video-1.jpg", width: 640, height: 360, variant: "video" },
  { name: "riley-video-2.jpg", width: 640, height: 360, variant: "video" },
  { name: "riley-video-3.jpg", width: 640, height: 360, variant: "video" },
  { name: "lounge-detail.jpg", width: 800, height: 600, variant: "lounge" },
];

function createGradientSvg(width, height, variant) {
  const gradients = {
    hero: `
      <defs>
        <radialGradient id="g" cx="30%" cy="40%" r="70%">
          <stop offset="0%" stop-color="#2a1f22"/>
          <stop offset="50%" stop-color="#141010"/>
          <stop offset="100%" stop-color="#0a0a0a"/>
        </radialGradient>
        <radialGradient id="accent" cx="70%" cy="60%" r="50%">
          <stop offset="0%" stop-color="#d6336d" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="#d6336d" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <rect width="100%" height="100%" fill="url(#accent)"/>
    `,
    performance: `
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1a1818"/>
          <stop offset="50%" stop-color="#0f0e0e"/>
          <stop offset="100%" stop-color="#0a0a0a"/>
        </linearGradient>
        <radialGradient id="accent" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stop-color="#c4b08a" stop-opacity="0.12"/>
          <stop offset="100%" stop-color="#c4b08a" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <rect width="100%" height="100%" fill="url(#accent)"/>
    `,
    video: `
      <defs>
        <linearGradient id="g" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#121010"/>
          <stop offset="100%" stop-color="#1e1818"/>
        </linearGradient>
        <radialGradient id="accent" cx="60%" cy="50%" r="40%">
          <stop offset="0%" stop-color="#d6336d" stop-opacity="0.1"/>
          <stop offset="100%" stop-color="#d6336d" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <rect width="100%" height="100%" fill="url(#accent)"/>
    `,
    lounge: `
      <defs>
        <radialGradient id="g" cx="60%" cy="50%" r="80%">
          <stop offset="0%" stop-color="#1f1518"/>
          <stop offset="60%" stop-color="#120e10"/>
          <stop offset="100%" stop-color="#0a0a0a"/>
        </radialGradient>
        <radialGradient id="accent" cx="70%" cy="40%" r="30%">
          <stop offset="0%" stop-color="#d6336d" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#d6336d" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="gold" cx="30%" cy="70%" r="25%">
          <stop offset="0%" stop-color="#c4b08a" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="#c4b08a" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <rect width="100%" height="100%" fill="url(#accent)"/>
      <rect width="100%" height="100%" fill="url(#gold)"/>
    `,
  };

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    ${gradients[variant]}
  </svg>`;
}

async function generate() {
  await mkdir(outputDir, { recursive: true });

  for (const img of images) {
    const svg = createGradientSvg(img.width, img.height, img.variant);
    const outputPath = join(outputDir, img.name);

    await sharp(Buffer.from(svg))
      .jpeg({ quality: 85 })
      .toFile(outputPath);

    console.log(`Generated: ${img.name}`);
  }

  console.log("All placeholder images generated.");
}

generate().catch(console.error);
