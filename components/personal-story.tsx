import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

export function PersonalStory() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              My Story
            </h2>
            <p className="text-lg text-muted-foreground">
              Every journey has a beginning. Here&apos;s mine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey into the world of technology began with curiosity and
                a broken computer. What started as a simple attempt to fix a
                family PC turned into a lifelong passion for understanding how
                things work and making them work better.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the years, I&apos;ve evolved from a curious teenager taking
                apart electronics to a seasoned developer who believes that
                great technology should be invisible, intuitive, and impactful.
              </p>
            </div>

            <div className="relative">
              <Image
                src="http://localhost:3000/aboutbogi.JPG"
                alt="Working on projects"
                className="w-full h-auto rounded-lg shadow-lg"
                width={500}
                height={500}
              />
            </div>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <blockquote className="text-xl font-medium text-foreground mb-4">
                    The best code is not just functional—it&apos;s elegant,
                    maintainable, and tells a story. Every project is an
                    opportunity to craft something meaningful.
                  </blockquote>
                  <cite className="text-muted-foreground">
                    — My development philosophy
                  </cite>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
