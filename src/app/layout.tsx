import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#060b19",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nacos-nile.org"),
  title: "NACOS Nile — Learn. Build. Grow. | Official Computing Chapter",
  description:
    "The official digital experience of NACOS Nile Chapter (Nile University of Nigeria, Abuja). Empowering 500+ student builders, researchers, and engineers shaping tomorrow's technology.",
  keywords: [
    "NACOS Nile",
    "Nile University of Nigeria",
    "Nigeria Association of Computing Students",
    "Learn Build Grow",
    "Computer Science Nile",
    "Software Engineering Abuja",
    "Cyber Security Nile",
    "Data Science Nigeria",
    "Nile Hackathon",
  ],
  authors: [{ name: "NACOS Nile Chapter" }],
  creator: "NACOS Nile Digital Team",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://nacos-nile.org",
    siteName: "NACOS Nile Chapter",
    title: "NACOS Nile — Learn. Build. Grow.",
    description:
      "Official landing page for NACOS Nile University of Nigeria. Discover our 6 computing disciplines, 9 executive leaders, hackathons, and vibrant student community.",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 380,
        alt: "NACOS Nile University Chapter Mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NACOS Nile — Learn. Build. Grow.",
    description:
      "Official digital landing page of the Nigeria Association of Computing Students, Nile University of Nigeria.",
    creator: "@NACOSNile",
    images: ["/logo.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth dark`}
    >
      <head>
        <meta name="darkreader-lock" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#060b19] text-slate-100 font-sans selection:bg-[#75b947] selection:text-[#060b19]"
      >
        {children}
      </body>
    </html>
  );
}
