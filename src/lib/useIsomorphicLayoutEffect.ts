import { useEffect, useLayoutEffect } from "react";

// useLayoutEffect warns during SSR; fall back to useEffect on the server so
// static export / SSR passes stay warning-free while the browser still gets
// synchronous, pre-paint measurement.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
