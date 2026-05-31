import { heroSlides } from "./constants";
import { galleryImages } from "./gallery";

export type AmbientImage = {
  src: string;
  alt: string;
};

export const ambientGalleryHeader: AmbientImage[] = galleryImages.slice(0, 5);

export const ambientInquiry: AmbientImage[] = [
  heroSlides[1],
  heroSlides[2],
  galleryImages[6] ?? heroSlides[0],
  galleryImages[12] ?? heroSlides[0],
];

export const ambientPress: AmbientImage[] = [
  heroSlides[0],
  galleryImages[3] ?? heroSlides[0],
  galleryImages[9] ?? heroSlides[0],
  galleryImages[15] ?? heroSlides[0],
  galleryImages[20] ?? heroSlides[0],
];

export const ambientNewsletter: AmbientImage[] = [
  galleryImages[2] ?? heroSlides[0],
  galleryImages[7] ?? heroSlides[0],
  heroSlides[2],
  galleryImages[18] ?? heroSlides[0],
];
