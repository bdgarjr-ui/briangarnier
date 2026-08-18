import type { ReactNode } from "react"
import { CaseStudyHeader } from "@/components/case-study-header"
import { PersonaGrid, type PersonaItem } from "@/components/case-study/persona-grid"
import { StepRail, type RailStep } from "@/components/case-study/step-rail"
import { OutcomeStats, type OutcomeStat } from "@/components/case-study/outcome-stats"

const metadata = [
  { label: "Type", value: "Solo Research Project" },
  { label: "Role", value: "UX Researcher" },
  { label: "Method", value: "Qualitative + Observational" },
  { label: "Year", value: "2025" },
  { label: "Tools", value: "Indeed App · Interview · Survey" },
]

const tags = ["User Interviews", "Accessibility", "Inclusive Design", "Job Tech"]

const statBadges = [
  { value: "1:1", label: "Interview Format" },
  { value: "4", label: "Research Themes" },
  { value: "3", label: "Data Types" },
  { value: "Solo", label: "Researcher" },
]

const personas: PersonaItem[] = [
  {
    name: "The Target User",
    role: "Composite persona, ages 16–25",
    detail: "First-generation job seeker, low or no professional experience, applying under real financial pressure.",
    traits: ["Shared or low-spec device", "Unreliable connectivity", "No mentor to ask"],
  },
  {
    name: "John B.",
    role: "Session participant",
    detail: "A real, active Indeed user recruited to represent this group. Name shortened for privacy.",
    traits: ["Mobile + Desktop", "Active job seeker", "Prefers Indeed over other platforms"],
  },
]

const journeySteps: RailStep[] = [
  { label: "Search results", detail: "Keyword + location search" },
  { label: "Job details", detail: "Reviews listing" },
  { label: "Apply", detail: "CTA hidden under the fold on mobile", friction: true },
  { label: "Save for later", detail: "Only appears after applying", friction: true },
  { label: "Resume help", detail: "Buried behind nav layers", friction: true },
]

const findingsStats: OutcomeStat[] = [
  { value: "6", label: "Usability issues logged", note: "Across mobile and desktop, one session" },
  { value: "2", label: "Devices compared", note: "Mobile app vs. desktop, same tasks" },
  { value: "1", label: "Think-aloud session", note: "Solo researcher, one participant" },
  { value: "5", label: "Recommendations produced", note: "Directly traceable to observed friction" },
]

const userGroupFactors = [
  { factor: "Socioeconomic", detail: "Lower income or education access: barriers technology compounds" },
  { factor: "Device access", detail: "Often using shared, government-issued, or low-spec devices" },
  { factor: "Connectivity", detail: "Slow or unreliable internet creates friction at key moments" },
  { factor: "Education", detail: "No entry-level job experience requiring less than 3 years prior work" },
  { factor: "Accessibility", detail: "Including users with disabilities facing additional barriers" },
  { factor: "Support systems", detail: "Limited access to mentors, coaches, or professional networks" },
]

const problems = [
  { num: "01", title: "Apply button hidden under fold", desc: "On mobile, the primary CTA is not visible without scrolling, critical friction for first-time applicants." },
  { num: "02", title: "Resume help is buried", desc: "Indeed's resume assistance sits behind multiple navigation layers. The users who need it most won't find it." },
  { num: "03", title: "App feels like it requires experience", desc: "Features like saved searches and job alerts assume familiarity. First-time users feel like outsiders." },
  { num: "04", title: "Entry-level = 3+ years experience", desc: "Listings marketed as entry-level regularly contradict the label. No filter exists to surface truly zero-experience roles." },
  { num: "05", title: "Saving a listing is not obvious", desc: "The save function appears only after applying. Users lose listings they wanted to review." },
  { num: "06", title: "Device inconsistencies", desc: "On older or low-spec devices, UI elements misfire, disproportionately affecting this demographic." },
]

