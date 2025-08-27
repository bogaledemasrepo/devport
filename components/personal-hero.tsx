import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
export function PersonalHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Hi, I&apos;m <span className="text-primary">Alex Johnson</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Creative Developer & Digital Storyteller
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I craft digital experiences that bridge the gap between beautiful
              design and powerful functionality. With a passion for innovation
              and a love for clean code, I bring ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Let&apos;s Connect
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                View My Work
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <Image
                src="/professional-portrait-of-a-creative-developer--mod.png"
                alt="Alex Johnson - Creative Developer"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
}
