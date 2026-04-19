---
name: Brand Assets & Partner Logos Implementation Prompt
description: Complete implementation guide for logo placement, sizing, tiering, section layouts, marquee config, and brand-compliant rendering across the HackatGIKI website.
---

# Brand Assets & Partner Logos — Full Implementation Prompt

---

## 1. Asset Directory Setup

Copy all logos from `assets/` into `public/logos/` with clean naming:

```
public/logos/
├── event/
│   ├── hackatgiki.png          ← from assets/hackatgiki.png
│   └── giki.png                ← from assets/giki.png
├── collaboration/
│   ├── hacknation.png          ← from assets/hacknation.png
│   └── mit.png                 ← from assets/mit.png (compact version)
├── sponsors/
│   ├── devsinc.png             ← from assets/Devsinc1.png (primary variant)
│   └── stewart.png             ← from assets/stewart.png
├── outreach/
│   ├── pasha.png               ← from assets/P@SHA main.png
│   ├── supabase.png            ← from assets/supabase.png
│   └── incubation.png          ← from assets/Incubation.png
└── partners/
    ├── databricks.png          ← download from hack-nation.ai
    ├── dsv.png                 ← download from hack-nation.ai
    ├── spiral.png              ← download from hack-nation.ai
    ├── fulcrum.png             ← download from hack-nation.ai
    ├── worldbank.png           ← download from hack-nation.ai
    ├── openai.png              ← download from hack-nation.ai
    ├── lovable.png             ← download from hack-nation.ai
    └── hrt.png                 ← download from hack-nation.ai
```

---

## 2. Logo Data Configuration

Create `lib/logos.ts` — single source of truth for all logo data:

