"use client";

import { Suspense, useMemo, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import { ArrowUpRight } from 'lucide-react';
import { extend } from "@react-three/fiber";
import { useInView } from "framer-motion";
import { Label } from "./ui/Label";
import { EVENTS } from "./events/data";
import { RippleCardMaterial } from "./events/RippleCardMaterial";
import { EventCard } from "./events/EventCard";
import { SplineCamera } from "./events/SplineCamera";
import { useCursorStore } from "@/store/cursorStore";

extend({ RippleCardMaterial });

export default function EventsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "0px 0px 200% 0px" });
  
  // Track scroll internally using native wheel/touch events for physics
  const scrollProgressRef = useRef(0);
  const targetScroll = useRef(0);
  const isDragging = useRef(false);
  const lastY = useRef(0);
  const velocity = useRef(0);
  
  // Rounded rectangle alpha map for cards
  const roundedAlphaMap = useMemo(() => {
    if (typeof window === 'undefined') return new THREE.Texture();
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    const radius = 60;
    
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 512, 512);
    
    ctx.beginPath();
    ctx.moveTo(radius, 0);
    ctx.lineTo(512 - radius, 0);
    ctx.quadraticCurveTo(512, 0, 512, radius);
    ctx.lineTo(512, 512 - radius);
    ctx.quadraticCurveTo(512, 512, 512 - radius, 512);
    ctx.lineTo(radius, 512);
    ctx.quadraticCurveTo(0, 512, 0, 512 - radius);
    ctx.lineTo(0, radius);
    ctx.quadraticCurveTo(0, 0, radius, 0);
    ctx.closePath();
    
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    return texture;
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    lastY.current = e.clientY;
    velocity.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const deltaY = e.clientY - lastY.current;
    lastY.current = e.clientY;
    
    // Convert pixel delta to progress delta
    const progressDelta = -(deltaY / window.innerHeight) * 0.5;
    targetScroll.current = Math.max(0, Math.min(1, targetScroll.current + progressDelta));
    velocity.current = progressDelta;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  // B6/B10 fix: Native wheel listener with { passive: false } to properly prevent Lenis/browser scroll
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onNativeWheel = (e: WheelEvent) => {
      const progressDelta = (e.deltaY / window.innerHeight) * 0.15;
      const isAtEdges = (targetScroll.current === 0 && e.deltaY <= 0) || 
                        (targetScroll.current === 1 && e.deltaY >= 0);

      if (!isAtEdges) {
        // We are inside the 3D gallery bounds — prevent page scroll
        e.preventDefault();
        e.stopPropagation();
        targetScroll.current = Math.max(0, Math.min(1, targetScroll.current + progressDelta));
        velocity.current = progressDelta;
      }
    };

    // { passive: false } is required to allow e.preventDefault()
    el.addEventListener("wheel", onNativeWheel, { passive: false });
    return () => el.removeEventListener("wheel", onNativeWheel);
  }, []);

  // Animation loop for physics
  useEffect(() => {
    let animationFrameId: number;
    
    const updatePhysics = () => {
      if (!isDragging.current) {
        // Apply momentum
        targetScroll.current = Math.max(0, Math.min(1, targetScroll.current + velocity.current));
        velocity.current *= 0.95; // Friction
        
        if (Math.abs(velocity.current) < 0.0001) {
          velocity.current = 0;
        }
      }
      
      // Smooth lerp actual progress to target
      scrollProgressRef.current += (targetScroll.current - scrollProgressRef.current) * 0.1;
      
      animationFrameId = requestAnimationFrame(updatePhysics);
    };
    
    updatePhysics();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const setCursorVariant = useCursorStore(state => state.setVariant);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen bg-transparent overflow-hidden select-none touch-none"
    >
      <div 
        className="absolute inset-0"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={(e) => {
          handlePointerUp();
          setCursorVariant('default');
        }}
        onPointerEnter={() => setCursorVariant('canvas', 'DRAG')}
      >
        <Canvas>
          <fog attach="fog" args={['#0a0a0f', 2, 18]} />
          <ambientLight intensity={1} />
          
          <Suspense fallback={null}>
            {isInView && (
              <>
                <SplineCamera scrollProgressRef={scrollProgressRef} />
                <group>
                  {EVENTS.map((ev, i) => (
                    <EventCard key={ev.id} event={ev} index={i} alphaMap={roundedAlphaMap} />
                  ))}
                </group>
              </>
            )}
          </Suspense>
          
          <Stars radius={30} depth={20} count={1000} factor={3} saturation={0} fade speed={0.5} />
        </Canvas>
      </div>

      <div className="absolute inset-0 pointer-events-none z-10 p-6 md:p-12 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="pointer-events-auto cursor-default">
            <Label className="bg-[#0a0a0f]/80 px-4 py-2 border border-blue-900/50 rounded-sm backdrop-blur-md shadow-lg" showDot={true}>EVENTS_&_PROGRAMS</Label>
          </div>
          <a href="#" className="font-mono text-[10px] md:text-xs tracking-[0.1em] text-white/70 hover:text-white uppercase transition-colors pointer-events-auto flex items-center gap-2">
            All Events <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex gap-4 font-mono text-[10px] md:text-xs tracking-widest pointer-events-auto bg-[#0a0a0f]/80 px-4 py-2 rounded-sm backdrop-blur-md border border-white/5">
            <button className="text-white font-bold text-blue-400">UPCOMING</button>
            <span className="text-white/30">/</span>
            <button className="text-white/50 hover:text-white transition-colors">PAST</button>
          </div>
          
          <a href="#" className="font-mono text-[10px] md:text-xs tracking-[0.1em] text-white/70 hover:text-white uppercase transition-colors pointer-events-auto pb-1 border-b border-white/20 hover:border-white">
            Subscribe To Updates
          </a>
        </div>
      </div>
      
    </section>
  );
}
