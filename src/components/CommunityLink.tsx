"use client";

import type { ReactNode } from "react";
import { isPlaceholderLink } from "@/lib/utils";

export default function CommunityLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (isPlaceholderLink(href)) {
    return (
      <a
        href="#community"
        className={className}
        aria-disabled="true"
        onClick={(event) => event.preventDefault()}
      >
        {children}
      </a>
    );
  }

  // Links to a section on this page stay in the same tab
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
