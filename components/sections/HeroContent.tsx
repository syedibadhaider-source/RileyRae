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
        <SocialIcons
          variant="hero"
          orientation="horizontal"
          className="mb-5 w-full justify-center sm:mb-8 sm:w-auto sm:justify-start lg:mb-10"
        />
      </div>

      <div className={item()} style={{ transitionDelay: "220ms" }}>
        <Eyebrow withOrnaments className="mb-4 sm:mb-6 lg:mb-8">
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
        className={`mt-3 font-display text-xl font-light italic text-ivory sm:mt-5 sm:text-2xl md:mt-6 md:text-3xl ${item()}`}
        style={{ transitionDelay: "460ms" }}
      >
        {siteConfig.tagline}
      </p>

      <p
        className={`mt-3 max-w-md font-body text-sm leading-relaxed text-ivory-muted sm:mt-5 md:mt-6 md:text-base ${item()}`}
        style={{ transitionDelay: "580ms" }}
      >
        {siteConfig.description}
      </p>

      <div
        className={`hero-cta mt-5 flex flex-row flex-nowrap items-center justify-center gap-2 sm:mt-8 sm:justify-start sm:gap-5 lg:mt-10 ${item()}`}
        style={{ transitionDelay: "700ms" }}
      >
        <Button href="#booking" className="shrink-0 sm:px-8">
          Book Riley Rae
        </Button>
        <TextLink href="#shows" className="shrink-0 whitespace-nowrap">
          View Performances
        </TextLink>
      </div>
    </div>
  );
}
