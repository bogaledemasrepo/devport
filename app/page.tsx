"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ServiceCard from "@/components/Service-card";
import serverUrl from "@/constant";

export default function Home() {
  const handleCvDownload = () => {
    const link = document.createElement("a");
    link.href = "/bogicv.pdf";
    link.download = "bogicv.pdf";
    link.click();
  };

  const services = [
    {
      title: "Backend Development",
      discription:
        "I develop robust and scalable server-side applications and APIs. My skills include building enterprise-grade applications with Spring Boot, a powerful and efficient framework for Java-based services. I also excel at creating high-performance, event-driven applications using Node.js and the Express framework, which is ideal for building RESTful APIs and real-time applications.",
      icon: `${serverUrl}/backend-server-icon.png`,
      link: "/projects/?filter=backend",
    },
    {
      title: "Frontend Development",
      discription:
        "I specialize in creating modern, dynamic, and highly performant user interfaces. Using React, I build complex UIs from reusable components, ensuring a modular and scalable codebase. I leverage Tailwind CSS to rapidly develop responsive and aesthetically pleasing designs directly within the code, which accelerates the development process.",
      icon: `${serverUrl}/frontend-icon.jpeg`,
      link: "/projects/?filter=frontend",
    },
    {
      title: "Mobile App Development",
      discription:
        "I create cross-platform mobile applications for both iOS and Android from a single codebase using React Native. This approach significantly reduces development time and cost while delivering a native-like user experience and performance. I build apps with a strong focus on intuitive UI/UX, responsive design, and seamless integration with device-specific features.",
      icon: `${serverUrl}/mobile-development.jpg`,
      link: "/projects/?filter=mobile",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Hi, I&apos;m <span className="text-primary">Bogale Demas</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Software Developer
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Results-oriented full-stack web developer with 2+ years of
              experience in designing, developing, and deploying scalable web
              applications. Proficient in a range of front-end and back-end
              technologies, including JavaScript, React, Node.js, and SQL.
              Seeking to leverage my expertise to build robust solutions and
              contribute to a collaborative team.
            </p>

            {/* Contact Info */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <Link
                      href="mailto:bogidemas@gmail.com"
                      className="text-primary hover:underline font-medium"
                    >
                      bogidemas@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="font-medium">+251923872187</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleCvDownload}
                size="lg"
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Hire Me Now!</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/images/professional-developer-portrait.png"
                alt="Bogale - Software Developer"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I offer comprehensive development services to bring your ideas to
              life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