```ts
export interface LogoItem {
  name: string
  src: string
  alt: string
  tier: "event" | "collaboration" | "sponsor" | "outreach" | "partner"
  width: number   // display width (px)
  height: number  // display height (px)
  url?: string    // optional link to org website
  bgPill?: boolean  // true if logo needs white/light backing on dark bg
}

export const EVENT_LOGO: LogoItem = {
  name: "HackatGIKI",
  src: "/logos/event/hackatgiki.png",
  alt: "HackatGIKI - Event Logo",
  tier: "event",
  width: 200,
  height: 200,
}

export const ORGANIZER_LOGO: LogoItem = {
  name: "GIKI",
  src: "/logos/event/giki.png",
  alt: "GIKI - Ghulam Ishaq Khan Institute",
  tier: "event",
  width: 80,
  height: 80,
  url: "https://giki.edu.pk",
}

export const COLLABORATION_LOGOS: LogoItem[] = [
  {
    name: "Hack-Nation",
    src: "/logos/collaboration/hacknation.png",
    alt: "Hack-Nation - In Collaboration",
    tier: "collaboration",
    width: 140,
    height: 48,
    url: "https://hack-nation.ai",
  },
  {
    name: "MIT",
    src: "/logos/collaboration/mit.png",
    alt: "MIT Sloan AI Club - In Collaboration",
    tier: "collaboration",
    width: 60,
    height: 48,
    url: "https://mitsloan.mit.edu",
    bgPill: true,  // MIT logo may be dark, needs white pill
  },
]

export const SPONSOR_LOGOS: LogoItem[] = [
  {
    name: "Devsinc",
    src: "/logos/sponsors/devsinc.png",
    alt: "Devsinc - Primary Sponsor",
    tier: "sponsor",
    width: 160,
    height: 56,
    url: "https://devsinc.com",
  },
  {
    name: "Stewart",
    src: "/logos/sponsors/stewart.png",
    alt: "Stewart - Primary Sponsor",
    tier: "sponsor",
    width: 140,
    height: 56,
    url: "#",
  },
]

export const OUTREACH_LOGOS: LogoItem[] = [
  {
    name: "P@SHA",
    src: "/logos/outreach/pasha.png",
    alt: "P@SHA - Pakistan Software Houses Association - Outreach Partner",
    tier: "outreach",
    width: 130,
    height: 48,
    url: "https://pasha.org.pk",
  },
  {
    name: "Supabase",
    src: "/logos/outreach/supabase.png",
    alt: "Supabase - Outreach Partner",
    tier: "outreach",
    width: 140,
    height: 40,
    url: "https://supabase.com",
  },
  {
    name: "Incubation Center",
    src: "/logos/outreach/incubation.png",
    alt: "GIKI Incubation Center - Outreach Partner",
    tier: "outreach",
    width: 120,
    height: 48,
  },
]

export const HACKATHON_PARTNER_LOGOS: LogoItem[] = [
  {
    name: "Databricks",
    src: "/logos/partners/databricks.png",
    alt: "Databricks - Hackathon Partner",
    tier: "partner",
    width: 140,
    height: 48,
    url: "https://databricks.com",
  },
  {
    name: "DSV Gruppe",
    src: "/logos/partners/dsv.png",
    alt: "DSV Gruppe - Hackathon Partner",
    tier: "partner",
    width: 120,
    height: 48,
  },
  {
    name: "Spiral",
    src: "/logos/partners/spiral.png",
    alt: "Spiral - Hackathon Partner",
    tier: "partner",
    width: 100,
    height: 40,
  },
  {
    name: "Fulcrum Science",
    src: "/logos/partners/fulcrum.png",
    alt: "Fulcrum Science - Hackathon Partner",
    tier: "partner",
    width: 130,
    height: 44,
  },
  {
    name: "World Bank",
    src: "/logos/partners/worldbank.png",
    alt: "World Bank - Hackathon Partner",
    tier: "partner",
    width: 120,
    height: 48,
    url: "https://worldbank.org",
  },
  {
    name: "OpenAI",
    src: "/logos/partners/openai.png",
    alt: "OpenAI - Hackathon Partner",
    tier: "partner",
    width: 110,
    height: 40,
    url: "https://openai.com",
  },
  {
    name: "Lovable",
    src: "/logos/partners/lovable.png",
    alt: "Lovable - Hackathon Partner",
    tier: "partner",
    width: 120,
    height: 40,
    url: "https://lovable.dev",
  },
  {
    name: "Hudson River Trading",
    src: "/logos/partners/hrt.png",
    alt: "Hudson River Trading - Hackathon Partner",
    tier: "partner",
    width: 100,
    height: 44,
    url: "https://hudsonrivertrading.com",
  },
]

// All logos combined for marquee (flat list)
export const ALL_MARQUEE_LOGOS: LogoItem[] = [
  ...SPONSOR_LOGOS,
  ...OUTREACH_LOGOS,
  ...HACKATHON_PARTNER_LOGOS,
]
```

---

## 3. Logo Display Component

### `components/LogoDisplay.tsx`
Reusable component to render a single logo with optional white pill backing:

```tsx
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { LogoItem } from "@/lib/logos"

interface LogoDisplayProps {
  logo: LogoItem
  className?: string
  grayscale?: boolean  // for marquee: grayscale until hover
}

export function LogoDisplay({ logo, className, grayscale = false }: LogoDisplayProps) {
  const Wrapper = logo.url ? "a" : "div"
  const wrapperProps = logo.url
    ? { href: logo.url, target: "_blank" as const, rel: "noopener noreferrer" }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "inline-flex items-center justify-center transition-all duration-300",
        grayscale && "grayscale opacity-60 hover:grayscale-0 hover:opacity-100",
        className
      )}
    >
      {logo.bgPill && (
        <div className="bg-white/90 rounded-lg px-3 py-2 shadow-sm">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="object-contain"
          />
        </div>
      )}
      {!logo.bgPill && (
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="object-contain"
        />
      )}
    </Wrapper>
  )
}
```

---

## 4. Partner Sections Layout

