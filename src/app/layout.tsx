import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NACOS Nile — Nigeria Association of Computing Students | Nile University",
  description:
    "Official portal for NACOS Nile University of Nigeria Chapter. Uniting Computer Science, Software Engineering, Cyber Security, Data Science, IT, and Information Systems students.",
  keywords: [
    "NACOS Nile",
    "Nile University of Nigeria",
    "Computing Students",
    "Computer Science Nile",
    "Software Engineering Nile",
    "Cyber Security Nile",
    "NACOS Abuja",
    "Tech Community Nigeria",
  ],
  authors: [{ name: "NACOS Nile Chapter" }],
  openGraph: {
    title: "NACOS Nile — Nigeria Association of Computing Students",
    description:
      "Empowering the next generation of computing pioneers, software builders, and cybersecurity leaders at Nile University.",
    type: "website",
    locale: "en_NG",
    siteName: "NACOS Nile",
  },
  icons: {
    icon: "/logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#060b18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#060b18] text-slate-100 selection:bg-[#274193] selection:text-white">
        {children}
      </body>
    </html>
  );
}