const methodSteps = [
  { s: "01", m: "Think-Aloud Protocol", d: "Real-time narration during task completion" },
  { s: "02", m: "Side-by-Side Comparison", d: "Mobile app vs. desktop: same tasks, observed differences" },
  { s: "03", m: "1:1 User Interview", d: "Post-task questioning on emotional and cognitive experience" },
  { s: "04", m: "Observational Notes", d: "Non-verbal cues, hesitations, environmental factors" },
  { s: "05", m: "Affinity Synthesis", d: "Themes grouped across qualitative data" },
]

const quotes = [
  { text: "I'd say it's generally effective.", note: "with a hesitation that signaled something more" },
  { text: "I've used a few other platforms, but I prefer Indeed.", note: "positive brand reinforcement" },
  { text: "I've found it a bit difficult to save job listings for later. I wish there was a more straightforward way.", note: "the clearest pain point of the session" },
]

const dataCategories = [
  { title: "Qualitative Categorical", items: ["Platform preference (Indeed vs others)", "Ratings of search effectiveness", "Feature presence or absence"] },
  { title: "Qualitative Textual", items: ["Experience descriptions during tasks", "Pain points from think-aloud", "Suggestions and workarounds observed"] },
  { title: "Quantitative", items: ["Frequency of use across devices", "Task completion rates", "Mobile vs. desktop comparison"] },
]

const researchThemes = [
  { num: "01", title: "Search Effectiveness", desc: "When irrelevant results erode trust" },
  { num: "02", title: "User Experience", desc: "Where Indeed wins and where it loses" },
  { num: "03", title: "Mobile vs. Desktop", desc: "Device-specific friction points" },
  { num: "04", title: "Pain Points", desc: "Saving, resume discovery, and entry-level gaps" },
]

const pillars = [
  {
    tag: "HOW 01",
    title: "Why I chose the 16–25 socioeconomic demographic specifically",
    badge: "Research framing",
    why: "Job search UX is almost always designed with an assumed user who is already professionally experienced: someone who has a resume, knows how to use a filter, understands what a cover letter is. That user does fine on Indeed. The 16–25 user from a lower-income background has none of those assumptions working for them. They are the edge case the design forgot. That is exactly why I centered them.",
    how: "I built the research demographic criteria before I recruited a single participant. I defined: age range 16–25, limited or no professional experience, lower access to devices or stable internet, and limited exposure to professional mentorship. Every research question was then written through that lens, not asking what the ideal job seeker does, but what this specific person encounters when the system was not built for them.",
  },
  {
    tag: "HOW 02",
    title: "Why I used think-aloud instead of a standard interview",
    badge: "Method choice",
    why: "If I had just asked people \"what do you find difficult about Indeed?\", I would have gotten polished, considered answers, shaped by what people think they are supposed to say, not what they actually experience. The friction in a job search app often happens in small moments: a hesitation, a pause, an extra tap. Those moments do not survive the journey to a structured interview. Think-aloud catches them in real time.",
    how: "I asked John to complete specific tasks on both the mobile app and desktop site while narrating out loud, not explaining what he was doing, but saying what he was thinking and feeling as he did it. I stayed quiet. I did not help. I did not react. I just listened and noted where the narration slowed down, where he qualified his answers, and where silence appeared. Those were the data points.",
    quote: "The word \"generally\" in \"I would say it is generally effective\" was not in the transcript. It was in the pause before it.",
  },
  {
    tag: "HOW 03",
    title: "Why I conducted sessions at a public library",
    badge: "Environment design",
    why: "The research environment is part of the data. If I had conducted sessions at a university lab or a corporate office, I would have introduced a class signal that changes how participants present themselves. The library is a neutral, equalizing space. It's also where a significant portion of this demographic actually does their job searching. Choosing it was not just practical. It was honest to the research question.",
    how: "I arranged sessions at a library with public computers, which meant participants were using devices representative of what they might actually use, not high-performance research equipment. I also recruited through community boards and word of mouth rather than through academic channels, to ensure the participant pool was not skewed toward people already comfortable with formal research settings.",
  },
  {
    tag: "HOW 04",
    title: "Why I fought the urge to fix things during the session",
    badge: "Research discipline",
    why: "When John said he found it difficult to save job listings, my instinct was to agree, explain the workaround, and move on. That instinct is a research contamination risk. The moment I offer a solution, the participant stops experiencing the friction naturally, and I lose the data. The discomfort of watching someone struggle is the whole point. That struggle is what I am there to capture.",
    how: "I kept a physical note to myself: listen first, respond only at the end. During the session I nodded, used neutral acknowledgements (\"I see\", \"okay\", \"go on\"), and saved all reactive commentary for after the task was complete. Only at the closing did I share my own observation about the save button, not to correct John, but to validate his frustration and show that his feedback had landed.",
  },
  {
    tag: "HOW 05",
    title: "Why I compared mobile and desktop in the same session",
    badge: "Comparative method",
    why: "The 16–25 demographic disproportionately uses mobile, often exclusively. But a job application often demands a desktop: attaching a resume, filling in a cover letter, navigating a multi-step form. Understanding where the experience breaks down by device is not an optional detail. It is central to the research question. Mobile friction for this group is not a preference issue. It is an access issue.",
    how: "I gave each participant the same set of tasks: search for a job, apply to one, save one for later, and asked them to complete each task first on mobile, then on desktop. I then asked them to describe the difference in their own words, without prompting. The unprompted comparison revealed where users had adapted to friction without realizing it, and where the gap between the two experiences had become normalized.",
  },
]

