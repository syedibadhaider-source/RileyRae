"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { ambientGalleryHeader } from "@/lib/ambient-images";
import { galleryImages } from "@/lib/gallery";
import { Button } from "@/components/ui/Button";
import { AmbientPhotos } from "@/components/ui/AmbientPhotos";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader, SectionShell } from "@/components/ui/SectionShell";

export function PhotoGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const track = [...galleryImages, ...galleryImages];

  return (
    <SectionShell
      id="gallery"
      tone="charcoal"
      fullWidth
      className="!py-10 md:!py-14"
      innerClassName=""
      atmosphere={
        <AmbientPhotos
          images={ambientGalleryHeader}
          layout="gallery-section"
          tone="charcoal"
        />
      }
    >
      <div className="section-container relative mb-6 md:mb-8">
        <div className="relative overflow-hidden py-4 md:py-6">
          <AmbientPhotos
            images={ambientGalleryHeader}
            layout="gallery-header"
            tone="charcoal"
            vignette="soft"
          />
          <Reveal>
            <div className="relative z-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <SectionHeader
                eyebrow="Gallery"
                title="Professional Photography"
                description="Hover to pause — click to enlarge"
                align="left"
                className="mb-0 max-w-lg"
              />
              <Button href="#booking" className="shrink-0">
                Book a Performance
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={100}>
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-charcoal to-transparent md:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-charcoal to-transparent md:w-28" />

          <div className="overflow-hidden py-1">
            <div
              className="animate-gallery-marquee flex w-max gap-4 px-4 md:gap-5"
              style={{ animationPlayState: isPaused ? "paused" : "running" }}
            >
              {track.map((image, index) => {
                const originalIndex = index % galleryImages.length;
                return (
                  <button
                    key={`${image.src}-${index}`}
                    type="button"
                    onClick={() => setLightbox(originalIndex)}
                    className="media-frame group relative h-56 w-44 shrink-0 sm:h-64 sm:w-52 md:h-72 md:w-60"
                    aria-label={`View ${image.alt}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover grayscale transition-all duration-700 group-hover:scale-[1.05] group-hover:grayscale-0 motion-reduce:group-hover:scale-100"
                      sizes="256px"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 text-ivory-muted transition-colors hover:text-rose"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="relative h-[75vh] w-full max-w-4xl border border-rose/20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </SectionShell>
  );
}
