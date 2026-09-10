/**
 * Serves AVIF and WebP ahead of JPEG, and a 1x/2x pair at each size, so a
 * phone never downloads the retina file. Sizes are deliberately modest: the
 * source photographs top out around 250-380px, so rendering them larger than
 * this would just be upscaling on display. Width and height are always set,
 * which is what keeps cumulative layout shift at zero.
 */
export default function Portrait({
  slug,
  alt,
  lead = false,
  className = "",
  wrapperClassName = "",
}: {
  slug: string;
  alt: string;
  lead?: boolean;
  className?: string;
  /** Applied to <picture>, which is the flex/grid child — not the <img>. */
  wrapperClassName?: string;
}) {
  const [w, h] = lead ? [200, 250] : [112, 112];
  const base = `/excos/${slug}`;
  const srcset = (ext: string) =>
    `${base}-${w}.${ext} 1x, ${base}-${w * 2}.${ext} 2x`;

  return (
    <picture className={wrapperClassName}>
      <source srcSet={srcset("avif")} type="image/avif" />
      <source srcSet={srcset("webp")} type="image/webp" />
      <img
        src={`${base}-${w}.jpg`}
        srcSet={srcset("jpg")}
        alt={alt}
        width={w}
        height={h}
        loading="lazy"
        decoding="async"
        className={className}
      />
    </picture>
  );
}
