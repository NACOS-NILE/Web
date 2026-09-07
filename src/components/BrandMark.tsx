import Image from "next/image";
import { NACOS_LOGO_SRC } from "@/lib/logo-assets.generated";

const SIZES = {
  xs: { mark: "h-3.5", divider: "h-2.5", gap: "gap-1.5" },
  sm: { mark: "h-6", divider: "h-4.5", gap: "gap-2" },
  md: { mark: "h-8", divider: "h-6", gap: "gap-2.5" },
  lg: { mark: "h-11 sm:h-12", divider: "h-8 sm:h-9", gap: "gap-3" },
} as const;

/**
 * The NACOS national seal and the Nile University of Nigeria emblem,
 * shown together wherever the two organizations' identity is represented,
 * separated by a short vertical divider.
 */
const NILE_VARIANTS = {
  wordmark: { src: "/logos/nile-university.svg", width: 153, height: 36 },
  icon: { src: "/logos/nile-crest.svg", width: 29, height: 36 },
} as const;

export function BrandMark({
  size = "md",
  tone = "auto",
  decorative = false,
  nileVariant = "wordmark",
  className = "",
}: {
  size?: keyof typeof SIZES;
  /** "auto" follows the site's light/dark toggle; "dark" is fixed white, for marks placed on an always-dark section. */
  tone?: "auto" | "dark";
  decorative?: boolean;
  /** "wordmark" is the full Nile University logo (crest + name); "icon" is the crest alone, no text. */
  nileVariant?: keyof typeof NILE_VARIANTS;
  className?: string;
}) {
  const { mark, divider, gap } = SIZES[size];
  const dividerColor = tone === "dark" ? "bg-white/25" : "bg-nacos-dark/20 dark:bg-white/25";
  const nile = NILE_VARIANTS[nileVariant];

  return (
    <span
      className={`inline-flex items-center ${gap} ${className}`}
      aria-hidden={decorative ? "true" : undefined}
    >
      <span
        className={`relative inline-block ${mark} aspect-square shrink-0 overflow-hidden rounded-full`}
      >
        <Image
          src={NACOS_LOGO_SRC}
          alt={decorative ? "" : "NACOS"}
          fill
          sizes="96px"
          className="object-cover"
        />
      </span>
      <span aria-hidden="true" className={`w-px shrink-0 ${divider} ${dividerColor}`} />
      <Image
        src={nile.src}
        alt={decorative ? "" : "Nile University of Nigeria"}
        width={nile.width}
        height={nile.height}
        className={`${mark} w-auto`}
      />
    </span>
  );
}
