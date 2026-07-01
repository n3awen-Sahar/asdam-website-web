"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import {
  MeshTransmissionMaterial,
  Float,
  Environment,
  Sparkles,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

function GlassPanel({
  position,
  rotation,
  size,
  delay = 0,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  size: [number, number, number];
  delay?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    // Dynamic transmission handled by MeshTransmissionMaterial props
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <boxGeometry args={size} />
      <MeshTransmissionMaterial
        backside
        samples={6}
        thickness={0.1}
        roughness={0.02}
        transmission={0.96}
        ior={1.5}
        chromaticAberration={0.02}
        color="#C8E8FF"
        envMapIntensity={2}
        distortionScale={0.1}
        temporalDistortion={0.05}
      />
    </mesh>
  );
}

function SkyscraperTower({
  position,
  height,
  width,
  delay,
}: {
  position: [number, number, number];
  height: number;
  width: number;
  delay: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const floors = Math.floor(height / 0.4);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.1 + delay) * 0.02;
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Main tower body */}
      <GlassPanel
        position={[0, height / 2, 0]}
        size={[width, height, width * 0.8]}
        delay={delay}
      />

      {/* Floor lines */}
      {Array.from({ length: Math.min(floors, 20) }).map((_, i) => (
        <mesh
          key={i}
          position={[0, i * (height / Math.min(floors, 20)), 0]}
        >
          <boxGeometry args={[width + 0.01, 0.01, width * 0.8 + 0.01]} />
          <meshStandardMaterial
            color="#7ECFEA"
            emissive="#00E5FF"
            emissiveIntensity={0.3}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}

      {/* Antenna */}
      <mesh position={[0, height + 0.5, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 1, 8]} />
        <meshStandardMaterial
          color="#00E5FF"
          emissive="#00E5FF"
          emissiveIntensity={1}
        />
      </mesh>

      {/* Top glow */}
      <pointLight
        position={[0, height + 0.3, 0]}
        intensity={2}
        color="#00E5FF"
        distance={3}
      />
    </group>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 300;

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = Math.random() * 20 - 2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
      sz[i] = Math.random() * 0.03 + 0.01;
    }
    return [pos, sz];
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;
    const t = state.clock.elapsedTime;
    const posArr = particlesRef.current.geometry.attributes.position
      .array as Float32Array;
    for (let i = 0; i < count; i++) {
      posArr[i * 3 + 1] += 0.005;
      if (posArr[i * 3 + 1] > 18) posArr[i * 3 + 1] = -2;
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    particlesRef.current.rotation.y = t * 0.02;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          args={[positions, 3]}
          attach="attributes-position"
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#7ECFEA"
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function SkyReflections() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <mesh ref={meshRef} position={[0, 5, 0]}>
      <sphereGeometry args={[25, 32, 32]} />
      <meshStandardMaterial
        color="#0A1628"
        side={THREE.BackSide}
        emissive="#050A1A"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function GlassBuilding() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.08;
  });

  const towers = [
    { position: [0, 0, 0] as [number,number,number], height: 8, width: 1.2, delay: 0 },
    { position: [-2.5, 0, -1] as [number,number,number], height: 6, width: 0.9, delay: 0.5 },
    { position: [2.5, 0, -1] as [number,number,number], height: 6.5, width: 0.9, delay: 1 },
    { position: [-1.5, 0, 1.5] as [number,number,number], height: 4.5, width: 0.7, delay: 1.5 },
    { position: [1.5, 0, 1.5] as [number,number,number], height: 5, width: 0.7, delay: 2 },
    { position: [-4, 0, 0] as [number,number,number], height: 3.5, width: 0.6, delay: 2.5 },
    { position: [4, 0, 0] as [number,number,number], height: 3, width: 0.6, delay: 3 },
  ];

  return (
    <>
      <SkyReflections />
      <FloatingParticles />

      <group ref={groupRef}>
        {towers.map((tower, i) => (
          <SkyscraperTower key={i} {...tower} />
        ))}

        {/* Ground plane - glass */}
        <mesh position={[0, -0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[20, 20, 1, 1]} />
          <MeshTransmissionMaterial
            backside={false}
            samples={4}
            thickness={0.05}
            roughness={0.1}
            transmission={0.5}
            ior={1.3}
            color="#0A1628"
            envMapIntensity={1}
          />
        </mesh>

        {/* Ground grid */}
        <gridHelper
          args={[20, 20, "#00E5FF", "#1A2A4A"]}
          position={[0, 0, 0]}
        />
      </group>

      {/* Dynamic lights */}
      <Float speed={0.5} rotationIntensity={0} floatIntensity={0.5}>
        <pointLight
          position={[8, 12, 8]}
          intensity={20}
          color="#7ECFEA"
          distance={30}
        />
      </Float>
      <Float speed={0.3} rotationIntensity={0} floatIntensity={0.3}>
        <pointLight
          position={[-8, 10, -5]}
          intensity={15}
          color="#4080FF"
          distance={25}
        />
      </Float>
      <ambientLight intensity={0.2} color="#050A1A" />
      <directionalLight
        position={[5, 10, 5]}
        intensity={3}
        color="#ffffff"
        castShadow
      />
    </>
  );
}
