interface EarthHorizonProps {
  variant?: "hero" | "community";
  className?: string;
}

export function EarthHorizon({ variant = "hero", className = "" }: EarthHorizonProps) {
  return (
    <div
      className={`earth-horizon earth-horizon-${variant} ${className}`}
      aria-hidden="true"
    >
      <div className="earth-horizon-media">
        <picture>
          <source
            media="(min-width: 769px)"
            srcSet="/earth-horizon.webp"
            type="image/webp"
          />
          <img
            src="/earth-horizon-mobile.webp"
            alt=""
            fetchPriority={variant === "hero" ? "high" : "auto"}
            decoding="sync"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              inset: 0,
              objectFit: "cover",
              objectPosition: variant === "hero" ? "center 80%" : "center 30%",
            }}
          />
        </picture>
      </div>
      <div className="earth-horizon-glow" />
    </div>
  );
}
