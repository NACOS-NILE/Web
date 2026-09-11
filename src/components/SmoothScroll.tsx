"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.0, smoothWheel: true, touchMultiplier: 2 }}>
      {children}
    </ReactLenis>
  );
}

