"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark =
      document.documentElement.classList.contains("dark") ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) ||
      localStorage.getItem("theme") === "dark";

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const updateTheme = window.setTimeout(
      () => setTheme(isDark ? "dark" : "light"),
      0,
    );

    return () => window.clearTimeout(updateTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="group relative flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-black/5 text-[var(--color-ink)] transition-all hover:bg-black/10 hover:scale-105 active:scale-95 dark:border-white/15 dark:bg-white/10 dark:text-[#f0f4fc] dark:hover:bg-white/15"
    >
      {theme === "dark" ? (
        <Sun
          size={18}
          className="text-amber-300 transition-transform duration-300 rotate-0 hover:rotate-45"
        />
      ) : (
        <Moon
          size={18}
          className="text-slate-700 transition-transform duration-300 -rotate-12 group-hover:rotate-0"
        />
      )}
    </button>
  );
}
