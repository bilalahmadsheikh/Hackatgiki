"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

/** Navigation link definition */
interface NavLink {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

/** Props for the Navbar component */
interface NavbarProps {
  /** "default" = full nav, "simplified" = logo + back button only */
  variant?: "default" | "simplified"
  /** Override the default navigation links */
  navLinks?: NavLink[]
}

const DEFAULT_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Global AI Hackathon", href: "/global-ai-hackathon" },
  { label: "Venture Track", href: "/venture-track" },
  {
    label: "More",
    href: "#",
    children: [
      { label: "Learn More", href: "/learn-more" },
      { label: "Idea Challenge", href: "/idea-challenge" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
]

/**
 * Navbar — Fixed top navigation with glassmorphism.
 * Supports desktop (centered links) and mobile (hamburger slide-down) layouts.
 */
export default function Navbar({ variant = "default", navLinks }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const links = navLinks ?? DEFAULT_NAV_LINKS

  // Track scroll for enhanced background
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener("resize", handler)
    return () => window.removeEventListener("resize", handler)
  }, [])

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current)
    setDropdownOpen(label)
  }

  const handleDropdownLeave = () => {
    dropdownTimer.current = setTimeout(() => setDropdownOpen(null), 300)
  }

  // Simplified variant — logo + back button
  if (variant === "simplified") {
    return (
      <nav
        role="navigation"
        aria-label="Site navigation"
        className={cn(
          "fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-4 transition-all duration-300",
          "border-b backdrop-blur-2xl",
          scrolled
            ? "border-[var(--border-subtle)] bg-[var(--surface-0)]/90"
            : "border-transparent bg-[var(--surface-0)]/60"
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-3 transition-transform hover:scale-105"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--surface-1)]">
            <Image
              src="/logo-web.png"
              alt="HackatGIKI logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
          </div>
          <span className="font-display text-lg font-bold text-[var(--text-primary)]">
            HackatGIKI
          </span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full border border-[var(--border-subtle)] px-4 py-2 text-sm text-[var(--text-secondary)] transition-all hover:border-[var(--border-accent)] hover:text-[var(--text-primary)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </nav>
    )
  }

  return (
    <nav
      role="navigation"
      aria-label="Site navigation"
      className={cn(
        "fixed left-0 top-0 z-50 w-full transition-all duration-300",
        "border-b backdrop-blur-2xl",
        scrolled
          ? "border-[var(--border-subtle)] bg-[var(--surface-0)]/90 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
          : "border-transparent bg-[var(--surface-0)]/60"
      )}
    >
      <div className="flex w-full items-center justify-between px-6 py-4 sm:px-12 xl:px-24 xl:py-6">
        {/* Logo Group */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform hover:scale-105"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--surface-1)] transition-all group-hover:border-[var(--border-accent)] group-hover:bg-[var(--surface-2)] xl:h-14 xl:w-14">
            <Image
              src="/logo-web.png"
              alt="HackatGIKI logo"
              width={40}
              height={40}
              className="h-7 w-7 object-contain xl:h-10 xl:w-10"
            />
          </div>
          <span className="font-display text-lg font-bold text-[var(--text-primary)] transition-colors group-hover:text-accent-secondary xl:text-2xl">
            HackatGIKI
          </span>
        </Link>

        {/* Desktop Center Nav */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          {links.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(link.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-all hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)] xl:px-6 xl:text-base"
                  aria-expanded={dropdownOpen === link.label}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      dropdownOpen === link.label && "rotate-180"
                    )}
                  />
                </button>

                {/* Dropdown Panel */}
                <div
                  className={cn(
                    "absolute left-0 top-full mt-1 w-48 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-0)]/95 py-2 shadow-2xl backdrop-blur-xl transition-all duration-200",
                    dropdownOpen === link.label
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  )}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-all hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)] xl:px-6 xl:text-base"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/partnership"
            className="btn-primary hidden px-5 py-2.5 text-sm lg:inline-flex xl:px-8 xl:py-3.5 xl:text-base"
          >
            Partner with us
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--surface-0)]/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-1 px-4 py-4">
          {links.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)]"
                  onClick={() =>
                    setDropdownOpen(
                      dropdownOpen === link.label ? null : link.label
                    )
                  }
                  aria-expanded={dropdownOpen === link.label}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      dropdownOpen === link.label && "rotate-180"
                    )}
                  />
                </button>
                {dropdownOpen === link.label && (
                  <div className="ml-4 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-lg px-4 py-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}

          {/* CTA in mobile */}
          <Link
            href="/partnership"
            className="mt-2 block rounded-xl bg-[var(--text-primary)] px-4 py-3 text-center font-display text-sm font-bold text-[var(--surface-0)]"
            onClick={() => setMobileOpen(false)}
          >
            Partner with us
          </Link>
        </div>
      </div>
    </nav>
  )
}
