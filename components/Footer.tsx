import Link from "next/link"
import { cn } from "@/lib/utils"

/** Props for the Footer component */
interface FooterProps {
  /** "full" = social links + copyright, "minimal" = copyright only */
  variant?: "full" | "minimal"
}

/**
 * Footer — Site-wide footer component.
 * Full variant includes social media links, minimal is just copyright.
 */
export default function Footer({ variant = "full" }: FooterProps) {
  const currentYear = new Date().getFullYear()

  if (variant === "minimal") {
    return (
      <footer
        className={cn(
          "border-t border-[var(--surface-4)]/30 bg-[var(--surface-1)]/95 px-4 py-6 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-[var(--text-muted)]">
            © {currentYear} HackatGIKI — Global AI Hackathon. All rights
            reserved.
          </p>
          <Link
            href="/impressum"
            className="text-xs text-accent-secondary underline underline-offset-4 transition-colors hover:text-accent-primary"
          >
            Impressum
          </Link>
        </div>
      </footer>
    )
  }

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-transparent px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Social Media Section */}
        <div className="mb-8 flex flex-col items-center gap-6">
          <p className="text-sm font-semibold text-[var(--text-secondary)]">
            Follow us on Social Media
          </p>

          <div className="flex items-center gap-8">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/hack-at-giki/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on LinkedIn"
              className="group flex flex-col items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/40 bg-blue-600/20 transition-all group-hover:scale-110 group-hover:border-blue-400/70 group-hover:bg-blue-600/30">
                <svg
                  className="h-5 w-5 text-blue-300 transition-colors group-hover:text-blue-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </div>
              <span className="text-xs text-[var(--text-muted)] transition-colors group-hover:text-blue-300">
                LinkedIn
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/hackatgiki?igsh=eW5nejZybGQzd3pn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="group flex flex-col items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-400/40 bg-gradient-to-br from-purple-600/20 to-pink-600/20 transition-all group-hover:scale-110 group-hover:border-purple-400/70 group-hover:from-purple-600/30 group-hover:to-pink-600/30">
                <svg
                  className="h-5 w-5 text-pink-300 transition-colors group-hover:text-pink-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <span className="text-xs text-[var(--text-muted)] transition-colors group-hover:text-pink-300">
                Instagram
              </span>
            </a>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-[var(--surface-4)]/40 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-[var(--text-muted)]">
              © {currentYear} HackatGIKI — Global AI Hackathon. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="text-xs text-[var(--text-secondary)] transition-colors hover:text-accent-primary"
              >
                Contact
              </Link>
              <Link
                href="/impressum"
                className="text-xs text-accent-secondary underline underline-offset-4 transition-colors hover:text-accent-primary"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
