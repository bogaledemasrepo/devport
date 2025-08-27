import { PersonalStory } from "@/components/personal-story";
import { SkillsShowcase } from "@/components/skills-showcase";
import { JourneyTimeline } from "@/components/journey-timeline";
import { PersonalCTA } from "@/components/personal-cta";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <PersonalStory />
      <SkillsShowcase />
      <JourneyTimeline />
      <PersonalCTA />
    </main>
  );
}
