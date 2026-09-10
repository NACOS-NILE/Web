"use client";

import React from "react";
import Link from "next/link";
import { MagneticElement } from "../animations/MagneticElement";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "outline" | "solid" | "text";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  magnetic?: boolean;
  className?: string;
  cursorLabel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = "outline",
  size = "md",
  arrow = true,
  magnetic = false,
  className = "",
  cursorLabel,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const sizeClasses = {
    sm: "text-[11px] px-3.5 py-2 tracking-[0.14em]",
    md: "text-[12px] px-5 py-3 tracking-[0.16em]",
    lg: "text-[13px] px-7 py-4 tracking-[0.18em]",
  };

  const variantClasses = {
    outline:
      "border border-neutral-900/15 text-neutral-900 bg-transparent hover:bg-neutral-900 hover:text-[#F7F7F5] dark:border-white/20 dark:text-neutral-100 dark:hover:bg-white dark:hover:text-black",
    solid:
      "bg-neutral-900 text-[#F7F7F5] border border-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:border-white dark:hover:bg-neutral-200",
    text:
      "border-none bg-transparent text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 p-0",
  };

  const baseClasses = `
    group relative inline-flex items-center justify-center gap-2.5 
    font-medium uppercase rounded-[2px] transition-all duration-500 
    ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-pointer disabled:opacity-40 
    disabled:pointer-events-none
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  const innerContent = (
    <>
      <span className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
        {children}
      </span>
      {arrow && (
        <span
          aria-hidden="true"
          className="relative z-10 text-[0.9em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          ↗
        </span>
      )}
    </>
  );

  const buttonElement = href ? (
    <Link
      href={href}
      data-cursor={cursorLabel}
      className={baseClasses}
    >
      {innerContent}
    </Link>
  ) : (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      data-cursor={cursorLabel}
      className={baseClasses}
    >
      {innerContent}
    </button>
  );

  if (magnetic) {
    return <MagneticElement strength={0.2}>{buttonElement}</MagneticElement>;
  }

  return buttonElement;
}
