/*
  Small helpers shared by several components. Nothing here uses React, so
  these can be imported anywhere.
*/

export function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });

  window.history.replaceState(null, "", `#${id}`);
}

// Starts downloading an image in the background so it is ready when shown
export function preloadImage(src: string) {
  const img = new window.Image();
  img.decoding = "async";
  img.src = src;
}

/*
  Runs a callback at most once per animation frame while the page scrolls
  or resizes. Returns a cleanup function for useEffect.
*/
export function listenToScroll(callback: () => void) {
  let ticking = false;

  const run = () => {
    ticking = false;
    callback();
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(run);
  };

  callback();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
  };
}

export function naira(amount: number) {
  return `₦${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

export function isPlaceholderLink(href: string) {
  return href.trim() === "" || href === "#";
}