const recommendations = [
  { num: "01", title: "Surface Save button earlier in browse flow", desc: "Eliminates the biggest pain point John named, and prevents task abandonment on mobile." },
  { num: "02", title: "Filter misleading 'entry-level' postings", desc: "Restores trust for first-time applicants already skeptical the system works for them." },
  { num: "03", title: "Promote resume assistance early in onboarding", desc: "The users who need it most discover it last. Surface it early to build confidence." },
  { num: "04", title: "Bring Apply button above the fold on mobile", desc: "The primary action shouldn't require a scroll, especially on lower-spec devices." },
  { num: "05", title: "Add job market context panel per search", desc: "Helps first-time users calibrate expectations before investing time in applications." },
]

const transcript: Array<{ speaker?: string; text?: string; note?: string; tag?: string }> = [
  { speaker: "Brian G.", text: "Thank you for participating in our mock interview. Today, we will be discussing your experience with the Indeed job search application." },
  { speaker: "John B.", text: "Great, I am happy to help." },
  { speaker: "Brian G.", text: "To start, can you describe your typical experience using Indeed to find jobs?" },
  { speaker: "John B.", text: "Sure. Usually, I will go to the website and search for keywords related to my desired job title and location. Then, I will use the filters to narrow down the results based on salary, company size, and other relevant criteria." },
  { speaker: "Brian G.", text: "Can you walk me through the process of applying for a job you found on Indeed?" },
  { speaker: "John B.", text: "Yes. Once I find a job that interests me, I will click on the job listing. From there, I can usually apply directly through Indeed or be sent to the company website. The application process is straightforward." },
  { speaker: "Brian G.", text: "How would you rate the effectiveness of Indeed search functionality?" },
  { speaker: "John B.", text: "I would say it is generally effective. I usually find relevant jobs based on my search terms. However, there have been times when I have come across irrelevant results.", tag: "Notable" },
  { note: "The word \"generally\" is doing a lot of work in that sentence. A researcher who is not listening for it will transcribe it as a positive response. I heard it as a qualification, and I waited. He clarified. That is what think-aloud gives you that a survey never will." },
  { speaker: "Brian G.", text: "Have you used Indeed on a mobile device? If so, how would you rate the mobile experience compared to the desktop version?" },
  { speaker: "John B.", text: "Yes, I have used Indeed on my phone. I find the mobile experience to be pretty good. The app is easy, and the search function works well." },
  { speaker: "Brian G.", text: "Have you used other job search platforms? If so, how does Indeed compare in terms of features, ease of use, and overall user experience?" },
  { speaker: "John B.", text: "I have used a few other platforms, but I prefer Indeed. I find it to be more user-friendly and I like the variety of job listings." },
  { note: "Positive brand reinforcement. John actively choosing Indeed over competitors is a meaningful signal, one worth protecting through better UX, not taking for granted." },
  { speaker: "Brian G.", text: "Have you encountered any frustrating or confusing aspects while using Indeed?" },
  { speaker: "John B.", text: "Occasionally, I have found it a bit difficult to save job listings for later. I wish there was a more straightforward way to do that.", tag: "Key finding" },
  { speaker: "Brian G.", text: "I agree. I end up scanning the page for an option to save and I only really see it when I finish applying. I think it would be better if it had a save for later button or link in the job information. John, I want to thank you for your time. You have been helpful, and I will use this information to improve your experience." },
  { speaker: "John B.", text: "Thank you, I appreciate it and enjoyed speaking with you." },
  { note: "A general confirmation that the interview went well. John was receptive throughout and engaged genuinely. His warmth at the close reinforced that the session felt comfortable and not extractive." },
]

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <h2 className="mb-4 flex items-baseline gap-3 text-lg text-foreground">
      <span className="text-sm text-muted-foreground">{number}</span>
      <span className="font-serif">{title}</span>
    </h2>
  )
}

