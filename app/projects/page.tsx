"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";
import { Globe, Smartphone, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion-wrapper";
import YouTubePreview from "@/components/youtube-preview";
import { Project } from "@/types";
import Image from "next/image";

const CATEGORIES = ["all", "fullstack", "mobile", "backend"] as const;

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isSubscribed = true;

    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (isSubscribed) {
          setProjects(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isSubscribed) setLoading(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, []);

  // Compute filtered projects using memoization to prevent unnecessary recalculations
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter(
      (p) => p.category?.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [projects, activeCategory]);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      {/* Header Section */}
      <section className="mx-auto px-6 pt-20 lg:pt-32">
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
              {CATEGORIES.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat)}
                  className="rounded-full capitalize px-4 transition-all duration-300"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto px-4 sm:px-6 pb-20 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid lg:grid-cols-2 gap-8">
              {loading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={`skeleton-${i}`}
                    className="h-105 rounded-3xl bg-muted/60 animate-pulse"
                  />
                ))
              ) : filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id || project.title}
                    project={project}
                    index={index}
                  />
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
  const isMobile = project.category?.toLowerCase() === "mobile";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
    >
      <Card className="group h-full flex flex-col overflow-hidden rounded-3xl border-border/50 bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 p-6">
        <CardContent className="p-0 flex flex-col h-full">
          {/* Stabilized Video / Image Container */}
          <div className="relative aspect-video w-full overflow-hidden border rounded-2xl bg-muted">
            {project.videoId ? (
              <YouTubePreview videoId={project.videoId} title={project.title} />
            ) : (
              <Image
                src={project.image || "/placeholder.svg"}
                fill
                alt={project.title}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}

            {/* Quick Links Overlay */}
            <div className="absolute bottom-4 right-4 z-20 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              {project.githubUrl && (
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full shadow-lg h-9 w-9"
                  asChild
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  size="icon"
                  className="rounded-full shadow-lg h-9 w-9"
                  asChild
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit live demo for ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          {/* Text Content */}
          <div className="pt-6 flex flex-col flex-1">
            <div className="flex items-center gap-2 mb-3">
              {isMobile ? (
                <Smartphone className="w-4 h-4 text-primary" />
              ) : (
                <Globe className="w-4 h-4 text-primary" />
              )}
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                {project.category}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-2 tracking-tight">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags?.map((tag: string) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-primary/5 text-primary border-none hover:bg-primary/10 transition-colors px-2.5 py-0.5 rounded-md text-[10px] font-medium"
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