import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NACOS Nile — Nigeria Association of Computing Students",
  description: "Official web portal of NACOS Nile University of Nigeria Chapter.",
};

import SplashScreen from "@/components/SplashScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body className="font-sans min-h-full flex flex-col relative">
        <SplashScreen />
        <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-difference dark:mix-blend-overlay">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
          </svg>
        </div>
        {children}
      </body>
    </html>
  );
}
