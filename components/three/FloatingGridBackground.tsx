"use client"
import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

const GRID_SIZE = 40
const GRID_DIVISIONS = 20
const DOT_COUNT = (GRID_DIVISIONS + 1) * (GRID_DIVISIONS + 1)

function FloatingGrid() {
  const groupRef = useRef<THREE.Group>(null)
  const dotsRef = useRef<THREE.InstancedMesh>(null)

  // Pre-calculate grid dot positions
  const { positions, dummy } = useMemo(() => {
    const spacing = GRID_SIZE / GRID_DIVISIONS
    const halfSize = GRID_SIZE / 2
    const pos: [number, number, number][] = []

    for (let x = 0; x <= GRID_DIVISIONS; x++) {
      for (let z = 0; z <= GRID_DIVISIONS; z++) {
        pos.push([x * spacing - halfSize, 0, z * spacing - halfSize])
      }
    }

    return { positions: pos, dummy: new THREE.Object3D() }
  }, [])

  // Grid lines geometry
  const gridGeometry = useMemo(() => {
    const spacing = GRID_SIZE / GRID_DIVISIONS
    const halfSize = GRID_SIZE / 2
    const verts: number[] = []

    // X-axis lines
    for (let i = 0; i <= GRID_DIVISIONS; i++) {
      const z = i * spacing - halfSize
      verts.push(-halfSize, 0, z, halfSize, 0, z)
    }
    // Z-axis lines
    for (let i = 0; i <= GRID_DIVISIONS; i++) {
      const x = i * spacing - halfSize
      verts.push(x, 0, -halfSize, x, 0, halfSize)
    }

    const arr = new Float32Array(verts)
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(arr, 3)
    )
    return geometry
  }, [])

  useFrame((state) => {
    const time = state.clock.elapsedTime

    // Animate dots — wave pulse
    if (dotsRef.current) {
      positions.forEach((pos, i) => {
        const wave = Math.sin(time * 0.5 + pos[0] * 0.3 + pos[2] * 0.3)
        const scale = 0.5 + wave * 0.3
        dummy.position.set(pos[0], pos[1] + wave * 0.15, pos[2])
        dummy.scale.setScalar(scale)
        dummy.updateMatrix()
        dotsRef.current!.setMatrixAt(i, dummy.matrix)
      })
      dotsRef.current.instanceMatrix.needsUpdate = true
    }

    // Slow forward scroll
    if (groupRef.current) {
      groupRef.current.position.z =
        (time * 0.3) % (GRID_SIZE / GRID_DIVISIONS)
    }
  })

  return (
    <group ref={groupRef} position={[0, -3, 0]} rotation={[-0.3, 0, 0]}>
      {/* Grid lines */}
      <lineSegments geometry={gridGeometry}>
        <lineBasicMaterial
          color="#9b5de5"
          transparent
          opacity={0.06}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Intersection dots */}
      <instancedMesh ref={dotsRef} args={[undefined, undefined, DOT_COUNT]}>
        <sphereGeometry args={[0.04, 6, 6]} />
        <meshBasicMaterial
          color="#9b5de5"
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </instancedMesh>
    </group>
  )
}

export default function FloatingGridBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 4, 12], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        style={{ background: "transparent" }}
      >
        <fog attach="fog" args={["#06070d", 8, 30]} />
        <FloatingGrid />
      </Canvas>
    </div>
  )
}
