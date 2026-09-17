import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NACOS Nile — Nigeria Association of Computing Students",
  description:
    "The official chapter of the Nigeria Association of Computing Students at Nile University of Nigeria. Learn, build, and grow with Nile's computing community.",
  keywords: [
    "NACOS Nile",
    "Nile University of Nigeria",
    "Nigeria Association of Computing Students",
    "NACOS",
    "computing students Abuja",
  ],
  openGraph: {
    title: "NACOS Nile — Nigeria Association of Computing Students",
    description:
      "The home base for every computing student at Nile University of Nigeria. Learn, build, and grow together.",
    siteName: "NACOS Nile",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "NACOS Nile",
    description:
      "The home base for every computing student at Nile University of Nigeria.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased bg-background text-foreground">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
