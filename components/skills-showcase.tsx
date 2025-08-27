import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Smartphone, Zap } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    proficiency: 95,
    color: "text-primary",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL, MongoDB",
    proficiency: 88,
    color: "text-accent",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Flutter, iOS/Android",
    proficiency: 78,
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "DevOps & Tools",
    description: "Docker, AWS, CI/CD, Git, Testing",
    proficiency: 85,
    color: "text-secondary",
  },
];

export function SkillsShowcase() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
            and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <skill.icon className={`w-6 h-6 ${skill.color}`} />
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="font-medium">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
