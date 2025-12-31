import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Bogale Demas — Software Developer",
  description:
    "Results-oriented full-stack web developer with 2+ years of experience in designing, developing, and deploying scalable web applications.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="en" 
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased w-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Flex wrapper ensures footer stays at bottom if you add one later */}
          <div className="relative flex min-h-screen flex-col max-w-[1080px] mx-auto">
            <Navigation />
            <main className="flex-1">
              {children}
              <Footer />
            </main>
          </div>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}