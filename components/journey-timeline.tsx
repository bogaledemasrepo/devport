import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Award } from "lucide-react";

const timelineEvents = [
  {
    year: "2025",
    title: "Full-Stack Developer",
    company: "Abole Technology plc",
    location: "Addis Ababa, Ethiopia",
    type: "work",
    description:
      "Built the entire frontend and backend infrastructure from scratch using modern technologies.",
    achievements: [
      "Improved app performance by 40%",
      "Scaled to 10k+ users",
      "Integrated payment systems",
    ],
  },
  // {
  //   year: "2021",
  //   title: "Certified AWS Solutions Architect",
  //   company: "Amazon Web Services",
  //   location: "Online",
  //   type: "certification",
  //   description:
  //     "Achieved professional certification in cloud architecture and deployment strategies.",
  //   achievements: [
  //     "Professional level certification",
  //     "Cloud architecture expertise",
  //     "DevOps best practices",
  //   ],
  // },
  {
    year: "2024",
    title: "Full-Stack Development",
    company: "Teamwork SOftwareplc",
    location: "Bahir Dar, Ethiopia",
    type: "work",
    description:
      "Specialized in creating responsive, accessible web applications for diverse clients.",
    achievements: [
      "Delivered 15+ client projects",
      "Improved accessibility scores",
      "Mentored interns",
    ],
  },
  {
    year: "2023",
    title: "Computer Science Degree",
    company: "Bahir Dar University",
    location: "Bahir Dar, Ethiopia",
    type: "education",
    description:
      "Bachelor's degree with focus on software engineering and cyber security.",
    achievements: [
      "Magna Cum Laude",
      "Dean's List 4 semesters",
      "Capstone project award",
    ],
  },
];

export function JourneyTimeline() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            My Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key milestones and experiences that have shaped my career and
            expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                  <Card className="md:ml-16 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div className="flex items-center gap-2 mb-2 sm:mb-0">
                          <Badge
                            variant={
                              event.type === "work"
                                ? "default"
                                : event.type === "education"
                                ? "secondary"
                                : "outline"
                            }
                          >
                            {event.year}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {event.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {event.title}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {event.company}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {event.description}
                      </p>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                          <Award className="w-4 h-4" />
                          Key Achievements
                        </div>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-6">
                          {event.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
