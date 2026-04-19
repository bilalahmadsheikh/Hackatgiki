import Image from "next/image"
import { cn } from "@/lib/utils"
import type { LogoItem } from "@/lib/logos"

/** Props for the LogoDisplay component */
interface LogoDisplayProps {
  /** Logo data from lib/logos.ts */
  logo: LogoItem
  /** Additional CSS classes */
  className?: string
  /** Apply grayscale filter (for marquee usage) */
  grayscale?: boolean
}

/**
 * LogoDisplay — Renders a single logo with optional link wrapping.
 * Automatically wraps in `<a>` if the logo has a URL, otherwise `<div>`.
 * Supports optional bgPill for logos that need a light container on dark backgrounds.
 */
export default function LogoDisplay({
  logo,
  className,
  grayscale = false,
}: LogoDisplayProps) {
  const imageElement = (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      className="max-h-full object-contain"
      style={{
        width: "auto",
        height: "auto",
      }}
    />
  )

  const content = logo.bgPill ? (
    <div className="inline-flex items-center rounded-md bg-white/90 px-4 py-2">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className="h-10 w-auto object-contain sm:h-14"
      />
    </div>
  ) : (
    imageElement
  )

  const sharedClasses = cn(
    "inline-flex items-center justify-center transition-all duration-300 hover:scale-105",
    grayscale && "opacity-60 grayscale hover:opacity-100 hover:grayscale-0",
    className
  )

  if (logo.url) {
    return (
      <a
        href={logo.url}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClasses}
        aria-label={`Visit ${logo.name}`}
      >
        {content}
      </a>
    )
  }

  return <div className={sharedClasses}>{content}</div>
}
