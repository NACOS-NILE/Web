"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface DinnerNightProps {
  images: string[];
}

export default function DinnerNight({ images }: DinnerNightProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  if (images.length === 0) {
    return (
      <section
        id="dinner-night"
        className="section-padding bg-gray-50"
        aria-label="NACOS Nile Dinner Night"
      >
        <div className="container-nacos">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">NACOS Nile &bull; Dinner Night</p>
            <h2 className="section-heading">NACOS Nile Dinner Night</h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              A look back at the people, moments, and memories that make our
              community more than just tech.
            </p>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-sm p-12 text-center">
            <p className="text-sm text-gray-400">
              Dinner Night photos coming soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const featured = images[0];
  const grid = images.slice(1);

  return (
    <section
      id="dinner-night"
      className="section-padding bg-gray-50"
      aria-label="NACOS Nile Dinner Night"
    >
      <div className="container-nacos">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-4">NACOS Nile &bull; Dinner Night</p>
          <h2 className="section-heading">NACOS Nile Dinner Night</h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            A look back at the people, moments, and memories that make our
            community more than just tech.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Featured image */}
          <button
            onClick={() => openLightbox(0)}
            className="group relative aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto overflow-hidden rounded-sm bg-nacos-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-nacos-500 focus-visible:ring-offset-2"
            aria-label="View featured Dinner Night photo"
          >
            <Image
              src={featured}
              alt="NACOS Nile Dinner Night - Featured photo"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* Grid images */}
          {grid.map((src, i) => (
            <button
              key={src}
              onClick={() => openLightbox(i + 1)}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-nacos-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-nacos-500 focus-visible:ring-offset-2"
              aria-label={`View Dinner Night photo ${i + 2}`}
            >
              <Image
                src={src}
                alt={`NACOS Nile Dinner Night - Photo ${i + 2}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>

        {/* View Full Gallery button */}
        <div className="mt-10 text-center">
          <a
            href="https://dhmedia270.pixieset.com/acolorsshownacosnilechapter/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View Full Gallery
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Dinner Night photo lightbox"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white p-2 rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 z-10"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Previous button */}
          {images.length > 1 && (
            <button
              onClick={goPrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 z-10"
              aria-label="Previous photo"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={goNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 z-10"
              aria-label="Next photo"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* Image */}
          <div className="relative w-[90vw] h-[80vh] max-w-5xl">
            <Image
              src={images[currentIndex]}
              alt={`NACOS Nile Dinner Night - Photo ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs font-medium tracking-wider">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}