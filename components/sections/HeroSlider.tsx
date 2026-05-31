"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroSlides } from "@/lib/constants";

const SLIDE_INTERVAL_MS = 6000;
const CROSSFADE_MS = 1400;
/** Zoom runs for most of the slide duration, then crossfade to the next */
const ZOOM_MS = SLIDE_INTERVAL_MS - 600;

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative h-[50vh] overflow-hidden lg:h-full lg:min-h-screen"
      style={{ ["--hero-zoom-duration" as string]: `${ZOOM_MS}ms` }}
    >
      {heroSlides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity ease-in-out ${
              isActive ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
            style={{ transitionDuration: `${CROSSFADE_MS}ms` }}
            aria-hidden={!isActive}
          >
            <div
              key={isActive ? `zoom-${activeIndex}` : "idle"}
              className={`absolute inset-0 origin-center will-change-transform ${
                isActive
                  ? "animate-hero-slide-zoom motion-reduce:animate-none motion-reduce:scale-100"
                  : "scale-100"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        );
      })}

      <div className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-transparent to-black/60 lg:to-black/80" />
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-transparent to-black/30 lg:hidden" />

      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3 lg:bottom-10">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-px transition-all duration-500 ${
              index === activeIndex
                ? "w-10 bg-rose"
                : "w-6 bg-ivory/30 hover:bg-ivory/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
