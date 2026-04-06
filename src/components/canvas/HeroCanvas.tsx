"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, ContactShadows, Sphere, PerspectiveCamera } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

function Particles() {
  const count = 40;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  return (
    <>
      {[...Array(count)].map((_, i) => (
        <Float key={i} speed={0.5} rotationIntensity={1} floatIntensity={1}>
          <Sphere args={[0.02, 16, 16]} position={[positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]]}>
            <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={5} transparent opacity={0.3} />
          </Sphere>
        </Float>
      ))}
    </>
  );
}

function EngineeringAssembly() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();
  const [entranceScale, setEntranceScale] = useState(0);

  useEffect(() => {
    setEntranceScale(1);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Entrance Scale Animation
      groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, entranceScale, 0.05));
      
      // Smooth mouse parallax
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.3, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.3, 0.02);
    }
    
    if (ringRef1.current) ringRef1.current.rotation.z = time * 0.2;
    if (ringRef2.current) ringRef2.current.rotation.z = -time * 0.3;
    if (coreRef.current) coreRef.current.rotation.y = time * 0.1;
  });

  return (
    <group ref={groupRef} scale={0}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Core turbine geometry */}
        <mesh ref={coreRef}>
          <torusKnotGeometry args={[1.5, 0.4, 200, 32, 2, 3]} />
          <meshStandardMaterial 
            color="#00d4ff" 
            metalness={1} 
            roughness={0.1} 
            emissive="#00d4ff" 
            emissiveIntensity={0.2}
            wireframe
          />
        </mesh>

        {/* Inner glow core */}
        <mesh>
          <sphereGeometry args={[0.8, 32, 32]} />
          <MeshDistortMaterial
            color="#00d4ff"
            metalness={1}
            roughness={0}
            distort={0.4}
            speed={3}
            emissive="#00d4ff"
            emissiveIntensity={2}
          />
        </mesh>

        {/* Outer technical rings */}
        <mesh ref={ringRef1} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.5, 0.02, 16, 100]} />
          <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={2} />
        </mesh>
        
        <mesh ref={ringRef2} rotation={[Math.PI / 2.5, Math.PI / 4, 0]}>
          <torusGeometry args={[2.8, 0.01, 16, 100]} />
          <meshStandardMaterial color="#2563eb" emissive="#2563eb" emissiveIntensity={1} />
        </mesh>

        {/* Technical Fins/Blades */}
        {[...Array(8)].map((_, i) => (
          <group key={i} rotation={[0, 0, (i * Math.PI) / 4]}>
            <mesh position={[2, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
              <boxGeometry args={[0.8, 0.05, 0.2]} />
              <meshStandardMaterial color="#0d1117" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        ))}
      </Float>
    </group>
  );
}

export default function HeroCanvas() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />
        
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={10} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={5} color="#2563eb" />
        <pointLight position={[0, 5, 0]} intensity={2} color="#ffffff" />
        
        <EngineeringAssembly />
        <Particles />
        
        <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={15} blur={2} far={4.5} />
        <Environment preset="night" />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-[#050816]/30 z-10 pointer-events-none" />
    </div>
  );
}
