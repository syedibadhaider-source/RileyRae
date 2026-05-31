"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2,
  CalendarDays,
  ChevronDown,
  Gem,
  Music2,
  type LucideIcon,
} from "lucide-react";
import { performancePackages } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader, SectionShell } from "@/components/ui/SectionShell";

const packageIcons: LucideIcon[] = [Music2, Building2, Gem, CalendarDays];

function PackageAccordionCard({
  pkg,
  index,
  isOpen,
  onToggle,
}: {
  pkg: (typeof performancePackages)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = packageIcons[index] ?? Music2;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`package-accordion ${isOpen ? "package-accordion-open" : ""}`}
    >
      {isOpen && (
        <div
          className="package-accordion-glow pointer-events-none absolute inset-0 opacity-100"
          aria-hidden="true"
        />
      )}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`package-panel-${pkg.id}`}
        id={`package-trigger-${pkg.id}`}
        className="relative flex w-full items-start gap-4 p-5 text-left transition-colors sm:items-center sm:gap-6 sm:p-6 md:p-7"
      >
        <span
          className={`mt-0.5 shrink-0 font-display text-2xl leading-none transition-colors duration-500 sm:mt-0 sm:text-3xl ${
            isOpen ? "text-rose" : "text-ivory/25"
          }`}
          aria-hidden="true"
        >
          {number}
        </span>

        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center border transition-all duration-500 sm:h-12 sm:w-12 ${
            isOpen
              ? "border-rose/50 bg-rose/10 text-rose"
              : "border-rose/15 bg-black/30 text-rose/70"
          }`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </span>

        <span className="min-w-0 flex-1">
          <h3
            className={`font-display text-xl leading-tight tracking-wide transition-colors duration-500 sm:text-2xl md:text-[1.75rem] ${
              isOpen ? "text-ivory" : "text-ivory/90"
            }`}
          >
            {pkg.name}
          </h3>
          <p
            className={`mt-2 font-body text-sm leading-relaxed text-ivory-muted transition-all duration-500 ${
              isOpen ? "line-clamp-none opacity-100" : "line-clamp-2 sm:line-clamp-1"
            }`}
          >
            {pkg.description}
          </p>
        </span>

        <span
          className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-500 sm:mt-0 ${
            isOpen
              ? "rotate-180 border-rose/50 bg-rose/15 text-rose"
              : "border-rose/20 bg-transparent text-ivory-muted"
          }`}
          aria-hidden="true"
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      <div
        id={`package-panel-${pkg.id}`}
        role="region"
        aria-labelledby={`package-trigger-${pkg.id}`}
        className={`package-accordion-panel ${isOpen ? "package-accordion-panel-open" : ""}`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-rose/10 px-5 pb-6 pt-2 sm:px-6 sm:pb-7 md:px-7 md:pb-8">
            <p className="max-w-2xl font-body text-sm leading-[1.85] text-ivory-muted md:text-base">
              {pkg.description}
            </p>

            <div className="mt-6">
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-rose">
                Package includes
              </p>
              <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                {pkg.includes.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 border border-rose/15 bg-black/30 px-4 py-2.5 font-body text-[11px] uppercase tracking-[0.1em] text-ivory/85 sm:text-xs"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-rose" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-rose/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-body text-xs uppercase tracking-[0.15em] text-ivory-muted">
                Tailored to your venue & vision
              </p>
              <Link
                href="#inquiry"
                className="text-link group shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                Inquire about this package
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ServicesPackages() {
  const [openId, setOpenId] = useState<string>(performancePackages[0].id);

  const handleToggle = (id: string) => {
    setOpenId((current) => (current === id ? "" : id));
  };

  return (
    <SectionShell id="events" tone="black">
      <Reveal>
        <SectionHeader
          eyebrow="Services"
          title="Performance Packages"
          description="Curated live music experiences designed for luxury venues, corporate clients, and private celebrations worldwide."
        />
      </Reveal>

      <div className="mx-auto flex max-w-4xl flex-col gap-3 md:gap-4">
        {performancePackages.map((pkg, i) => (
          <Reveal key={pkg.id} delay={i * 70} direction="up">
            <PackageAccordionCard
              pkg={pkg}
              index={i}
              isOpen={openId === pkg.id}
              onToggle={() => handleToggle(pkg.id)}
            />
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-12 text-center">
        <Button href="#inquiry">Request a Custom Package</Button>
      </Reveal>
    </SectionShell>
  );
}
