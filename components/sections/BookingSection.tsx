import Image from "next/image";
import { Briefcase, Building2, Mic, Wine } from "lucide-react";
import { bookingCopy, services } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const iconMap = {
  hotel: Building2,
  briefcase: Briefcase,
  cocktail: Wine,
  mic: Mic,
} as const;

export function BookingSection() {
  return (
    <SectionShell id="booking" tone="charcoal">
      <div className="section-split">
        <Reveal direction="left" className="section-split-media-left order-2 lg:order-1">
          <div className="media-frame group relative aspect-[4/5] max-h-[560px] w-full lg:max-h-[620px]">
            <Image
              src="/images/riley-booking.jpg"
              alt="Riley Rae performing at a luxury event"
              fill
              className="object-cover grayscale transition-transform duration-[900ms] ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
          </div>
        </Reveal>

        <Reveal direction="right" delay={120} className="section-split-content lg:col-start-7 order-1 lg:order-2">
          <Eyebrow>{bookingCopy.eyebrow}</Eyebrow>
          <h2 className="section-title mt-4">{bookingCopy.heading}</h2>
          <p className="mt-6 max-w-md font-body text-sm leading-[1.8] text-ivory-muted md:text-base">
            {bookingCopy.body}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {services.map(({ label, icon }, i) => {
              const Icon = iconMap[icon];
              return (
                <Reveal key={label} delay={180 + i * 60} direction="up">
                  <div className="luxury-card flex items-start gap-4 p-4">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-rose" strokeWidth={1.5} />
                    <span className="font-body text-xs uppercase tracking-[0.15em] text-ivory">
                      {label}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10">
            <Button href="#inquiry">Inquire Now</Button>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
