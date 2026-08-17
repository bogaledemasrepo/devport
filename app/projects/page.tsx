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
import { ProjectCard } from "@/components/project-card";

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

