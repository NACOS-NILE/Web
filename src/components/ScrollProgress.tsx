"use client";

import { useEffect, useRef } from "react";
import { listenToScroll } from "@/lib/utils";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(
    () =>
      listenToScroll(() => {
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0;

        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${progress})`;
        }
      }),
    []
  );

  return <div className="scroll-progress" ref={barRef} aria-hidden="true" />;
}
