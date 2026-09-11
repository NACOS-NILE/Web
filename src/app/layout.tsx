import type { Metadata } from "next";
import { Sora, Figtree, Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NACOS Nile — Nigeria Association of Computing Students | Nile University Chapter",
  description:
    "NACOS Nile — Towards Advanced Computing. The largest computing student body in Africa, at Nile University of Nigeria.",
  icons: ["/assets/logo.svg"],
  metadataBase: new URL("https://nacosnile.vercel.app"),
  openGraph: {
    type: "website",
    siteName: "NACOS Nile",
    title: "NACOS Nile — Nigeria Association of Computing Students | Nile University Chapter",
    description:
      "NACOS Nile — Towards Advanced Computing. The largest computing student body in Africa, at Nile University of Nigeria.",
    images: ["/assets/logo.svg"],
  },
  twitter: {
    card: "summary",
    title: "NACOS Nile — Nigeria Association of Computing Students | Nile University Chapter",
    description:
      "NACOS Nile — Towards Advanced Computing. The largest computing student body in Africa, at Nile University of Nigeria.",
    images: ["/assets/logo.svg"],
  },
  other: {
    "theme-color": "#0d1733",
    "ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "NACOS Nile — Nigeria Association of Computing Students, Nile University of Nigeria Chapter",
      alternateName: "NACOS Nile University of Nigeria Chapter",
      description: "Towards Advanced Computing. We Develop, We Create, We Build Capacity.",
      logo: "/assets/logo.svg",
      foundingDate: "1993",
      knowsAbout: [
        "Computer Science",
        "Software Engineering",
        "Cyber Security",
        "Information Technology",
        "Information Systems",
        "Data Science",
      ],
      sameAs: [
        "https://x.com/NacosNileUni",
        "https://www.instagram.com/nacosnileuni",
        "https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/",
        "https://www.tiktok.com/@nacosnileuni",
      ],
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(sora.variable, figtree.variable, "font-sans", geist.variable)}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
