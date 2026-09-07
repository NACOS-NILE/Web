import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-nacos-accent text-white hover:bg-nacos-accent-light focus-visible:outline-nacos-accent",
  secondary:
    "bg-white text-nacos-dark border border-nacos-dark/15 hover:border-nacos-blue/40 hover:bg-nacos-blue/5 focus-visible:outline-nacos-blue",
  ghost:
    "bg-white/5 text-white border border-white/20 hover:bg-white/10 focus-visible:outline-white",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 min-h-11";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & ComponentPropsWithoutRef<"a">;

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}