### Section A: Hero Identity Banner (Top of Homepage)

Displayed in the hero section or just below it. Shows the core identity:

```
Layout:
┌─────────────────────────────────────────────────┐
│                 [HackatGIKI Logo]                │  ← Tier 0 (200px wide)
│                                                 │
│              in collaboration with              │  ← text-sm, text-muted
│                                                 │
│         [Hack-Nation]    [MIT]   [GIKI]          │  ← Tier 1 (flex row, gap-8)
└─────────────────────────────────────────────────┘
```

Style:
```tsx
<div className="flex flex-col items-center gap-6 py-8">
  {/* Event Logo */}
  <LogoDisplay logo={EVENT_LOGO} className="w-[160px] sm:w-[200px]" />

  {/* Collaboration text */}
  <p className="text-sm tracking-[0.2em] uppercase" style={{ color: "var(--text-muted)" }}>
    in collaboration with
  </p>

  {/* Collaboration logos row */}
  <div className="flex items-center gap-6 sm:gap-10 flex-wrap justify-center">
    {COLLABORATION_LOGOS.map((logo) => (
      <LogoDisplay key={logo.name} logo={logo} />
    ))}
    <LogoDisplay logo={ORGANIZER_LOGO} />
  </div>
</div>
```

---

### Section B: Sponsors & Outreach Partners (Below hero or in dedicated section)

```
Layout:
┌─────────────────────────────────────────────────┐
│         ✦ SPONSORED BY                          │
│                                                 │
│         [Devsinc Logo]    [Stewart Logo]         │  ← Tier 2 (h-14, flex row)
│                                                 │
│  ─────────── divider ───────────                │
│                                                 │
│         ✦ OUTREACH PARTNERS                     │
│                                                 │
│     [P@SHA]    [Supabase]    [Incubation]       │  ← Tier 3 (h-12, flex row)
└─────────────────────────────────────────────────┘
```

Style:
```tsx
<section className="py-16 px-4">
  <div className="max-w-4xl mx-auto">
    {/* Sponsors */}
    <div className="text-center mb-12">
      <span
        className="text-xs font-semibold tracking-[0.3em] uppercase mb-6 block"
        style={{ color: "var(--accent-primary)" }}
      >
        Sponsored By
      </span>
      <div className="flex items-center justify-center gap-10 sm:gap-16 flex-wrap">
        {SPONSOR_LOGOS.map((logo) => (
          <LogoDisplay key={logo.name} logo={logo} className="h-14 w-auto" />
        ))}
      </div>
    </div>

    {/* Divider */}
    <div className="border-t my-10" style={{ borderColor: "var(--border-subtle)" }} />

    {/* Outreach Partners */}
    <div className="text-center">
      <span
        className="text-xs font-semibold tracking-[0.3em] uppercase mb-6 block"
        style={{ color: "var(--accent-secondary)" }}
      >
        Outreach Partners
      </span>
      <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
        {OUTREACH_LOGOS.map((logo) => (
          <LogoDisplay key={logo.name} logo={logo} className="h-12 w-auto" />
        ))}
      </div>
    </div>
  </div>
</section>
```

---

### Section C: Hackathon Partners Marquee (Scrolling Strip)

The hackathon partner logos scroll horizontally in an infinite loop, similar to the Hack-Nation website.

```
Layout:
┌─────────────────────────────────────────────────┐
│         ✦ HACKATHON PARTNERS                    │
│                                                 │
│  ←←← [Databricks] [DSV] [Spiral] [Fulcrum]     │
│       [World Bank] [OpenAI] [Lovable] [HRT] ←←← │  ← Infinite scroll
└─────────────────────────────────────────────────┘
```