function Callout({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border p-4">
      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
      <div className="text-sm leading-relaxed text-foreground">{children}</div>
    </div>
  )
}

export default function IndeedCaseStudy() {
  return (
    <div className="min-h-screen bg-background pb-24 text-foreground">
      <CaseStudyHeader title="Indeed Job Search Research" highlightWord="Research" />
      <div className="mx-auto max-w-3xl px-8 py-16 sm:px-10">
        <p className="mb-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Indeed works well for people who already know how to apply for a job. This research is
          about everyone else, and why the gap between those two experiences is not a user
          problem.
        </p>

        <div className="mb-6">
          {metadata.map((row) => (
            <div key={row.label} className="flex justify-between border-t border-border py-2.5 text-sm last:border-b">
              <span className="text-muted-foreground">{row.label}</span>
              <span className="text-right text-foreground">{row.value}</span>
            </div>
          ))}
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <div className="mb-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border sm:grid-cols-4">
          {statBadges.map((stat) => (
            <div key={stat.label} className="bg-card p-4">
              <span className="block text-2xl font-semibold text-foreground">{stat.value}</span>
              <span className="mt-1 block text-xs uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <section className="mb-10">
          <SectionHeading number="01" title="Background & Motivation" />
          <blockquote className="mb-4 border-l-2 border-border pl-4 text-sm italic leading-relaxed text-muted-foreground">
            "The job search app that is supposed to level the playing field was built for someone
            who already has a head start. This research asks what that looks like from the other
            side."
          </blockquote>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Indeed's app isn't just a product. For millions of people, it's a lifeline. It has
            genuinely improved lives, especially for first-generation job seekers. But that same
            audience, <span className="font-medium text-foreground">people ages 16–25 from
            socioeconomically disadvantaged backgrounds</span>, faces unique friction the design
            rarely accounts for.
          </p>
          <Callout label="Research Focus">
            What does it feel like to use a tool that was built for someone more experienced, more
            connected, and more confident than you, when getting this wrong means not getting the
            job?
          </Callout>
        </section>

        <section className="mb-10">
          <SectionHeading number="02" title="Target User Group" />
          <div className="mb-5">
            <PersonaGrid personas={personas} />
          </div>
          <div className="mb-5 grid gap-3">
            {userGroupFactors.map((f) => (
              <div key={f.factor} className="flex flex-col gap-1 border-t border-border py-3 sm:flex-row sm:gap-4">
                <span className="w-32 shrink-0 text-xs font-medium uppercase tracking-wide text-foreground">
                  {f.factor}
                </span>
                <span className="text-sm text-muted-foreground">{f.detail}</span>
              </div>
            ))}
          </div>
          <Callout label="Why this group specifically">
            These users have no backup plan. If the app does not work for them, there is no other
            version of the experience they can reach for. That is not a reason to deprioritize
            them. That is the only reason that matters.
          </Callout>
        </section>

        <section className="mb-10">
          <SectionHeading number="03" title="Existing User Journey: Where It Breaks" />
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            Mapping the first-time applicant's path end to end shows the friction isn't one bug.
            It's three separate breakdowns stacked back to back, right at the moments that matter
            most.
          </p>
          <StepRail steps={journeySteps} />
        </section>

        <section className="mb-10">
          <SectionHeading number="04" title="Problems Observed" />
          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((p) => (
              <div key={p.num} className="rounded-xl border border-border p-4">
                <span className="mb-2 block text-xs text-muted-foreground">{p.num}</span>
                <p className="mb-1 text-sm font-medium text-foreground">{p.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <SectionHeading number="05" title="Research Methodology" />
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            A <span className="font-medium text-foreground">think-aloud protocol</span> with task
            comparison: participants used the Indeed mobile app and desktop site side-by-side.
            Sessions took place at a local library, equal access conditions that reflect where
            this demographic actually does job searches.
          </p>
          <div className="mb-8">
            <StepRail steps={methodSteps.map((step) => ({ label: step.m, detail: step.d }))} />
          </div>
          <div className="mb-6 rounded-xl border border-border p-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Interview Participant
            </p>
            <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">John B.</span>, a real Indeed user.
              Name shortened for privacy. Session took place in a public library, daytime, relaxed
              atmosphere.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                Active job seeker
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                Mobile + Desktop
              </span>
            </div>
          </div>
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Direct Quotes
          </p>
          <div className="flex flex-col gap-4">
            {quotes.map((q) => (
              <blockquote key={q.text} className="border-l-2 border-border pl-4 text-sm italic leading-relaxed text-muted-foreground">
                "{q.text}"
                <span className="mt-1 block text-xs not-italic text-muted-foreground/70">{q.note}</span>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <SectionHeading number="06" title="Data & Analysis" />
          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            {dataCategories.map((cat) => (
              <div key={cat.title} className="rounded-xl border border-border p-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {cat.title}
                </p>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm leading-snug text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {researchThemes.map((theme) => (
              <div key={theme.num} className="rounded-xl border border-border p-4">
                <span className="mb-2 block text-xs text-muted-foreground">{theme.num}</span>
                <p className="mb-1 text-sm font-medium text-foreground">{theme.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{theme.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <SectionHeading number="07" title="How & Why: Process Deep Dive" />
          <p className="mb-6 text-sm italic leading-relaxed text-muted-foreground">
            Indeed has genuine goodwill from its users. John said he prefers it. He meant it. That
            goodwill is exactly what makes the friction matter, because when a product earns
            trust and still fails people, the damage is worse than if they never trusted it at
            all.
          </p>
          <div className="flex flex-col gap-6">
            {pillars.map((p) => (
              <div key={p.tag} className="rounded-xl border border-border p-4">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="mb-1 block text-xs uppercase tracking-wide text-muted-foreground">
                      {p.tag}
                    </span>
                    <h3 className="text-sm font-medium text-foreground">{p.title}</h3>
                  </div>
                  <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {p.badge}
                  </span>
                </div>
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  The Why
                </p>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{p.why}</p>
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  The How
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.how}</p>
                {p.quote && (
                  <blockquote className="mt-3 border-l-2 border-border pl-4 text-sm italic leading-relaxed text-muted-foreground">
                    "{p.quote}"
                  </blockquote>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <Callout label="What I would do differently">
              A single participant is enough to surface patterns but not enough to defend them at
              scale. I would expand the study to 6–8 participants across different device types,
              connectivity conditions, and geographic contexts. The friction I found with John is
              real, but I cannot know how consistent it is, or how it varies by context, without
              more voices in the room.
            </Callout>
            <Callout label="What this research confirmed">
              Indeed is genuinely valued by its users. John said he prefers it over other
              platforms, and he meant it. That is the most important finding, not because it
              flatters the product, but because it means the stakes of bad UX are higher than
              usual. When users already trust a product and it still fails them, the damage is
              disproportionate. The goodwill is there to protect. The design work is about not
              wasting it.
            </Callout>
          </div>
        </section>

        <section className="mb-10">
          <SectionHeading number="08" title="Findings" />
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            This was a single-participant think-aloud session, not a measured product launch, so
            these numbers describe what the research produced, not a shipped impact.
          </p>
          <OutcomeStats stats={findingsStats} />
        </section>

        <section className="mb-10">
          <SectionHeading number="09" title="Design Recommendations" />
          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            {recommendations.map((r) => (
              <div key={r.num} className="rounded-xl border border-border p-4">
                <span className="mb-2 block text-xs text-muted-foreground">{r.num}</span>
                <p className="mb-1 text-sm font-medium text-foreground">{r.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>

          <blockquote className="mb-8 border-l-2 border-border pl-4 text-sm italic leading-relaxed text-muted-foreground">
            "John showed genuine enthusiasm for Indeed. The goal isn't to tear the product down.
            It's to protect that enthusiasm by removing the friction that erodes it over time."
          </blockquote>

          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border p-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                What worked
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Think-aloud surfaced hesitations direct questions would have missed, including
                John's audio cue on 'generally effective.'
              </p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                What I'd change
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A larger participant pool across devices and connectivity conditions would make
                recommendations more defensible at scale.
              </p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                What this taught me
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The user who pauses and says 'generally' is telling you something. The job is to
                hear what they don't say.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border p-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Researcher's Perspective
            </p>
            <blockquote className="text-sm italic leading-relaxed text-foreground">
              "John showed up. He engaged. He gave genuinely useful feedback. The least the
              product can do is make it easier for him to save a job listing. The least a
              researcher can do is make sure someone hears that. That is what this research is."
            </blockquote>
            <p className="mt-2 text-xs text-muted-foreground">Brian, Researcher</p>
          </div>
        </section>

        <section>
          <SectionHeading number="10" title="Full Interview Transcript" />
          <div className="mb-6 rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Interviewer:</span> Brian G. ·{" "}
              <span className="font-medium text-foreground">Participant:</span> John B. ·{" "}
              <span className="font-medium text-foreground">Setting:</span> Public library, midday ·{" "}
              <span className="font-medium text-foreground">Atmosphere:</span> Relaxed, casual
            </p>
            <p className="mt-2 text-xs italic text-muted-foreground/70">
              Privacy note: Names have been shortened to protect participant privacy.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {transcript.map((line, i) =>
              line.note ? (
                <p key={i} className="border-l-2 border-border pl-4 text-xs italic leading-relaxed text-muted-foreground">
                  Researcher note: {line.note}
                </p>
              ) : (
                <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">{line.speaker}:</span> {line.text}
                  {line.tag && (
                    <span className="ml-2 rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
                      {line.tag}
                    </span>
                  )}
                </p>
              )
            )}
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <div className="rounded-xl border border-border p-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Environment &amp; Atmosphere
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The interview took place in a quiet corner of the public library with good
                lighting: midday, relaxed, and casual. The interviewee appeared receptive,
                providing thoughtful and detailed answers. Their responses were generally
                positive, indicating a favorable impression of Indeed. John showed a comfortable
                and open demeanor throughout.
              </p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Researcher Reflection
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I found myself listening actively, fighting the urge to interrupt, waiting for
                the end of each answer before responding. I agreed with much of what John shared
                and kept a calm, measured tone. I did not want urgency or excitement to close off
                what he was willing to share. The discipline of listening is the research.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
