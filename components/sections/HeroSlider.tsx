"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroSlides } from "@/lib/constants";

const SLIDE_INTERVAL = 6000;

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[50vh] overflow-hidden lg:h-full lg:min-h-screen">
      {heroSlides.map((slide, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={!isActive}
          >
            <div
              className={`absolute inset-0 ${isActive ? "animate-hero-zoom motion-reduce:animate-none" : ""}`}
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

      {/* Slide indicators */}
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
