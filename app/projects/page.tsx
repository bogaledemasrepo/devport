"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Github, Smartphone, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { FadeIn } from "@/components/motion-wrapper";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/projects`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProjects(data);
        setFilteredProjects(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filterProjects = (category: string) => {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category.toLowerCase() === category.toLowerCase()));
    }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      {/* --- Header Section --- */}
      <section className="mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Proven <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              A collection of technical challenges turned into functional, 
              scalable, and aesthetic digital products.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
              {["all", "web", "mobile", "backend"].map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  onClick={() => filterProjects(cat)}
                  className="rounded-full capitalize px-4 transition-all duration-300"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- Projects Grid --- */}
      <section className="mx-auto px-2 sm:px-6 pb-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {loading ? (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="h-[400px] rounded-[2rem] bg-muted animate-pulse" />
                ))
              ) : filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center text-muted-foreground">
                  No projects found in this category.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group h-full flex flex-col overflow-hidden rounded-[2rem] border-border/50 bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
        <CardContent className="p-0 flex flex-col h-full">
          {/* Image Area */}
          <div className="relative aspect-video overflow-hidden p-8">
            <Image
              src={project.image||"placeholder.svg"}
              fill
              alt={project.title}
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500" />
            
            {/* Quick Links Overlay */}
            <div className="absolute bottom-4 right-4 flex gap-2 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Button size="icon" variant="secondary" className="rounded-full shadow-lg" asChild>
                <a href={project.githubUrl} target="_blank"><Github className="w-4 h-4" /></a>
              </Button>
              <Button size="icon" className="rounded-full shadow-lg" asChild>
                <a href={project.liveUrl} target="_blank"><ExternalLink className="w-4 h-4" /></a>
              </Button>
            </div>
          </div>

          {/* Text Content */}
          <div className="p-7 flex flex-col flex-1">
            <div className="flex items-center gap-2 mb-3">
              {project.category === "mobile" ? <Smartphone className="w-4 h-4 text-primary" /> : <Globe className="w-4 h-4 text-primary" />}
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
                {project.category}
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-3 tracking-tight">{project.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
              {project.description}
            </p>

            {/* FIXED BADGE SECTION */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors px-3 py-0.5 rounded-full text-[11px] font-semibold"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}