"use client";

import React, { useState, useEffect, useRef } from "react";

interface TypewriterBadgeProps {
  text: string;
  className?: string;
  speed?: number;
}

export default function TypewriterBadge({
  text,
  className = "",
  speed = 35,
}: TypewriterBadgeProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplayedText(text);
      setIsComplete(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          setIsTyping(true);

          let currentIndex = 0;
          const timer = setInterval(() => {
            if (currentIndex < text.length) {
              setDisplayedText(text.slice(0, currentIndex + 1));
              currentIndex++;
            } else {
              clearInterval(timer);
              setIsTyping(false);
              setIsComplete(true);
            }
          }, speed);

          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.2,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [text, speed]);

  return (
    <div
      ref={ref}
      className={`inline-flex items-center text-[11px] font-semibold text-nacos-accent-light uppercase tracking-widest px-3 py-1 rounded-full bg-nacos-blue/20 border border-nacos-accent/30 backdrop-blur-sm ${className}`}
    >
      <span>{displayedText}</span>
      {isTyping && !isComplete && (
        <span className="inline-block w-0.5 h-3.5 bg-nacos-accent-light animate-pulse ml-1" />
      )}
    </div>
  );
}
