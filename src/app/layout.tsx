import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const rector = localFont({
  src: [
    {
      path: "../../public/fonts/Rector-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Rector-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Rector-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-rector",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NACOS Nile — Nigeria Association of Computing Students | Nile University Chapter",
  description: "Official digital portal of the NACOS Nile University of Nigeria Chapter. Uniting Computer Science, Software Engineering, Cyber Security, IT, IS, and Data Science students.",
  keywords: [
    "NACOS",
    "NACOS Nile",
    "Nile University of Nigeria",
    "Computing Students",
    "Software Engineering",
    "Computer Science",
    "Cyber Security",
    "Data Science",
    "Abuja Tech",
    "Nile Tech Week",
  ],
  authors: [
    { name: "Wali Emmanuel Medugu", url: "https://github.com/NACOS-NILE" },
    { name: "NACOS Nile Chapter" },
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "NACOS Nile — Nigeria Association of Computing Students",
    description: "Learn • Build • Grow. Empowering Nile University's next generation of computing leaders.",
    url: "https://nacos-nile.vercel.app",
    siteName: "NACOS Nile",
    locale: "en_US",
    type: "website",
  },
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${rector.variable} font-sans h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
