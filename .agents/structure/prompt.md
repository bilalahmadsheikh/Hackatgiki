---
name: Project Structure Implementation Prompt
description: Exact configuration files, global CSS, root layout, and Tailwind setup for the Hack-Nation Next.js project.
---

# Project Structure — Full Implementation Prompt

---

## Step 1: Initialize Next.js Project

```bash
npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --no-turbopack
```

---

## Step 2: Install Dependencies

```bash
npm install clsx tailwind-merge lucide-react
```

Optional (if Radix primitives are needed for Select/Dialog):
```bash
npm install @radix-ui/react-select @radix-ui/react-dialog
```

---

## Step 3: Tailwind Configuration

### `tailwind.config.ts`
```ts
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-jakarta)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-orbitron)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "475px",
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "electric-glow": "electric-text-glow 2s ease-in-out infinite",
        "scroll-left": "scroll-left 40s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "electric-text-glow": {
          "0%, 100%": { textShadow: "0 0 10px rgba(168, 85, 247, 0.4)" },
          "50%": { textShadow: "0 0 20px rgba(168, 85, 247, 0.7), 0 0 40px rgba(168, 85, 247, 0.3)" },
        },
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

---

## Step 4: Global CSS

### `app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ═══════════════════════════════════════════
   DESIGN TOKENS
   ═══════════════════════════════════════════ */
:root {
  --background: #050505;
  --foreground: #f8fafc;
  --card-bg: rgba(255, 255, 255, 0.05);
  --card-border: rgba(255, 255, 255, 0.1);
  --accent-purple: #a855f7;
  --accent-blue: #3b82f6;
  --accent-pink: #ec4899;
  --text-primary: #ffffff;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
}

/* ═══════════════════════════════════════════
   BASE STYLES
   ═══════════════════════════════════════════ */
html {
  scroll-behavior: smooth;
}

body {
  background: var(--background);
  color: var(--foreground);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background: rgba(168, 85, 247, 0.3);
}

/* ═══════════════════════════════════════════
   COMPONENT CLASSES
   ═══════════════════════════════════════════ */
.glass-card {
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--card-border);
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.electric-text-glow {
  animation: electric-text-glow 2s ease-in-out infinite;
}

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
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.08),
    transparent
  );
  transition: left 0.6s ease;
}

.button-fill-animation:hover::before {
  left: 100%;
}

/* ═══════════════════════════════════════════
   SCROLLBAR
   ═══════════════════════════════════════════ */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.3);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(148, 163, 184, 0.5);
}

/* ═══════════════════════════════════════════
   REDUCED MOTION
   ═══════════════════════════════════════════ */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  html {
    scroll-behavior: auto;
  }
}
```

---

## Step 5: Root Layout

### `app/layout.tsx`
```tsx
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans, Orbitron } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Hack-Nation | Global AI Hackathon",
    template: "%s | Hack-Nation",
  },
  description: "The world's premier AI innovation challenge. Build groundbreaking solutions, compete globally, and shape the future of artificial intelligence.",
  keywords: ["AI hackathon", "artificial intelligence", "hackathon", "global competition", "MIT", "startup"],
  authors: [{ name: "Hack-Nation" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hack-nation.ai",
    siteName: "Hack-Nation",
    title: "Hack-Nation | Global AI Hackathon",
    description: "The world's premier AI innovation challenge.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hack-Nation | Global AI Hackathon",
    description: "The world's premier AI innovation challenge.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${orbitron.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
```

---

## Step 6: Utility File

### `lib/utils.ts`
```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## Step 7: next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
}

module.exports = nextConfig
```

---

## Post-Scaffold Checklist
- [ ] `npm run dev` starts without errors
- [ ] Root layout loads with correct fonts
- [ ] Custom Tailwind classes (animate-fade-in, glass-card, electric-text-glow) work
- [ ] No TypeScript errors
- [ ] `npm run build` succeeds
