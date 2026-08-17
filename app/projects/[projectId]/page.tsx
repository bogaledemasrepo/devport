"use client";
import { Project } from "@/types";
import { Calendar, Users, Award } from "lucide-react";
import React, { useEffect, useState } from "react";

const ProjectDetailPage = () => {
  const [project, setProject] = useState<Project>();
  useEffect(() => {
    async function fetchProjectDetail() {
      const response = await fetch("/api/projects/");
      const data = (await response.json()) as Project;
      setProject(data);
    }
    fetchProjectDetail();
  }, []);

  return !project ? null : (
    <div className="flex h-screen w-full items-center justify-center">
      <main className="mx-auto max-w-150 rounded-sm border border-gray-300 p-4">
        <div className="mb-4 space-y-4">
          <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
            <div className="flex items-center gap-2">
              <Calendar className="text-primary h-4 w-4" />
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-medium">{project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-primary h-4 w-4" />
              <span className="text-muted-foreground">Team:</span>
              <span className="font-medium">{project.teamSize}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="text-primary h-4 w-4" />
              <span className="text-muted-foreground">Status:</span>
              <span className="font-medium text-green-600">Live</span>
            </div>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Key Achievements</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              {project.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Technical Challenge</h4>
            <p className="text-muted-foreground text-sm">
              {project.challenges}
            </p>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Technology Stack</h4>
            <div className="space-y-2">
              <div>
                <span className="text-sm font-medium">Frontend: </span>
                <span className="text-muted-foreground text-sm">
                  {project.technologies.frontend.join(", ")}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium">Backend: </span>
                <span className="text-muted-foreground text-sm">
                  {project.technologies.backend.join(", ")}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium">Deployment: </span>
                <span className="text-muted-foreground text-sm">
                  {project.technologies.deployment.join(", ")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailPage;
