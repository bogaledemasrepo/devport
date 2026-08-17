import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Download } from "lucide-react";
import { FadeIn } from "@/components/motion-wrapper";
import { SERVICES } from "@/constant";
import ServiceCard from "@/components/Service-card";
import { TerminalCard } from "@/components/terminal-card";

export default function Home() {
  return (
    <main className="selection:bg-primary/10 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 sm:px-6 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <FadeIn>
                <div className="border-primary/20 bg-primary/5 text-primary inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
                  Available for new opportunities
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-foreground text-4xl leading-[1.1] font-bold tracking-tight md:text-6xl">
                  Hi, I&apos;m{" "}
                  <span className="text-primary">Bogale Demas</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-muted-foreground text-2xl font-medium md:text-3xl">
                  Software Developer
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.3}>
              <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
                Full-stack developer with 2+ years of experience building
                scalable web applications. I bridge the gap between complex
                backend logic and polished frontend design.
              </p>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="shadow-primary/20 hover:shadow-primary/40 flex h-12 items-center gap-2 rounded-xl px-8 shadow-lg transition-all"
                  asChild
                >
                  <a
                    href="https://bit.ly/4q4SQJK"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border/60 hover:bg-secondary h-12 rounded-xl px-8"
                  asChild
                >
                  <Link href="/contact">Hire Me Now!</Link>
                </Button>
              </div>
            </FadeIn>

            {/* Quick Contact */}
            <FadeIn delay={0.5}>
              <div className="border-border/50 flex flex-wrap gap-x-8 gap-y-4 border-t pt-4">
                <a
                  href="mailto:bogidemas@gmail.com"
                  className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  bogidemas@gmail.com
                </a>
                <a
                  href="tel:+251923872187"
                  className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +251 923 872 187
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Hero Image */}
          <FadeIn
            delay={0.2}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="group relative aspect-square w-full max-w-md">
              <div className="from-primary/20 group-hover:from-primary/30 absolute -inset-4 rounded-3xl bg-linear-to-tr to-transparent blur-2xl transition-all duration-500" />

              <Image
                src="/images/professional-developer-portrait.png"
                alt="Bogale Demas - Software Developer"
                fill
                className="border-background relative z-10 rounded-3xl border-4 object-cover shadow-2xl"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section className="border-border/40 mx-auto border-t px-4 py-20 sm:px-6 lg:py-32">
        <FadeIn className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-5xl">
            Services
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Comprehensive development solutions tailored to modern business
            needs.
          </p>
        </FadeIn>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <ServiceCard {...service} />
            </FadeIn>
          ))}
        </div>
      </section>
      {/* <section className="py-20 px-6 max-w-6xl mx-auto text-center space-y-8">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Building digital products with <span className="text-primary">precision</span>.
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-stack developer specializing in modern web applications, scalable APIs, and seamless user experiences.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="pt-6">
            <TerminalCard />
          </div>
        </FadeIn>
      </section> */}
    </main>
  );
}
