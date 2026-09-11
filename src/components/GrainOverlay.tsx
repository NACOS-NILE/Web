// Static film-grain texture over the whole page. Pure CSS/SVG, no JS, no
// network request — an inline feTurbulence data URI — so it costs nothing
// at runtime and never fights the real content for interaction.
export default function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[60] pointer-events-none opacity-[0.035] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat",
      }}
    />
  );
}
