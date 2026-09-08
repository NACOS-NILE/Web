import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NACOS Nile | Build. Connect. Create.",
  description: "The community connecting Nile University’s computing students through technology, collaboration, learning and opportunity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
