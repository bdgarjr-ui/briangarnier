import { ChevronDown } from "lucide-react"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { SparklesText } from "@/components/ui/sparkles-text"
import { LinkPreview } from "@/components/ui/link-preview"

export function HeroSection() {
  return (
    <AuroraBackground className="border-b border-border">
      <div className="relative z-10 mx-auto max-w-4xl px-8 py-10 text-center sm:px-10">
        <SparklesText
          as="h1"
          text="Designing for the user everyone else designs around."
          colors={{ first: "#a3e635", second: "#fbbf24" }}
          sparklesCount={12}
          className="mx-auto mb-5 max-w-2xl text-[clamp(2rem,5.5vw,3.75rem)] font-semibold leading-tight text-foreground"
        />
        <p className="mx-auto mb-4 max-w-xl text-lg text-muted-foreground sm:text-xl">
          I'm{" "}
          <LinkPreview
            url="#about"
            imageSrc="/brian.jpg"
            className="font-semibold text-purple-700 hover:text-purple-800 dark:text-purple-300 dark:hover:text-purple-200"
          >
            Brian
          </LinkPreview>
          , a UX researcher. Retail and direct care taught me how real people{" "}
          <strong className="font-semibold text-foreground">get failed</strong> by products — before
          I had a name for it.
        </p>

        <p className="mx-auto mb-6 max-w-lg text-sm italic text-muted-foreground sm:text-base">
          Research rooted in lived experience. Design for the user you actually have, not the one
          you wish you had.
        </p>

        <p className="mx-auto mb-6 max-w-lg text-sm text-muted-foreground sm:text-base">
          User research · UX design · Inclusive design · Tableau · SQL fundamentals · Accessibility
        </p>

        <div className="mx-auto mb-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>B.S., User Research &amp; UX Design</span>
          <img src="/full-sail-logo.png" alt="Full Sail University" className="h-14 w-auto opacity-80" />
        </div>

        <ChevronDown className="mx-auto h-5 w-5 text-muted-foreground" />
      </div>
    </AuroraBackground>
  )
}
