"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const fadeDelay = prefersReducedMotion ? 0 : 1100;
    const hideDelay = prefersReducedMotion ? 0 : 1600;

    const fadeTimer = setTimeout(() => setFadingOut(true), fadeDelay);
    const hideTimer = setTimeout(() => setVisible(false), hideDelay);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-nacos-navy transition-opacity duration-500 ${
        fadingOut ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <Image
        src="/logo.svg"
        alt=""
        width={220}
        height={105}
        priority
        className="h-20 w-auto animate-rise-in sm:h-24"
      />
      <span
        className="animate-rise-in text-xl font-bold tracking-tight text-white sm:text-2xl"
        style={{ animationDelay: "150ms" }}
      >
        NACOS Nile
      </span>
    </div>
  );
}
