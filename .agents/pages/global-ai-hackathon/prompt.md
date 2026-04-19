---
name: Global AI Hackathon Implementation Prompt
description: Complete content, schedule data, prize info, and design specs for the hackathon event page.
---

# Global AI Hackathon — Full Implementation Prompt

## Page Metadata
```ts
title: "Global AI Hackathon | Apr 25-26, 2026 | Hack-Nation"
description: "Join the 5th Global AI Hackathon. 24-hour sprint, $30k+ in prizes, expert mentorship, and global hubs. Apply now."
```

---

## Section 1: Hero (min-h-[85vh])

### Layout
- NeuralMeshBg background, ensuring fully fluid scaling across viewports.
- Edge-to-edge rendering without max-width blocks (`w-full px-4 sm:px-8 xl:px-24`).

### Content
- **Eyebrow**: `"Join the"` (text-slate-400)
- **Heading**:
  ```
  Global AI
  Hackathon
  ```
  "Hackathon" in `text-purple-400 electric-text-glow`. Heading sizes upscaled progressively into massive breakpoints (`xl:text-9xl 2xl:text-[10rem]`).
- **Badges**:
  - 📅 `"Apr 25-26, 2026"` (Calendar icon)
  - 🌍 `"Global Hubs & Remote"` (MapPin icon)
- **Body**: `"The world's premier AI innovation challenge where brilliant minds converge to build groundbreaking solutions that shape the future of artificial intelligence."`
- **CTA**: `"Sign Up for 5th Hackathon"` → Google Form link (same as homepage). White rounded-full button.

---

## Section 2: How It Works Cards

Use the shared carousel or bento-grid component. Content about the hackathon experience flow.

---

## Section 3: Schedule (`id="schedule"`)

### Layout
- Purple divider + centered heading.
- **Heading**: `"Schedule"`
- **Subheading**: `"24-hour weekend hackathon schedule (ET). Local hubs mirror the same flow."`
- Grid stretching uniformly. 2-column grid (lg), stacked on mobile.

### Saturday, Apr 25 (Column 1)
```
Container: bg-white/[0.03] border border-white/[0.08] rounded-2xl
Header: "Saturday, Apr 25" + "Pakistan Time (PKT)"
```

| Event | Time | Color |
|-------|------|-------|
| Hackathon Kick-Off | 8:15 – 8:45 PM | neutral |
| Speaker Session | 8:45 PM – 9:15 PM | neutral |
| 15-Minute Break | 9:15 – 9:30 PM | text-slate-400 (muted) |
| Reveal of Challenges | 9:30 – 10:00 PM | neutral |
| **Hacking Begins** | **10:00 PM** | **emerald-300 bg-emerald-500/[0.04]** |

### Sunday, Apr 26 / Monday Apr 27 (Column 2)
| Event | Time | Color |
|-------|------|-------|
| **Submission Deadline** | **Sun 6:00 PM** | **red-300 bg-red-500/[0.04]** |
| Jury to Select Top 16 Teams | Sun by 11:00 PM | neutral |
| Finalist Pitches (2 Mins) | Sun 11:15 – Mon 12:30 AM | neutral |
| **Awards Ceremony** | **Mon 12:45 AM** | **amber-300 bg-amber-500/[0.04]** |

### Notice Box (inside Sunday column)
```
border border-amber-400/20 bg-amber-500/[0.05] rounded-xl px-4 py-4
Label: "FINAL PITCHES NOTICE" (text-amber-200, uppercase tracking-widest)
Body: "If your team reaches the final pitches, attendance is required to remain eligible for finalist and special prizes."
```

---

## Section 4: Why Join Our Hackathon?

### Layout
- Heading: `"Why Join Our Hackathon?"`
- Subheading: `"Experience the ultimate AI development challenge with unparalleled opportunities for learning, networking, and innovation."`
- 3-column grid (1 col mobile → 2 col tablet → 3 col desktop).

### Cards (6 total)
Each card: `bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 hover:bg-white/10`

