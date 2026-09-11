import type { Metadata, Viewport } from "next";
import { Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

// Newsreader carries headings and prose; its italic is used for one accent
// in the hero, so both styles are requested.
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
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
    "The Nile University of Nigeria chapter of the Nigeria Association of Computing Students. Bootcamps, hackathons, mentorship and tutorials across six computing departments.",
  applicationName: "NACOS Nile",
  keywords: [
    "NACOS",
    "Nile University of Nigeria",
    "computing students",
    "computer science",
    "software engineering",
    "cyber security",
    "Abuja",
  ],
  openGraph: {
    title: "NACOS Nile — Nigeria Association of Computing Students",
    description:
      "The Nile University of Nigeria chapter of NACOS: bootcamps, hackathons, mentorship and tutorials across six computing departments.",
    siteName: "NACOS Nile",
    locale: "en_NG",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0d1733",
  colorScheme: "light dark",
};

/**
 * Adds `.js` to <html> before first paint. Scroll-reveal styles are scoped to
 * `.js`, so with JavaScript disabled every section renders in its final
 * position instead of sitting permanently offset.
 *
 * Because this runs before React hydrates, it mutates <html>'s class list and
 * the client render would otherwise disagree with the server HTML. That is
 * what `suppressHydrationWarning` below covers — it applies only to this one
 * element's own attributes, so genuine mismatches anywhere else still report.
 */
const JS_FLAG = `document.documentElement.classList.add('js')`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
