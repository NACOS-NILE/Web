import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://nacos-nile.vercel.app";
const title = "NACOS Nile — Nigeria Association of Computing Students";
const description =
  "The Nigeria Association of Computing Students, Nile University of Nigeria chapter. Six disciplines, one community — bootcamps, hackathons, mentorship, and the executive council running it.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — NACOS Nile",
  },
  description,
  keywords: [
    "NACOS Nile",
    "Nigeria Association of Computing Students",
    "Nile University of Nigeria",
    "Faculty of Computing",
    "Computer Science Abuja",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "NACOS Nile",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NACOS Nile" }],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  themeColor: "#080d1a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
