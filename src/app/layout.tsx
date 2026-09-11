import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0d1733",
};

export const metadata: Metadata = {
  title: "NACOS Nile | Nile University of Nigeria",
  description: "The student computing community at Nile University of Nigeria. Learn, build and grow across six computing disciplines.",
  authors: [
    { name: "Lloyd Akhigbe" },
    { name: "Ephraim Ofoli" },
  ],
  openGraph: {
    title: "NACOS Nile University Chapter",
    description: "Six disciplines. One computing community.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
