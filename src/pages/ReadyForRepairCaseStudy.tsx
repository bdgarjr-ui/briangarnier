import type { ReactNode } from "react"
import { CaseStudyHeader } from "@/components/case-study-header"
import { BranchRail, StepRail } from "@/components/case-study/step-rail"
import { OutcomeStats, type OutcomeStat } from "@/components/case-study/outcome-stats"

const metadata = [
  { label: "Type", value: "Solo Field Research / UX Audit" },
  { label: "Role", value: "Researcher & Repair Technician" },
  { label: "Context", value: "Retail Phone Repair" },
  { label: "Devices", value: "Apple iPhone · Samsung · Google Pixel" },
  { label: "Method", value: "Observational + Workflow Mapping" },
]

const tags = ["Field Research", "Service Design", "Authentication UX", "Workflow Mapping", "Device Repair"]

const stats = [
  { v: "3", l: "Device Ecosystems Audited" },
  { v: "10 of 15", l: "iPhone Customers Hit This Wall, Every Day" },
  { v: "1", l: "Has Repair Mode Built-In" },
  { v: "0", l: "Frictionless Workflows" },
]

const problems = [
  { num: "01", title: "Forgotten Apple ID is the norm, not the exception", desc: "When asked to enter their Apple ID and password, the overwhelming majority of customers respond with some version of 'I forgot.' This is not a user failure. It is a design expectation problem. Apple designed a system that requires a credential most users cannot reliably recall under pressure." },
  { num: "02", title: "Stolen Device Protection creates a 1-hour hostage situation", desc: "If a customer has enabled Stolen Device Protection, the security delay can require waiting up to one hour before the password can even be reset. In a walk-in repair environment, this is not a minor inconvenience. It ends the appointment entirely and creates a second visit, compounding frustration for both customer and technician." },
  { num: "03", title: "The device has to be turned off for the repair, but Apple needs it on", desc: "The diagnostic and repair process often requires the phone to be powered down. But Apple's authentication requirement keeps the device on during pre-repair steps. This creates a workflow contradiction baked directly into the service model." },
  { num: "04", title: "Does Apple even need device access for diagnostics?", desc: "A genuine open question the research surfaces: does Apple's diagnostic server actually require real-time device authentication, or is this a legacy requirement that persists past its technical necessity? The friction may be entirely avoidable at the infrastructure level." },
  { num: "05", title: "Samsung's method is antiquated and leaves devices vulnerable", desc: "Samsung requires enabling Developer Mode and USB Debugging, then physically connecting the phone to a diagnostic PC via USB cable. This method dates back years. USB debugging is a significant security exposure. It grants deep device access that most customers do not understand they are enabling." },
  { num: "06", title: "Google Pixel's flow involves a factory data wipe", desc: "The Pixel repair flow includes running LDRT and wiping the phone of all data as part of the diagnostic process. The annotation in the original research says it plainly: this is unacceptable. Customers bringing in a phone for repair should not have to factory reset as a precondition for service." },
]

const samsungCallouts = [
  { label: "Security exposure", body: "USB Debugging allows deep access: file system, ADB commands, potential data extraction. Customers are not informed of this." },
  { label: "Antiquated method", body: "Developer Mode + USB cable was never designed for a service workflow. It is a developer tool being repurposed as a diagnostic channel." },
  { label: "Only unlock code needed", body: "The entry point is straightforward: just the phone unlock code. But what it enables downstream is disproportionate to what the customer expects." },
]

const pixelSteps = [
  "Pixel comes in for repair",
  "Check IMD for warranty status",
  "Follow Google guide for repair",
  "Enter phone repair mode, confirm unlock code",
  "Run Pixel Diagnostic",
  "Run LDRT and WIPE PHONE of all data",
]

