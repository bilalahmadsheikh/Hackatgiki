"use client"
import dynamic from "next/dynamic"

const ParticleFieldBackground = dynamic(
  () => import("@/components/three/ParticleFieldBackground"),
  { ssr: false }
)

export default function ParticleBg() {
  return <ParticleFieldBackground />
}
