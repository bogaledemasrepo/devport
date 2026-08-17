import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Download } from "lucide-react";
import { FadeIn } from "@/components/motion-wrapper";
import { SERVICES } from "@/constant";
import ServiceCard from "@/components/Service-card";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/10">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <FadeIn>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
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
                  size="lg"
                  className="rounded-xl h-12 px-8 flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                  asChild
                >
                  <a href="https://bit.ly/4q4SQJK" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-xl h-12 px-8 border-border/60 hover:bg-secondary" asChild>
                  <Link href="/contact">Hire Me Now!</Link>
                </Button>
              </div>
            </FadeIn>

            {/* Quick Contact */}
            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 border-t border-border/50">
                <a href="mailto:bogidemas@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  bogidemas@gmail.com
                </a>
                <a href="tel:+251923872187" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  +251 923 872 187
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Hero Image */}
          <FadeIn delay={0.2} className="relative flex justify-center lg:justify-end">
             <div className="relative w-full max-w-md aspect-square group">
                <div className="absolute -inset-4 bg-linear-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl group-hover:from-primary/30 transition-all duration-500" />
                
                <Image
                  src="/images/professional-developer-portrait.png"
                  alt="Bogale Demas - Software Developer"
                  fill
                  className="object-cover rounded-3xl shadow-2xl relative z-10 border-4 border-background"
                  priority
                />
             </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section className="border-t border-border/40 mx-auto px-4 sm:px-6 py-20 lg:py-32">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development solutions tailored to modern business needs.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {SERVICES.map((service, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <ServiceCard {...service} />
              </FadeIn>
            ))}
          </div>
      </section>
    </main>
  );
}