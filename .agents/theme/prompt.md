---
name: Theme & UI Design System Implementation Prompt
description: Complete implementation instructions for the Cosmic Neural design system — CSS tokens, Tailwind config, Three.js backgrounds, glassmorphism, and animation system.
---

# Theme & UI Design System — Full Implementation Prompt

---

## 1. Install Dependencies

```bash
npm install three @react-three/fiber @react-three/drei
npm install -D @types/three
```

Font setup in `app/layout.tsx`:
```tsx
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
})
```

Apply to `<html>`:
```tsx
<html className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
```

---

## 2. CSS Design Tokens (`app/globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ═══════════════════════════════════════════
   COSMIC NEURAL — DESIGN TOKENS
   ═══════════════════════════════════════════ */
:root {
  /* Surfaces (elevation system — lighter = higher) */
  --surface-0: hsl(230, 35%, 3%);
  --surface-1: hsl(230, 30%, 7%);
  --surface-2: hsl(230, 25%, 11%);
  --surface-3: hsl(230, 20%, 15%);
  --surface-4: hsl(230, 15%, 20%);

  /* Accent — Primary (Cosmic Violet) */
  --accent-primary: hsl(270, 65%, 60%);
  --accent-primary-soft: hsl(270, 50%, 45%);
  --accent-primary-glow: hsl(270, 80%, 70%);
  --accent-primary-bg: hsl(270, 60%, 15%);

  /* Accent — Secondary (Electric Cyan) */
  --accent-secondary: hsl(185, 75%, 55%);
  --accent-secondary-soft: hsl(185, 55%, 40%);
  --accent-secondary-bg: hsl(185, 60%, 12%);

  /* Semantic */
  --success: hsl(155, 60%, 50%);
  --danger: hsl(0, 65%, 55%);
  --warning: hsl(40, 80%, 55%);
  --info: hsl(210, 70%, 55%);

  /* Text */
  --text-primary: hsl(220, 15%, 95%);
  --text-secondary: hsl(220, 10%, 72%);
  --text-muted: hsl(220, 10%, 50%);
  --text-ghost: hsl(220, 10%, 30%);

  /* Typography */
  --font-display: var(--font-space), system-ui, sans-serif;
  --font-body: var(--font-inter), system-ui, sans-serif;
  --font-code: var(--font-mono), 'Courier New', monospace;

  /* Fluid type scale */
  --text-hero:  clamp(3rem, 2.2rem + 4vw, 5.5rem);
  --text-5xl:   clamp(2.5rem, 2rem + 2.5vw, 3.75rem);
  --text-4xl:   clamp(2rem, 1.6rem + 2vw, 3rem);
  --text-3xl:   clamp(1.75rem, 1.4rem + 1.5vw, 2.25rem);
  --text-2xl:   clamp(1.4rem, 1.2rem + 1vw, 1.75rem);

  /* Spacing */
  --section-padding-y: clamp(3rem, 2.5rem + 3vw, 6rem);
  --container-padding-x: clamp(1rem, 0.5rem + 2vw, 2rem);

  /* Borders */
  --border-subtle: hsl(230, 20%, 15%, 0.5);
  --border-accent: hsl(270, 50%, 45%, 0.3);

  /* Radii */
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1.25rem;
  --radius-xl: 1.75rem;
  --radius-full: 9999px;
}

/* ═══════════════════════════════════════════
   BASE STYLES
   ═══════════════════════════════════════════ */
html {
  scroll-behavior: smooth;
  color-scheme: dark;
}

