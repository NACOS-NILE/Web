import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import GrainOverlay from "@/components/GrainOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
  adjustFontFallback: true,
});

// Deacon — only the two weight/style pairs actually used anywhere in the
// UI (font-deacon always pairs with font-black or font-bold, never a
// lighter weight, and never italic — see the audit that trimmed this).
// Was 12 files (every weight 100-900 × normal/italic); ClashDisplay and
// DeaconCondensed were declared here too but never referenced by a single
// component, so both are gone entirely rather than trimmed — removed the
// files themselves too (src/fonts/ClashDisplay-*, the DeaconCondensedTest-*
// set, and the 10 unused DeaconTest-* weights) rather than leave dead
// assets sitting alongside the ones actually shipped.
const deacon = localFont({
  src: [
    {
      path: "../fonts/deacon/DeaconTest-Bold-BF63c8afcee0ca9.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/deacon/DeaconTest-Black-BF63c8afcc1411e.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-deacon",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const SITE_URL = "https://nacosnile.org";
const SITE_TITLE = "NACOS Nile — Nigeria Association of Computing Students";
const SITE_DESCRIPTION =
  "Official web portal of NACOS Nile University of Nigeria Chapter.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "NACOS Nile",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#274193",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${geistSans.variable} ${geistMono.variable} ${deacon.variable}`}
    >
      <head>
        {/* Preconnect to ImageKit CDN origin */}
        <link rel="preconnect" href="https://ik.imagekit.io" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://ik.imagekit.io" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll />
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
