"use client"
import dynamic from "next/dynamic"

const FloatingGridBackground = dynamic(
  () => import("@/components/three/FloatingGridBackground"),
  { ssr: false }
)

export default function GridBackground() {
  return <FloatingGridBackground />
}
