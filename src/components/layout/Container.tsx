import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  as?: "div" | "section" | "main" | "header" | "footer" | "article";
  size?: "default" | "narrow" | "wide" | "full";
  className?: string;
  id?: string;
}

export function Container({
  children,
  as: Component = "div",
  size = "default",
  className = "",
  id,
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-[1040px]",
    default: "max-w-[1440px]",
    wide: "max-w-[1680px]",
    full: "max-w-full",
  };

  return (
    <Component
      id={id}
      className={`mx-auto w-full px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Component>
  );
}
