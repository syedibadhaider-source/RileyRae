"use client";

import { Ellipsis, Pause, Play, Plus } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import {
  AppleMusicPlatformIcon,
  SpotifyPlatformIcon,
} from "@/components/ui/PlatformIcons";

export type StreamingTrack = {
  id: string;
  title: string;
  subtitle: string;
  artist: string;
  platform: "spotify" | "apple";
  artworkUrl: string;
  listenUrl: string;
  spotifyId?: string;
  previewUrl?: string;
};

function PlatformMark({ platform }: { platform: StreamingTrack["platform"] }) {
  const Icon = platform === "spotify" ? SpotifyPlatformIcon : AppleMusicPlatformIcon;
  const label = platform === "spotify" ? "Spotify" : "Apple Music";

  return (
    <span
      className={`absolute right-3 top-3 z-10 text-[#b3b3b3] ${
        platform === "apple" ? "opacity-90" : ""
      }`}
      title={label}
    >
      <Icon className={platform === "apple" ? "h-[18px] w-[18px]" : "h-4 w-4"} />
    </span>
  );
}

function AppleStylePlayer({ track }: { track: StreamingTrack }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = useCallback(async () => {
    if (track.previewUrl && audioRef.current) {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
        return;
      }
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch {
        window.open(track.listenUrl, "_blank", "noopener,noreferrer");
      }
      return;
    }
    window.open(track.listenUrl, "_blank", "noopener,noreferrer");
  }, [playing, track.listenUrl, track.previewUrl]);

  return (
    <div className="relative h-[152px] w-full overflow-hidden rounded-xl bg-[#181818]">
      <PlatformMark platform="apple" />

      {track.previewUrl ? (
        <audio
          ref={audioRef}
          src={track.previewUrl}
          preload="none"
          onEnded={() => setPlaying(false)}
          onPause={() => setPlaying(false)}
        />
      ) : null}

      <div className="flex h-full items-center gap-3 px-4 pr-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={track.artworkUrl}
          alt=""
          width={56}
          height={56}
          className="h-14 w-14 shrink-0 rounded object-cover"
        />

        <div className="min-w-0 flex-1">
          <a
            href={track.listenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block truncate text-sm font-semibold text-white transition-colors hover:underline"
          >
            {track.title}
          </a>
          <p className="truncate text-[13px] text-[#b3b3b3]">{track.artist}</p>
          {track.previewUrl ? (
            <span className="mt-1.5 inline-block rounded border border-[#727272] px-1.5 py-px text-[10px] font-medium uppercase tracking-wide text-[#b3b3b3]">
              Preview
            </span>
          ) : null}
        </div>

        <div className="flex shrink-0 items-center gap-2.5">
          <a
            href={track.listenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b3b3b3] transition-colors hover:text-white"
            aria-label={`Save ${track.title}`}
          >
            <Plus className="h-4 w-4" strokeWidth={1.75} />
          </a>
          <a
            href={track.listenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b3b3b3] transition-colors hover:text-white"
            aria-label={`More options for ${track.title}`}
          >
            <Ellipsis className="h-4 w-4" strokeWidth={1.75} />
          </a>
          <button
            type="button"
            onClick={togglePlay}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105"
            aria-label={playing ? `Pause ${track.title}` : `Play ${track.title}`}
          >
            {playing ? (
              <Pause className="h-4 w-4 fill-current" />
            ) : (
              <Play className="ml-0.5 h-4 w-4 fill-current" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export function StreamingTrackPlayer({ track }: { track: StreamingTrack }) {
  if (track.platform === "spotify" && track.spotifyId) {
    return (
      <div className="h-[152px] w-full overflow-hidden rounded-xl bg-[#181818]">
        <iframe
          src={`https://open.spotify.com/embed/track/${track.spotifyId}?utm_source=generator&theme=0`}
          title={`Listen to ${track.title} on Spotify`}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="h-full w-full border-0"
        />
      </div>
    );
  }

  return <AppleStylePlayer track={track} />;
}
