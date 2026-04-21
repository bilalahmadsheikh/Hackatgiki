"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

/** A single sponsor/partner logo */
interface SponsorLogo {
  src: string
  alt: string
  width?: number
}

/** Props for the SponsorMarquee component */
interface SponsorMarqueeProps {
  /** Array of logo images to scroll */
  images: SponsorLogo[]
  /** Scroll speed — maps to CSS animation duration */
  speed?: "slow" | "normal" | "fast"
  /** Compact mode for inline use (smaller height) */
  compact?: boolean
  /** Additional wrapper class */
  className?: string
}

const SPEED_MAP = { slow: 60, normal: 40, fast: 20 }

/**
 * SponsorMarquee — Infinite horizontal scrolling logo strip.
 * Pauses on hover. Logos are greyscale by default, color on hover.
 */
export default function SponsorMarquee({
  images,
  speed = "normal",
  compact = false,
  className,
}: SponsorMarqueeProps) {
  const [paused, setPaused] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  if (!images.length) return null

  const duration = SPEED_MAP[speed]

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        compact ? "py-4" : "py-8",
        className
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Partner and sponsor logos"
      role="marquee"
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#171a28] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#171a28] to-transparent" />

      {/* Scrolling track — content is duplicated for seamless loop */}
      <div
        ref={trackRef}
        className="flex w-max items-center"
        style={{
          animation: `scroll-left ${duration}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {/* First copy */}
        {images.map((img, i) => (
          <div
            key={`a-${i}`}
            className={cn(
              "flex shrink-0 items-center justify-center",
              compact ? "mx-6 h-8" : "mx-8 h-12 xl:mx-16 xl:h-20"
            )}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width ?? 220}
              height={80}
              unoptimized
              className={cn(
                "h-full max-h-full w-auto object-contain transition-all duration-300",
                "opacity-70 hover:opacity-100 xl:scale-125"
              )}
            />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {images.map((img, i) => (
          <div
            key={`b-${i}`}
            className={cn(
              "flex shrink-0 items-center justify-center",
              compact ? "mx-6 h-8" : "mx-8 h-12 xl:mx-16 xl:h-20"
            )}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width ?? 220}
              height={80}
              unoptimized
              className={cn(
                "h-full max-h-full w-auto object-contain transition-all duration-300",
                "opacity-70 hover:opacity-100 xl:scale-125"
              )}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
