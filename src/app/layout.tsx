import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BootSignal from "@/components/BootSignal";

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

export const metadata: Metadata = {
  title: "NACOS Nile — Nigeria Association of Computing Students",
  description:
    "Official landing page of NACOS Nile University of Nigeria Chapter — the community for Computer Science, Software Engineering, Cyber Security, Information Technology, Information Systems and Data Science students in Abuja.",
  keywords: [
    "NACOS",
    "NACOS Nile",
    "Nile University of Nigeria",
    "computing students",
    "Abuja",
    "hackathon",
    "computer science",
  ],
  openGraph: {
    title: "NACOS Nile — the home of computing at Nile University",
    description:
      "Six disciplines, one community. Bootcamps, hackathons, mentorship and tutorials for computing students at Nile University of Nigeria.",
    type: "website",
    locale: "en_NG",
    siteName: "NACOS Nile",
  },
  twitter: {
    card: "summary_large_image",
    title: "NACOS Nile — the home of computing at Nile University",
    description: "Six disciplines, one community. Join the NACOS Nile chapter.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#070d1d" },
  ],
};

/**
 * Applies the stored (or system) theme before first paint so the page never
 * flashes the wrong colour scheme.
 */
/**
 * Runs before first paint. Three jobs:
 *
 *  1. Apply the stored (or system) theme, so the page never flashes the wrong
 *     colour scheme.
 *  2. Arm the scroll-reveal. `.reveal` is only hidden while `anim-armed` is
 *     set, so a reader whose JavaScript never arrives sees the text rather
 *     than a blank page.
 *  3. Show the loading screen, and guarantee it goes away again.
 *
 * The failsafe is the important part. If the bundle never boots — a dropped
 * chunk on a weak connection, a parse error on an old browser — nothing else
 * would ever clear the loader or un-hide the copy. BootSignal cancels it as
 * soon as React mounts, so a healthy page never waits on it.
 */
const BOOT_SCRIPT = `(function(){var d=document.documentElement;
try{var s=localStorage.getItem("nacos-theme");var k=s?s==="dark":matchMedia("(prefers-color-scheme: dark)").matches;d.classList.toggle("dark",k);}catch(e){}
d.classList.add("is-loading");
try{if("IntersectionObserver" in window){d.classList.add("anim-armed");}}catch(e){}
function done(){d.classList.remove("is-loading");}
window.addEventListener("load",done);
window.__nacosBoot=setTimeout(function(){done();d.classList.remove("anim-armed");},8000);})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        {/*
          Plain markup and CSS, no React: it has to be able to paint while the
          bundle is still in flight, which is exactly when it is needed. The
          wordmark is text rather than the logo file so it renders even if
          images are still stalled.
        */}
        <div id="app-loader" aria-hidden="true">
          <div className="loader-inner">
            <span className="loader-word">NACOS Nile</span>
            <span className="loader-track" />
          </div>
        </div>

        <BootSignal />
        {children}
      </body>
    </html>
  );
}
