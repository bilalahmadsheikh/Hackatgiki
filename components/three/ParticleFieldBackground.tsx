"use client"
import { useEffect, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

const PARTICLE_COUNT = 200

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const velocitiesRef = useRef<Float32Array | null>(null)

  // Deterministic positions and velocities
  const { geometry, velocities } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    const vel = new Float32Array(PARTICLE_COUNT * 3)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (pseudoRandom(i * 6 + 1) - 0.5) * 20
      pos[i * 3 + 1] = (pseudoRandom(i * 6 + 2) - 0.5) * 14
      pos[i * 3 + 2] = (pseudoRandom(i * 6 + 3) - 0.5) * 10

      vel[i * 3] = (pseudoRandom(i * 6 + 4) - 0.5) * 0.003
      vel[i * 3 + 1] = (pseudoRandom(i * 6 + 5) - 0.5) * 0.002
      vel[i * 3 + 2] = (pseudoRandom(i * 6 + 6) - 0.5) * 0.001
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3))

    return { geometry: geo, velocities: vel }
  }, [])

  useEffect(() => {
    velocitiesRef.current = velocities
  }, [velocities])

  // Gentle drift
  useFrame(() => {
    if (pointsRef.current) {
      const posAttr = pointsRef.current.geometry.attributes
        .position as THREE.BufferAttribute
      const posArray = posAttr.array as Float32Array
      const velocities = velocitiesRef.current
      if (!velocities) return

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        posArray[i * 3] += velocities[i * 3]
        posArray[i * 3 + 1] += velocities[i * 3 + 1]
        posArray[i * 3 + 2] += velocities[i * 3 + 2]

        // Bounce off invisible bounds
        if (Math.abs(posArray[i * 3]) > 10) velocities[i * 3] *= -1
        if (Math.abs(posArray[i * 3 + 1]) > 7) velocities[i * 3 + 1] *= -1
        if (Math.abs(posArray[i * 3 + 2]) > 5) velocities[i * 3 + 2] *= -1
      }

      posAttr.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.03}
        color="#eeeef0"
        transparent
        opacity={0.15}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function ParticleFieldBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        style={{ background: "transparent" }}
      >
        <ParticleField />
      </Canvas>
    </div>
  )
}
