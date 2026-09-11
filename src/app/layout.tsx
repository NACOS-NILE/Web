import type { Metadata } from "next";
import { Archivo, DM_Mono, Manrope } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "NACOS Nile — Learn, Build, Grow",
  description:
    "The official hub for computing students, innovators and future technology leaders at Nile University. Discover, build and lead your technology journey with NACOS Nile.",
  openGraph: {
    title: "NACOS Nile — Learn, Build, Grow",
    description: "Join the NACOS Nile community for practical learning, leadership and industry opportunities.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
      className={`${archivo.variable} ${manrope.variable} ${dmMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
