/**
 * Download Riley Rae site images into public/images/
 * Source: rileyrae_high_quality_image_links.json
 */
import { mkdir, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images");

const imageMap = {
  "riley-hero.jpg":
    "https://images.zoogletools.com/s:bzglfiles/u/688802/224c085c039a4c926debd94eb7da391e6047c494/original/senzig-riely-70.jpg",
  "riley-performance.jpg":
    "https://images.zoogletools.com/s:bzglfiles/u/688802/618dc62afab90512bfc1f6ce86122299e4bdeb36/original/dsc4630-1-1.jpg",
  "riley-booking.jpg":
    "https://images.zoogletools.com/s:bzglfiles/u/688802/932950b0e71234d4a4e6aa98a48e405d7d08c907/original/dsc4326-1.jpg",
  "lounge-detail.jpg":
    "https://images.zoogletools.com/s:bzglfiles/u/688802/ad6ba5a934f30db6021401e6c033b081890d7091/original/img-3595-2.jpg",
};

const youtubeThumbnails = {
  "riley-video-featured.jpg": "_oMFVOZXWN8",
  "riley-video-1.jpg": "i_b39lpiUIE",
  "riley-video-2.jpg": "wQdAv9ZFBNE",
  "riley-video-3.jpg": "VC2Zajd1xYY",
};

async function download(url, filename) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${filename}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(join(outDir, filename), buf);
  console.log(`Saved ${filename} (${buf.length} bytes)`);
}

await mkdir(outDir, { recursive: true });

for (const [filename, url] of Object.entries(imageMap)) {
  await download(url, filename);
}

for (const [filename, id] of Object.entries(youtubeThumbnails)) {
  await download(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`, filename);
}

console.log("Done.");