body {
  background: var(--surface-0);
  color: var(--text-primary);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

::selection {
  background: hsl(270, 65%, 60%, 0.35);
  color: white;
}

/* ═══════════════════════════════════════════
   TYPOGRAPHY UTILITIES
   ═══════════════════════════════════════════ */
.font-display {
  font-family: var(--font-display);
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.font-code {
  font-family: var(--font-code);
  letter-spacing: 0;
}

.text-gradient-primary {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-subtle {
  background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ═══════════════════════════════════════════
   GLASSMORPHISM SYSTEM
   ═══════════════════════════════════════════ */
.glass-card {
  background: hsl(230, 25%, 8%, 0.6);
  backdrop-filter: blur(16px) saturate(1.2);
  -webkit-backdrop-filter: blur(16px) saturate(1.2);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  box-shadow:
    inset 0 1px 0 0 hsl(0, 0%, 100%, 0.03),
    0 20px 50px -12px rgba(0, 0, 0, 0.4);
  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card-hover:hover {
  background: hsl(230, 25%, 10%, 0.7);
  border-color: var(--border-accent);
  box-shadow:
    inset 0 1px 0 0 hsl(270, 50%, 50%, 0.08),
    0 25px 60px -15px rgba(0, 0, 0, 0.5),
    0 0 40px -20px hsl(270, 65%, 60%, 0.15);
  transform: translateY(-2px);
}

/* ═══════════════════════════════════════════
   BUTTON SYSTEM
   ═══════════════════════════════════════════ */
.btn-primary {
  background: var(--text-primary);
  color: var(--surface-0);
  font-family: var(--font-display);
  font-weight: 600;
  border-radius: var(--radius-full);
  padding: 0.75rem 2rem;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.btn-primary:hover {
  transform: scale(1.03);
  box-shadow: 0 0 30px -5px hsl(270, 65%, 60%, 0.4);
}

.btn-primary::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, hsl(0, 0%, 100%, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 500ms ease;
}
.btn-primary:hover::after {
  transform: translateX(100%);
}

.btn-outline {
  background: transparent;
  color: var(--text-primary);
  font-family: var(--font-display);
  font-weight: 600;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-subtle);
  padding: 0.75rem 2rem;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-outline:hover {
  border-color: var(--accent-primary-soft);
  background: hsl(270, 60%, 15%, 0.2);
}

/* ═══════════════════════════════════════════
   GLOW EFFECTS
   ═══════════════════════════════════════════ */
.electric-text-glow {
  animation: electric-glow 3s ease-in-out infinite;
}

.accent-glow {
  box-shadow: 0 0 25px -5px var(--accent-primary);
}

.accent-glow-hover:hover {
  box-shadow:
    0 0 35px -5px var(--accent-primary),
    0 0 70px -20px var(--accent-primary);
}

/* ═══════════════════════════════════════════
   ANIMATIONS
   ═══════════════════════════════════════════ */
@keyframes fade-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes electric-glow {
  0%, 100% { text-shadow: 0 0 12px hsl(270, 65%, 60%, 0.4); }
  50% { text-shadow: 0 0 24px hsl(270, 65%, 60%, 0.7), 0 0 48px hsl(270, 80%, 70%, 0.25); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes pulse-ring {
  0% { transform: scale(0.9); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 0.4; }
  100% { transform: scale(0.9); opacity: 0.8; }
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-fade-up { animation: fade-up 0.6s ease-out both; }
.animate-float { animation: float 4s ease-in-out infinite; }
.animate-pulse-ring { animation: pulse-ring 3s ease-in-out infinite; }

/* ═══════════════════════════════════════════
   SCROLLBAR
   ═══════════════════════════════════════════ */
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: hsl(230, 15%, 25%);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: hsl(270, 30%, 35%);
}

/* ═══════════════════════════════════════════
   FOCUS & ACCESSIBILITY
   ═══════════════════════════════════════════ */
*:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 3px;
  border-radius: 6px;
}

/* ═══════════════════════════════════════════
   REDUCED MOTION
   ═══════════════════════════════════════════ */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .electric-text-glow { animation: none; text-shadow: none; }
}
```

---

## 3. Tailwind Config Extensions (`tailwind.config.ts`)

```ts
import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "var(--font-inter)", "system-ui"],
        mono: ["var(--font-mono)", "'Courier New'", "monospace"],
      },
      colors: {
        surface: {
          0: "hsl(230, 35%, 3%)",
          1: "hsl(230, 30%, 7%)",
          2: "hsl(230, 25%, 11%)",
          3: "hsl(230, 20%, 15%)",
          4: "hsl(230, 15%, 20%)",
        },
        accent: {
          primary: "hsl(270, 65%, 60%)",
          "primary-soft": "hsl(270, 50%, 45%)",
          secondary: "hsl(185, 75%, 55%)",
          "secondary-soft": "hsl(185, 55%, 40%)",
          glow: "hsl(270, 80%, 70%)",
        },
      },
      screens: { xs: "475px" },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "electric-glow": "electric-glow 3s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "scroll-left": "scroll-left 40s linear infinite",
        "scroll-left-slow": "scroll-left 60s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
    },
  },
  plugins: [],
}
export default config
```

---

## 4. Three.js Background Components

### `components/three/NeuralMeshBackground.tsx`

```tsx
"use client"
import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

const PARTICLE_COUNT = 600
const CONNECTION_DISTANCE = 1.2
const SPHERE_RADIUS = 3

function NeuralMesh() {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const groupRef = useRef<THREE.Group>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT)
      const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi
      const jitter = 0.15
      pos[i * 3]     = (SPHERE_RADIUS * Math.cos(theta) * Math.sin(phi)) + (Math.random() - 0.5) * jitter
      pos[i * 3 + 1] = (SPHERE_RADIUS * Math.sin(theta) * Math.sin(phi)) + (Math.random() - 0.5) * jitter
      pos[i * 3 + 2] = (SPHERE_RADIUS * Math.cos(phi)) + (Math.random() - 0.5) * jitter
    }
    return pos
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0008
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
  })

  const linePositions = useMemo(() => {
    const lines: number[] = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = positions[i*3] - positions[j*3]
        const dy = positions[i*3+1] - positions[j*3+1]
        const dz = positions[i*3+2] - positions[j*3+2]
        const dist = Math.sqrt(dx*dx + dy*dy + dz*dz)
        if (dist < CONNECTION_DISTANCE) {
          lines.push(
            positions[i*3], positions[i*3+1], positions[i*3+2],
            positions[j*3], positions[j*3+1], positions[j*3+2]
          )
        }
      }
    }
    return new Float32Array(lines)
  }, [positions])

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={PARTICLE_COUNT} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="hsl(270, 65%, 60%)" transparent opacity={0.6} sizeAttenuation blending={THREE.AdditiveBlending} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={linePositions.length / 3} array={linePositions} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="hsl(185, 75%, 55%)" transparent opacity={0.07} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  )
}

