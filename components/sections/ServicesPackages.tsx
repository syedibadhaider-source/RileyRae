import { performancePackages } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader, SectionShell } from "@/components/ui/SectionShell";

export function ServicesPackages() {
  return (
    <SectionShell id="events" tone="black">
      <Reveal>
        <SectionHeader
          eyebrow="Services"
          title="Performance Packages"
          description="Curated live music experiences designed for luxury venues, corporate clients, and private celebrations worldwide."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {performancePackages.map((pkg, i) => (
          <Reveal key={pkg.name} delay={i * 90} direction={i % 2 === 0 ? "up" : "scale"}>
            <div className="luxury-card flex h-full flex-col p-8 md:p-10">
              <h3 className="font-display text-2xl text-rose md:text-3xl">{pkg.name}</h3>
              <p className="mt-4 flex-1 font-body text-sm leading-[1.8] text-ivory-muted">
                {pkg.description}
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-rose/10 pt-6">
                {pkg.includes.map((item) => (
                  <li
                    key={item}
                    className="font-body text-xs uppercase tracking-[0.12em] text-ivory/80 before:mr-2 before:text-rose before:content-['—']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-12 text-center">
        <Button href="#inquiry">Request a Custom Package</Button>
      </Reveal>
    </SectionShell>
  );
}
