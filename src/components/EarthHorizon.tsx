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
            loading={variant === "hero" ? "eager" : "lazy"}
            decoding="async"
            width={768}
            height={432}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              inset: 0,
              objectFit: "cover",
              objectPosition: "center 80%",
            }}
          />
        </picture>
      </div>
      <div className="earth-horizon-glow" />
    </div>
  );
}
