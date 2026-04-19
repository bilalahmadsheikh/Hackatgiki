---
name: Shared Components Implementation Prompt
description: Detailed specs for every shared component — Navbar, Footer, GlassCard, SponsorMarquee, ParticleBackground, AnimatedButton.
---

# Shared Components — Full Implementation Prompt

---

## Component 1: Navbar

### File: `components/Navbar.tsx`
- Directive: `"use client"` (has hamburger toggle state)

### Visual Spec
```
Position: fixed top-0 left-0 w-full z-50
Background: bg-slate-950/80 backdrop-blur-2xl
Border: border-b border-white/5
Shadow: shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]
Padding: px-6 py-5
Hover: bg-slate-950/90 border-white/10
Transition: all 300ms
```

### Desktop Layout (lg+)
```
[Logo Group]          [Center Nav Links]          [CTA Button]
```

**Logo Group** (left):
- Circular container: `w-12 h-12 rounded-full bg-white/5 border border-white/10`
- Logo image: `/logo-web.png` (w-8 h-8)
- Text: `"Hack-Nation"` (text-xl, font-bold, text-white)
- Hover: scale-110, bg-white/10, text-blue-200
- onClick: navigate to `/`

**Center Nav Links** (absolute centered):
- `"Home"` → `/`
- `"Sections"` dropdown → contains `"Contact Us"` → scrolls to `#contact-form`
- `"Global AI Hackathon"` → `/global-ai-hackathon`
- `"Venture Track"` → `/venture-track`

Note: Different pages may show different nav links. Accept a `navLinks` prop or use the default.

**Sections Dropdown**:
- Trigger: `"Sections"` + ChevronDown icon (rotates 180° when open)
- Panel: `bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-2 w-48`
- Shows on hover (mouse enter/leave with 300ms debounce)

**CTA Button** (right):
- `"Partner with us"` → `/partnership`
- Style: `bg-white text-slate-950 rounded-full px-6 py-2.5 font-bold hover:scale-105`
- `button-fill-animation` effect on hover

### Mobile Layout (< lg)
- Logo + hamburger button (Menu icon / X icon toggle)
- Slide-down panel: `bg-slate-950/95 backdrop-blur-xl` with all nav links stacked vertically
- Each link: `py-3 px-4 rounded-xl hover:bg-white/10`
- "Partner with us" at bottom: `bg-white text-slate-950 rounded-xl font-bold`

### Props Interface
```ts
interface NavbarProps {
  variant?: "default" | "simplified"  // simplified = logo + back button only (for Impressum)
}
```

---

## Component 2: Footer

### File: `components/Footer.tsx`

### Full Variant (Homepage)
```
Section: bg-transparent py-12 px-4 border-t border-white/10
```

**Social Section:**
- Label: `"Follow us on Social Media"` (text-sm, text-slate-300, font-semibold)
- Icons row:
  - **LinkedIn**: `https://www.linkedin.com/company/hack-nation/`
    - Circle: `w-10 h-10 rounded-full bg-blue-600/20 border border-blue-400/40`
    - Icon: LinkedIn icon (w-5 h-5, text-blue-300)
    - Label below: `"LinkedIn"` (text-xs)
  - **Instagram**: `https://www.instagram.com/hacknation.globalai/`
    - Circle: gradient `from-purple-600/20 to-pink-600/20 border border-purple-400/40`
    - Icon: Instagram icon (w-5 h-5, text-pink-300)
    - Label below: `"Instagram"` (text-xs)
- Hover: scale-110, brighter border + icon colors

**Copyright Bar:**
- Divider: `border-t border-slate-700 pt-6`
- Text: `"© 2026 Global AI Hackathon. All rights reserved."` + `"Impressum"` button (text-blue-400, underline) → `/impressum`

### Minimal Variant (Partnership, Venture Track, Hackathon)
```
Footer: bg-slate-900/95 border-t border-white/20 py-6 px-4 backdrop-blur-sm
```
- Only copyright text + Impressum link. No social icons.

### Props Interface
```ts
interface FooterProps {
  variant?: "full" | "minimal"
}
```

---

## Component 3: ParticleBackground

### File: `components/ParticleBackground.tsx`

### Spec
- Renders a `div.absolute.inset-0.z-0.pointer-events-none.overflow-hidden`
- Contains 5 gradient orbs:

```ts
const orbs = [
  { x: 15, y: 15, size: 350, opacity: 0.12, blur: 100, color: "bg-purple-600/30" },
  { x: 75, y: 35, size: 310, opacity: 0.10, blur: 90,  color: "bg-blue-600/20" },
  { x: 25, y: 55, size: 380, opacity: 0.11, blur: 120, color: "bg-pink-600/20" },
  { x: 80, y: 75, size: 320, opacity: 0.09, blur: 95,  color: "bg-indigo-600/25" },
  { x: 10, y: 90, size: 360, opacity: 0.12, blur: 110, color: "bg-purple-500/20" },
]
```

Each orb: absolutely positioned, `rounded-full`, with inline styles for `left`, `top`, `width`, `height`, `opacity`, `filter: blur()`, `transform: translate(-50%, -50%)`.

### Props
```ts
interface ParticleBackgroundProps {
  variant?: "default" | "calm" | "energetic"  // adjusts orb counts and intensity
}
```

---

## Component 4: GlassCard

### File: `components/GlassCard.tsx`

### Spec
```ts
interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean   // enables hover:bg-white/10 transition
  padding?: string  // override default padding
}
```

Base classes: `bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl transition-all duration-500`
Default padding: `p-6 sm:p-8`
Hover (if enabled): `hover:bg-white/10`

---

## Component 5: SponsorMarquee

### File: `components/SponsorMarquee.tsx`
- Directive: `"use client"` (hover-pause behavior)

### Spec
```ts
interface SponsorMarqueeProps {
  images: { src: string; alt: string }[]
  speed?: "slow" | "normal" | "fast"  // 60s | 40s | 20s
  compact?: boolean  // smaller height for inline use
}
```

### Implementation
- Container with `overflow-hidden`
- Inner track: duplicated image list for seamless loop
- CSS animation: `animation: scroll-left ${duration}s linear infinite`
- On hover: `animation-play-state: paused`
- Each logo: `grayscale(100%) hover:grayscale(0) transition-all duration-300`, ~80-120px wide

```css
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

---

## Component 6: AnimatedButton

### File: `components/AnimatedButton.tsx`

### Spec
```ts
interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline"
  href?: string       // if provided, renders as <a> instead of <button>
  external?: boolean  // adds target="_blank" rel="noopener noreferrer"
}
```

### Primary Variant
- `bg-white text-slate-950 rounded-full font-bold shadow-xl`
- Hover: `hover:scale-105 transition-all duration-300`
- `button-fill-animation` class (CSS gradient sweep from left on hover)

### Outline Variant
- `bg-transparent border border-white/20 text-white rounded-full font-bold`
- Hover: `hover:bg-white/5`

### Fill Animation CSS
```css
.button-fill-animation {
  position: relative;
  overflow: hidden;
}
.button-fill-animation::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transition: left 0.5s ease;
}
.button-fill-animation:hover::before {
  left: 100%;
}
```

---

## Utility: `lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```
