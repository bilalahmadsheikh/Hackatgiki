import { forwardRef } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

/** Props for the AnimatedButton component */
interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant */
  variant?: "primary" | "outline"
  /** If provided, renders as a link instead of a button */
  href?: string
  /** Adds target="_blank" rel="noopener noreferrer" for external links */
  external?: boolean
}

/**
 * AnimatedButton — Button with sweep animation on hover.
 * Renders as `<a>` when `href` is provided, `<button>` otherwise.
 */
const AnimatedButton = forwardRef<
  HTMLButtonElement,
  AnimatedButtonProps
>(
  (
    {
      variant = "primary",
      href,
      external = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center gap-2 font-display font-semibold transition-all duration-300",
      "rounded-full px-6 py-3 text-sm",
      variant === "primary" && [
        "btn-primary",
      ],
      variant === "outline" && [
        "btn-outline",
      ],
      className
    )

    // Render as link
    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseClasses}
          >
            {children}
          </a>
        )
      }
      return (
        <Link href={href} className={baseClasses}>
          {children}
        </Link>
      )
    }

    // Render as button
    return (
      <button ref={ref} className={baseClasses} {...props}>
        {children}
      </button>
    )
  }
)

AnimatedButton.displayName = "AnimatedButton"

export default AnimatedButton
