"use client";

import { useEffect, useRef, useState } from "react";
import { RileyRaeRoundLogo } from "@/components/ui/RileyRaeRoundLogo";

interface SectionDividerProps {
  showMonogram?: boolean;
}

export function SectionDivider({ showMonogram = true }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative flex items-center justify-center py-8 md:py-12">
      <div
        className={`absolute h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-rose/30 to-transparent transition-transform duration-[1200ms] ease-out motion-safe:transition-transform ${
          isVisible ? "scale-x-100" : "scale-x-0"
        }`}
        style={{ transformOrigin: "center" }}
      />
      {showMonogram && (
        <div className="relative z-10 flex items-center justify-center">
          <RileyRaeRoundLogo />
        </div>
      )}
    </div>
  );
}
