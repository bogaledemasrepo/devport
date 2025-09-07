"use client";
import { Calendar, Users, Award } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
interface ProjectType {
  projectId: string;
  title: string;
  address: string;
  repository: string;
  description: string;
}
const ProjectDetailPage = () => {
  const { projectId } = useParams() as { projectId: string[] };
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
    <div className="w-full h-screen flex items-center justify-center">
      <main className="border border-gray-300 rounded-sm max-w-[600px] mx-auto p-4">
        <div className="space-y-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-medium">{project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Team:</span>
              <span className="font-medium">{project.teamSize}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Status:</span>
              <span className="font-medium text-green-600">Live</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Key Achievements</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {project.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Technical Challenge</h4>
            <p className="text-sm text-muted-foreground">
              {project.challenges}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Technology Stack</h4>
            <div className="space-y-2">
              <div>
                <span className="text-sm font-medium">Frontend: </span>
                <span className="text-sm text-muted-foreground">
                  {project.technologies.frontend.join(", ")}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium">Backend: </span>
                <span className="text-sm text-muted-foreground">
                  {project.technologies.backend.join(", ")}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium">Deployment: </span>
                <span className="text-sm text-muted-foreground">
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
