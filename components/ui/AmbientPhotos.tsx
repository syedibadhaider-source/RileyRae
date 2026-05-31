import Image from "next/image";
import type { AmbientImage } from "@/lib/ambient-images";

export type AmbientLayout =
  | "gallery-header"
  | "gallery-section"
  | "inquiry-split"
  | "press-editorial"
  | "newsletter-glow"
  | "newsletter-section";

interface AmbientSlot {
  className: string;
  opacity: string;
}

const layouts: Record<AmbientLayout, AmbientSlot[]> = {
  "gallery-header": [
    {
      className:
        "absolute -right-3 top-1/2 h-36 w-28 -translate-y-1/2 rotate-6 md:-right-6 md:h-44 md:w-36",
      opacity: "opacity-[0.10] md:opacity-[0.12]",
    },
    {
      className:
        "absolute right-[24%] top-1/2 h-28 w-24 -translate-y-1/2 -rotate-3 md:h-36 md:w-28",
      opacity: "opacity-[0.08] md:opacity-10",
    },
    {
      className:
        "absolute left-[48%] top-1/2 h-32 w-24 -translate-y-1/2 rotate-12 md:h-40 md:w-32",
      opacity: "opacity-[0.07] md:opacity-[0.09]",
    },
    {
      className:
        "absolute -left-5 top-1/2 hidden h-40 w-32 -translate-y-1/2 -rotate-6 sm:block md:h-48 md:w-36",
      opacity: "opacity-[0.08] md:opacity-10",
    },
    {
      className:
        "absolute left-[20%] top-1/2 h-24 w-20 -translate-y-1/2 rotate-3 md:h-28 md:w-24",
      opacity: "opacity-[0.06] md:opacity-[0.08]",
    },
  ],
  "gallery-section": [
    {
      className: "absolute -right-6 top-[6%] h-36 w-28 rotate-6 md:-right-10 md:h-48 md:w-36",
      opacity: "opacity-[0.07] md:opacity-[0.09]",
    },
    {
      className: "absolute right-[22%] top-[38%] h-28 w-24 -rotate-3 md:h-36 md:w-28",
      opacity: "opacity-[0.05] md:opacity-[0.07]",
    },
    {
      className: "absolute -left-8 bottom-[12%] h-40 w-32 rotate-12 md:h-48 md:w-36",
      opacity: "opacity-[0.06] md:opacity-[0.08]",
    },
    {
      className: "absolute left-[38%] top-[4%] hidden h-32 w-28 -rotate-6 sm:block md:h-40 md:w-32",
      opacity: "opacity-[0.04] md:opacity-[0.06]",
    },
    {
      className: "absolute right-[32%] bottom-[6%] h-28 w-24 rotate-3 md:h-32 md:w-28",
      opacity: "opacity-[0.05] md:opacity-[0.06]",
    },
  ],
  "inquiry-split": [
    {
      className: "absolute -left-8 top-[8%] h-52 w-40 -rotate-6 md:h-64 md:w-48",
      opacity: "opacity-[0.10] md:opacity-[0.12]",
    },
    {
      className: "absolute left-[12%] bottom-[10%] h-44 w-36 rotate-3 md:h-52 md:w-40",
      opacity: "opacity-[0.08] md:opacity-10",
    },
    {
      className: "absolute -right-6 top-[15%] h-48 w-36 rotate-6 md:h-60 md:w-44",
      opacity: "opacity-[0.09] md:opacity-[0.11]",
    },
    {
      className: "absolute right-[8%] bottom-[5%] h-36 w-28 -rotate-3 md:h-44 md:w-36",
      opacity: "opacity-[0.07] md:opacity-[0.09]",
    },
  ],
  "press-editorial": [
    {
      className: "absolute -left-10 top-0 h-56 w-44 -rotate-6 md:h-72 md:w-56",
      opacity: "opacity-[0.08] md:opacity-10",
    },
    {
      className: "absolute left-[28%] top-[18%] h-40 w-32 rotate-3 md:h-48 md:w-40",
      opacity: "opacity-[0.06] md:opacity-[0.08]",
    },
    {
      className: "absolute right-[5%] top-[5%] h-52 w-40 -rotate-3 md:h-64 md:w-48",
      opacity: "opacity-[0.10] md:opacity-[0.12]",
    },
    {
      className: "absolute right-[22%] bottom-[8%] h-44 w-36 rotate-6 md:h-52 md:w-40",
      opacity: "opacity-[0.07] md:opacity-[0.09]",
    },
    {
      className: "absolute left-[45%] bottom-0 h-32 w-28 -rotate-12 md:h-40 md:w-32",
      opacity: "opacity-[0.05] md:opacity-[0.07]",
    },
  ],
  "newsletter-glow": [
    {
      className: "absolute -left-4 top-0 h-48 w-36 rotate-3 md:h-56 md:w-44",
      opacity: "opacity-[0.11] md:opacity-[0.13]",
    },
    {
      className: "absolute left-[35%] top-[20%] h-32 w-24 -rotate-6 md:h-40 md:w-32",
      opacity: "opacity-[0.07] md:opacity-[0.09]",
    },
    {
      className: "absolute left-[8%] bottom-[5%] h-40 w-32 rotate-6 md:h-48 md:w-40",
      opacity: "opacity-[0.08] md:opacity-10",
    },
    {
      className: "absolute right-[42%] top-[45%] hidden h-28 w-24 rotate-12 lg:block",
      opacity: "opacity-[0.05]",
    },
  ],
  "newsletter-section": [
    {
      className: "absolute -left-4 top-[8%] h-40 w-32 rotate-3 md:h-48 md:w-36",
      opacity: "opacity-[0.07] md:opacity-[0.09]",
    },
    {
      className: "absolute left-[28%] bottom-[10%] h-32 w-28 -rotate-6 md:h-40 md:w-32",
      opacity: "opacity-[0.05] md:opacity-[0.07]",
    },
    {
      className: "absolute right-[6%] top-[18%] hidden h-36 w-28 rotate-6 lg:block md:h-44 md:w-36",
      opacity: "opacity-[0.06] md:opacity-[0.08]",
    },
    {
      className: "absolute right-[38%] bottom-[8%] h-24 w-20 rotate-12 md:h-28 md:w-24",
      opacity: "opacity-[0.04] md:opacity-[0.06]",
    },
  ],
};

interface AmbientPhotosProps {
  images: AmbientImage[];
  layout: AmbientLayout;
  tone?: "black" | "charcoal";
  vignette?: "full" | "soft" | "none";
  className?: string;
}

const vignetteClass = {
  full: { black: "ambient-vignette", charcoal: "ambient-vignette-charcoal" },
  soft: { black: "ambient-vignette-soft", charcoal: "ambient-vignette-soft-charcoal" },
  none: { black: "", charcoal: "" },
} as const;

export function AmbientPhotos({
  images,
  layout,
  tone = "black",
  vignette = "full",
  className = "",
}: AmbientPhotosProps) {
  const slots = layouts[layout];
  const vignetteLayer = vignetteClass[vignette][tone];

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {slots.map((slot, index) => {
        const image = images[index % images.length];
        if (!image) return null;

        return (
          <div
            key={`${layout}-${image.src}-${index}`}
            className={`ambient-photo ${slot.className} ${slot.opacity}`}
          >
            <Image
              src={image.src}
              alt=""
              fill
              className="object-cover brightness-[0.35] contrast-[0.85]"
              sizes="200px"
            />
          </div>
        );
      })}
      {vignetteLayer ? <div className={`absolute inset-0 ${vignetteLayer}`} /> : null}
    </div>
  );
}
