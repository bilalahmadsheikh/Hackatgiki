import { cn } from "@/lib/utils"

/** Props for the ParticleBackground component */
interface ParticleBackgroundProps {
  /** Controls orb intensity and count */
  variant?: "default" | "calm" | "energetic"
  /** Additional CSS classes */
  className?: string
}

interface Orb {
  x: number
  y: number
  size: number
  opacity: number
  blur: number
  color: string
}

const ORBS: Record<string, Orb[]> = {
  default: [
    { x: 15, y: 15, size: 350, opacity: 0.12, blur: 100, color: "bg-purple-600/30" },
    { x: 75, y: 35, size: 310, opacity: 0.10, blur: 90, color: "bg-blue-600/20" },
    { x: 25, y: 55, size: 380, opacity: 0.11, blur: 120, color: "bg-pink-600/20" },
    { x: 80, y: 75, size: 320, opacity: 0.09, blur: 95, color: "bg-indigo-600/25" },
    { x: 10, y: 90, size: 360, opacity: 0.12, blur: 110, color: "bg-purple-500/20" },
  ],
  calm: [
    { x: 20, y: 25, size: 400, opacity: 0.06, blur: 130, color: "bg-blue-600/15" },
    { x: 70, y: 50, size: 350, opacity: 0.05, blur: 120, color: "bg-indigo-600/15" },
    { x: 40, y: 80, size: 380, opacity: 0.06, blur: 140, color: "bg-purple-600/10" },
  ],
  energetic: [
    { x: 10, y: 10, size: 300, opacity: 0.18, blur: 80, color: "bg-purple-600/35" },
    { x: 80, y: 20, size: 280, opacity: 0.15, blur: 70, color: "bg-cyan-500/25" },
    { x: 20, y: 45, size: 350, opacity: 0.16, blur: 90, color: "bg-pink-600/30" },
    { x: 70, y: 60, size: 320, opacity: 0.14, blur: 85, color: "bg-blue-600/25" },
    { x: 50, y: 85, size: 340, opacity: 0.17, blur: 100, color: "bg-violet-600/30" },
    { x: 90, y: 90, size: 280, opacity: 0.12, blur: 75, color: "bg-indigo-500/20" },
  ],
}

/**
 * ParticleBackground — CSS-only gradient orb background.
 * Renders soft, blurred orbs behind page content for ambient depth.
 * Serves as fallback when WebGL (Three.js) is unavailable.
 */
export default function ParticleBackground({
  variant = "default",
  className,
}: ParticleBackgroundProps) {
  const orbs = ORBS[variant]

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={cn("absolute rounded-full", orb.color)}
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            opacity: orb.opacity,
            filter: `blur(${orb.blur}px)`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  )
}
