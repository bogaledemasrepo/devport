"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Download } from "lucide-react";
import ServiceCard from "@/components/Service-card";
import { FadeIn } from "@/components/motion-wrapper"; // Import the motion wrapper
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // This ensures the component only "acts" once it's in the browser
  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid running logic like document.createElement outside of useEffect or event handlers
  const handleCvDownload = () => {
    if (typeof window !== "undefined") {
      const link = document.createElement("a");
      link.href = "/docs/resume.pdf";
      link.download = "resume.pdf";
      link.click();
    }
  };

  // If not mounted, you can return a skeleton or null to prevent mismatch
  // Or just proceed if your HTML is stable.
  if (!mounted) return null;

  // const handleCvDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = "/docs/resume.pdf";
  //   link.download = "resume.pdf";
  //   link.click();
  // };

  const services = [
    {
      title: "Backend Development",
      description: "Robust, scalable server-side systems using Spring Boot and Node.js. Focused on performance and event-driven architecture.",
      icon: `/backend-server-icon.png`,
      link: "/projects/?filter=backend",
    },
    {
      title: "Frontend Development",
      description: "Modern, performant UIs with React and Tailwind CSS. Crafting modular, responsive experiences with precision.",
      icon: `/frontend-icon.jpeg`,
      link: "/projects/?filter=frontend",
    },
    {
      title: "Mobile App Development",
      description: "Native-like iOS and Android apps using React Native. Seamless integration and intuitive UX from a single codebase.",
      icon: `/mobile-development.jpg`,
      link: "/projects/?filter=mobile",
    },
  ];

  return (
    <main className="min-h-screen selection:bg-primary/10">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className="flex flex-col space-y-10">
            <div className="space-y-4">
              <FadeIn>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4">
                  Available for new opportunities
                </div>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                  Hi, I&apos;m <span className="text-primary">Bogale Demas</span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                  Software Developer
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.3}>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Full-stack developer with 2+ years of experience building scalable 
                web applications. I bridge the gap between complex backend logic 
                and polished frontend design.
              </p>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={handleCvDownload}
                  size="lg"
                  className="rounded-xl h-12 px-8 flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </Button>
                <Button variant="outline" size="lg" className="rounded-xl h-12 px-8 border-border/60 hover:bg-secondary" asChild>
                  <Link href="/contact">Hire Me Now!</Link>
                </Button>
              </div>
            </FadeIn>

            {/* Quick Contact - Refined as a simple list instead of a bulky card */}
            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 border-t border-border/50">
                <Link href="mailto:bogidemas@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  bogidemas@gmail.com
                </Link>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  +251923872187
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Hero Image with subtle animation */}
          <FadeIn delay={0.2} className="relative flex justify-center lg:justify-end">
             <div className="relative w-full max-w-[450px] aspect-square group">
                {/* Decorative Background Element */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] blur-2xl group-hover:from-primary/30 transition-all duration-500" />
                
                <Image
                  src="/images/professional-developer-portrait.png"
                  alt="Bogale - Software Developer"
                  fill
                  className="object-cover rounded-3xl shadow-2xl relative z-10 border-4 border-background"
                  priority
                />
             </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development solutions tailored to modern business needs.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <ServiceCard {...service} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}