import { aboutCopy } from "@/lib/constants";
import { TextLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollArtDecoFrame } from "@/components/ui/ScrollArtDecoFrame";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionShell } from "@/components/ui/SectionShell";

export function AboutSection() {
  return (
    <>
      <SectionDivider />
      <SectionShell id="about" tone="black">
        <div className="section-split">
          <Reveal direction="left" className="section-split-content">
            <Eyebrow>{aboutCopy.eyebrow}</Eyebrow>
            <h2 className="section-title mt-4">{aboutCopy.heading}</h2>
            <p className="mt-6 max-w-md font-body text-sm leading-[1.8] text-ivory-muted md:text-base">
              {aboutCopy.body}
            </p>
            <div className="mt-8">
              <TextLink href="#booking">Learn More</TextLink>
            </div>
          </Reveal>

          <Reveal direction="right" delay={150} className="section-split-media flex justify-center lg:justify-end">
            <ScrollArtDecoFrame />
          </Reveal>
        </div>
      </SectionShell>
    </>
  );
}
