import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function DepthField() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ pointer }, rawDelta) => {
    const current = group.current;
    if (!current) return;
    const delta = Math.min(rawDelta, 0.05);
    current.rotation.y = THREE.MathUtils.damp(current.rotation.y, pointer.x * 0.08, 3, delta);
    current.rotation.x = THREE.MathUtils.damp(current.rotation.x, -pointer.y * 0.045, 3, delta);
  });
  return (
    <group ref={group}>
      {[[-3.8, 1.8, -2.5, 3.4], [3.7, -1.5, -1.5, 2.7], [0.8, 2.4, -3.5, 2.1]].map(([x, y, z, scale], index) => (
        <mesh key={index} position={[x, y, z]} scale={scale} rotation-z={index % 2 ? -0.2 : 0.16}>
          <planeGeometry args={[1, 1, 20, 20]} />
          <meshPhysicalMaterial color={index === 1 ? "#b59261" : "#d7c5a8"} transparent opacity={0.08} roughness={0.3} metalness={0.65} transmission={0.18} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroDepthCanvas() {
  return (
    <div className="hero-webgl" aria-hidden="true">
      <Canvas dpr={1} camera={{ position: [0, 0, 8], fov: 42 }} gl={{ antialias: false, alpha: true }}>
        <ambientLight intensity={0.45} />
        <pointLight position={[2, 4, 5]} intensity={18} color="#d7b47d" />
        <DepthField />
      </Canvas>
    </div>
  );
}
