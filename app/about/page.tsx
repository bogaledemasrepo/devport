"use client";

import { FadeIn } from "@/components/motion-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar, Mail, MapPin, MessageCircle, Quote, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { SKILLS, TIMELINEEVENT } from "@/constant";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* 1. Story Section (Existing Refined) */}
      <section className="py-24 border-b border-border/40">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">My Story</h2>
              <div className="h-1.5 w-20 bg-primary mx-auto rounded-full mb-8" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A journey of curiosity, problem-solving, and continuous growth in the digital landscape.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <FadeIn delay={0.2}>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    My fascination with technology began with a broken family PC. That moment sparked a lifelong obsession with understanding how digital systems work and, more importantly, how to make them work better for people.
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Today, I focus on bridging the gap between <span className="text-foreground font-semibold">complex backend logic</span> and <span className="text-foreground font-semibold">elegant frontend interfaces</span>. I believe great code is invisible—it just works.
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.4}>
                   <Card className="bg-primary/[0.03] border-primary/10 rounded-2xl">
                     <CardContent className="p-6 flex gap-4">
                       <Quote className="w-6 h-6 text-primary shrink-0" />
                       <p className="italic text-muted-foreground">"The best code is not just functional—it's elegant and tells a story."</p>
                     </CardContent>
                   </Card>
                </FadeIn>
              </div>

              <FadeIn delay={0.3} className="relative aspect-square">
                <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] blur-2xl -z-10" />
                <Image
                  src="/aboutbogi.JPG"
                  alt="Bogale Working"
                  fill
                  className="object-cover rounded-3xl border border-border/50 shadow-2xl"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Skills & Expertise with Staggered Animation */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">My technical toolkit, honed through years of building enterprise-grade applications.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/50 transition-colors group bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`p-2 rounded-lg bg-background border border-border group-hover:border-primary/50 transition-colors shadow-sm`}>
                        <skill.icon className={`w-6 h-6 ${skill.color}`} />
                      </div>
                      <CardTitle className="text-lg">{skill.title}</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{skill.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-muted-foreground uppercase tracking-wider">Proficiency</span>
                        <span className="text-primary">{skill.proficiency}%</span>
                      </div>
                      <Progress value={skill.proficiency} className="h-1.5 bg-primary/10" />
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
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-muted-foreground">Milestones that shaped my professional career.</p>
          </FadeIn>

          <div className="max-w-4xl mx-auto relative">
            {/* Animated Center Line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-0 md:left-8 top-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" 
            />

            <div className="space-y-12">
              {TIMELINEEVENT.map((event, index) => (
                <FadeIn key={index} delay={index * 0.1} className="relative md:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-7.5 top-2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)] hidden md:block" />
                  
                  <Card className="border-border/60 hover:shadow-xl hover:shadow-primary/5 transition-all">
                    <CardContent className="p-8">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <Badge className="bg-primary/10 text-primary border-none rounded-md px-3 py-1">{event.year}</Badge>
                        <Badge variant="outline" className="capitalize">{event.type}</Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1 ml-auto">
                          <MapPin className="w-3.5 h-3.5" /> {event.location}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold mb-1">{event.title}</h3>
                      <p className="text-primary font-semibold mb-4 text-lg">{event.company}</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{event.description}</p>

                      <div className="grid gap-3">
                        <p className="text-sm font-bold uppercase tracking-widest text-foreground flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary" /> Key Achievements
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {event.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
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

      {/* 4. CTA Section - Modern Gradient Glass */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/[0.02] -z-10" />
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Together</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Ready to turn your vision into a scalable digital reality? I'm currently available for new projects and collaborations.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-16">
               {[
                 { icon: Mail, label: "Email Me", color: "text-primary", border: "border-primary/20" },
                 { icon: MessageCircle, label: "LinkedIn", color: "text-blue-500", border: "border-blue-500/20" },
                 { icon: Calendar, label: "Book a Call", color: "text-orange-500", border: "border-orange-500/20" }
               ].map((item, i) => (
                 <motion.div key={i} whileHover={{ y: -5 }}>
                    <Button variant="outline" className={`h-16 px-8 rounded-2xl bg-background shadow-sm ${item.border} hover:bg-secondary transition-all`}>
                      <item.icon className={`w-5 h-5 mr-3 ${item.color}`} />
                      <span className="font-semibold">{item.label}</span>
                    </Button>
                 </motion.div>
               ))}
            </div>

            <Button size="lg" className="h-14 px-10 rounded-full text-lg shadow-xl shadow-primary/20">
              Get In Touch
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}