"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "btn-ripple inline-flex items-center justify-center whitespace-nowrap rounded-full font-mono text-[11px] font-semibold uppercase tracking-[0.13em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.97] active:brightness-90 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/85",
        solid: "bg-primary text-primary-foreground hover:bg-primary/85",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-border-strong bg-transparent text-foreground hover:border-primary hover:text-primary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        light: "bg-foreground text-background hover:bg-foreground/85",
      },
      size: {
        default: "h-11 px-7",
        sm: "h-9 px-4",
        lg: "h-12 px-9",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { asChild, variant, size, className, onPointerDown, ...props },
  ref,
) {
  const Comp = asChild ? Slot : "button";

  // Marks exactly where the pointer landed (as a % of the button's own box)
  // so the CSS bloom in .btn-ripple can originate from the real press point
  // instead of always blooming from dead-center.
  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    if (rect.width && rect.height) {
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      event.currentTarget.style.setProperty("--press-x", `${x}%`);
      event.currentTarget.style.setProperty("--press-y", `${y}%`);
    }
    onPointerDown?.(event);
  };

  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      onPointerDown={handlePointerDown}
      {...props}
    />
  );
});
