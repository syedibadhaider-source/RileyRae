"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, Play } from "lucide-react";
import { featuredVideo, videos, youtubeChannelUrl } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionShell";
import { SectionShell } from "@/components/ui/SectionShell";
import { VideoModal, YouTubePlayer } from "@/components/ui/VideoPlayer";

type VideoItem = {
  youtubeId: string;
  title: string;
  thumbnail: string;
};

function VideoCard({
  video,
  featured = false,
  compact = false,
  isActive = false,
  onSelect,
  className = "",
}: {
  video: VideoItem;
  featured?: boolean;
  compact?: boolean;
  isActive?: boolean;
  onSelect: (video: VideoItem) => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(video)}
      className={`media-frame group relative w-full transition-all duration-500 hover:border-rose/40 ${
        featured
          ? "aspect-[16/10]"
          : compact
            ? "aspect-video lg:aspect-auto lg:h-full lg:min-h-0"
            : "aspect-video"
      } ${isActive ? "border-rose/60 ring-1 ring-rose/30" : ""} ${className}`}
      aria-label={`Play ${video.title}`}
      aria-pressed={isActive}
    >
      <Image
        src={video.thumbnail}
        alt={video.title}
        fill
        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
        sizes={featured ? "(max-width: 768px) 100vw, 60vw" : "300px"}
      />
      <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`flex items-center justify-center rounded-full border border-rose/60 bg-black/40 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-rose group-hover:bg-black/60 ${
            featured ? "h-16 w-16 md:h-20 md:w-20" : "h-10 w-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
          }`}
        >
          <Play
            className={`fill-rose text-rose ${featured ? "ml-1 h-6 w-6 md:h-7 md:w-7" : "ml-0.5 h-4 w-4"}`}
          />
        </div>
      </div>
    </button>
  );
}

export function FeaturedPerformances() {
  const featuredItem: VideoItem = {
    youtubeId: featuredVideo.youtubeId,
    title: featuredVideo.title,
    thumbnail: featuredVideo.thumbnail,
  };

  const [activeVideo, setActiveVideo] = useState<VideoItem>(featuredItem);
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalVideo, setModalVideo] = useState<VideoItem | null>(null);

  const handleSelect = (video: VideoItem) => {
    setActiveVideo(video);
    setIsPlaying(true);
  };

  const caption =
    activeVideo.youtubeId === featuredVideo.youtubeId
      ? featuredVideo.caption
      : activeVideo.title;

  return (
    <SectionShell id="shows" tone="charcoal">
      <Reveal>
        <SectionHeader
          eyebrow="Performances"
          title="Featured Performances"
          description="Cinematic live moments from luxury lounges, corporate galas, and curated events."
        />
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-6">
        <Reveal
          direction="left"
          className="order-2 flex flex-col gap-4 lg:order-none lg:col-span-4 lg:row-start-1 lg:self-stretch"
        >
          {videos.map((video, i) => {
            const item: VideoItem = {
              youtubeId: video.youtubeId,
              title: video.title,
              thumbnail: video.thumbnail,
            };
            return (
              <Reveal
                key={video.id}
                delay={i * 80}
                className="flex min-h-0 flex-1 flex-col max-lg:flex-none"
              >
                <VideoCard
                  video={item}
                  compact
                  isActive={isPlaying && activeVideo.youtubeId === video.youtubeId}
                  onSelect={handleSelect}
                />
              </Reveal>
            );
          })}
        </Reveal>

        <Reveal direction="right" delay={120} className="order-1 lg:order-none lg:col-span-8 lg:col-start-5 lg:row-start-1">
          {isPlaying ? (
            <div className="relative">
              <YouTubePlayer youtubeId={activeVideo.youtubeId} title={activeVideo.title} />
              <button
                type="button"
                onClick={() => setModalVideo(activeVideo)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-rose/30 bg-black/60 text-rose backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-rose"
                aria-label="Open video in fullscreen modal"
              >
                <Maximize2 className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <VideoCard video={featuredItem} featured onSelect={handleSelect} />
          )}
        </Reveal>

        <div className="order-3 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center lg:order-none lg:col-span-8 lg:col-start-5 lg:row-start-2">
          <p className="font-display text-xl italic text-ivory-muted">{caption}</p>
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link group"
          >
            View All Videos
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      {modalVideo && (
        <VideoModal
          youtubeId={modalVideo.youtubeId}
          title={modalVideo.title}
          isOpen={!!modalVideo}
          onClose={() => setModalVideo(null)}
        />
      )}
    </SectionShell>
  );
}
