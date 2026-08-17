"use client";

import { FadeIn } from "@/components/motion-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, MapPin, Quote, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import GetInTech from "@/components/get-in-tech";
import { SKILLS, TIMELINEEVENT } from "@/constant";

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* 1. Story Section */}
      <section className="border-border/40 border-b py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                My <span className="text-primary">Story</span>
              </h2>
              <div className="bg-primary mx-auto mb-8 h-1.5 w-20 rounded-full" />
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                A journey of curiosity, problem-solving, and continuous growth
                in the digital landscape.
              </p>
            </FadeIn>

            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <FadeIn delay={0.2}>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    My fascination with technology began with a broken family
                    PC. That moment sparked a lifelong obsession with
                    understanding how digital systems work and, more
                    importantly, how to make them work better for people.
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Today, I focus on bridging the gap between{" "}
                    <span className="text-foreground font-semibold">
                      complex backend logic
                    </span>{" "}
                    and{" "}
                    <span className="text-foreground font-semibold">
                      elegant frontend interfaces
                    </span>
                    . I believe great code is invisible—it just works.
                  </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <Card className="bg-primary/3 border-primary/10 rounded-2xl">
                    <CardContent className="flex gap-4 p-6">
                      <Quote className="text-primary h-6 w-6 shrink-0" />
                      <p className="text-muted-foreground italic">
                        The best code is not just functional—it&apos;s elegant
                        and tells a story.
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>

              <FadeIn delay={0.3} className="relative aspect-square">
                <div className="bg-primary/10 absolute -inset-4 -z-10 rounded-3xl blur-2xl" />
                <Image
                  src="/aboutbogi.JPG"
                  alt="Bogale Demas working on code"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="border-border/50 rounded-3xl border object-cover shadow-2xl"
                  priority
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Skills & Expertise */}
      <section className="bg-secondary/20 py-24">
        <div className="container mx-auto px-6">
          <FadeIn className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground mx-auto max-w-xl">
              My technical toolkit, honed through years of building
              enterprise-grade applications.
            </p>
          </FadeIn>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.title || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-border/50 hover:border-primary/50 group bg-background/50 h-full backdrop-blur-sm transition-colors">
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-4">
                      <div className="bg-background border-border group-hover:border-primary/50 rounded-lg border p-2 shadow-sm transition-colors">
                        <skill.icon className={`h-6 w-6 ${skill.color}`} />
                      </div>
                      <CardTitle className="text-lg">{skill.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm">
                      {skill.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-muted-foreground tracking-wider uppercase">
                          Proficiency
                        </span>
                        <span className="text-primary">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <Progress
                        value={skill.proficiency}
                        className="bg-primary/10 h-1.5"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Timeline / Journey Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <FadeIn className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">My Journey</h2>
            <p className="text-muted-foreground">
              Milestones that shaped my professional career.
            </p>
          </FadeIn>

          <div className="relative mx-auto max-w-4xl">
            {/* Animated Center Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="from-primary via-primary/50 absolute top-0 left-0 hidden w-0.5 bg-linear-to-b to-transparent md:left-8 md:block"
            />

            <div className="space-y-12">
              {TIMELINEEVENT.map((event, index) => (
                <FadeIn
                  key={event.title || index}
                  delay={index * 0.1}
                  className="relative md:pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="bg-primary absolute top-2 left-0 hidden h-3 w-3 rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)] md:left-7.5 md:block" />

                  <Card className="border-border/60 hover:shadow-primary/5 transition-all hover:shadow-xl">
                    <CardContent className="p-8">
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <Badge className="bg-primary/10 text-primary rounded-md border-none px-3 py-1">
                          {event.year}
                        </Badge>
                        <Badge variant="outline" className="capitalize">
                          {event.type}
                        </Badge>
                        <span className="text-muted-foreground ml-auto flex items-center gap-1 text-sm">
                          <MapPin className="h-3.5 w-3.5" /> {event.location}
                        </span>
                      </div>

                      <h3 className="mb-1 text-2xl font-bold">{event.title}</h3>
                      <p className="text-primary mb-4 text-lg font-semibold">
                        {event.company}
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="grid gap-3">
                        <p className="text-foreground flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
                          <Award className="text-primary h-4 w-4" /> Key
                          Achievements
                        </p>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {event.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-muted-foreground flex items-start gap-2 text-sm"
                            >
                              <ChevronRight className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <GetInTech />
    </main>
  );
}
