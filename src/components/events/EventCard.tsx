"use client";

import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { ArrowUpRight } from "lucide-react";
import { sCurvePath } from "./SplinePath";
import { CARD_WIDTH, HEIGHT, TOTAL_CARDS } from "./data";
import { useCursorStore } from "@/store/cursorStore";

import { ThreeEvent } from "@react-three/fiber";

interface EventType {
  id: string | number;
  title: string;
  category: string;
  image: string;
}

// HTML Wrapper that tracks the 3D position exactly (including the bend offset)
function TrackedHtml({ position, uBendDir, children }: { position: [number, number, number], uBendDir: number, children: React.ReactNode }) {
  // Apply the same parabola bend calculation as the vertex shader
  const bentZ = position[2] + (position[0] * position[0] * uBendDir);
  return (
    <Html position={[position[0], position[1], bentZ]} center zIndexRange={[100, 0]}>
      {children}
    </Html>
  );
}

export function EventCard({ event, index, alphaMap }: { event: EventType, index: number, alphaMap: THREE.Texture }) {
  const rawTexture = useTexture(event.image) as THREE.Texture;
  const texture = useMemo(() => {
    const t = rawTexture.clone();
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, [rawTexture]);
  
  const [hovered, setHovered] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const materialRef = useRef<any>(null); // We keep any here for custom shader material as it lacks tight typing
  const groupRef = useRef<THREE.Group>(null);
  
  // Calculate this card's fixed position and orientation along the Spline
  // We center the 8 cards in the middle of the path
  const t = 0.1 + (index * (0.8 / TOTAL_CARDS)); // Distribute from t=0.1 to t=0.9
  const pos = sCurvePath.getPointAt(t);
  const tangent = sCurvePath.getTangentAt(t);
  // Face backwards towards the camera
  const lookTarget = pos.clone().sub(tangent);

  // Calculate local curvature to pass to vertex shader for bending
  const tNext = Math.min(1, t + 0.01);
  const tPrev = Math.max(0, t - 0.01);
  const tangentNext = sCurvePath.getTangentAt(tNext);
  const tangentPrev = sCurvePath.getTangentAt(tPrev);
  const deltaTangent = tangentNext.clone().sub(tangentPrev);
  
  // Approximate curvature amount and sign (bending left or right)
  const cross = new THREE.Vector3().crossVectors(tangent, deltaTangent);
  const bendDir = cross.y * 2.0; // Drastically reduced scalar for a subtle bend

  const titlePos: [number, number, number] = [-CARD_WIDTH / 2 + 0.4, -HEIGHT / 2 + 0.8, 0.1];
  const catPos: [number, number, number] = [CARD_WIDTH / 2 - 0.4, HEIGHT / 2 - 0.5, 0.1];
  const btnPos: [number, number, number] = [CARD_WIDTH / 2 - 0.5, -HEIGHT / 2 + 0.6, 0.1];

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uHover = THREE.MathUtils.lerp(materialRef.current.uHover, hovered ? 1 : 0, 0.1);
      materialRef.current.uTime = state.clock.elapsedTime;
    }
  });

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation(); 
    // B9 fix: Remove document.body.style.cursor — cursorStore handles all cursor state
    setHovered(true);
    if (materialRef.current && e.uv) {
       materialRef.current.uRippleOrigin.set(e.uv.x, e.uv.y);
       materialRef.current.uRippleStartTime = performance.now() / 1000;
    }
  };

  const setCursorVariant = useCursorStore(state => state.setVariant);

  return (
    <group position={pos} onUpdate={self => self.lookAt(lookTarget)} ref={groupRef}>
      <mesh 
        onPointerOver={handlePointerOver} 
        onPointerOut={() => { setHovered(false); }}
        onPointerMove={(e: ThreeEvent<PointerEvent>) => {
          if (materialRef.current && hovered && e.uv) {
            materialRef.current.uRippleOrigin.set(e.uv.x, e.uv.y);
            const now = performance.now() / 1000;
            if (now - materialRef.current.uRippleStartTime > 0.15) {
               materialRef.current.uRippleStartTime = now;
            }
          }
        }}
      >
        <planeGeometry args={[CARD_WIDTH, HEIGHT, 40, 40]} />
        {/* @ts-expect-error custom material */}
        <rippleCardMaterial 
          ref={materialRef} 
          uTexture={texture} 
          uAlphaMap={alphaMap}
          uBendDir={bendDir}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* HTML Overlays bound to specific local 3D positions */}
      <TrackedHtml position={titlePos} uBendDir={bendDir}>
        <div 
          className="w-[200px] pointer-events-none transition-transform duration-500 origin-bottom-left"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
        >
          <h3 className="font-sans font-black text-2xl md:text-3xl text-white uppercase leading-[0.9] tracking-tighter drop-shadow-lg">
            {event.title}
          </h3>
        </div>
      </TrackedHtml>

      <TrackedHtml position={catPos} uBendDir={bendDir}>
        <div className="pointer-events-none">
          <span className="font-mono text-[10px] tracking-[0.2em] text-blue-400 bg-black/60 px-3 py-1.5 border border-blue-500/30 rounded backdrop-blur-md whitespace-nowrap shadow-lg">
            {event.category}
          </span>
        </div>
      </TrackedHtml>

      <TrackedHtml position={btnPos} uBendDir={bendDir}>
        <a 
          href="#" 
          onMouseEnter={() => setCursorVariant('button')}
          onMouseLeave={() => setCursorVariant('canvas', 'DRAG')} // Restore canvas state since we are inside it
          className="w-10 h-10 md:w-12 md:h-12 bg-white text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:text-white cursor-pointer pointer-events-auto shadow-xl"
        >
          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
        </a>
      </TrackedHtml>
    </group>
  );
}