const ecosystems = [
  { name: "Apple", desc: "Repair mode exists but requires Apple ID authentication. The forgotten password path creates a 1-hour to 1-day delay. Stolen Device Protection makes it worse. The technical infrastructure is there. The UX around it is not.", tag: "Fixable, but Apple has not fixed it" },
  { name: "Samsung", desc: "Requires USB Debugging, a developer tool never designed for service workflows. Grants broad device access customers do not understand. Exposes devices to potential security risk during a routine repair visit.", tag: "Antiquated and dangerous" },
  { name: "Google Pixel", desc: "Only Google has built a dedicated Repair Mode into device settings, enabled with just the unlock code. But the diagnostic process then requires a full data wipe, entirely negating the thoughtfulness of the repair mode entry point.", tag: "Best entry, worst outcome" },
]

const findingsStats: OutcomeStat[] = [
  { value: "3", label: "Device ecosystems audited", note: "Apple, Samsung, Google Pixel" },
  { value: "10 of 15", label: "iPhone customers hit the wall", note: "Daily, at the repair counter" },
  { value: "1", label: "Has a real repair mode", note: "Google Pixel, undone by a forced data wipe" },
  { value: "0", label: "Frictionless workflows found", note: "Across all three ecosystems" },
]

const pillars = [
  {
    tag: "HOW 01",
    title: "Why I chose field research over formal participant recruitment",
    badge: "Research method",
    why: "Formal participant recruitment for this study would have been artificial. The people experiencing this friction are not a specific demographic. They are everyone who has ever walked into a phone repair shop. I see them every day. I am already embedded in the research environment. Recruiting participants to experience what I witness constantly would have introduced artificiality where none was needed.",
    how: "I documented what I already observed. Each interaction where a customer could not provide credentials, each time a repair was delayed, each workaround a technician had to employ: this was the data. The field IS the research site. The customers ARE the participants. The repair workflow IS the prototype being tested.",
  },
  {
    tag: "HOW 02",
    title: "Why I mapped three separate device ecosystems instead of focusing on one",
    badge: "Scope decision",
    why: "Focusing only on Apple would have made it easy to frame this as an Apple problem, a company-specific failure that could be dismissed. Mapping all three major ecosystems reveals something more damning: every manufacturer has failed at this, in different ways, for different reasons. The failure is industry-wide. That makes it a systemic UX problem, not a brand-specific one.",
    how: "I documented the exact repair workflow for each device type as I performed it: step by step, in the order it actually happens, including every moment of friction. I then mapped each workflow visually to make the comparison legible. The Crossroad model for Apple, the USB path for Samsung, the Repair Mode entry and wipe sequence for Pixel.",
  },
  {
    tag: "HOW 03",
    title: "Why I included the raw language from the original notes",
    badge: "Authenticity",
    why: "When I wrote 'BULLSHIT!!!' in my original notes about the Pixel wipe requirement, that was not hyperbole. It was the accurate response of a technician who has had to tell a customer their data was gone as a precondition for fixing their screen. Sanitizing that language would have sanitized the reality. The strength of field research is that it carries the weight of actual experience. Removing the affect removes the truth.",
    how: "I preserved the unfiltered observations from the original documentation and treated them as legitimate research artifacts. A researcher's emotional response to a workflow failure IS data. It tells you where the friction is severe enough to be visceral. Polished language obscures that. Raw language preserves it.",
  },
  {
    tag: "HOW 04",
    title: "Why this research does not have a polished solution section",
    badge: "Honest scope",
    why: "Generating a polished solution without the authority to implement it would be design theater. I do not work at Apple, Samsung, or Google. I cannot ship a Repair Mode update. What I can do is document the problem with enough precision and evidence that someone who does have that authority cannot dismiss it as anecdotal.",
    how: "The research stops at the diagnosis because the diagnosis is complete and defensible. The solution direction is clear: dedicated repair modes, no credential requirement, no data destruction. But pretending I can design Apple's authentication system from a retail counter would undermine the credibility of the research itself. Knowing what you can and cannot claim is research integrity.",
  },
]

