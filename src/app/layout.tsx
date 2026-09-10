import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./refinements.css";
import "@/components/dues.css";
import "./art-direction.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "NACOS Nile — Nigeria Association of Computing Students",
  description:
    "Learn, build and grow with Nile University's computing students. Explore our disciplines, programs and student-led community.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/earth-horizon-mobile.webp"
          type="image/webp"
          media="(max-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/earth-horizon.webp"
          type="image/webp"
          media="(min-width: 769px)"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
