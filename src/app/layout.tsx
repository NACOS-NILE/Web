import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const degularSemibold = localFont({
  src: "../../public/font/DegularDemo-Semibold.otf",
  weight: "600",
  style: "normal",
  variable: "--font-degular",
});

// Set NEXT_PUBLIC_SITE_URL in your hosting env (e.g. https://nacos-nile.com).
// The fallback keeps previews working before a custom domain is configured.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nacos-nile.vercel.app";

const title = "NACOS Nile — Nigeria Association of Computing Students";
const description =
  "NACOS Nile is the Nile University of Nigeria chapter of the Nigeria Association of Computing Students — six computing disciplines, one community. Explore events, meet the executive council, and join the community.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | NACOS Nile",
  },
  description,
  keywords: [
    "NACOS",
    "NACOS Nile",
    "Nile University",
    "Nile University of Nigeria",
    "Nigeria Association of Computing Students",
    "computing students Nigeria",
    "computer science Nile University",
    "software engineering students",
    "tech community Abuja",
    "student developers Nigeria",
  ],
  authors: [{ name: "NACOS Nile University Chapter" }],
  creator: "NACOS Nile University Chapter",
  publisher: "NACOS Nile University Chapter",
  category: "education",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "NACOS Nile",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NACOS Nile — Code the future, together.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#274193" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1733" },
  ],
  colorScheme: "light dark",
};

const themeScript = `(() => { let theme = 'auto'; try { const stored = localStorage.getItem('nacos-theme'); if (stored === 'light' || stored === 'dark') theme = stored; } catch {} const root = document.documentElement; const isDark = theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches); root.dataset.theme = theme; root.classList.toggle('dark', isDark); root.style.colorScheme = isDark ? 'dark' : 'light'; })();`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "NACOS Nile University Chapter",
      alternateName: "NACOS Nile",
      url: siteUrl,
      logo: `${siteUrl}/logo.webp`,
      description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abuja",
        addressRegion: "FCT",
        addressCountry: "NG",
      },
      parentOrganization: {
        "@type": "Organization",
        name: "Nigeria Association of Computing Students",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "NACOS Nile",
      description,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-NG",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${degularSemibold.variable} h-full scroll-smooth antialiased`} suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}<script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
