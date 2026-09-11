"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IK_ENDPOINT = "https://ik.imagekit.io/nacosnile";
const DINNER_PATH = "gallery/DinnerNight/2026";

// Generates an optimized ImageKit URL with real-time transformations
const getIkUrl = (index: number, width: number, quality = 80) => {
  return `${IK_ENDPOINT}/${DINNER_PATH}/img${index}.webp?tr=w-${width},q-${quality},f-auto`;
};

// Deterministic pseudo-random shuffle (SSR-safe, avoids hydration mismatch while scattering camera burst numbers)
function getShuffledIndices(total: number, seed = 2026): number[] {
  let s = seed;
  const nextRandom = () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
  const list = Array.from({ length: total }, (_, i) => i);
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(nextRandom() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

const RANDOMIZED_INDICES = getShuffledIndices(164, 2026);

const ALL_IMAGES = RANDOMIZED_INDICES.map((origIndex) => ({
  thumb: getIkUrl(origIndex, 500, 80),   // WebP/AVIF compressed thumbnail for grid (~30-50KB)
  full: getIkUrl(origIndex, 1600, 85),   // Crisp high-res for lightbox view
  alt: `NACOS Dinner Night 2026 — Photo ${origIndex + 1}`,
}));

const PAGE_SIZE = 24;

// ── Dynamic Asymmetric Span Pattern for Editorial Masonry ─────────────────────
const getTileSpan = (index: number) => {
  const mod = index % 10;
  if (mod === 0) return "col-span-2 row-span-2"; // Large feature square
  if (mod === 3) return "col-span-1 row-span-2"; // Tall portrait
  if (mod === 5) return "col-span-2 row-span-1"; // Wide landscape banner
  if (mod === 7) return "col-span-1 row-span-2"; // Tall portrait
  return "col-span-1 row-span-1";                // Standard tile
};

// ── Skeleton shimmer tile ─────────────────────────────────────────────────────
function ImageTile({
  src,
  alt,
  spanClass = "col-span-1 row-span-1",
  priority = false,
  onClick,
}: {
  src: string;
  alt: string;
  spanClass?: string;
  priority?: boolean;
  onClick: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`relative ${spanClass} rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 group cursor-pointer`}
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 240px" }}
    >
      {/* Shimmer skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-100" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        style={{ aspectRatio: "4 / 3" }}
        className={`object-cover object-top transition-[opacity,transform] duration-300 ease-out group-hover:scale-105 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
    </div>
  );
}

export default function GalleryPage() {
  const [count,    setCount]   = useState(PAGE_SIZE);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const visible = ALL_IMAGES.slice(0, count);

  // ── Infinite scroll ───────────────────────────────────────────────────────
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount((c) => Math.min(c + PAGE_SIZE, ALL_IMAGES.length));
        }
      },
      { rootMargin: "150px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ── Lightbox keyboard nav ─────────────────────────────────────────────────
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const goPrev = useCallback(() =>
    setLightbox((p) => (p === null ? null : (p - 1 + ALL_IMAGES.length) % ALL_IMAGES.length)), []);
  const goNext = useCallback(() =>
    setLightbox((p) => (p === null ? null : (p + 1) % ALL_IMAGES.length)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     closeLightbox();
      if (e.key === "ArrowLeft")  goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeLightbox, goPrev, goNext]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <div className="min-h-screen bg-white text-gray-950 flex flex-col selection:bg-[#274193] selection:text-white">
      {/* FLOATING SIGNATURE FROSTED NAVBAR */}
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-20 sm:pb-28 w-full">

        {/* HEADER */}
        <div className="mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-gray-600 font-bold mb-3">
            NACOS Nile · 2026
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-950 tracking-[-0.035em] leading-[1.08]">
            Dinner Night 2026
          </h1>
          <p className="text-sm text-gray-600 font-mono mt-4">
            {ALL_IMAGES.length} photos
          </p>
        </div>

        {/* ASYMMETRIC MASONRY DENSE GRID (VARIOUS SIZES) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] xs:auto-rows-[190px] sm:auto-rows-[220px] lg:auto-rows-[250px] grid-flow-dense gap-2 sm:gap-3.5">
          {visible.map((img, i) => (
            <ImageTile
              key={i}
              src={img.thumb}
              alt={img.alt}
              spanClass={getTileSpan(i)}
              priority={i < 4}
              onClick={() => setLightbox(i)}
            />
          ))}

          {/* Skeleton placeholders while next batch hasn't loaded yet */}
          {count < ALL_IMAGES.length &&
            Array.from({ length: 4 }).map((_, i) => (
              <div
                key={`sk-${i}`}
                className="relative col-span-1 row-span-1 rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100"
              >
                <div className="absolute inset-0 bg-gray-100" />
              </div>
            ))}
        </div>

        {/* Invisible sentinel triggers next page load */}
        <div ref={sentinelRef} className="h-px mt-10" />

        {/* Loading indicator */}
        {count < ALL_IMAGES.length && (
          <div className="flex justify-center py-8">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />
            </div>
          </div>
        )}

        {count >= ALL_IMAGES.length && (
          <p className="text-center text-xs font-mono text-gray-500 py-8">
            All {ALL_IMAGES.length} photos loaded
          </p>
        )}
      </main>

      {/* FOOTER */}
      <Footer />

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/96 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-xs font-mono text-white/40 z-20 select-none">
            {lightbox + 1} / {ALL_IMAGES.length}
          </div>

          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-3 sm:left-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ height: "min(82vh, 720px)" }}>
              <Image
                src={ALL_IMAGES[lightbox].full}
                alt={ALL_IMAGES[lightbox].alt}
                fill
                unoptimized
                sizes="100vw"
                style={{ aspectRatio: "16 / 10" }}
                className="object-contain"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-3 sm:right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
