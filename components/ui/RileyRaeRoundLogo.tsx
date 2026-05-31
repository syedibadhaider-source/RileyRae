"use client";

import { useId } from "react";

interface RileyRaeRoundLogoProps {
  className?: string;
}

const defaultSize = "h-24 w-24 md:h-28 md:w-28";

/**
 * Circular Riley Rae mark — champagne tint, slow continuous rotation.
 */
export function RileyRaeRoundLogo({ className = defaultSize }: RileyRaeRoundLogoProps) {
  const filterId = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      role="img"
      aria-label="Riley Rae"
      className={`animate-riley-logo-spin shrink-0 ${className}`}
    >
      <defs>
        <filter id={filterId} x="-15%" y="-15%" width="130%" height="130%">
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.93
                    0 0 0 0 0.84
                    0 0 0 0 0.76
                    0 0 0 0.58 0"
          />
        </filter>
      </defs>
      <image
        href="/logos/riley-rae-round-logo.png"
        xlinkHref="/logos/riley-rae-round-logo.png"
        x="0"
        y="0"
        width="200"
        height="200"
        filter={`url(#${filterId})`}
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}
