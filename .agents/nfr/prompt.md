---
name: Non-Functional Requirements Implementation Prompt
description: Detailed implementation instructions for all NFR improvements — SEO files, accessibility fixes, performance configs, responsive guards, and animation systems.
---

# Non-Functional Requirements — Full Implementation Prompt

This prompt covers everything a quality-focused agent needs to implement and verify across the entire Hack-Nation website.

---

## 1. SEO Implementation

### 1.1 Per-Page Metadata
Each page must export metadata via Next.js `generateMetadata` or static `metadata` object:

| Route | Title | Description |
|-------|-------|-------------|
| `/` | `"Hack-Nation \| Global AI Hackathon"` | `"The world's premier AI innovation challenge. Build groundbreaking solutions, compete globally, and shape the future of artificial intelligence."` |
| `/partnership` | `"Partner with Hack-Nation \| Corporate & VC Partnerships"` | `"Join us in shaping the future of AI innovation through strategic partnerships."` |
| `/impressum` | `"Impressum \| Hack-Nation"` | `"Legal imprint information for Hack-Nation UG according to § 5 TMG."` |
| `/global-ai-hackathon` | `"Global AI Hackathon \| Apr 25-26, 2026 \| Hack-Nation"` | `"Join the 5th Global AI Hackathon. 24-hour sprint, $30k+ in prizes, expert mentorship."` |
| `/venture-track` | `"Venture Track \| From Prototype to Startup \| Hack-Nation"` | `"Selected teams join a 3-month incubation program with mentorship and investor access."` |
| `/idea-challenge` | `"Idea Challenge \| AI Idea Validation \| Hack-Nation"` | `"Validate your business idea with our AI-powered analysis tool."` |

### 1.2 Structured Data (JSON-LD)
Add to the Global AI Hackathon page (`app/global-ai-hackathon/page.tsx`):

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "5th Global AI Hackathon",
  "description": "The world's premier AI innovation challenge.",
  "startDate": "2026-04-25T11:15:00-04:00",
  "endDate": "2026-04-26T16:00:00-04:00",
  "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "organizer": {
    "@type": "Organization",
    "name": "Hack-Nation",
    "url": "https://hack-nation.ai"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://docs.google.com/forms/d/e/1FAIpQLSeRvf4ISeN6IBA8GTt_SABqnUEiTxTfFPSM8Dj5qOUxxBbLxw/viewform"
  },
  "location": [
    {
      "@type": "Place",
      "name": "Global Hubs",
      "address": "Multiple Locations Worldwide"
    },
    {
      "@type": "VirtualLocation",
      "url": "https://hack-nation.ai/global-ai-hackathon"
    }
  ]
}
```

Inject via `<script type="application/ld+json">` in the page's `<head>` using Next.js metadata.

### 1.3 Sitemap
Create `app/sitemap.ts`:

```ts
import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hack-nation.ai"
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/partnership`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/global-ai-hackathon`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/venture-track`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/idea-challenge`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ]
}
```

### 1.4 Robots.txt
Create `app/robots.ts`:

```ts
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://hack-nation.ai/sitemap.xml",
  }
}
```

---

## 2. Performance Implementation

### 2.1 Image Optimization
Replace ALL `<img>` tags with `next/image`:

```tsx
import Image from "next/image"

// Instead of:
<img src="/logo-web.png" alt="Logo" className="w-8 h-8" />

// Use:
<Image src="/logo-web.png" alt="Hack-Nation Logo" width={32} height={32} />
```

For partner logos in the marquee, use `next/image` with `sizes` prop for responsive loading.

### 2.2 Video Optimization
```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"  // NOT "auto" — saves bandwidth
  poster="/videos/hackathon-poster.webp"  // static poster frame
  className="absolute inset-0 w-full h-full object-cover opacity-30"
  style={{ willChange: "auto" }}  // remove willChange after initial paint
>
  <source src="/videos/hackathon-background.mp4" type="video/mp4" />
