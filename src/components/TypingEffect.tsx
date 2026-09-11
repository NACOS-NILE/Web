"use client";

import { useEffect, useState } from "react";

export default function TypingEffect({
  text,
  speed = 40,
  delay = 600,
  className = "",
}: {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [gatePassed, setGatePassed] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.body.classList.contains("loaded");
  });

  useEffect(() => {
    if (gatePassed) return;
    const observer = new MutationObserver(() => {
      if (document.body.classList.contains("loaded")) {
        setGatePassed(true);
        observer.disconnect();
      }
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, [gatePassed]);

  useEffect(() => {
    if (!gatePassed) return;
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [gatePassed, delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, text, speed, started]);

  const done = displayed.length >= text.length;

  return (
    <span className={className}>
      {displayed}
      {!done && (
        <span
          style={{
            display: "inline-block",
            width: "2px",
            height: "1em",
            background: "var(--color-accent-light)",
            marginLeft: "2px",
            verticalAlign: "text-bottom",
            animation: "blink 1s step-end infinite",
          }}
        />
      )}
    </span>
  );
}