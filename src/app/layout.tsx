import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://nacosnile.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NACOS Nile | Nile University of Nigeria",
    template: "%s | NACOS Nile",
  },
  description:
    "NACOS Nile connects computing students at Nile University through technology, collaboration, learning and opportunity.",
  keywords: [
    "NACOS Nile",
    "Nile University NACOS",
    "Nile University",
    "Computer Science",
    "Software Engineering",
    "Cyber Security",
    "Information Technology",
    "Information Systems",
    "Data Science",
    "Technology",
  ],
  authors: [{ name: "NACOS Nile" }],
  creator: "NACOS Nile",
  publisher: "NACOS Nile",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "NACOS Nile | Nile University of Nigeria",
    description:
      "A community for computing students at Nile University to learn, build and connect.",
    url: siteUrl,
    type: "website",
    siteName: "NACOS Nile",
    locale: "en_NG",
    images: [
      {
        url: "/Images/final year students at dinner.webp",
        width: 1200,
        height: 900,
        alt: "NACOS Nile student community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NACOS Nile | Nile University of Nigeria",
    description:
      "NACOS Nile connects computing students at Nile University through technology, collaboration, learning and opportunity.",
    images: ["/Images/final year students at dinner.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d1733",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NACOS Nile",
  alternateName:
    "Nigeria Association of Computing Students — Nile University Chapter",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description:
    "NACOS Nile connects computing students at Nile University through technology, collaboration, learning and opportunity.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Plot 681, Cadastral Zone C-OO, Research & Institution Area, Jabi Airport Bypass",
    addressLocality: "Abuja",
    addressRegion: "FCT",
    addressCountry: "NG",
  },
  sameAs: [
    "https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter",
    "https://www.instagram.com/nacosnileuni/",
    "https://github.com/NACOS-NILE",
    "https://www.tiktok.com/@nacosnileuni",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="
            sr-only
            focus:not-sr-only
            focus:fixed
            focus:left-4
            focus:top-4
            focus:z-[100]
            focus:rounded-lg
            focus:bg-royal
            focus:px-5
            focus:py-3
            focus:text-sm
            focus:font-semibold
            focus:text-white
          "
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