</video>
```

### 2.3 Font Optimization
Already handled by `next/font` in root layout — fonts are self-hosted, preloaded, and subset.

### 2.4 Component Splitting
- Server components: ParticleBackground, GlassCard, Footer (minimal variant)
- Client components (must have `"use client"`): Navbar, SponsorMarquee, Idea Challenge page
- Dynamically import heavy sections:
```tsx
import dynamic from "next/dynamic"
const SponsorMarquee = dynamic(() => import("@/components/SponsorMarquee"), {
  loading: () => <div className="h-40 animate-pulse bg-white/5 rounded-3xl" />,
})
```

---

## 3. Accessibility Implementation

### 3.1 Skip-to-Content Link
Add to `app/layout.tsx`, as the first child of `<body>`:

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-purple-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
>
  Skip to main content
</a>
```

Each page wraps its content in `<main id="main-content">`.

### 3.2 Navbar Accessibility
```tsx
<nav aria-label="Main navigation" role="navigation">
  <button
    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    aria-expanded={isMenuOpen}
    aria-controls="mobile-menu"
  >
    {isMenuOpen ? <X /> : <Menu />}
  </button>
  <div id="mobile-menu" role="menu" aria-hidden={!isMenuOpen}>
    {/* menu items with role="menuitem" */}
  </div>
</nav>
```

### 3.3 Icon Buttons
All icon-only buttons must have `aria-label`:

```tsx
<button aria-label="Close image" className="...">
  <X className="w-6 h-6" />
</button>
```

### 3.4 Form Accessibility
In Idea Challenge:
```tsx
<label htmlFor="idea-title">Idea Title *</label>
<input id="idea-title" aria-required="true" ... />
```

### 3.5 Focus Indicators
Global CSS:
```css
*:focus-visible {
  outline: 2px solid var(--accent-purple);
  outline-offset: 2px;
  border-radius: 4px;
}
```

---

## 4. Responsive Design Guards

### 4.1 No-Overflow Guard
```css
html, body {
  overflow-x: hidden;
}
```

### 4.2 Touch Target Sizes
Minimum touch target: `min-h-[44px] min-w-[44px]`
Apply to all buttons, links, and interactive elements on mobile.

### 4.3 Container Widths
```
max-w-6xl   → main content containers (most sections)
max-w-7xl   → full-width sections (hero, hackathon)
max-w-4xl   → narrow containers (Impressum, contact form, timeline)
```

### 4.4 Text Scaling
```
Headings:   text-2xl (xs) → text-3xl (sm) → text-4xl (md) → text-5xl (lg)
Body:       text-sm (xs) → text-base (sm) → text-lg (md)
Captions:   text-xs → text-sm
Minimum:    Never below text-sm (14px) on any screen
```

---

## 5. Animation System

### 5.1 Scroll-Triggered Reveals
Create a reusable hook/component:

```tsx
// components/RevealOnScroll.tsx
"use client"
import { useEffect, useRef, useState } from "react"

interface RevealOnScrollProps {
  children: React.ReactNode
  delay?: number // ms
  className?: string
}

export function RevealOnScroll({ children, delay = 0, className }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className || ""}`}
    >
      {children}
    </div>
  )
}
```

Usage:
```tsx
<RevealOnScroll delay={100}>
  <GlassCard>...</GlassCard>
</RevealOnScroll>
```

### 5.2 Staggered Card Reveals
For card grids, use increasing delays:
```tsx
{cards.map((card, i) => (
  <RevealOnScroll key={i} delay={i * 100}>
    <GlassCard>{card.content}</GlassCard>
  </RevealOnScroll>
))}
```

---

## 6. Security Checklist

- [ ] All `<a target="_blank">` have `rel="noopener noreferrer"`
- [ ] No API keys in client-side code
- [ ] No inline scripts
- [ ] `mailto:` links properly URL-encode the subject/body
- [ ] Google Form URLs verified and correct
- [ ] External CDN URLs use HTTPS

---

## 7. Final Lighthouse Target Scores

| Category | Target | Acceptable |
|----------|--------|------------|
| Performance | ≥ 90 | ≥ 85 |
| Accessibility | ≥ 95 | ≥ 90 |
| Best Practices | ≥ 90 | ≥ 85 |
| SEO | 100 | ≥ 95 |

Run on:
- Homepage (/)
- Global AI Hackathon (/global-ai-hackathon)
- Partnership (/partnership)

Both mobile and desktop viewports.