1. **Global Reach** (Globe icon) — `"Compete with developers from around the world and showcase your AI innovations on a global stage."`
2. **Amazing Prizes** (Trophy icon) — `"Win substantial cash prizes and exclusive mentorship opportunities."`
3. **Expert Mentorship** (Users icon) — `"Get guidance from industry leaders, MIT faculty, and AI experts throughout your development journey."`
4. **24-Hour Sprint** (Calendar icon) — `"A focused 24-hour hackathon with a clear schedule across all hubs."`
5. **Real-World Impact** (Target icon) — `"Build solutions that address actual challenges and have the potential to make a meaningful difference."`
6. **Innovation Focus** (Lightbulb icon) — `"Explore cutting-edge AI technologies and push the boundaries of what's possible with artificial intelligence."`

---

## Section 5: Application Timeline (`id="timeline"`)

### Layout
- Heading: `"Application Timeline"`
- Subheading: `"Apply in the round that fits your timing and prepare your team for the event."`
- Edge-to-edge massive glassmorphism structure with nested sub-cards.

### Quick Stats (2-column mini-grid)
- **Team Size**: `"1-4 builders"`
- **Rolling Review**: `"Decision after each round"`

### Round Table
Header: `"Application Rounds"` with Calendar icon + `"All rounds close at 11:59 PM ET"`

| Round | Date |
|-------|------|
| Round 1 | Feb 20 |
| Round 2 | Mar 6 |
| Round 3 | Mar 18 |
| Round 4 | Mar 28 |
| Round 5 | Apr 11 |
| Round 6 | Apr 17 |

Round 6 has a special badge: `"Hub waitlist only"` (purple border pill).

### CTA
- `"Sign Up for 5th Hackathon"` → Google Form. White, font-mono, uppercase, rounded-full.
- Below: `"Rolling review. Accepted teams are notified after each round."`

---

## Section 6: Competition Awards (`id="prizes"`)

### Layout
- Heading: `"Competition Awards & Recognition"`
- 2-column stat cards + sponsors section below.

### Stat Cards

**Card 1 — Prizes**
- Green accent: `from-emerald-500/10` gradient border
- Icon: Trophy in emerald-500/20 circle
- Label: `"PRIZES"`
- Value: `"$30k+"`
- Description: `"in API credits and cash prizes"`

**Card 2 — During Hack**
- Amber accent: `from-amber-500/10` gradient border
- Icon: Award in amber-500/20 circle
- Label: `"DURING HACK"`
- Value: `"$150k+"`
- Description: `"API credits available during the hackathon"`

### Sponsors Sub-Section
- Divider line
- Label: `"OFFICIAL PARTNERS"` (purple-400, tracking-[0.4em])
- `"Sponsored by"` (italic, white)
- Render the `SponsorMarquee` component (compact mode).

---

## Section 7: CTA Section (gradient card)

- Gradient background: `from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-white/20 rounded-3xl`
- Heading: `"Ready to Join the Challenge?"`
- Body: `"Don't miss this opportunity to showcase your AI skills, learn from experts, and compete for amazing prizes. Registration is now open!"`
- CTA: `"Sign Up for 5th Hackathon"` → Google Form.

---

## Section 8: Participant Guide Download

- Heading: `"More Information on Our Event"`
- Body: `"Download our comprehensive participant guide for detailed information about the hackathon."`
- CTA: `"Open Participant Guide"` → `https://drive.google.com/file/d/1TClty6BIMVgT7Ze7hc_DhIYoOXOxWDRf/view` (new tab). Purple bg button with download icon.

---

## Section 9: Footer (shared)
- `"© 2026 Global AI Hackathon. All rights reserved."` + Impressum link.

---

## Responsive Behavior
- Schedule: 2-col (lg) → stacked (mobile).
- Why Join cards: 3-col → 2-col (md) → 1-col (mobile).
- Application rounds table: full-width, compact padding on mobile.
- Prize stat cards: 2-col → stacked.
