export function smoothScrollTo(targetY: number, duration = 900) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    window.scrollTo(0, targetY);
    return;
  }

  const startY = window.pageYOffset;
  const diff = targetY - startY;
  if (Math.abs(diff) < 2) return;

  const start = performance.now();

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(now: number) {
    const t = Math.min((now - start) / duration, 1);
    const eased = easeInOutCubic(t);
    window.scrollTo({ top: startY + diff * eased, behavior: "auto" });
    if (t < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}