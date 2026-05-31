import { liveAudioTracks } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader, SectionShell } from "@/components/ui/SectionShell";
import { StreamingTrackPlayer } from "@/components/ui/StreamingTrackPlayer";

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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {liveAudioTracks.map((track, i) => (
          <Reveal key={track.id} delay={i * 80}>
            <div className="luxury-card min-w-0 p-4 sm:p-5">
              <div className="mb-3">
                <h3 className="font-display text-lg text-rose sm:text-xl">{track.title}</h3>
                <p className="mt-0.5 font-body text-[10px] uppercase tracking-[0.12em] text-ivory-muted sm:text-xs">
                  {track.subtitle}
                </p>
              </div>
              <StreamingTrackPlayer track={track} />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-10 text-center">
        <Button href="https://open.spotify.com/artist/2nYfYBvZnfVZRY31XmmS0S">
          Listen on Spotify
        </Button>
      </Reveal>
    </SectionShell>
  );
}
