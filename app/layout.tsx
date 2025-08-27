import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";
import type React from "react";
export const metadata: Metadata = {
  title: "Bogale - Software Developer",
  description:
    "Results-oriented full-stack web developer with 2+ years of experience in designing, developing, and deploying scalable web applications.",
  generator: "v0.app",
};
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navigation } from "@/components/navigation";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation />
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </>
  );
}
