import { useSyncExternalStore } from "react";
import { prefersReducedMotion } from "@/lib/utils";

function subscribeToReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

// True when the visitor has asked their device for less motion
export function useReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    prefersReducedMotion,
    () => false
  );
}
