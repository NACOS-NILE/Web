import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "NACOS Nile — Nigeria Association of Computing Students",
  description:
    "The computing community of Nile University of Nigeria, Abuja. Six disciplines, one chapter — learn, build, and grow with NACOS Nile.",
  keywords: [
    "NACOS Nile",
    "Nile University of Nigeria",
    "Computing Students",
    "Computer Science Abuja",
    "Cyber Security",
    "Software Engineering",
  ],
  openGraph: {
    title: "NACOS Nile — Nigeria Association of Computing Students",
    description:
      "The computing community of Nile University of Nigeria, Abuja. Learn, build, and grow with NACOS Nile.",
    type: "website",
  },
};

/*
 * Runs before paint so the correct theme is applied with no flash of the
 * wrong colours (and no hydration mismatch — it only touches <html>, which
 * React does not manage here). Stored preference is "light" | "dark" |
 * "system"; "system" resolves to the OS setting.
 */
const themeScript = `(function(){try{var t=localStorage.getItem('theme')||'system';var m=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=(t==='dark'||(t==='system'&&m))?'dark':'light';}catch(e){document.documentElement.dataset.theme='light';}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
