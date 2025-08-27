import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Server, Smartphone, Monitor } from "lucide-react";
import Link from "next/link";
import { ProjectGallery } from "@/components/ProjectGallery";

const projectsData = [
  {
    title: "Backend Development",
    description:
      " I also excel at creating high-performance, event-driven applications using Node.js and the Express framework, which is ideal for building RESTful APIs and real-time applications.",
    icon: Server,
    link: "/projects/?filter=backend",
    tags: ["Spring Boot", "Node.js", "Express", "REST APIs", "Java"],
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Frontend Development",
    description:
      "I leverage Tailwind CSS to rapidly develop responsive and aesthetically pleasing designs directly within the code, which accelerates the development process.",
    icon: Monitor,
    link: "/projects/?filter=frontend",
    tags: ["React", "Tailwind CSS", "TypeScript", "Next.js", "UI/UX"],
    color: "bg-secondary/10 text-secondary",
  },
  {
    title: "Mobile App Development",
    description:
      " This approach significantly reduces development time and performance. I build apps with a strong focus on intuitive UI/UX, responsive design, and seamless integration with device-specific features.",
    icon: Smartphone,
    link: "/projects/?filter=mobile",
    tags: ["React Native", "iOS", "Android", "Cross-platform", "Mobile UI"],
    color: "bg-accent/10 text-accent",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore my work across backend development, frontend interfaces, and
            mobile applications. Each project showcases my commitment to
            quality, performance, and user experience.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-border bg-card"
                >
                  <CardHeader className="space-y-4">
                    <div
                      className={`w-full h-64 rounded-lg ${project.color} flex items-center justify-center relative p-0`}
                    >
                      <ProjectGallery />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <CardDescription className="text-muted-foreground leading-relaxed w-full h-32 overflow-y-auto">
                      {project.description}
                    </CardDescription>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Button */}
                    <Button asChild className="w-full group/btn">
                      <Link href={project.link}>
                        View Projects
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Let's discuss how I can help bring your next project to life with
            modern, scalable solutions across all platforms.
          </p>
          <Button size="lg" className="text-lg px-8">
            Get In Touch
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
