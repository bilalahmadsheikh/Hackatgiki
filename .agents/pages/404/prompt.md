---
name: 404 Page Implementation Prompt
description: Content and design for the Hack-Nation 404 error page.
---

# 404 Page — Full Implementation Prompt

## Page Metadata
```ts
title: "Page Not Found | Hack-Nation"
description: "The page you're looking for doesn't exist."
```

---

## Layout
- Full-viewport centered content: `min-h-screen flex items-center justify-center`
- Background: match brand — `bg-[#050505]` or a subtle dark gradient.
- Single centered card or just floating text.

## Content
- **404 Heading**: `"404"` — massive text (text-8xl or text-9xl), font-bold, gradient text (purple→blue) or white with purple glow.
- **Message**: `"Oops! Page not found"` (text-xl, text-slate-400)
- **Sub-message** (optional): `"The page you're looking for doesn't exist or has been moved."` (text-sm, text-slate-500)
- **CTA link**: `"Return to Home"` → `/` (text-blue-400 hover:text-blue-300, underline or styled as button)

## Enhancement Ideas (optional)
- Subtle animated gradient background
- Floating particles effect (very light)
- The "404" text could have the same `electric-text-glow` animation in purple
- A small "←" arrow icon before "Return to Home"

## Technical
- Use `Link` from `next/link` for the home link (client-side navigation).
- Page should be fully static — no client-side JS needed.
