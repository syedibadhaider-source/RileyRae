import { partners } from "@/lib/constants";
import { PartnerLogo } from "@/components/ui/PartnerLogo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export function TrustedBy() {
  return (
    <SectionShell tone="black" className="!py-14 md:!py-16">
      <Reveal>
        <div className="mb-10 flex items-center justify-center gap-6 md:mb-12">
          <span className="hidden h-px flex-1 max-w-24 bg-champagne/20 sm:block" />
          <h2 className="text-center font-body text-xs uppercase tracking-[0.3em] text-rose">
            Trusted By Discerning Partners
          </h2>
          <span className="hidden h-px flex-1 max-w-24 bg-champagne/20 sm:block" />
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="flex items-center justify-start gap-0 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:justify-center [&::-webkit-scrollbar]:hidden">
          {partners.map((partner, index) => (
            <div key={partner.id} className="flex shrink-0 items-center">
              <div className="flex items-center px-5 md:px-8">
                <PartnerLogo partner={partner} />
              </div>
              {index < partners.length - 1 && (
                <span className="h-8 w-px shrink-0 bg-champagne/30" aria-hidden="true" />
              )}
            </div>
          ))}
          <span className="whitespace-nowrap px-5 font-body text-xs uppercase tracking-[0.2em] text-ivory-muted md:px-8">
            and more
          </span>
        </div>
      </Reveal>
    </SectionShell>
  );
}
