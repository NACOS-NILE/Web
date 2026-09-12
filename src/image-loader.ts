"use client";

interface ImageKitLoaderArgs {
  src: string;
  width: number;
  quality?: number;
}

/**
 * Builds an ImageKit transformation URL, capping the requested width so the
 * fallback `src` never requests raw camera resolutions.
 */
export function buildImageKitUrl(
  src: string,
  width: number,
  quality?: number,
  maxWidth = 1400
): string {
  const clean = src.split("?")[0];
  const q = quality || 75;
  const targetWidth = Math.min(width, maxWidth);
  return `${clean}?tr=w-${targetWidth},q-${q},f-auto`;
}

/** Default Next.js `loader` for any ImageKit-hosted image (max 1400px). */
export default function imageKitLoader({ src, width, quality }: ImageKitLoaderArgs): string {
  // If it's an ImageKit URL, inject the transformation parameter
  if (src.includes("ik.imagekit.io")) {
    return buildImageKitUrl(src, width, quality, 1400);
  }

  // If it is students-1200 and requested width is small, use 480px mobile variant
  if (src.includes("students-1200") && width <= 480) {
    return "/students-480.webp";
  }

  // Local or non-ImageKit images return as-is
  return src;
}

/** Hero-specific loader: same transform, capped tighter at 1200px. */
export function imageKitHeroLoader({ src, width, quality }: ImageKitLoaderArgs): string {
  return buildImageKitUrl(src, width, quality, 1200);
}
