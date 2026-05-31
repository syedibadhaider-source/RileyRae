import Image from "next/image";
import type { ReactNode } from "react";

interface ArtDecoFrameProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  children?: ReactNode;
}

export function ArtDecoFrame({
  src,
  alt,
  className = "",
  priority = false,
  children,
}: ArtDecoFrameProps) {
  return (
    <div className={`relative p-4 md:p-6 ${className}`}>
      {/* Outer Art Deco frame layers */}
      <div className="absolute inset-0 border border-rose/30" />
      <div className="absolute inset-2 border border-champagne/20" />
      <div className="absolute inset-4 border border-rose/15" />

      {/* Corner accents */}
      <div className="absolute left-0 top-0 h-6 w-6 border-l border-t border-rose/50" />
      <div className="absolute right-0 top-0 h-6 w-6 border-r border-t border-rose/50" />
      <div className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-champagne/40" />
      <div className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-champagne/40" />

      <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover grayscale transition-transform duration-700 hover:scale-[1.02] motion-reduce:hover:scale-100"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {children}
      </div>
    </div>
  );
}
