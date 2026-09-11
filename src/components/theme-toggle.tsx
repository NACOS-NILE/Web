"use client";

import { Monitor, MoonStar, Sun } from "lucide-react";
import { useId, useSyncExternalStore } from "react";

const storageKey = "nacos-theme";
const themeChangeEvent = "nacos-theme-change";
const darkModeQuery = "(prefers-color-scheme: dark)";

function normalizeTheme(value: string | null | undefined) {
  return value === "light" || value === "dark" ? value : "auto";
}

function getSnapshot() {
  return normalizeTheme(document.documentElement.dataset.theme);
}

function applyTheme(theme: ReturnType<typeof normalizeTheme>) {
  const root = document.documentElement;
  const isDark = theme === "dark" ||
    (theme === "auto" && window.matchMedia(darkModeQuery).matches);
  root.dataset.theme = theme;
  root.classList.toggle("dark", isDark);
  root.style.colorScheme = isDark ? "dark" : "light";
}

function subscribe(callback: () => void) {
  const preference = window.matchMedia(darkModeQuery);
  const syncSystemTheme = () => applyTheme(getSnapshot());
  const syncStoredTheme = (event: StorageEvent) => {
    if (event.key !== storageKey && event.key !== null) return;
    applyTheme(normalizeTheme(event.newValue));
    callback();
  };

  syncSystemTheme();
  preference.addEventListener("change", syncSystemTheme);
  window.addEventListener("storage", syncStoredTheme);
  window.addEventListener(themeChangeEvent, callback);
  return () => {
    preference.removeEventListener("change", syncSystemTheme);
    window.removeEventListener("storage", syncStoredTheme);
    window.removeEventListener(themeChangeEvent, callback);
  };
}

const themeOptions = [
  { value: "auto", label: "Auto", icon: Monitor },
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: MoonStar },
] as const;

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => "auto");
  const name = useId();

  return (
    <fieldset className="footer-theme-control">
      <legend className="sr-only">Theme</legend>
      {themeOptions.map(({ value, label, icon: Icon }) => (
        <label key={value} className="footer-theme-option" title={label}>
          <input
            className="sr-only"
            type="radio"
            name={name}
            value={value}
            aria-label={label}
            checked={theme === value}
            onChange={() => {
              applyTheme(value);
              try {
                localStorage.setItem(storageKey, value);
              } catch {
                // Theme switching still works when browser storage is unavailable.
              }
              window.dispatchEvent(new Event(themeChangeEvent));
            }}
          />
          <span className="footer-theme-icon">
            <Icon size={14} strokeWidth={2} aria-hidden="true" />
          </span>
        </label>
      ))}
    </fieldset>
  );
}
