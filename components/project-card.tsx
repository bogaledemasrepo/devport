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
      <Card className="group border-border/50 bg-card hover:border-primary/40 hover:shadow-primary/5 flex h-full flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:shadow-xl">
        <CardContent className="flex h-full flex-col p-0">
          {/* Media Header with Subtle Overlay */}
          <div className="bg-muted border-border/40 relative aspect-video w-full overflow-hidden rounded-2xl border">
            {project.videoId ? (
              <YouTubePreview videoId={project.videoId} title={project.title} />
            ) : (
              <div className="relative h-full w-full overflow-hidden">
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
            <div className="absolute right-3 bottom-3 z-20 flex translate-y-2 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {project.githubUrl && (
                <Button
                  size="icon"
                  variant="secondary"
                  className="bg-background/80 hover:bg-background h-9 w-9 rounded-full shadow-md backdrop-blur-md"
                  asChild
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code`}
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  size="icon"
                  className="h-9 w-9 rounded-full shadow-md"
                  asChild
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit live demo for ${project.title}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="flex flex-1 flex-col pt-5">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {isMobile ? (
                  <Smartphone className="text-primary h-3.5 w-3.5" />
                ) : (
                  <Globe className="text-primary h-3.5 w-3.5" />
                )}
                <span className="text-muted-foreground text-[11px] font-bold tracking-wider uppercase">
                  {project.category}
                </span>
              </div>

              {project.liveUrl && (
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-500">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  Live
                </span>
              )}
            </div>

            <h3 className="group-hover:text-primary mb-2 text-xl font-bold tracking-tight transition-colors">
              {project.title}
            </h3>

            <p className="text-muted-foreground mb-5 line-clamp-3 flex-1 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="border-border/40 flex flex-wrap gap-1.5 border-t pt-2">
              {project.tags?.map((tag: string) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-secondary/60 text-foreground/80 rounded-md border-none px-2.5 py-0.5 text-[11px] font-medium"
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
