"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { aboutSlides } from "@/lib/constants";

export function ScrollArtDecoFrame() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateIndex = () => {
      const section = document.getElementById("about");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionHeight = rect.height;

      // Progress: 0 when section enters, 1 when section exits viewport
      const scrolled = viewportHeight * 0.75 - rect.top;
      const total = sectionHeight + viewportHeight * 0.25;
      const progress = scrolled / total;
      const clamped = Math.max(0, Math.min(1, progress));

      const index = Math.min(
        aboutSlides.length - 1,
        Math.floor(clamped * aboutSlides.length)
      );
      setActiveIndex(index);
    };

    updateIndex();
    window.addEventListener("scroll", updateIndex, { passive: true });
    window.addEventListener("resize", updateIndex, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateIndex);
      window.removeEventListener("resize", updateIndex);
    };
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[300px] p-3 sm:max-w-[320px] md:max-w-[360px] lg:max-w-[380px]">
      {/* Art Deco frame layers */}
      <div className="absolute inset-0 border border-rose/30" />
      <div className="absolute inset-1.5 border border-champagne/20" />
      <div className="absolute inset-3 border border-rose/15" />

      <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-rose/50" />
      <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-rose/50" />
      <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-champagne/40" />
      <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-champagne/40" />

      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
        {aboutSlides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover grayscale"
              sizes="(max-width: 768px) 280px, 340px"
            />
          </div>
        ))}
      </div>

      {/* Slide progress dots */}
      <div className="mt-4 flex justify-center gap-2 lg:justify-end">
        {aboutSlides.map((slide, index) => (
          <span
            key={slide.src}
            className={`h-px transition-all duration-500 ${
              index === activeIndex ? "w-6 bg-rose" : "w-3 bg-ivory/25"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}
