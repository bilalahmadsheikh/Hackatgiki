"use client"
import dynamic from "next/dynamic"

const NeuralMeshBackground = dynamic(
  () => import("@/components/three/NeuralMeshBackground"),
  { ssr: false }
)

export default function ThreeBackground() {
  return <NeuralMeshBackground />
}
