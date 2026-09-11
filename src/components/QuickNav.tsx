import React from "react";

interface QuickNavItem {
  id: string;
  name: string;
  href: string;
  icon: React.ReactNode;
}

const QUICK_NAV_ITEMS: QuickNavItem[] = [
  {
    id: "about",
    name: "About",
    href: "/#about",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "disciplines",
    name: "Disciplines",
    href: "/#disciplines",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: "excos",
    name: "Excos",
    href: "/#excos",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.35 8.25l5.12-1.92a.5.5 0 0 1 .65.61l-2.4 9.6A2 2 0 0 1 16.78 18H7.22a2 2 0 0 1-1.94-1.46l-2.4-9.6a.5.5 0 0 1 .65-.61l5.12 1.92z" />
      </svg>
    ),
  },
  {
    id: "community",
    name: "Community",
    href: "/#community",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
      </svg>
    ),
  },
  {
    id: "contact",
    name: "Contact",
    href: "/#contact",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function QuickNav() {
  return (
    <nav
      aria-label="Quick Navigation"
      className="relative py-8 bg-nacos-dark border-y border-white/5 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-center flex-wrap sm:flex-nowrap gap-6 sm:gap-10">
        {QUICK_NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="group flex flex-col items-center gap-2 focus:outline-none focus:ring-2 focus:ring-nacos-accent rounded-full p-1 transition-transform"
          >
            {/* Circular Icon Button (~56px diameter: w-14 h-14) */}
            <div className="w-14 h-14 rounded-full bg-nacos-blue/20 border border-nacos-accent/30 flex items-center justify-center text-nacos-accent-light group-hover:bg-nacos-accent group-hover:text-white group-hover:border-nacos-accent group-hover:scale-105 transition-all duration-200 shadow-md">
              {item.icon}
            </div>

            {/* Muted Centered Label */}
            <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors text-center">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
