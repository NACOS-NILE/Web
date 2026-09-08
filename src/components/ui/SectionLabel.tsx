import React from "react";

interface SectionLabelProps {
  number?: string;
  label: string;
  showLine?: boolean;
  className?: string;
}

export function SectionLabel({
  number,
  label,
  showLine = false,
  className = "",
}: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400 ${className}`}
    >
      {number && (
        <span className="font-mono text-neutral-900 dark:text-neutral-200">
          [{number}]
        </span>
      )}
      <span>{label}</span>
      {showLine && (
        <span className="h-[1px] w-8 bg-neutral-900/15 dark:bg-neutral-100/15" />
      )}
    </div>
  );
}
