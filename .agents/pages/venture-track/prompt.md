---
name: Venture Track Implementation Prompt
description: Complete content, program details, and design specs for the Venture Track incubation page.
---

# Venture Track — Full Implementation Prompt

## Page Metadata
```ts
title: "Venture Track | From Prototype to Startup | Hack-Nation"
description: "Selected teams from our hackathon join a 3-month incubation program with mentorship, workshops, and investor access. Transform your AI prototype into a funded venture."
```

---

## Section 1: Hero (min-h-[85vh])

### Layout
- NeuralMeshBg background, creating volumetric 3D foreground starfield.
- Left-aligned content block. Layout is `w-full px-4 sm:px-8 xl:px-24`, avoiding max-width cards.

### Content
- **Eyebrow**: `"Beyond the Hackathon"` (text-slate-400)
- **Heading**:
  ```
  Venture
  Track
  ```
  "Track" in `text-purple-400 electric-text-glow`.
- **Badges**:
  - 🚀 `"Incubation Program"` (Rocket icon)
  - 🎯 `"Selected Teams Only"` (Target icon)
- **Body**: `"The hackathon is just the start of what we offer. Selected teams from our hackathon events get the exclusive opportunity to join our incubation track and transform their innovative AI ideas into scalable businesses."`
- No CTA button in hero (CTAs come later in the page).

---

## Section 2: From Prototype to Venture

### Layout
- Purple divider + centered heading.
- Heading: `"From Prototype to Venture"`

### Overview Section (full-width glass panel)
- `bg-slate-900/50 backdrop-blur-sm rounded-2xl shadow-2xl`
- Sub-heading: `"The Post-Hackathon Journey"`
- Body: `"Our program starts where the hackathon ends. We provide the long-term framework, resources, and support system needed to transform your weekend prototype into a thriving, investment-ready business venture."`
- **Stats row** (2-column grid, centered):
  - `3` — "Months Program"
  - `15` — "Selected Teams"
  Each stat: large purple number (text-3xl font-bold text-purple-400) + label below.

### 3-Pillar Cards (below overview, 3-column grid)

**Card 1: Selection**
- Icon: Checkmark circle (SVG)
- Title: `"Selection"`
- Body: `"Top 15 teams from our hackathon are selected based on technical execution and venture potential"`

**Card 2: Acceleration**
- Icon: Lightning bolt (SVG)
- Title: `"Acceleration"`
- Body: `"3-month intensive program with mentorship, workshops, and resources to build market-ready products"`

**Card 3: Investment**
- Icon: Dollar circle (SVG)
- Title: `"Investment"`
- Body: `"Direct access to angel investors and VCs at our exclusive Demo and Investor Day events"`

Card style: `bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300`

---

## Section 3: Why Choose Venture Track?

### Layout
- Purple divider + centered heading.
- Heading: `"Why Choose Venture Track?"`
- Subheading: `"Comprehensive support system designed to maximize your startup's potential for success."`
- 3-column grid (responsive).

### Cards (5 total, last row centered)

1. **Two MBA coaches per team** (GraduationCap icon)
   - `"Supporting top technical founders on strategy, go-to-market, and company building."`

2. **Dedicated senior mentor** (UserCheck icon)
   - `"Each team is matched with an experienced operator (founder or Big Tech) for weekly guidance."`

3. **Compute & tooling credits** (Cpu icon)
   - `"Free API credits and premium tools provided in collaboration with our partners."`

4. **Founder-led workshops & online-tool** (Presentation icon)
   - `"Hands-on sessions with top-tier founders and on-demand learning platform."`

5. **Demo & Investor Day** (PiggyBank icon)
   - `"Curated exposure to investors to support pre-seed fundraising."`

Card style: `glass-card rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500`
Icon container: `w-10 h-10 sm:w-12 sm:h-12 bg-purple-600/30 rounded-lg flex items-center justify-center mb-6`

---

## Section 4: EWOR Partnership

### Layout
- Purple divider + centered heading.
- Heading: `"EWOR Partnership"`
- Subheading: `"To best support you in advancing your venture, we collaborate with EWOR."`

### EWOR Section
- Full-width edge-to-edge `glass-panel` container spanning the entire browser width.
- EWOR logo displayed on a white pill: `bg-white/90 px-6 py-3 rounded-xl shadow-lg`
  - Logo URL: `https://cdn.prod.website-files.com/6621450113fa0186b23a5e6f/664e10aecdef7825d045a0dc_EWOR%20Horizontal%20Dark.svg`
  - Size: `h-8 xs:h-10 sm:h-16 w-auto`
- Description: `"EWOR is a radically selective fellowship backing the world's top 0.1% of founders"` (text-purple-100, centered)

---

## Section 5: Join Our Program

### Layout
- Purple divider + centered heading.
- Heading: `"Join Our Program"`
- Subheading: `"Support the next generation of AI-first startups"`
- 2-column grid (stacked on mobile), max-w-4xl.

### Card 1: Mentor Application
- Clickable entire card → `https://forms.gle/Wrwg23MBDKbVfXrM8` (new tab)
- Icon: UserCheck (centered, purple)
- Title: `"Want to be a mentor?"` (text-xl, centered)
- Body: `"Support technical teams with your founding and scaling experience. Commit 2–4 hours per week."` (centered)
- CTA: `"Apply as Mentor"` — white rounded-full button, centered.

### Card 2: MBA Coach Application
- Clickable entire card → `https://docs.google.com/forms/d/e/1FAIpQLSfULE-H3gZHTDknP3B4gppMzzELINZvOB9dWaSmFGMqprI6Hg/viewform` (new tab)
- Icon: GraduationCap (centered, purple)
- Title: `"Want to be an MBA coach and find your tech Co-founder?"` (text-xl, centered)
- Body: `"Join as a business partner and help build fundable ventures. Commit 10–15 hours per week."` (centered)
- CTA: `"Apply as MBA Coach"` — white rounded-full button, centered.

Card style: `glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 group cursor-pointer`
Icon hover: `group-hover:bg-purple-600/50 transition-colors`

---

## Section 6: Footer (shared)
- `"© 2025 Global AI Hackathon. All rights reserved."` + Impressum link.

---

## Responsive Behavior
- Pillar cards: 3-col → stacked on mobile.
- Benefits cards: 3-col → 2-col (md) → 1-col (sm).
- Join cards: 2-col → stacked on mobile.
- EWOR logo scales: h-8 (xs) → h-16 (sm+).
