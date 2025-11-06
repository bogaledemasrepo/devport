import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
interface Probs {
  searchParams: Promise<{ filter: string }>;
}
import { headers } from 'next/headers';
import React from 'react';

async function getServerUrl() {
  const headersList = headers();
  
  // 1. Get the Host header (e.g., 'localhost:3000' or 'example.com')
  const host = (await headersList).get('host');

  if (!host) {
    // Should not happen in a typical request, but good practice to handle.
    return 'http://localhost:3000'; 
  }

  // 2. Get the protocol. 
  // 'x-forwarded-proto' is reliable for deployed environments (Vercel, etc.).
  const protocol = (await headersList).get('x-forwarded-proto') || (host.includes('localhost') ? 'http' : 'https');

  // 3. Construct and return the base URL
  return `${protocol}://${host}`;
}


export default async function ProjectsPage({ searchParams }: Probs) {
  const { filter } = await searchParams;
  const serverURL=await getServerUrl();
  const response = await fetch(`${serverURL}/api/projects`);
  if (!response.ok) {
    console.log(response);
    return (
      <div className="">
        <h1>Unkoun server error!</h1>
      </div>
    );
  }

  const result = (await response.json()) as Project[];
  const projects = result.filter((Item) =>
    filter ? Item.category == filter : 1
  );
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 space-y-6">
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
        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          {projects &&
            projects.map((project, index) => (
              <Card key={index} className={`p-4`}>
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    {project.category =="mobile"?<video src={"/video/015 Object-fit add-on.mp4"} autoPlay muted loop className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"></video>:
                    <Image
                      src={"placeholder.svg"}
                      fill
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />}
                    <div
                      className={`absolute inset-0 bg-primary/80 opacity-5  hover:opacity-90 flex items-center justify-center gap-4 transition-opacity duration-300 `}
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        className="p-2 bg-background rounded-full hover:bg-card transition-colors cursor-pointer"
                        // onClick={(e) => {
                        //   e.stopPropagation();
                        //   window.open(project.liveUrl, "_blank");
                        // }}
                      >
                        <ExternalLink className="w-5 h-5 text-primary" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="p-2 bg-background rounded-full hover:bg-card transition-colors cursor-pointer"
                        // onClick={(e) => {
                        //   e.stopPropagation();
                        //   window.open(project.githubUrl, "_blank");
                        // }}
                      >
                        <Github className="w-5 h-5 text-primary" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-balance">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-pretty">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          {!projects && <h1>No project found!.</h1>}
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Let&apos;s discuss how I can help bring your next project to life
            with modern, scalable solutions across all platforms.
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
