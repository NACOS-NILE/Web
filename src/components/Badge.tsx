import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const toneClasses =
    tone === "dark"
      ? "border-white/20 bg-white/5 text-white/80"
      : "border-nacos-blue/15 bg-nacos-blue/5 text-nacos-blue";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase ${toneClasses} ${className}`}
    >
      {children}
    </span>
  );
}