export default function NeuralMeshBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <NeuralMesh />
      </Canvas>
    </div>
  )
}
```

### `components/three/FloatingGridBackground.tsx`
- Flat perspective grid on XZ plane, glowing intersection dots, slow forward scroll.
- Use similar structure to NeuralMesh but with a `PlaneGeometry` grid + instanced dots.

### `components/three/ParticleFieldBackground.tsx`
- ~200 tiny float32 points, random positions in a box, slow drift via `useFrame`.
- Lightest variant — use for Impressum, 404, Idea Challenge.

### Page-to-Background Mapping
| Page | Background Variant |
|------|--------------------|
| Homepage | `NeuralMeshBackground` |
| Global AI Hackathon | `NeuralMeshBackground` |
| Partnership | `FloatingGridBackground` |
| Venture Track | `FloatingGridBackground` |
| Impressum | `ParticleFieldBackground` |
| Idea Challenge | `ParticleFieldBackground` |
| 404 | `ParticleFieldBackground` |

### Dynamic Import Pattern (for each page)
```tsx
// app/page.tsx
import dynamic from "next/dynamic"
const NeuralMeshBackground = dynamic(
  () => import("@/components/three/NeuralMeshBackground"),
  { ssr: false }
)

export default function HomePage() {
  return (
    <div className="relative">
      <NeuralMeshBackground />
      <main className="relative z-10">
        {/* page content */}
      </main>
    </div>
  )
}
```

---

## 5. Contrast Verification Checklist

| Text | Background | Ratio | Pass? |
|------|-----------|-------|-------|
| `--text-primary` (hsl 220,15%,95%) | `--surface-0` (hsl 230,35%,3%) | ~17.5:1 | ✅ AAA |
| `--text-secondary` (hsl 220,10%,72%) | `--surface-0` | ~10.2:1 | ✅ AAA |
| `--text-muted` (hsl 220,10%,50%) | `--surface-0` | ~5.1:1 | ✅ AA |
| `--text-muted` | `--surface-1` | ~4.5:1 | ✅ AA (borderline) |
| `--accent-primary` | `--surface-0` | ~6.8:1 | ✅ AA |
| `--accent-secondary` | `--surface-0` | ~9.1:1 | ✅ AAA |

---

## 6. Theme Summary Comparison

| Aspect | Old Theme | New "Cosmic Neural" |
|--------|----------|---------------------|
| Background | `#050505` / `#0f172a` flat | `hsl(230,35%,3%)` — subtly warm-shifted |
| Primary accent | Pure purple `#a855f7` | Softer cosmic violet `hsl(270,65%,60%)` |
| Secondary accent | None (just purple) | Electric cyan `hsl(185,75%,55%)` — duo-tone |
| Fonts | Inter + Orbitron | Space Grotesk + Inter + JetBrains Mono |
| Backgrounds | `<video>` mp4 | Three.js neural mesh / grid / particles |
| Cards | basic `bg-white/5` | HSL-based elevation + inner glow + depth shadow |
| Buttons | Simple white with basic hover | Glow-on-hover + sweep animation + scale |
| Color system | Hardcoded hex | HSL CSS variables + Tailwind tokens |
