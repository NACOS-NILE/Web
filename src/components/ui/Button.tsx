"use client";

import { ArrowRight } from "lucide-react";
import MagneticButton from "../MagneticButton";
import { ReactNode } from "react";
import { useCursorStore } from "@/store/cursorStore";

export type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  showArrow?: boolean;
  className?: string;
  magnetic?: boolean;
}

export function Button({ 
  children, 
  variant = "primary", 
  href, 
  onClick, 
  showArrow = true,
  className = "",
  magnetic = true
}: ButtonProps) {
  const baseStyles = "group relative flex items-center gap-3 px-8 py-4 text-xs font-mono font-bold tracking-widest text-white transition-all duration-300 overflow-hidden";
  
  const variants = {
    primary: "bg-highlight shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]",
    outline: "border border-white/20 bg-transparent hover:border-white",
    ghost: "bg-transparent text-white/70 hover:text-white"
  };

  const content = (
    <>
      {variant === "outline" && (
        // A7 fix: scaleY + transformOrigin:bottom is GPU-composited, no repaint
        <div className="absolute inset-0 bg-white origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
      )}
      
      <span className={`relative z-10 transition-colors duration-300 ${variant === "outline" ? "group-hover:text-black" : ""}`}>
        {children}
      </span>

      {showArrow && (
        <ArrowRight 
          size={14} 
          className={`relative z-10 transition-transform duration-300 group-hover:translate-x-1 ${variant === "outline" ? "group-hover:text-black" : ""}`} 
        />
      )}
    </>
  );

  const setCursorVariant = useCursorStore(state => state.setVariant);

  const handleMouseEnter = () => setCursorVariant('button');
  const handleMouseLeave = () => setCursorVariant('default');

  const inner = href ? (
    <a href={href} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </a>
  ) : (
    <button onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );

  if (magnetic) {
    return <MagneticButton>{inner}</MagneticButton>;
  }

  return inner;
}