```tsx
<section className="py-12 overflow-hidden">
  <p
    className="text-xs font-semibold tracking-[0.3em] uppercase text-center mb-8"
    style={{ color: "var(--text-muted)" }}
  >
    Hackathon Partners
  </p>
  <SponsorMarquee
    images={HACKATHON_PARTNER_LOGOS.map((l) => ({ src: l.src, alt: l.alt }))}
    speed="normal"
  />
</section>
```

Marquee logos are rendered in `grayscale(100%)` by default, full color on hover. Each logo has equal height (`h-10 sm:h-12`) within the strip with consistent horizontal spacing.

---

## 5. Logo Sizing Reference by Tier

| Tier | Height (mobile) | Height (desktop) | Max Width | Grayscale? |
|------|-----------------|------------------|-----------|------------|
| 0 — Event | 120px | 200px | 200px | No |
| 1 — Collaboration | 36px | 48px | 140px | No |
| 2 — Sponsors | 44px | 56px | 160px | No |
| 3 — Outreach | 36px | 48px | 140px | No |
| 4 — Partners (marquee) | 32px | 44px | 140px | Yes → full on hover |

---

## 6. Brand Color Reference (for accents/containers)

| Organization | Hex | Usage |
|-------------|-----|-------|
| P@SHA | `#E21B24` | Accent border on P@SHA logo container if needed |
| Devsinc | Prussian Blue (dark navy) | Logo is self-colored; no extra accent needed |
| Supabase | `#3ECF8E` | Logo is green; renders well on dark bg as-is |
| MIT | `#A31F34` (MIT Red) | If using white pill, border can be MIT Red |
| Hack-Nation | Purple gradient | Matches site theme naturally |

---

## 7. Dark Background Logo Handling

Some logos are designed for light backgrounds. On the dark `--surface-0` background:

| Logo | Approach |
|------|----------|
| MIT (compact) | Place on a subtle white pill: `bg-white/90 rounded-lg px-3 py-2` |
| Devsinc1 | Inspect contrast — if dark text, apply white pill |
| Stewart | Inspect contrast — if dark text, apply white pill |
| All others | Should render fine on dark bg (white/colored logos) |

The `LogoDisplay` component's `bgPill` prop handles this automatically.

---

## 8. Page Placement Summary

| Page | Sections Shown |
|------|---------------|
| **Homepage** | Section A (Hero Identity) + Section B (Sponsors + Outreach) + Section C (Partners Marquee) |
| **Global AI Hackathon** | Section C (Partners Marquee) + Section B (Sponsors + Outreach) in compact form |
| **Partnership** | Section B (Sponsors + Outreach) as "Current Partners" showcase |
| **Venture Track** | Section C (Partners Marquee) in compact mode |
| **Impressum** | None (legal page, no partner branding) |
| **Idea Challenge** | None (tool page, no partner branding) |
| **404** | None |

---

## 9. CMS Integration

When CMS is active, these logos should be manageable through Sanity:
- `siteSettings.partnerLogos` → Replaces `HACKATHON_PARTNER_LOGOS`
- `siteSettings.sponsorLogos` → Replaces `SPONSOR_LOGOS`
- `siteSettings.outreachLogos` → Replaces `OUTREACH_LOGOS`

Until CMS is connected, the hardcoded `lib/logos.ts` data provides the initial content.

---

## 10. Implementation Checklist

- [ ] Copy all logos from `assets/` to `public/logos/` with the directory structure above
- [ ] Download hackathon partner logos from hack-nation.ai into `public/logos/partners/`
- [ ] Create `lib/logos.ts` with all logo data arrays
- [ ] Create `LogoDisplay` component with `bgPill` support
- [ ] Build Section A, B, C on the Homepage
- [ ] Test all logos render correctly at each breakpoint (375px, 768px, 1024px, 1440px)
- [ ] Verify MIT logo white pill contrasts properly
- [ ] Verify Devsinc1 logo visibility on dark bg
- [ ] Verify P@SHA logo colors are not altered
- [ ] Connect to CMS `siteSettings` when CMS agent completes integration
