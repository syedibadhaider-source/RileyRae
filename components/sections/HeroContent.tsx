"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/constants";
import { Button, TextLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function HeroContent() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  const item = () =>
    `motion-safe:transition-all motion-safe:duration-[900ms] motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] ${
      ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`;

  return (
    <div className="mx-auto w-full max-w-xl lg:max-w-none">
      <div className={item()} style={{ transitionDelay: "120ms" }}>
        <SocialIcons variant="hero" orientation="horizontal" className="mb-8 justify-start sm:mb-10" />
      </div>

      <div className={item()} style={{ transitionDelay: "220ms" }}>
        <Eyebrow withOrnaments className="mb-8">
          International Vocalist & Event Producer
        </Eyebrow>
      </div>

      <h1
        className={`font-display text-[2.75rem] font-light leading-[0.95] tracking-wide text-rose sm:text-5xl md:text-7xl lg:text-[5.5rem] lg:leading-none xl:text-8xl ${item()}`}
        style={{ transitionDelay: "340ms" }}
      >
        {siteConfig.name}
      </h1>

      <p
        className={`mt-5 font-display text-xl font-light italic text-ivory sm:mt-6 sm:text-2xl md:text-3xl ${item()}`}
        style={{ transitionDelay: "460ms" }}
      >
        {siteConfig.tagline}
      </p>

      <p
        className={`mt-5 max-w-md font-body text-sm leading-relaxed text-ivory-muted sm:mt-6 md:text-base ${item()}`}
        style={{ transitionDelay: "580ms" }}
      >
        {siteConfig.description}
      </p>

      <div
        className={`mt-8 flex flex-row flex-nowrap items-center justify-center gap-2.5 sm:mt-10 sm:justify-start sm:gap-5 ${item()}`}
        style={{ transitionDelay: "700ms" }}
      >
        <Button href="#booking" className="shrink-0 px-4 sm:px-8">
          Book Riley Rae
        </Button>
        <TextLink href="#shows" className="shrink-0 whitespace-nowrap">
          View Performances
        </TextLink>
      </div>
    </div>
  );
}
