"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@/components/icons";
import { listenToScroll, prefersReducedMotion } from "@/lib/utils";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(
    () =>
      listenToScroll(() =>
        setVisible(window.scrollY > window.innerHeight * 0.6)
      ),
    []
  );

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "visible" : ""}`}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion() ? "auto" : "smooth",
        })
      }
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUpIcon />
    </button>
  );
}
