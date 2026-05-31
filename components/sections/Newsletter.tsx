"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { ambientNewsletter } from "@/lib/ambient-images";
import { newsletterCopy } from "@/lib/constants";
import { AmbientPhotos } from "@/components/ui/AmbientPhotos";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <SectionShell
      tone="black"
      className="!pb-8 !pt-10 md:!pb-10 md:!pt-14"
      atmosphere={
        <AmbientPhotos
          images={ambientNewsletter}
          layout="newsletter-section"
          tone="black"
        />
      }
    >
      <div className="section-split items-center gap-8 lg:gap-12">
        <Reveal direction="left" className="section-split-content">
          <h2 className="font-display text-3xl font-light leading-tight tracking-wide text-ivory md:text-4xl lg:text-5xl">
            {newsletterCopy.heading}
          </h2>
          <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-ivory-muted">
            {newsletterCopy.body}
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={newsletterCopy.placeholder}
              required
              className="flex-1 min-h-11 border border-rose/20 bg-charcoal-light px-5 py-3 font-body text-base text-ivory transition-all duration-300 placeholder:text-ivory-muted/50 focus:border-rose/50 focus:outline-none focus:ring-1 focus:ring-rose/30 sm:text-sm"
            />
            <button type="submit" className="btn-luxury-solid shrink-0">
              {newsletterCopy.button}
            </button>
          </form>
        </Reveal>

        <Reveal direction="right" delay={120} className="section-split-media max-lg:order-last">
          <div className="media-frame group relative aspect-[4/3] w-full overflow-hidden max-lg:mb-2">
            <Image
              src="/images/lounge-detail.jpg"
              alt="Luxury lounge detail with cocktail and candlelight"
              fill
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
