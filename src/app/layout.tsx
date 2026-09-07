import type { Metadata } from "next";
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
  title: {
    default: "NACOS Nile | Where Technology Meets Ambition",
    template: "%s | NACOS Nile",
  },

  description:
    "NACOS Nile University connects computing students through technology, innovation, learning, mentorship, and community.",

  keywords: [
    "NACOS Nile",
    "NACOS",
    "Nile University",
    "NACOS Nile University",
    "computing students",
    "Computer Science",
    "Software Engineering",
    "Cyber Security",
    "Information Technology",
    "Information Systems",
    "Data Science",
    "Abuja",
  ],

  authors: [
    {
      name: "NACOS Nile University",
    },
  ],

  creator: "NACOS Nile University",
  publisher: "NACOS Nile University",

  applicationName: "NACOS Nile",

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    title: "NACOS Nile | Where Technology Meets Ambition",
    description:
      "Connecting computing students at Nile University through technology, innovation, learning, mentorship, and community.",
    siteName: "NACOS Nile",
  },

  twitter: {
    card: "summary_large_image",
    title: "NACOS Nile | Where Technology Meets Ambition",
    description:
      "Connecting computing students at Nile University through technology, innovation, learning, mentorship, and community.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
