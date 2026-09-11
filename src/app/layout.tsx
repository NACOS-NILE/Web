import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

/*
  Manrope is the font the whole site uses. next/font downloads it at build
  time and serves it with the site, so visitors do not wait for Google.
  (The old Geist fonts were loaded but never used, so they are removed.)
*/
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NACOS Nile — Nigeria Association of Computing Students",
  description: "Official web portal of NACOS Nile University of Nigeria Chapter.",
};

// Colours the phone browser's address bar to match the navbar
export const viewport: Viewport = {
  themeColor: "#0d1733",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
