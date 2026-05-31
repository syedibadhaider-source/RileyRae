import galleryManifest from "./gallery-manifest.json";

export type GalleryImage = {
  src: string;
  alt: string;
};

/** Riley Rae official gallery — sourced from rileyraemusic.com/galleries/972623 */
export const galleryImages: GalleryImage[] = (
  galleryManifest as GalleryImage[]
).filter(
  (img, index, arr) => arr.findIndex((item) => item.src === img.src) === index
);
