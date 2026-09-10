"use client";
import { useEffect, useRef } from "react";

import { useCursorStore } from "@/store/cursorStore";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
  speed: number;
}

export default function LiquidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const variant = useCursorStore(state => state.variant);
  const text = useCursorStore(state => state.text);
  
  // Use refs so the render loop can access the latest state without re-binding
  const stateRef = useRef({ variant, text });
  useEffect(() => {
    stateRef.current = { variant, text };
  }, [variant, text]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let particles: Particle[] = [];
    let mouseX = width / 2;
    let mouseY = height / 2;
    let lastMouseX = width / 2;
    let lastMouseY = height / 2;
    
    let smoothSpeed = 0;
    const maxAge = 25; // Shorter age for a tighter, cleaner wake
    const maxSpeed = 80;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    let animationFrameId: number;

    // Smoothed transition values for cursor state changes
    let currentRadiusMultiplier = 1;
    let currentColor = { r: 59, g: 130, b: 246 };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const { variant: currentVariant, text: currentText } = stateRef.current;

      // Handle variant logic
      let targetRadiusMultiplier = 1;
      let targetColor = { r: 59, g: 130, b: 246 }; // Default blue

      if (currentVariant === 'button') {
        targetRadiusMultiplier = 0.5; // Tighter, sharper dot
        targetColor = { r: 255, g: 255, b: 255 }; // White glow
      } else if (currentVariant === 'canvas') {
        targetRadiusMultiplier = 2.5; // Large blob for drag/interaction
        targetColor = { r: 167, g: 139, b: 250 }; // Purple-ish
      } else if (currentVariant === 'hidden') {
        targetRadiusMultiplier = 0;
      }

      currentRadiusMultiplier += (targetRadiusMultiplier - currentRadiusMultiplier) * 0.15;
      currentColor.r += (targetColor.r - currentColor.r) * 0.1;
      currentColor.g += (targetColor.g - currentColor.g) * 0.1;
      currentColor.b += (targetColor.b - currentColor.b) * 0.1;

      const dx = mouseX - lastMouseX;
      const dy = mouseY - lastMouseY;
      const distance = Math.hypot(dx, dy);
      
      // Calculate smoothed speed for color and density
      smoothSpeed = smoothSpeed * 0.85 + distance * 0.15;

      // Only spawn when moving, and not hidden
      if (distance > 0.5 && currentVariant !== 'hidden') {
        const particlesToSpawn = Math.max(1, Math.floor(smoothSpeed / 5));
        for (let i = 0; i < particlesToSpawn; i++) {
          const t = particlesToSpawn > 1 ? i / particlesToSpawn : 1;
          particles.push({
            x: lastMouseX + dx * t,
            y: lastMouseY + dy * t,
            vx: 0,
            vy: 0,
            age: 0,
            speed: smoothSpeed
          });
        }
      }

      if (particles.length > 60) {
        particles.splice(0, particles.length - 60);
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        const target = i < particles.length - 1 ? particles[i + 1] : { x: mouseX, y: mouseY };
        p.vx += (target.x - p.x) * 0.12;
        p.vy += (target.y - p.y) * 0.12;
        p.vx *= 0.82;
        p.vy *= 0.82;
        p.x += p.vx;
        p.y += p.vy;
        p.age += 1;

        const ageRatio = p.age / maxAge;
        const trailPosition = i / particles.length;
        
        const opacity = Math.max(0, (0.75 * (1 - (ageRatio * ageRatio))) * trailPosition);
        const speedRatio = Math.min(1, p.speed / maxSpeed);
        
        // Base size logic
        const baseRadius = 22;
        const speedMultiplier = 1 + (speedRatio * 0.5);
        const radius = Math.max(0.1, baseRadius * speedMultiplier * currentRadiusMultiplier * (1 - ageRatio));

        ctx.beginPath();
        ctx.fillStyle = `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, ${opacity})`;
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      particles = particles.filter(p => p.age < maxAge);

      // Draw cursor core dot
      if (currentRadiusMultiplier > 0.1) {
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 4 * Math.max(1, currentRadiusMultiplier * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 1)`;
        ctx.fill();
      }

      // Draw text if canvas state
      if (currentVariant === 'canvas' && currentText && currentRadiusMultiplier > 1.5) {
        ctx.font = "bold 10px monospace";
        ctx.fillStyle = "rgba(0,0,0,0.8)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.letterSpacing = "2px";
        ctx.fillText(currentText, mouseX, mouseY);
      }

      lastMouseX = mouseX;
      lastMouseY = mouseY;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <svg className="fixed pointer-events-none" style={{ width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
          <feColorMatrix 
            in="blur" 
            mode="matrix" 
            values="1 0 0 0 0  
                    0 1 0 0 0  
                    0 0 1 0 0  
                    0 0 0 25 -10" 
            result="goo" 
          />
        </filter>
      </svg>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-40 mix-blend-screen"
        style={{ filter: "url(#goo)" }}
      />
    </>
  );
}