const recommendations = [
  { num: "01", title: "Apple: Build a dedicated Repair Mode into iOS Settings", desc: "Triggered by unlock code only, no Apple ID required. The model exists: Google built it. Apple has the infrastructure. This is a policy decision masquerading as a technical one.", success: "If this shipped, success looks like a repair counter conversation that never starts with \"I forgot.\" I can't promise it would erase the wall I currently see with 10 of 15 iPhone customers a day, but it's designed to close exactly that gap: the repair starting on the first visit instead of the second." },
  { num: "02", title: "Apple: Remove the authentication requirement for diagnostic communication", desc: "If diagnostics do not actually require real-time Apple ID authentication, the credential requirement is theatre. Audit whether it is technically necessary and remove it if not." },
  { num: "03", title: "Samsung: Retire USB Debugging as a repair pathway", desc: "Build a dedicated repair mode into device settings accessible by unlock code, triggering a sandboxed diagnostic environment that does not expose the full file system." },
  { num: "04", title: "Google: Separate the diagnostic step from the wipe step", desc: "LDRT should never be a required step in a repair workflow. Run diagnostics first, in a sandboxed environment. Offer the wipe as an optional final step, clearly explained, with explicit customer consent." },
  { num: "05", title: "Industry: Establish a shared Repair Mode standard", desc: "Right to Repair legislation is already moving in this direction. A universal repair mode standard, accessible by device unlock code, sandboxed, non-destructive, would resolve this across all ecosystems simultaneously." },
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

export default function ReadyForRepairCaseStudy() {
  return (
    <div className="min-h-screen bg-background pb-24 text-foreground">
      <CaseStudyHeader title="Ready for Repair?" highlightWord="Repair" />
      <div className="mx-auto max-w-3xl px-8 py-16 sm:px-10">
        <div className="mb-8 max-w-xl">
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Every day at the repair counter, I see about 15 customers. Ten of them have iPhones.
            All ten hit the same wall: they can't remember their Apple ID password, and the repair
            stops before it starts. The technician waits. The customer feels stupid. This has been
            happening every single day for years.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Here's what complicates that: someone already solved most of this problem. Google
            built a real repair mode into Pixel settings: no account credentials, no password
            recall, just the phone's unlock code. It's the right idea. Then Google's own
            diagnostic step wipes the phone's data as a required part of the process, undoing
            almost everything the repair mode got right. Apple and Samsung haven't even gotten
            that far. So this isn't a story about an unsolved problem. It's a story about a
            mostly-solved problem that nobody has been willing to finish: three companies
            circling the same fix, still.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            This research asks why, and what actually finishing it would take.
          </p>
        </div>

        <div className="mb-6">
          {metadata.map((row) => (
            <div key={row.label} className="flex justify-between border-t border-border py-2.5 text-sm last:border-b">
              <span className="text-muted-foreground">{row.label}</span>
              <span className="text-right text-foreground">{row.value}</span>
            </div>
          ))}
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.l} className="rounded-xl border border-border p-4 text-center">
              <p className="text-xl font-semibold text-foreground">{stat.v}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-muted-foreground">{stat.l}</p>
            </div>
          ))}
        </div>

        <section className="mb-10">
          <SectionHeading number="01" title="The Background" />
          <blockquote className="mb-4 border-l-2 border-border pl-4 text-sm italic leading-relaxed text-muted-foreground">
            "Every day someone hands me a broken phone and I ask for their Apple ID. Every day the
            answer is the same. That answer is not a user failure. It is evidence of a system that
            was never designed for the moment it is used in."
          </blockquote>
          <div className="mb-4 flex flex-col gap-4">
            <Callout label="Measured Honestly">
              This is based on daily observation at the repair counter: roughly 15 customers a
              day, about 10 of them on iPhone, nearly all hitting the Apple ID wall. That's a
              consistent pattern from direct daily exposure, not a formal logged study. I'd rather
              be precise about what this is than inflate it into something it's not.
            </Callout>
            <Callout label="Why This Is Solo Research">
              I didn't bring in a team for this, and that wasn't a limitation. It was the method.
              The people experiencing this friction aren't a demographic I'd need to recruit;
              they're everyone who walks up to my counter. Adding a research team or a round of
              stakeholder interviews would have put a layer of distance between the data and the
              desk where it actually happens. I didn't need to schedule access to this problem. I
              already had it.
            </Callout>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Every single day working in a phone repair shop, the same friction point appears: a
            customer needs their device repaired, but Apple requires the device to be unlocked and
            authenticated before a technician can even begin. No Apple ID and password means no
            repair, or a waiting game.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            This is not an edge case. It is the most common bottleneck in the entire repair
            workflow. And it is entirely a UX failure. The technical requirement exists, but the{" "}
            <em>design of how users are asked to meet it</em> creates unnecessary delay,
            frustration, and in some cases, an impossible barrier.
          </p>
          <Callout label="The Research Question">
            Three companies. Three different approaches. Zero workflows that respect the person
            standing at the counter. How is that still true in 2025?
          </Callout>
        </section>

        <section className="mb-10">
          <SectionHeading number="02" title="Problems Observed" />
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
          <SectionHeading number="03" title="Apple Repair Workflow: The Crossroad" />
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Apple designed a security system that is genuinely impressive. Then they put it in the
            way of every repair. The authentication requirement that protects a stolen phone is
            the same one that stops a paying customer from getting their cracked screen fixed.
            Apple knows this. The repair mode exists in concept. They have not shipped it.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            The asymmetry is the problem. The happy path works fine. The failure path, which is
            the <em>majority experience</em>, is catastrophic from a service design perspective.
          </p>
          <BranchRail
            from="Customer asked to open Find My and enter Apple credentials"
            branches={[
              {
                label: "Remembered",
                outcome: "Phone successfully enters repair mode. No friction here.",
              },
              {
                label: "Forgot",
                outcome:
                  "Password reset required. If Stolen Device Protection is on, up to a 1-hour security delay before repair can even start.",
                friction: true,
              },
            ]}
          />
        </section>

        <section className="mb-10">
          <SectionHeading number="04" title="Samsung Repair Flow" />
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Samsung's repair flow requires customers to enable a developer tool, then connect
            their phone to a computer they have never seen before via USB cable, granting that
            computer broad access to everything on the device. This was never designed as a repair
            workflow. It is a developer tool that got reused because nobody built anything better.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            The core problem: USB Debugging grants a connected computer broad access to the
            device: file system, installed apps, network traffic. Most customers have no idea
            they are enabling this, and no understanding of what they are consenting to. The
            technician knows. The customer does not.
          </p>
          <div className="mb-4 grid gap-4 sm:grid-cols-3">
            {samsungCallouts.map((c) => (
              <Callout key={c.label} label={c.label}>
                {c.body}
              </Callout>
            ))}
          </div>
          <StepRail
            caption="Samsung workflow map"
            steps={[
              { label: "Walk in", detail: "Only unlock code needed" },
              { label: "Developer Mode", detail: "USB Debugging enabled", friction: true },
              { label: "Plug into Diag PC", detail: "Via USB cable" },
              { label: "Galaxy Diagnostics", detail: "Runs GQIM test" },
              { label: "Results sent", detail: "Test passed" },
            ]}
          />
        </section>

        <section className="mb-10">
          <SectionHeading number="05" title="Google Pixel Repair Flow" />
          <div className="mb-4">
            <Callout label="! Critical Failure: Data Loss Risk">
              The Google Pixel repair diagnostic process includes a step to run LDRT and{" "}
              <em>wipe the phone of all data</em>. A customer brings in a phone for repair and the
              official workflow requires them to lose everything on it. This is not a warning. It
              is a required step. The original research notes captured the only appropriate
              response to this: it is unacceptable.
            </Callout>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            The Pixel flow begins reasonably: check the IMD number for warranty status and follow
            Google's repair guide. The phone enters repair mode via the unlock code. So far,
            acceptable.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            But after running the pixel diagnostic, the next required step is LDRT, a full
            factory wipe. The diagnostic process itself triggers data destruction. This conflates
            repair with data loss in a way no customer would agree to if it were clearly explained
            to them upfront.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Google built the best entry point of the three: repair mode, activated by unlock
            code, no account credentials required. Then the diagnostic process wipes the phone.
            The best idea in the category is attached to the worst outcome. That is not a
            technical constraint. That is a design decision that nobody defended hard enough.
          </p>
          <StepRail
            steps={pixelSteps.map((step, i) => ({
              label: step,
              friction: i >= pixelSteps.length - 2,
            }))}
          />
        </section>

        <section className="mb-10">
          <SectionHeading number="06" title="Comparative Analysis: Three Ecosystems" />
          <div className="mb-4 grid gap-4 sm:grid-cols-3">
            {ecosystems.map((e) => (
              <div key={e.name} className="rounded-xl border border-border p-4">
                <p className="mb-2 text-sm font-medium text-foreground">{e.name}</p>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
                <p className="text-xs italic text-muted-foreground">{e.tag}</p>
              </div>
            ))}
          </div>
          <Callout label="The One Model That Works, Partially">
            Google Pixel phones have a Repair Mode built directly into device settings, activated
            simply by entering the phone unlock code, then running diagnostics from the phone
            itself. No USB cable. No developer settings. No Apple ID. This is the right idea. It is
            what Apple and Samsung should be doing. The execution downstream (the data wipe) ruins
            it. But the concept of a dedicated, non-destructive repair mode triggered by something
            the user already knows is the correct design direction.
          </Callout>
        </section>

        <section className="mb-10">
          <SectionHeading number="07" title="How & Why: Process Deep Dive" />
          <p className="mb-6 text-sm italic leading-relaxed text-muted-foreground">
            This research did not start with a methodology. It started with a daily reality that
            could not be ignored any longer.
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
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <SectionHeading number="08" title="Design Recommendations" />
          <div className="flex flex-col gap-4">
            {recommendations.map((r) => (
              <div key={r.num} className="rounded-xl border border-border p-4">
                <span className="mb-2 block text-xs text-muted-foreground">{r.num}</span>
                <p className="mb-1 text-sm font-medium text-foreground">{r.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                {r.success && (
                  <p className="mt-2 text-sm italic leading-relaxed text-muted-foreground">
                    {r.success}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <SectionHeading number="09" title="Findings" />
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            This is solo field research, not a lab study or a shipped fix. The numbers below
            describe what was observed and audited, not a measured before/after.
          </p>
          <OutcomeStats stats={findingsStats} />
        </section>

        <section className="mb-10">
          <blockquote className="mb-8 border-l-2 border-border pl-4 text-sm italic leading-relaxed text-muted-foreground">
            "It can be better in every possible way. That is not hyperbole. It is a factual
            assessment of three workflows that all fail at the same job, for the same user, every
            single day."
          </blockquote>
          <div className="mb-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border p-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                What worked
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Field observation as the primary method, done solo, with no stakeholder or team
                filter between what I saw and what got written down, produced richer, more honest
                data than a formal, committee-run study could have. The frustration is documented
                in real time, not reconstructed from memory or smoothed over in a debrief.
              </p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                What is missing
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Manufacturer responses. What Apple, Samsung, and Google say when presented with
                these findings would be the next critical research step, and would determine
                whether this is a known issue being ignored or an unknown one waiting to be fixed.
              </p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                What this research is for
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This exists so that the next person who hears 'I forgot' at a repair counter knows
                it is not the customer failing the system. It is the system failing the customer.
                And it has the receipts.
              </p>
            </div>
          </div>
          <Callout label="What This Confirmed For Me">
            The repair process is complicated, and it can be made so much simpler if these
            companies actually looked at the points of friction real users hit and addressed them.
            That means shortening security delays. That means building an easier-to-reach repair
            mode on every device, not just one. The fix isn't a mystery. It's a decision nobody's
            made yet.
          </Callout>
        </section>

        <section>
          <SectionHeading number="10" title="Researcher Perspective" />
          <blockquote className="text-sm italic leading-relaxed text-muted-foreground">
            "I have told more customers than I can count that their repair is on hold because of a
            password they do not remember for an account they set up years ago. Every single time,
            I watch them feel like they did something wrong. They did not. The system failed them.
            I wrote this research so that is on record."
          </blockquote>
          <p className="mt-2 text-xs text-muted-foreground">Brian, Researcher & Repair Technician</p>
        </section>
      </div>
    </div>
  )
}
