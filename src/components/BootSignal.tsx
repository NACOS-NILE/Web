"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __nacosBoot?: ReturnType<typeof setTimeout>;
  }
}

/**
 * Proof that the bundle actually booted.
 *
 * The inline script in layout.tsx starts a failsafe timer that clears the
 * loading screen and un-hides the copy if React never shows up. Mounting here
 * cancels it, and drops the loader immediately rather than waiting on `load` —
 * once the page is interactive there is nothing left to wait for, and on a slow
 * connection the remaining images can finish arriving behind live content.
 */
export default function BootSignal() {
  useEffect(() => {
    clearTimeout(window.__nacosBoot);
    document.documentElement.classList.remove("is-loading");
  }, []);

  return null;
}
