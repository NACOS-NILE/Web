"use client";

import React from "react";
import Link from "next/link";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  arrow?: boolean;
  cursorLabel?: string;
}

export function AnimatedLink({
  href,
  children,
  className = "",
  external = false,
  arrow = false,
  cursorLabel,
}: AnimatedLinkProps) {
  const isExternal = external || href.startsWith("http");

  const content = (
    <span
      data-cursor={cursorLabel}
      className={`group relative inline-flex items-center gap-1.5 py-0.5 text-inherit transition-colors duration-300 ${className}`}
    >
      <span className="relative inline-block overflow-hidden">
        <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[120%]">
          {children}
        </span>
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 inline-block translate-y-[120%] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"
        >
          {children}
        </span>
      </span>

      {arrow && (
        <span
          aria-hidden="true"
          className="inline-block text-[0.85em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          ↗
        </span>
      )}

      {/* Editorial underline */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
      />
    </span>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  );
}
