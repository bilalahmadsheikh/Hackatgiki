"use client"
import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

const PARTICLE_COUNT = 800
const CONNECTION_DISTANCE = 1.8
const SPHERE_RADIUS = 10

function NeuralMesh() {
  const groupRef = useRef<THREE.Group>(null)
  const { viewport } = useThree()

  // Generate particle positions on a sphere surface with jitter
  const positions = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Volumetric distribution inside a sphere
      const u = Math.random()
      const v = Math.random()
      const theta = 2 * Math.PI * u
      const phi = Math.acos(2 * v - 1)
      const r = SPHERE_RADIUS * Math.cbrt(Math.random())

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  // Create geometries using THREE API directly to avoid TypeScript issues
  const pointsGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    return geo
  }, [positions])

  // Pre-calculate connection lines between nearby particles
  const linesGeometry = useMemo(() => {
    const lines: number[] = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = positions[i * 3] - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < CONNECTION_DISTANCE) {
          lines.push(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2]
          )
        }
      }
    }
    const geo = new THREE.BufferGeometry()
    const arr = new Float32Array(lines)
    geo.setAttribute("position", new THREE.BufferAttribute(arr, 3))
    return geo
  }, [positions])

  // Slowly rotate the entire neural mesh
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0008
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
  })

  // Dynamic responsive scaling based on screen width space
  const scale = Math.min(Math.max(viewport.width / 15, 0.8), 2.5)

  return (
    <group ref={groupRef} scale={scale}>
      {/* Particles */}
      <points geometry={pointsGeometry}>
        <pointsMaterial
          size={0.035}
          color="#9b5de5"
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Connection lines */}
      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.07}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  )
}

export default function NeuralMeshBackground() {
  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 2], fov: 75 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        style={{ background: "transparent", pointerEvents: "none" }}
      >
        <NeuralMesh />
      </Canvas>
    </div>
  )
}
