"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursorStore } from "@/store/cursorStore";

export default function LiquidCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const variant = useCursorStore(state => state.variant);
  const text = useCursorStore(state => state.text);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    
    const handleMouseLeave = () => setIsVisible(false);
    
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);
  
  if (typeof window === "undefined") return null;

  let size = 20;
  let bg = "rgba(59, 130, 246, 0.4)";
  let border = "1px solid rgba(59, 130, 246, 0.8)";
  
  if (variant === "button") {
    size = 40;
    bg = "rgba(255, 255, 255, 0.1)";
    border = "1px solid rgba(255, 255, 255, 0.8)";
  } else if (variant === "canvas") {
    size = 80;
    bg = "rgba(167, 139, 250, 0.2)";
    border = "1px solid rgba(167, 139, 250, 0.5)";
  }

  return (
    <>
      {/* Center dot */}
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[100]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible && variant !== "hidden" ? 1 : 0
        }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99] flex items-center justify-center backdrop-blur-sm"
        animate={{ width: size, height: size }}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: bg,
          border: border,
          opacity: isVisible && variant !== "hidden" ? 1 : 0
        }}
      >
        {variant === "canvas" && text && (
          <span className="text-[10px] font-mono font-bold tracking-widest text-white/80 uppercase">
            {text}
          </span>
        )}
      </motion.div>
    </>
  );
}

