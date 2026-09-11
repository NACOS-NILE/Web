"use client";

import { useEffect, useId, useRef, useState } from "react";

const PADDING = 16;

// The displacement texture describes a curved edge; CSS owns the squircle clip.
function lensMap(width: number, height: number) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d")!;
  const pixels = context.createImageData(width, height);
  const halfW = (width - PADDING * 2) / 2;
  const halfH = (height - PADDING * 2) / 2;
  const radius = Math.min(24, halfH);
  const distance = (x: number, y: number) => {
    const qx = Math.abs(x) - halfW + radius;
    const qy = Math.abs(y) - halfH + radius;
    return Math.pow(Math.max(qx, 0) ** 4 + Math.max(qy, 0) ** 4, 0.25)
      + Math.min(Math.max(qx, qy), 0) - radius;
  };
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const px = x - width / 2;
      const py = y - height / 2;
      const d = distance(px, py);
      const dx = distance(px + 0.5, py) - distance(px - 0.5, py);
      const dy = distance(px, py + 0.5) - distance(px, py - 0.5);
      const length = Math.hypot(dx, dy) || 1;
      const bend = d <= 0 ? Math.exp(-Math.abs(d) / 5) * 0.48 : 0;
      const i = (y * width + x) * 4;
      pixels.data[i] = Math.round(255 * (0.5 - dx / length * bend));
      pixels.data[i + 1] = Math.round(255 * (0.5 - dy / length * bend));
      pixels.data[i + 2] = 128;
      pixels.data[i + 3] = 255;
    }
  }
  context.putImageData(pixels, 0, 0);
  return canvas.toDataURL();
}

/** Decorative lens only: labels and links stay on an unfiltered layer. */
export function LiquidGlass() {
  const id = useId().replace(/:/g, "");
  const surface = useRef<HTMLSpanElement>(null);
  const [lens, setLens] = useState<{ width: number; height: number; map: string }>();

  useEffect(() => {
    const element = surface.current!;
    const observer = new ResizeObserver(([entry]) => {
      const width = Math.ceil(entry.contentRect.width) + PADDING * 2;
      const height = Math.ceil(entry.contentRect.height) + PADDING * 2;
      if (width > PADDING * 2 && height > PADDING * 2) {
        setLens({ width, height, map: lensMap(width, height) });
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // A new ID for each size avoids Safari reusing a stale filter texture.
  const filterId = `${id}-${lens?.width}-${lens?.height}`;
  return (
    <span ref={surface} className="liquid-glass" aria-hidden="true">
      {lens && <>
        <svg className="liquid-glass-defs" width="0" height="0" focusable="false">
          <defs>
            <filter id={filterId} x="0" y="0" width={lens.width} height={lens.height} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feImage href={lens.map} x="0" y="0" width={lens.width} height={lens.height} result="lens" />
              <feDisplacementMap in="SourceGraphic" in2="lens" scale="24" xChannelSelector="R" yChannelSelector="G" result="bent" />
              <feGaussianBlur in="bent" stdDeviation="0.35" />
            </filter>
          </defs>
        </svg>
        <canvas data-glass-lens="" width={lens.width} height={lens.height}
          style={{ width: lens.width, height: lens.height, filter: `url(#${filterId})` }} />
      </>}
    </span>
  );
}

/** Copy from the freshly painted globe before WebGL clears its drawing buffer. */
export function paintGlassLenses(source: HTMLCanvasElement, container: HTMLElement) {
  const sourceRect = source.getBoundingClientRect();
  if (!sourceRect.width || !sourceRect.height) return;
  const scaleX = source.width / sourceRect.width;
  const scaleY = source.height / sourceRect.height;
  container.querySelectorAll<HTMLCanvasElement>("[data-glass-lens]").forEach((canvas) => {
    const context = canvas.getContext("2d");
    if (!context) return;
    const rect = canvas.parentElement!.getBoundingClientRect();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(source,
      (rect.left - PADDING - sourceRect.left) * scaleX,
      (rect.top - PADDING - sourceRect.top) * scaleY,
      canvas.width * scaleX, canvas.height * scaleY,
      0, 0, canvas.width, canvas.height);
  });
}
