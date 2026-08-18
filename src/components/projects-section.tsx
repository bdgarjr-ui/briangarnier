import { ProjectCard } from "@/components/ui/project-card"

const projects = [
  {
    title: "Green Change",
    description:
      "Most sustainability apps are built for the user who's already converted. I designed for the one who isn't sure it's worth the effort — and tested with the least confident user in the room to prove it.",
    imgSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    link: "/work/green-change",
    linkText: "View case study",
    internal: true,
    tags: ["UX Design", "Usability Testing", "Accessibility"],
    metric: { value: "100%", label: "Task completion" },
  },
  {
    title: "Indeed Job Search Research",
    description:
      "Indeed is built for the job seeker who already knows what they're doing. I went looking for the friction points hitting the tired, distracted, first-time applicant instead — and found six of them.",
    imgSrc: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
    link: "/work/indeed-research",
    linkText: "View case study",
    internal: true,
    tags: ["UX Research", "Think-Aloud", "Comparative Testing"],
    metric: { value: "6", label: "Usability issues found" },
  },
  {
    title: "Ready for Repair?",
    description:
      "I watched this exact moment play out at the repair counter, over and over: a customer forgets their Apple ID, and a workaround never built for real customers quietly takes over. I audited what that workaround actually exposes.",
    imgSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    link: "/work/ready-for-repair",
    linkText: "View case study",
    internal: true,
    tags: ["Field Research", "Workflow Mapping", "Security"],
    metric: { value: "3", label: "Device ecosystems audited" },
  },
]

export function ProjectsSection() {
  return (
    <section id="work" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-8 py-10 sm:px-10">
        <span className="mb-6 inline-block rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground">
          Digital contributions
        </span>

        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
