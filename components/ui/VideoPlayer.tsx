"use client";

import { useEffect, useCallback } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  youtubeId: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ youtubeId, title, isOpen, onClose }: VideoModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Playing ${title}`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl border border-rose/20 bg-charcoal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 text-ivory-muted transition-colors hover:text-rose"
          aria-label="Close video"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="relative aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
        <p className="border-t border-rose/10 px-6 py-4 font-display text-lg italic text-ivory-muted">
          {title}
        </p>
      </div>
    </div>
  );
}

interface YouTubePlayerProps {
  youtubeId: string;
  title: string;
  className?: string;
}

export function YouTubePlayer({ youtubeId, title, className = "" }: YouTubePlayerProps) {
  return (
    <div className={`relative aspect-[16/10] w-full overflow-hidden border border-rose/10 bg-black ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}

export function getYouTubeThumbnail(youtubeId: string, quality: "max" | "hq" = "max") {
  return quality === "max"
    ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
    : `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}
