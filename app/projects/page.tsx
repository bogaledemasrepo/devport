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
    <div className="bg-background selection:bg-primary/20 min-h-screen">
      {/* Header Section */}
      <section className="mx-auto px-6 pt-20 lg:pt-32">
        <div className="mx-auto max-w-6xl text-center">
          <FadeIn>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
              Proven <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-lg">
              A collection of technical challenges turned into functional,
              scalable, and aesthetic digital products.
            </p>

            {/* Category Filter Tabs */}
            <div className="mb-8 flex flex-wrap justify-center gap-2 md:mb-12">
              {CATEGORIES.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat)}
                  className="rounded-full px-4 capitalize transition-all duration-300"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto px-4 pb-20 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid gap-8 lg:grid-cols-2">
              {loading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={`skeleton-${i}`}
                    className="bg-muted/60 h-105 animate-pulse rounded-3xl"
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
                <div className="text-muted-foreground col-span-full py-20 text-center">
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
