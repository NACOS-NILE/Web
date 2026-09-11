"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { QualityPreference, QualityState } from "../../adaptive-quality/quality";
import type { Renderer } from "../../adaptive-quality/renderer";
import { HeroCarousel } from "@/components/hero-carousel";

const motionQuery = "(prefers-reduced-motion: reduce)";
const reasonLabels = {
  initial: "Auto quality",
  forced: "Selected quality",
  "gpu-tier": "Adapted to your device",
  battery: "Saving battery",
  "data-saver": "Saving resources",
  "frame-health": "Adapted for smoother motion",
} satisfies Record<QualityState["reason"], string>;

function subscribeMotion(callback: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function subscribeAppearance(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

export function AdaptiveQualityHero() {
  const darkMode = useSyncExternalStore(
    subscribeAppearance,
    () => document.documentElement.classList.contains("dark"),
    () => false,
  );
  const reducedMotion = useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia(motionQuery).matches,
    () => true,
  );
  const [status, setStatus] = useState<"loading" | "ready" | "unavailable">("loading");
  const [quality, setQuality] = useState<QualityState>({
    preference: "auto", effective: "high", reason: "initial",
  });
  const canvasHostRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const preferenceRef = useRef<QualityPreference>("auto");
  const enabled = !reducedMotion;

  useEffect(() => {
    const host = canvasHostRef.current;
    if (!host || !enabled) return;
    // OffscreenCanvas transfer is permanent. Each effect owns a fresh canvas,
    // including Fast Refresh and Strict Mode remounts.
    const canvas = document.createElement("canvas");
    canvas.className = "block h-full w-full";
    host.appendChild(canvas);
    let cancelled = false;
    let renderer: Renderer | undefined;
    let unsubscribe: (() => void) | undefined;

    async function start() {
      try {
        // Load the GPU code only in a browser that permits this animation.
        if (!navigator.gpu) throw new Error("WebGPU is unavailable");
        const { createRenderer } = await import("../../adaptive-quality/renderer");
        if (cancelled) return;
        setStatus("loading");
        renderer = createRenderer({
          canvas, initialPreference: preferenceRef.current, daylight: !darkMode,
          onError: () => { if (!cancelled) setStatus("unavailable"); },
        });
        rendererRef.current = renderer;
        unsubscribe = renderer.subscribe(setQuality);
        await renderer.ready;
        if (cancelled) return;
        setQuality(renderer.getState());
        setStatus("ready");
      } catch {
        if (cancelled) return;
        unsubscribe?.();
        renderer?.dispose();
        rendererRef.current = null;
        setStatus("unavailable");
      }
    }

    void start();
    return () => {
      cancelled = true;
      unsubscribe?.();
      rendererRef.current = null;
      renderer?.dispose();
      canvas.remove();
    };
  }, [enabled, darkMode]);

  const ready = enabled && status === "ready";
  const label = reducedMotion ? "Reduced motion"
    : status === "unavailable" ? "Static background"
    : ready ? `${reasonLabels[quality.reason]} · ${quality.effective === "high" ? "High" : "Low"}`
    : "Starting animation";

  return (
    <>
      <div className="adaptive-hero-backdrop">
        {enabled && <div ref={canvasHostRef} className={`adaptive-hero-canvas transition-opacity duration-700 motion-reduce:transition-none ${ready ? "opacity-100" : "opacity-0"}`} />}
        <div className="adaptive-hero-scrim pointer-events-none absolute inset-0" aria-hidden="true" />
        <HeroCarousel />
      </div>
      <span role="status" className="sr-only">{label}</span>
    </>
  );
}
