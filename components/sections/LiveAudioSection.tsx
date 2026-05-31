import { liveAudioTracks } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader, SectionShell } from "@/components/ui/SectionShell";

export function LiveAudioSection() {
  return (
    <SectionShell id="music" tone="black">
      <Reveal>
        <SectionHeader
          eyebrow="Live Recordings"
          title="Hear Riley Rae"
          description="Studio sessions and live performance recordings — soulful, refined, and unmistakably Riley."
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {liveAudioTracks.map((track, i) => (
          <Reveal key={track.id} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
            <div className="luxury-card min-w-0 p-6 md:p-8">
              <div className="mb-5">
                <h3 className="font-display text-2xl text-rose md:text-3xl">{track.title}</h3>
                <p className="mt-1 font-body text-xs uppercase tracking-[0.15em] text-ivory-muted">
                  {track.subtitle}
                </p>
              </div>
              <iframe
                src={`https://open.spotify.com/embed/track/${track.spotifyId}?utm_source=generator&theme=0`}
                title={`Listen to ${track.title}`}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="h-[152px] w-full rounded-none border-0"
              />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-12 text-center">
        <Button href="https://open.spotify.com/artist/2nYfYBvZnfVZRY31XmmS0S">
          Listen on Spotify
        </Button>
      </Reveal>
    </SectionShell>
  );
}
