import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dev portfolio",
  description: "bogale demas personale portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
