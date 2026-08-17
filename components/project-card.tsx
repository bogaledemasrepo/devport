"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, Smartphone, ExternalLink, Play } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import YouTubePreview from "@/components/youtube-preview";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isMobile = project.category?.toLowerCase() === "mobile";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <Card className="group h-full flex flex-col overflow-hidden rounded-3xl border border-border/50 bg-card hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 p-6">
        <CardContent className="p-0 flex flex-col h-full">
          
          {/* Media Header with Subtle Overlay */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted border border-border/40">
            {project.videoId ? (
              <YouTubePreview videoId={project.videoId} title={project.title} />
            ) : (
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  fill
                  alt={project.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}

            {/* Quick Link Buttons */}
            <div className="absolute bottom-3 right-3 z-20 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              {project.githubUrl && (
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full shadow-md h-9 w-9 backdrop-blur-md bg-background/80 hover:bg-background"
                  asChild
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code`}
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  size="icon"
                  className="rounded-full shadow-md h-9 w-9"
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
          </div>

          {/* Project Details */}
          <div className="pt-5 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                {isMobile ? (
                  <Smartphone className="w-3.5 h-3.5 text-primary" />
                ) : (
                  <Globe className="w-3.5 h-3.5 text-primary" />
                )}
                <span className="text-[11px] uppercase tracking-wider font-bold text-muted-foreground">
                  {project.category}
                </span>
              </div>

              {project.liveUrl && (
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-500 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
              {project.tags?.map((tag: string) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-secondary/60 text-foreground/80 border-none px-2.5 py-0.5 rounded-md text-[11px] font-medium"
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