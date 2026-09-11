"use client";

import { useEffect, useRef, useState, type SVGProps } from "react";

type Theme = "light" | "dark" | "system";

function applyTheme(theme: Theme) {
  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const dark = theme === "dark" || (theme === "system" && prefersDark);
  document.documentElement.dataset.theme = dark ? "dark" : "light";
}

function Sun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}
function Moon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M20 14.5A8 8 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5Z" />
    </svg>
  );
}
function Monitor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

const options: { value: Theme; label: string; Icon: (p: SVGProps<SVGSVGElement>) => React.ReactElement }[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
];

function readStored(): Theme {
  if (typeof window === "undefined") return "system";
  return (localStorage.getItem("theme") as Theme) || "system";
}

export default function ThemeToggle() {
  // Lazy init from storage — avoids setState-in-effect; the button is marked
  // suppressHydrationWarning since the icon may differ from the server render.
  const [theme, setTheme] = useState<Theme>(readStored);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Re-apply on OS change while following the system setting.
  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  // Close the menu on outside click.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const choose = (t: Theme) => {
    setTheme(t);
    localStorage.setItem("theme", t);
    applyTheme(t);
    setOpen(false);
  };

  const Current = (options.find((o) => o.value === theme) ?? options[2]).Icon;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change theme"
        aria-haspopup="menu"
        aria-expanded={open}
        suppressHydrationWarning
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-slate transition-colors hover:border-brand hover:text-brand dark:border-white/15 dark:text-white/70 dark:hover:border-sky dark:hover:text-sky"
      >
        <Current className="h-5 w-5" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-12 w-40 overflow-hidden rounded-xl border border-line bg-white p-1 shadow-lg dark:border-white/10 dark:bg-navy-800"
        >
          {options.map(({ value, label, Icon }) => (
            <button
              key={value}
              type="button"
              role="menuitemradio"
              aria-checked={theme === value}
              onClick={() => choose(value)}
              className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                theme === value
                  ? "bg-brand/10 font-medium text-brand dark:bg-white/10 dark:text-sky"
                  : "text-slate hover:bg-mist dark:text-white/70 dark:hover:bg-white/5"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
