"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Stars,
  PerspectiveCamera,
  Preload,
  AdaptiveDpr,
  AdaptiveEvents,
} from "@react-three/drei";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import GlassBuilding from "./GlassBuilding";
import * as THREE from "three";

function CameraRig() {
  const { camera } = useThree();
  const targetRef = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Cinematic slow orbit
    const radius = 14;
    const targetX = Math.sin(t * 0.08) * radius;
    const targetZ = Math.cos(t * 0.08) * radius;
    const targetY = 4 + Math.sin(t * 0.05) * 2;

    camera.position.x += (targetX - camera.position.x) * 0.02;
    camera.position.z += (targetZ - camera.position.z) * 0.02;
    camera.position.y += (targetY - camera.position.y) * 0.02;
    camera.lookAt(0, 3, 0);
  });

  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      shadows
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
        powerPreference: "high-performance",
      }}
      dpr={[1, 1.5]}
      style={{ position: "absolute", inset: 0 }}
    >
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />

      <PerspectiveCamera makeDefault fov={60} near={0.1} far={100} />
      <CameraRig />

      <Suspense fallback={null}>
        <Environment preset="night" />
        <Stars
          radius={50}
          depth={50}
          count={2000}
          factor={4}
          saturation={0.5}
          fade
          speed={0.5}
        />
        <GlassBuilding />

        <EffectComposer>
          <Bloom
            intensity={1.2}
            luminanceThreshold={0.6}
            luminanceSmoothing={0.9}
            blendFunction={BlendFunction.ADD}
          />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL}
            offset={[0.0005, 0.0005]}
          />
        </EffectComposer>
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
