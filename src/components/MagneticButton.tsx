"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useCursorStore } from "@/store/cursorStore";

export default function MagneticButton({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const setCursorVariant = useCursorStore(state => state.setVariant);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 }); // 0.2 is the magnetic strength
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    setCursorVariant('default');
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setCursorVariant('button')}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      // A8 fix: heavier mass = satisfying magnetic lag, not instant snap
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.4 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
