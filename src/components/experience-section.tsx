const experiences = [
  {
    dates: "Oct 2025–Present",
    role: "Consumer Experience & Operations Analyst",
    org: "uBreakiFix",
    description:
      "Turned repair-floor observation into data: quantified friction points and built the business case that secured budget for a 50-device backlog fix.",
  },
  {
    dates: "2022–2025",
    role: "B.S., UX Design & Research",
    org: "Full Sail University",
    description:
      "Accelerated program completed while working full-time: qualitative interview design, survey development, usability testing, and a Social & Behavioral Research (IRB/ethics) certification.",
  },
  {
    dates: "2016–2019",
    role: "Smartphone Repair Technician",
    org: "Mr. Tech Pro",
    description:
      "Documented recurring customer pain points and advocated for policy change based on direct observation.",
  },
  {
    dates: "2015–2016",
    role: "Smartphone Repair Technician",
    org: "Tech Boys Repair",
    description:
      "Built the investigative instinct: structured questioning to find the real issue underneath what customers said.",
  },
  {
    dates: "2014–2015",
    role: "Residential Counselor",
    org: "Maryhaven Behavioral Health Services",
    description:
      "Learned how systems fail people who already expect to fail, and how to design from actual behavior, not assumptions.",
  },
  {
    dates: "2008–2014",
    role: "Operations & Inventory Analyst",
    org: "Cappys Carpet",
    description:
      "Self-directed analysis of workflow friction: redesigned inventory systems from pure observation, years before there was a name for it.",
  },
]

export function ExperienceSection() {
  return (
    <section className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-4xl px-8 sm:px-10">
        <div className="rounded-2xl bg-muted/50 p-8 sm:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Experience
          </p>
          <h2 className="mb-10 max-w-xl text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
            Research work with a bias toward real users, not just personas.
          </h2>

          <div className="flex flex-col">
            {experiences.map((exp) => (
              <div
                key={exp.org + exp.role}
                className="grid gap-2 border-t border-border py-5 sm:grid-cols-[110px_1fr_1fr] sm:items-center"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {exp.dates}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-foreground/10 text-xs font-semibold text-foreground/70">
                    {exp.org[0]}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{exp.role}</p>
                    <p className="text-xs text-muted-foreground">{exp.org}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
