import { forwardRef } from "react"
import { cn } from "@/lib/utils"

/** Props for the GlassCard component */
interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Enable hover elevation effect */
  hover?: boolean
  /** Override default padding */
  padding?: string
}

/**
 * GlassCard — Reusable glassmorphism card with Cosmic Neural styling.
 * Supports forwarded refs and optional hover elevation.
 */
const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ hover = false, padding, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass-card",
          padding ?? "p-6 sm:p-8",
          hover && "glass-card-hover cursor-default",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

GlassCard.displayName = "GlassCard"

export default GlassCard
