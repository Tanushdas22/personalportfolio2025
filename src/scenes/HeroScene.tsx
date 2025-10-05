import { useMemo, useRef } from 'react'
import { InstancedMesh, Object3D, Vector2, Vector3 } from 'three'
import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const NUM_PARTICLES = 120
const ATTRACTION_RADIUS = 2.0
const ATTRACTION_STRENGTH = 6.0
const DAMPING = 0.98

export function HeroScene() {
  return (
    <>
      <color attach="background" args={[0, 0, 0]} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <ParticleUniverse />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  )
}

function ParticleUniverse() {
  const dummy = useMemo(() => new Object3D(), [])
  const meshRef = useRef<InstancedMesh>(null)
  const velocities = useRef(Array.from({ length: NUM_PARTICLES }, () => new Vector3()))
  const positions = useRef(
    Array.from({ length: NUM_PARTICLES }, () =>
      new Vector3(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
      ),
    ),
  )
  const cursor = useRef(new Vector3())
  const mouse = useRef(new Vector2())
  const lastMouse = useRef(new Vector2())
  const mouseVelocity = useRef(new Vector2())

  useFrame(({ mouse: m, camera }, delta) => {
    mouse.current.set(m.x, m.y)
    const mv = mouseVelocity.current
    mv.copy(mouse.current).sub(lastMouse.current)
    lastMouse.current.copy(mouse.current)

    cursor.current.set(m.x, m.y, 0.5).unproject(camera)

    for (let i = 0; i < NUM_PARTICLES; i++) {
      const p = positions.current[i]
      const v = velocities.current[i]

      // Attraction/repulsion based on distance from cursor and mouse velocity
      const dir = new Vector3().subVectors(p, cursor.current)
      const dist = dir.length()
      if (dist < ATTRACTION_RADIUS) {
        const influence = (1 - dist / ATTRACTION_RADIUS) * ATTRACTION_STRENGTH
        const repulse = dir.normalize().multiplyScalar(influence * delta)
        const mouseBoost = new Vector3(mv.x, mv.y, 0).multiplyScalar(8 * delta)
        v.add(repulse).add(mouseBoost)
      }

      // Gentle pull towards origin to keep swarm contained
      const toCenter = p.clone().multiplyScalar(-0.5 * delta)
      v.add(toCenter)

      // Integrate and damp
      p.addScaledVector(v, delta)
      v.multiplyScalar(DAMPING)

      // Instance transform
      dummy.position.copy(p)
      dummy.scale.setScalar(0.04)
      dummy.updateMatrix()
      meshRef.current?.setMatrixAt(i, dummy.matrix)
    }
    if (meshRef.current) meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined as any, undefined as any, NUM_PARTICLES]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial emissive={0x2dd4bf} color={0x0ea5e9} metalness={0.2} roughness={0.4} />
    </instancedMesh>
  )
}


