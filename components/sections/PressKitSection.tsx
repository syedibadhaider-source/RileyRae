"use client";

import { Download, FileText, Image as ImageIcon, Music } from "lucide-react";
import { ambientPress } from "@/lib/ambient-images";
import { pressKit } from "@/lib/constants";
import { AmbientPhotos } from "@/components/ui/AmbientPhotos";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const iconMap = {
  bio: FileText,
  photos: ImageIcon,
  rider: Music,
  sheet: Download,
} as const;

export function PressKitSection() {
  return (
    <SectionShell
      id="press"
      tone="charcoal"
      atmosphere={
        <AmbientPhotos images={ambientPress} layout="press-editorial" tone="charcoal" />
      }
    >
      <div className="section-split items-stretch">
        <Reveal
          direction="left"
          className="section-split-content flex flex-col lg:min-h-full lg:justify-between"
        >
          <div>
            <p className="text-eyebrow">{pressKit.eyebrow}</p>
            <h2 className="section-title mt-4">{pressKit.heading}</h2>
            <p className="mt-6 max-w-md font-body text-sm leading-[1.8] text-ivory-muted md:text-base">
              {pressKit.body}
            </p>
            <ul className="mt-8 space-y-3">
              {pressKit.highlights.map((item) => (
                <li
                  key={item}
                  className="font-body text-xs uppercase tracking-[0.12em] text-ivory/80 before:mr-2 before:text-rose before:content-['—']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 lg:mt-8">
            <Button href="mailto:hello@rileyraemusic.com?subject=Press%20Inquiry">
              Contact Press
            </Button>
          </div>
        </Reveal>

        <Reveal
          direction="right"
          delay={120}
          className="section-split-media flex min-h-full flex-col"
        >
          <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-rows-2">
            {pressKit.downloads.map(({ label, href, type }, i) => {
              const Icon = iconMap[type];
              return (
                <Reveal key={label} delay={160 + i * 70} direction="scale" className="h-full">
                  <a
                    href={href}
                    className="luxury-card group flex h-full min-h-[3.25rem] items-center gap-3 border-rose/15 bg-black/40 px-4 py-4 backdrop-blur-sm sm:gap-4 sm:px-5"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-rose transition-transform duration-500 group-hover:scale-110" />
                    <span className="font-body text-[11px] uppercase tracking-[0.1em] text-ivory sm:whitespace-nowrap sm:text-xs sm:tracking-[0.12em]">
                      {label}
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-5 shrink-0 font-body text-[10px] uppercase tracking-[0.1em] text-ivory-muted sm:text-[11px] sm:tracking-[0.12em]">
            <span className="sm:whitespace-nowrap">
              Press assets available upon request — links activate when files are uploaded.
            </span>
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
