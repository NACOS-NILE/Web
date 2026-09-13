import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const title = "NACOS Nile — Nigeria Association of Computing Students";
const description =
  "NACOS Nile is the community for computing students at Nile University of Nigeria. Explore disciplines, meet the executive council, and join the community.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | NACOS Nile",
  },
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: ["/nacos-students-hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@NACOSNile",
    images: ["/nacos-students-hero.webp"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NACOS Nile",
  alternateName: "Nigeria Association of Computing Students, Nile University",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abuja",
    addressRegion: "FCT",
    addressCountry: "NG",
  },
  sameAs: ["https://twitter.com/NACOSNile"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("nacos-theme");var d=t&&t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.add(d?"dark":"light")}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
