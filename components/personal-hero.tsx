import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
export function PersonalHero() {
  return (
    <section className="from-background via-muted/30 to-background relative flex min-h-screen items-center justify-center bg-gradient-to-br">
      <div className="container mx-auto px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-foreground text-4xl leading-tight font-bold md:text-6xl">
                Hi, I&apos;m <span className="text-primary">Alex Johnson</span>
              </h1>
              <p className="text-muted-foreground text-xl font-light md:text-2xl">
                Creative Developer & Digital Storyteller
              </p>
            </div>

            <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
              I craft digital experiences that bridge the gap between beautiful
              design and powerful functionality. With a passion for innovation
              and a love for clean code, I bring ideas to life.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
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
            <div className="relative mx-auto w-full max-w-md">
              <div className="bg-primary/20 absolute inset-0 rounded-full blur-3xl"></div>
              <Image
                src="/professional-portrait-of-a-creative-developer--mod.png"
                alt="Alex Johnson - Creative Developer"
                className="relative z-10 h-auto w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
          <ArrowDown className="text-primary h-6 w-6" />
        </div>
      </div>
    </section>
  );
}
