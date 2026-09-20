"use client";

import { useSyncExternalStore } from "react";

/**
 * The site is a static export, so anything rendered from `new Date()` is frozen
 * at build time — a copyright line baked in September would still read 2026
 * long into the next year.
 *
 * The clock is treated as the external store it is: `buildYear` is the server
 * snapshot, so the markup React hydrates matches the HTML exactly (and is
 * correct with no JavaScript at all), and the real year takes over immediately
 * afterwards. Nothing ever changes while the page is open, so `subscribe` has
 * nothing to listen to.
 */
const subscribe = () => () => {};
const getSnapshot = () => new Date().getFullYear();

export default function CurrentYear({ buildYear }: { buildYear: number }) {
  const year = useSyncExternalStore(subscribe, getSnapshot, () => buildYear);
  return <>{year}</>;
}
