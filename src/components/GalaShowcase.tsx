"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Award,
  Key,
} from "lucide-react";
import { GALA_PHOTOS, GALA_ALBUM_INFO, GalaPhoto } from "@/data/nacosData";

export default function GalaShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxPhoto, setLightboxPhoto] = useState<GalaPhoto | null>(null);
  const [copiedPin, setCopiedPin] = useState(false);

  const categories = [
    "All",
    "Arrivals & Red Carpet",
    "Stage & Awards",
    "Community & Dining",
  ];

  const filteredPhotos =
    activeCategory === "All"
      ? GALA_PHOTOS
      : GALA_PHOTOS.filter((p) => p.category === activeCategory);

  const copyPinToClipboard = () => {
    navigator.clipboard.writeText(GALA_ALBUM_INFO.downloadPin);
    setCopiedPin(true);
    setTimeout(() => setCopiedPin(false), 2500);
  };

  const openLightbox = (photo: GalaPhoto) => {
    setLightboxPhoto(photo);
  };

  const closeLightbox = useCallback(() => {
    setLightboxPhoto(null);
  }, []);

  const navigateLightbox = useCallback(
    (direction: "prev" | "next") => {
      if (!lightboxPhoto) return;
      const currentIndex = filteredPhotos.findIndex(
        (p) => p.id === lightboxPhoto.id
      );
      if (currentIndex === -1) return;

      if (direction === "prev") {
        const nextIndex =
          currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1;
        setLightboxPhoto(filteredPhotos[nextIndex]);
      } else {
        const nextIndex =
          currentIndex === filteredPhotos.length - 1 ? 0 : currentIndex + 1;
        setLightboxPhoto(filteredPhotos[nextIndex]);
      }
    },
    [lightboxPhoto, filteredPhotos]
  );

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxPhoto) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        navigateLightbox("prev");
      } else if (e.key === "ArrowRight") {
        navigateLightbox("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxPhoto, closeLightbox, navigateLightbox]);

  return (
    <section
      id="gala"
      className="py-24 sm:py-32 relative bg-[#040813] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#274193]/15 via-purple-600/10 to-[#75b947]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#274193]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-[#75b947] bg-[#75b947]/10 border border-[#75b947]/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#75b947]" />
              <span>Official Chapter Album • {GALA_ALBUM_INFO.totalPhotos}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              A Colors Show: <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-[#75b947]">
                Annual Dinner & Awards Gala
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              {GALA_ALBUM_INFO.theme} — The premier annual gathering where Nile University
              computing scholars, departmental faculty, and chapter leaders celebrate academic
              achievements, honor student innovators, and forge lasting fellowship in evening elegance.
            </p>
          </div>

          {/* Album Access Card with 1-Click PIN */}
          <div className="lg:max-w-md w-full p-5 rounded-2xl bg-gradient-to-br from-[#0c152e] to-[#080d1e] border border-blue-500/20 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  Official Pixieset Album
                </span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#75b947]/10 text-[#75b947] border border-[#75b947]/30">
                163 Full-Res Photos
              </span>
            </div>

            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Browse the complete official high-resolution photo archive hosted on Pixieset with the
              official download key.
            </p>

            <div className="flex items-center gap-3">
              {/* Copy PIN Badge */}
              <button
                onClick={copyPinToClipboard}
                type="button"
                className="flex-1 flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 hover:border-white/20 transition-all text-left group"
                title="Click to copy download pin"
              >
                <div className="flex items-center gap-2">
                  <Key className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase leading-none">
                      Download PIN
                    </div>
                    <div className="text-sm font-mono font-bold text-white tracking-wider">
                      {GALA_ALBUM_INFO.downloadPin}
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-xs font-mono text-[#75b947]">
                  {copiedPin ? (
                    <span className="flex items-center gap-1 text-[11px]">
                      <Check className="w-3.5 h-3.5" /> Copied!
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                  )}
                </div>
              </button>

              {/* View Album Link */}
              <a
                href={GALA_ALBUM_INFO.galleryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs tracking-wide shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98]"
              >
                <span>Open Album</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-white/[0.06]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "bg-white/[0.04] text-slate-400 hover:bg-white/[0.08] hover:text-white border border-white/[0.04]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Photo Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo)}
              className="group break-inside-avoid relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 hover:border-blue-400/50 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-blue-950/40"
            >
              <div className="relative w-full overflow-hidden bg-slate-950">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Category Chip */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-medium tracking-wide bg-black/60 text-blue-300 backdrop-blur-md border border-white/10">
                    {photo.category}
                  </span>
                </div>

                {/* Photo Content / Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 transform transition-transform duration-300">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
                    <span className="flex items-center gap-1.5 text-[#75b947]">
                      <Award className="w-3 h-3" />
                      <span>NACOS Nile Verified</span>
                    </span>
                    <span className="text-slate-400 group-hover:text-white transition-colors">
                      Click to expand ↗
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Gallery Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900/50 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-white">
              Looking for your photos from Dinner Night?
            </h4>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              All 163 high-resolution event photographs captured by DH Media are available on the
              official Pixieset gallery with free downloads using PIN{" "}
              <strong className="text-white font-mono font-bold">2501</strong>.
            </p>
          </div>

          <a
            href={GALA_ALBUM_INFO.galleryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 transition-colors shrink-0 shadow-lg"
          >
            <span>Browse Full Gallery (163 Photos)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxPhoto.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 transition-all animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Close (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Navigation Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Navigation Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center relative"
          >
            <div className="relative max-h-[75vh] w-auto overflow-hidden rounded-xl border border-white/15 shadow-2xl">
              <Image
                src={lightboxPhoto.src}
                alt={lightboxPhoto.alt}
                width={lightboxPhoto.width}
                height={lightboxPhoto.height}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            {/* Modal Metadata Bar */}
            <div className="w-full mt-4 p-4 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    {lightboxPhoto.category}
                  </span>
                  <span className="text-xs text-slate-400">
                    A Colors Show • NACOS Nile Chapter
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {lightboxPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  {lightboxPhoto.caption}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={GALA_ALBUM_INFO.galleryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
                >
                  <span>Pixieset Album</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
