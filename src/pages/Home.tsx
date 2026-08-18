import { SiteNav } from "@/components/site-nav"
import { HeroSection } from "@/components/hero-section"
import { SuperpowerSection } from "@/components/superpower-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { BioSection } from "@/components/bio-section"
import { EthnographicNote } from "@/components/ethnographic-note"
import { SystemsThinkingSection } from "@/components/systems-thinking-section"
import { ClosingSection } from "@/components/closing-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <div id="home">
        <HeroSection />
      </div>
      <ProjectsSection />
      <SuperpowerSection />
      <ExperienceSection />
      <div id="about">
        <BioSection />
      </div>
      <EthnographicNote />
      <SystemsThinkingSection />
      <ClosingSection />
    </div>
  )
}
