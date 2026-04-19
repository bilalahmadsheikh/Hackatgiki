---
name: Homepage Implementation Prompt
description: Complete content map, section breakdown, and design instructions for the Hack-Nation homepage.
---

# Homepage — Full Implementation Prompt

## Page Metadata
```ts
title: "Hack-Nation | Global AI Hackathon"
description: "The world's premier AI innovation challenge. Build groundbreaking solutions, compete globally, and shape the future of artificial intelligence."
```

---

## Section 1: Hero (min-h-[85vh])

### Layout
- Edge-to-edge full width layout (`w-full px-4 sm:px-8 xl:px-24`).
- Immersive volumetric 3D background/foreground using `NeuralMeshBg`.
- Content flows freely across the center, perfectly scaling indefinitely to ultra-wide bounds without restricted `max-w-*` boxes.

### Content
- **Eyebrow text**: `"in collaboration with the"` followed by a gradient pill badge: `"MIT Sloan AI Club"` (gradient: blue → purple → pink).
- **Heading**: 
  ```
  HackatGIKI
  ```
  The word "Hackathon" should be in `text-purple-400` with a subtle `electric-text-glow` CSS animation.
- **Info badges row** (flex-wrap):
  - 📅 `"Apr 25-26, 2026"` (Calendar icon, purple-400)
  - 🌍 `"Global Hubs & Remote"` (Globe icon, purple-400)
- **Divider**: `h-px bg-gradient-to-r from-white/20 to-transparent`
- **Body text**: `"The world's premier AI innovation challenge where brilliant minds converge to build groundbreaking solutions that shape the future of artificial intelligence."`
- **CTA button**: `"Sign Up for 5th Hackathon"` → links to `https://docs.google.com/forms/d/e/1FAIpQLSeRvf4ISeN6IBA8GTt_SABqnUEiTxTfFPSM8Dj5qOUxxBbLxw/viewform` (opens in new tab). Style: white bg, dark text, rounded-full, hover:scale-105, shadow-xl.

### Animations
- Hero card fades in on mount (`animate-fade-in`, 0.6s ease-out).
- Info badges stagger in with 100ms delay between each.
- CTA has a subtle `button-fill-animation` on hover (left-to-right gradient sweep).

---

## Section 2: Sponsor Scroller

### Layout
- `py-16 sm:py-20 md:py-24`, centered container max-w-6xl.
- Purple divider bar at top (`w-24 h-1 bg-purple-400 rounded-full mx-auto`).

### Content
- **Heading**: `"Already Collaborated With"` (text-3xl to text-5xl, font-bold, text-white).
- **Marquee container**: Full-width edge-to-edge Glassmorphism panel (`glass-panel w-full py-12 sm:py-16 !rounded-none border-x-0`).
- Inside: infinite horizontal scrolling logo carousel. Partner logos scroll left continuously. Speed: `normal`. Pause on hover.

### Technical Notes
- Use CSS `@keyframes scroll-left` animation or a lightweight JS marquee.
- Logos should be grayscale at rest, full color on hover.
- Each logo should be approximately 80-120px wide, vertically centered.

---

## Section 3: How It Works / Experience Hubs

### Content
- Section explaining the hackathon flow (apply → get accepted → choose challenge → hack → pitch → awards).
- Use a horizontal stepper or bento-grid layout with numbered cards.
- Each step: icon + title + short description.

### Design
- Glass cards in a grid, each with hover:bg-white/10 transition.
- Purple accent icons.
- Stagger-reveal on scroll.

---

## Section 4: Speakers Section

### Layout
- Grid of speaker cards (responsive: 1 col mobile → 2 col tablet → 3-4 col desktop).
- Each card: speaker photo (rounded, bordered), name, title/affiliation.

### Design
- Photos in circular frames with `border-2 border-purple-400/30` glow.
- Hover: scale slightly, border brightens.
- Image click opens a modal lightbox with larger photo.

---

## Section 5: Schedule / Timeline

Defer to the Global AI Hackathon page for the detailed schedule. On the homepage, show a condensed "Event Weekend" summary:
- **Date**: Apr 25-26, 2026
- **Format**: 24-hour hackathon, Saturday kick-off → Sunday awards
- **CTA**: "View Full Schedule" → links to `/global-ai-hackathon#schedule`

---

## Section 6: Judges Section

### Layout
- Similar to speakers — grid of judge cards.
- Each card: photo, name, organization, role.

### Design
- Consistent with speaker section but with a different accent (e.g., amber/gold icons to denote "judge" status).

---

## Section 7: Sponsor Scroller (Bottom — "Already Collaborated With")

Reuses the `SponsorMarquee` component.

---

## Section 8: Footer

Use the shared `Footer` component. Content:
- "Follow us on Social Media" heading
- **LinkedIn**: `https://www.linkedin.com/company/hack-nation/` (LinkedIn icon in blue-600 circle)
- **Instagram**: `https://www.instagram.com/hacknation.globalai/` (Instagram icon in purple→pink gradient circle)
- Divider
- `"© 2026 Global AI Hackathon. All rights reserved."` + `"Impressum"` link → `/impressum`

---

## Full-Page Lightbox (Modal)

When a user clicks any expandable image (speaker photo, gallery image), render a **full-screen lightbox overlay**:
- `fixed inset-0 z-[100] bg-black/90 backdrop-blur-md`
- Close button: top-right, circular, `bg-white/10 hover:bg-white/20`
- Image centered, `max-w-7xl max-h-[90vh] object-contain`
- Click outside closes. ESC key closes.

---

## Animation Reference

```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes electric-text-glow {
  0%, 100% { text-shadow: 0 0 10px rgba(168, 85, 247, 0.4); }
  50% { text-shadow: 0 0 20px rgba(168, 85, 247, 0.7), 0 0 40px rgba(168, 85, 247, 0.3); }
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

---

## Responsive Behavior
| Breakpoint | Hero heading | Cards grid | Margins |
|------------|-------------|------------|---------|
| < 640px | text-3xl | 1 column | px-4 |
| 640-768px | text-4xl | 2 columns | px-6 |
| 768-1024px | text-5xl | 2-3 columns | px-6 |
| > 1024px | xl:text-9xl, 2xl:text-[10rem] | 3-4 columns | px-8 | xl:px-24 |
