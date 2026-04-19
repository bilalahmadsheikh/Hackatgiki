/** Logo data item — single source of truth for all brand assets */
export interface LogoItem {
  name: string
  src: string
  alt: string
  tier: "event" | "collaboration" | "sponsor" | "outreach" | "partner"
  width: number
  height: number
  url?: string
  /** If true, logo needs a white pill/container on dark backgrounds */
  bgPill?: boolean
}

// ─── Tier 0: Event Identity ────────────────────────────────────────

export const EVENT_LOGO: LogoItem = {
  name: "HackatGIKI",
  src: "/logos/event/hackatgiki.png",
  alt: "HackatGIKI - Event Logo",
  tier: "event",
  width: 240,
  height: 240,
}

export const ORGANIZER_LOGO: LogoItem = {
  name: "GIKI",
  src: "/logos/event/giki.png",
  alt: "GIKI - Ghulam Ishaq Khan Institute",
  tier: "event",
  width: 120,
  height: 120,
  url: "https://giki.edu.pk",
}

// ─── Tier 1: Collaboration ─────────────────────────────────────────

export const COLLABORATION_LOGOS: LogoItem[] = [
  {
    name: "Hack-Nation",
    src: "/logos/collaboration/hacknation.png",
    alt: "Hack-Nation - In Collaboration",
    tier: "collaboration",
    width: 280,
    height: 90,
    url: "https://hack-nation.ai",
  },
  {
    name: "MIT Sloan AI Club",
    src: "/logos/collaboration/mit.png",
    alt: "MIT Sloan AI Club - In Collaboration",
    tier: "collaboration",
    width: 220,
    height: 80,
    url: "https://mitsloan.mit.edu",
  },
]

// ─── Tier 2: Primary Sponsors ──────────────────────────────────────

export const SPONSOR_LOGOS: LogoItem[] = [
  {
    name: "Devsinc",
    src: "/logos/sponsors/devsinc.png",
    alt: "Devsinc - Primary Sponsor",
    tier: "sponsor",
    width: 400,
    height: 190,
    url: "https://devsinc.com",
  },
  {
    name: "Stewart",
    src: "/logos/sponsors/stewart.png",
    alt: "Stewart - Primary Sponsor",
    tier: "sponsor",
    width: 220,
    height: 80,
  },
]

// ─── Tier 3: Outreach Partners ─────────────────────────────────────

export const OUTREACH_LOGOS: LogoItem[] = [
  {
    name: "P@SHA",
    src: "/logos/outreach/pasha1.png",
    alt: "P@SHA - Pakistan Software Houses Association - Outreach Partner",
    tier: "outreach",
    width: 180,
    height: 60,
    url: "https://pasha.org.pk",
  },
  {
    name: "Supabase",
    src: "/logos/outreach/supabase.png",
    alt: "Supabase - Outreach Partner",
    tier: "outreach",
    width: 180,
    height: 60,
    url: "https://supabase.com",
    bgPill: true,
  },
  {
    name: "Incubation Center",
    src: "/logos/outreach/incubation.png",
    alt: "GIKI Incubation Center - Outreach Partner",
    tier: "outreach",
    width: 180,
    height: 60,
    bgPill: true,
  },
]

// ─── Tier 4: Hackathon Partners (Marquee) ──────────────────────────

export const HACKATHON_PARTNER_LOGOS: LogoItem[] = [
  {
    name: "Databricks",
    src: "/logos/partners/databricks.svg",
    alt: "Databricks - Hackathon Partner",
    tier: "partner",
    width: 140,
    height: 48,
    url: "https://databricks.com",
  },
  {
    name: "DSV Gruppe",
    src: "/logos/partners/dsv.svg",
    alt: "DSV Gruppe - Hackathon Partner",
    tier: "partner",
    width: 120,
    height: 48,
  },
  {
    name: "Spiral",
    src: "/logos/partners/spiral.svg",
    alt: "Spiral - Hackathon Partner",
    tier: "partner",
    width: 100,
    height: 40,
  },
  {
    name: "Fulcrum Science",
    src: "/logos/partners/fulcrum.svg",
    alt: "Fulcrum Science - Hackathon Partner",
    tier: "partner",
    width: 130,
    height: 44,
  },
  {
    name: "World Bank",
    src: "/logos/partners/worldbank.svg",
    alt: "World Bank - Hackathon Partner",
    tier: "partner",
    width: 120,
    height: 48,
    url: "https://worldbank.org",
  },
  {
    name: "OpenAI",
    src: "/logos/partners/openai.svg",
    alt: "OpenAI - Hackathon Partner",
    tier: "partner",
    width: 110,
    height: 40,
    url: "https://openai.com",
  },
  {
    name: "Lovable",
    src: "/logos/partners/lovable.svg",
    alt: "Lovable - Hackathon Partner",
    tier: "partner",
    width: 120,
    height: 40,
    url: "https://lovable.dev",
  },
  {
    name: "Hudson River Trading",
    src: "/logos/partners/hrt.svg",
    alt: "Hudson River Trading - Hackathon Partner",
    tier: "partner",
    width: 100,
    height: 44,
    url: "https://hudsonrivertrading.com",
  },
]

// ─── Combined Exports ──────────────────────────────────────────────

/** All logos combined for marquee (sponsors + outreach + partners) */
export const ALL_MARQUEE_LOGOS: LogoItem[] = [
  ...SPONSOR_LOGOS,
  ...OUTREACH_LOGOS,
  ...HACKATHON_PARTNER_LOGOS,
]
