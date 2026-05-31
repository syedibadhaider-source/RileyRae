/**
 * Download Riley Rae gallery photos from zoogletools (source: rileyraemusic.com gallery)
 */
import { readFile, mkdir, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images", "gallery");
const manifestPath = join(__dirname, "..", "lib", "gallery-manifest.json");

const jsonPath =
  process.env.GALLERY_JSON ||
  join(
    process.env.HOME || "",
    "Downloads/rileyrae_extracted_image_links_pack/rileyrae_high_quality_image_links.json"
  );

function safeName(name) {
  return name.replace(/[^a-zA-Z0-9._-]+/g, "-").toLowerCase();
}

const raw = JSON.parse(await readFile(jsonPath, "utf-8"));
const seen = new Set();
const items = [];

for (const row of raw) {
  if (row.category !== "photo_gallery") continue;
  if (row.filename.includes("album-art")) continue;
  const url = row.direct_original_url;
  if (!url || seen.has(url)) continue;
  seen.add(url);
  items.push({ url, filename: row.filename, index: row.index });
}

await mkdir(outDir, { recursive: true });

const manifest = [];

for (const item of items) {
  const ext = item.filename.match(/\.(jpe?g|png|webp)$/i)?.[0] || ".jpg";
  const localName = `gallery-${String(item.index).padStart(2, "0")}-${safeName(item.filename.replace(/\.[^.]+$/, ""))}${ext}`;
  const outPath = join(outDir, localName);

  console.log(`Downloading ${localName}...`);
  const res = await fetch(item.url);
  if (!res.ok) {
    console.warn(`  Failed (${res.status}): ${item.filename}`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(outPath, buf);
  manifest.push({
    src: `/images/gallery/${localName}`,
    alt: `Riley Rae — ${item.filename.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ")}`,
  });
  console.log(`  Saved ${buf.length} bytes`);
}

await writeFile(manifestPath, JSON.stringify(manifest, null, 2));
console.log(`Done. ${manifest.length} images → public/images/gallery/`);
