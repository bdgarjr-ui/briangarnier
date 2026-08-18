import { TreePine } from "lucide-react"
import { BusinessModelCanvas } from "@/components/business-model-canvas"
import { FinalScreen } from "@/components/final-screen"
import { CaseStudyHeader } from "@/components/case-study-header"
import { PersonaGrid, type PersonaItem } from "@/components/case-study/persona-grid"
import { StepRail, type RailStep } from "@/components/case-study/step-rail"
import { OutcomeStats, type OutcomeStat } from "@/components/case-study/outcome-stats"
import { TradeOffGrid, type TradeOffRow } from "@/components/case-study/trade-off-grid"
import { ScreenGallery, type GalleryScreen } from "@/components/case-study/screen-gallery"

const prototypeScreens: GalleryScreen[] = [
  { src: "/case-studies/green-change-splash.png", label: "Splash" },
  { src: "/case-studies/green-change-login.png", label: "Log in" },
  { src: "/case-studies/green-change-home-products.png", label: "Home / Products" },
  { src: "/case-studies/green-change-product-view.png", label: "Product view" },
  { src: "/case-studies/green-change-cart.png", label: "Cart" },
  { src: "/case-studies/green-change-select-charity.png", label: "Select a charity" },
  { src: "/case-studies/green-change-checkout.png", label: "Checkout" },
  { src: "/case-studies/green-change-donate.png", label: "Donation confirmation" },
]

const personas: PersonaItem[] = [
  {
    name: "Anna",
    role: "Age 33 · At-home mom",
    detail:
      "\"As a mom of 2 young children I want to find something that is helpful for all of us while benefiting the environment so I can feel happy about my purchases.\"",
    values: "Finding new apps for easier, faster online shopping.",
    dislikes: "Big business — she leans toward small, craft-style shops.",
    traits: ["Eco-conscious shopper", "Time-poor"],
  },
  {
    name: "Bob",
    role: "Age 30 · Accountant",
    detail:
      "\"I want to learn more about the carbon removal process, so I can be comfortable donating to the companies.\"",
    values: "Researching companies before investing; finance podcasts and videos.",
    dislikes: "Businesses with unethical owners; doom-scrolling that wastes time.",
    traits: ["Wants transparency", "Habitual online shopper"],
  },
  {
    name: "Samantha",
    role: "Age 65 · Retired bank manager",
    detail:
      "\"I want to know how my money is being used in some form of a personal dashboard, so I can use the information for tax rebates.\"",
    values: "Family and church community; apps with adjustable text size.",
    dislikes: "Flashy images or heavy motion; no explanation for new processes.",
    traits: ["Low app fluency", "High trust bar"],
  },
]

const userFlowSteps: RailStep[] = [
  { label: "Splash", detail: "App entry point" },
  { label: "Log in", detail: "Or sign up" },
  { label: "Dashboard", detail: "Shop or view CO2 savings" },
  { label: "Product", detail: "Browse and select" },
  { label: "Cart", detail: "Round up for charity?" },
  { label: "Checkout", detail: "Payment + donation confirmation" },
]

const restraintDecisions: TradeOffRow[] = [
  {
    title: "Landing page motion",
    kept: "A calm, static hero that gets out of the way of the first task.",
    cut: "A looping background video, visually impressive but overdesigned for what the moment needed.",
  },
  {
    title: "Company information pages",
    kept: "Short, scannable copy that respects the time someone's actually willing to spend.",
    cut: "Long-form company information, more text than any real user would read before bouncing.",
  },
]

const testingOutcomes: OutcomeStat[] = [
  { value: "4–5", label: "Respondents", note: "Open feedback round via Google Forms" },
  { value: "2", label: "Usability bugs fixed", note: "Sticky nav bar, font sizing" },
  { value: "100%", label: "Task completion", note: "Including Marie, lowest app fluency in the round" },
  { value: "1", label: "Accessibility pass", note: "Touch targets adjusted to WCAG" },
]

const metadata = [
  { label: "Type", value: "Solo Project · Portfolio VI" },
  { label: "Role", value: "UX Designer" },
  { label: "Timeline", value: "3-Month Timeline" },
  { label: "Professors", value: "Jennifer McCarrick · Kim Morrow" },
  { label: "Tools", value: "Figma · Balsamiq · Graph Paper" },
]

const tags = ["UX Design", "E-Commerce", "Carbon Removal", "JTBD", "Business Model"]

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <h2 className="mb-4 flex items-baseline gap-3 text-lg text-foreground">
      <span className="text-sm text-muted-foreground">{number}</span>
      <span className="font-serif">{title}</span>
    </h2>
  )
}

export default function GreenChangeCaseStudy() {
  return (
    <div className="min-h-screen bg-background pb-24 text-foreground">
      <CaseStudyHeader title="Green Change" highlightWord="Change" />
      <div className="mx-auto max-w-3xl px-8 py-16 sm:px-10">
        <p className="mb-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Use your remaining change to make a change, in a green way. An e-commerce app that turns
          an ordinary purchase into a small, ordinary act of generosity: donating toward carbon
          removal at checkout.
        </p>

        <div className="mb-6">
          {metadata.map((row) => (
            <div key={row.label} className="flex justify-between border-t border-border py-2.5 text-sm last:border-b">
              <span className="text-muted-foreground">{row.label}</span>
              <span className="text-right text-foreground">{row.value}</span>
            </div>
          ))}
        </div>

        <div className="mb-16 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <section className="mb-10">
          <SectionHeading number="01" title="The Background" />
          <blockquote className="mb-4 border-l-2 border-border pl-4 text-sm italic text-muted-foreground">
            "People do not have easy access to donate money toward companies that remove carbon
            waste. That was the real starting problem: not a banking problem, not an awareness
            problem."
          </blockquote>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Companies are now monetizing the removal of carbon waste, and I saw a potential way to
            niche into an e-commerce app marketplace for my school assignment.
          </p>
          <h3 className="mb-1 text-sm font-medium text-foreground">An Access Problem</h3>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            People do not have easy access to donate money toward companies that remove carbon
            waste, such as Climeworks (Switzerland) and Chestnut Carbon in the US. That was the real
            starting problem: not a banking problem, not an awareness problem.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            I wanted to raise awareness of the dangers of carbon emissions in the environment.
          </p>
        </section>

        <section className="mb-10">
          <SectionHeading number="02" title="The Evolution of a Problem" />
          <h3 className="mb-1 text-sm font-medium text-foreground">Original problem</h3>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            <em>
              "What is the best way to spread awareness, save money, and keep it sustainable?"
            </em>
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            That original framing was three problems stapled together, and it took me three months
            to see that.
          </p>
          <h3 className="mb-1 text-sm font-medium text-foreground">The real question I landed on</h3>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            <em>
              "How can we give back when we purchase something from an online store? Where is the
              donation going, and how is it being used?"
            </em>
          </p>
          <h3 className="mb-1 text-sm font-medium text-foreground">
            Why did this question shift matter?
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            This shift mattered because it moved the project from "an app with eco-friendly
            features" to "an app that makes generosity visible and trustworthy at the moment
            someone is already buying something." Once I had that question, the rest of the design
            started making more sense.
          </p>
        </section>

        <section className="mb-10">
          <SectionHeading number="03" title="The Pivot: Three Stages of Ideation" />
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            This project did not start as Green Change. It went through three distinct ideas before
            landing here, and each pivot taught me something I carried forward.
          </p>
          <div className="mb-4">
            <h3 className="mb-1 text-sm font-medium text-foreground">
              Stage 01: Carbon Removal Investment App
            </h3>
            <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
              My beginning process is understanding the structure of HOW the app is going to work
              and WHAT the business and stakeholders need before I really start to flesh anything
              out. That is where my empathetic user research standards come into play.
            </p>
            <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
              I built out a full business model canvas for this: key partners, cost structures,
              revenue streams, and customer segments. It was real research, not guesswork.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I approached this head-on with the idea of shipping it out to stakeholders and knowing
              the business end of the product. That involved understanding what would help this app
              run for the long haul.
            </p>
          </div>

          <h3 className="mb-1 text-sm font-medium text-foreground">The Business Model Canvas</h3>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            I segmented it into a few key areas
          </p>

          <BusinessModelCanvas />

          <div className="mb-4">
            <h3 className="mb-1 text-sm font-medium text-foreground">
              Stage 02: Eco-Friendly Banking / Credit Card Concept
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Carbon removal stayed consistent as the core goal, so I pushed forward by looking at
              an eco-friendly credit card that worked like a point system: donate toward carbon
              removal companies as you spend. I would have liked to keep developing that direction,
              but the overhead investment required for banking infrastructure was tremendous. That's
              what made me change course.
            </p>
          </div>
          <div>
            <h3 className="mb-1 text-sm font-medium text-foreground">Stage 03: EcoCon → Green Change</h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              I made the change to a smaller-scale e-commerce app and started with the name
              "EcoCon," with ChatGPT helping with naming conventions. Some background research
              showed the name was already registered to a convention, Econcon 2024, which is
              amazing in itself for "policy experts, organizers, advocates, and policymakers for
              timely events on how to build an economy that works for all of us," so it was an easy
              switch to Green Change: use your remaining change to make a change, in a green way.
              Small and perfect.
            </p>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            What carried forward through all three stages was the carbon removal mission itself. I
            kept finding a simpler, more accessible form: from an investment vehicle to a credit
            product, to a donation moment inside a normal purchase.
          </p>
        </section>

        <section className="mb-10">
          <SectionHeading number="04" title="Users and Personas" />
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
            I built personas around the core audience I felt this app needed to serve. I started
            with five and narrowed to three that fit the audience more precisely: Anna (33), Bob
            (30), and Samantha (65, a retired bank manager), an age spread I felt genuinely
            represented the range of people who'd care about this.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
            The clearest version of this is a stay-at-home mom who wants to buy eco-friendly baby
            wipes. She can buy them through Green Change and then donate her change toward carbon
            removal. The small, ordinary purchase becomes a small, ordinary act of generosity.
          </p>
          <PersonaGrid personas={personas} />
        </section>

        <section className="mb-10">
          <SectionHeading number="05" title="Jobs to Be Done" />
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            The job to be done that shaped this project: a parent who wants their everyday
            purchases to also benefit the environment and their family, tied to a charitable cause
            they can trust.
          </p>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            I used the JTBD framework to assign tasks and personalize the user experience throughout
            the build, and it's a method I plan to keep using going forward. Working the board
            surfaced three clusters worth building around directly:
          </p>
          <div className="mb-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border p-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-foreground">Goals</p>
              <ul className="space-y-1 text-xs leading-relaxed text-muted-foreground">
                <li>Be more eco-friendly</li>
                <li>Don't be too flashy about saving the environment</li>
                <li>Save money on energy bills</li>
                <li>Help other people while helping myself</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border p-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-foreground">Motivations</p>
              <ul className="space-y-1 text-xs leading-relaxed text-muted-foreground">
                <li>Cost of living increases</li>
                <li>Wanting to see where donations actually go</li>
                <li>A better future for people and loved ones</li>
              </ul>
            </div>
            <div className="rounded-xl border border-brand/30 bg-brand/5 p-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-foreground">Pain points</p>
              <ul className="space-y-1 text-xs leading-relaxed text-muted-foreground">
                <li>Product selection low or unavailable</li>
                <li>Not enough information to guide a purchase</li>
                <li>"Does this actually work? Can I see the results?"</li>
              </ul>
            </div>
          </div>
          <p className="text-xs italic text-muted-foreground">
            The full JTBD board: three personas mapped across functional and emotional jobs
          </p>
        </section>

        <section className="mb-10">
          <SectionHeading number="06" title="The Foundational User Flow" />
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            Before any screen got drawn, the flow had to hold together end to end: splash screen,
            into login, onto a dashboard where someone can shop or explore CO2 savings, into a
            product flow, and through to a donation moment at checkout.
          </p>
          <StepRail steps={userFlowSteps} />
        </section>

        <section className="mb-10">
          <SectionHeading number="07" title="Wireframes and Prototype" />
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            Wireframes were built using a mix of Balsamiq and hand-drawn sketches on graph paper.
          </p>
          <h3 className="mb-3 text-sm font-medium text-foreground">
            A few deliberate restraint decisions
          </h3>
          <TradeOffGrid items={restraintDecisions} />
        </section>

        <div className="my-8 -mx-6 overflow-hidden rounded-2xl border border-border sm:-mx-16">
          <img
            src="/case-studies/green-change-wireframes.png"
            alt="Green Change Balsamiq wireframe set alongside the original hand-drawn graph paper sketch it was built from"
            className="block w-full"
            loading="lazy"
          />
        </div>
        <p className="-mt-4 mb-10 text-center text-xs italic text-muted-foreground">
          Full digital wireframe set, built in Balsamiq from the hand-drawn graph paper sketch (right)
        </p>

        <section className="mb-10">
          <SectionHeading number="08" title="The Finished Screens" />
          <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
            The glow-up: the same flow as the wireframes above, shipped end to end from splash
            screen through checkout and donation.
          </p>
          <ScreenGallery screens={prototypeScreens} />
        </section>

        <section className="mb-10">
          <SectionHeading number="09" title="The Welcome Screen, Up Close" />
          <FinalScreen
            src="/case-studies/green-change-final-home.png"
            alt="Green Change app final welcome screen, showing a forest bridge photo, a 'Make a purchase' call to action, and featured climate projects including Climeworks"
            caption="Final welcome screen, built in Figma from the wireframes above"
          />
        </section>

        <section className="mb-10">
          <SectionHeading number="10" title="Feedback and Testing" />
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            I ran an open feedback round with the app prototype using Google Forms, with about four
            to five respondents.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            The feedback surfaced real inconsistencies in the app framework: the floating
            navigation bar wasn't sticking when scrolling through content, and the font size was too
            small in places. Those weren't opinions; they were usability problems, and I made
            changes in response to both.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Respondents reacted positively to the experience overall.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            One respondent, Marie, was retired with no prior climate awareness and limited comfort
            with apps like this. She needed extra support to get through the session, but she
            completed every task.
          </p>
          <blockquote className="mb-2 border-l-2 border-border pl-4 text-sm italic text-muted-foreground">
            "Found settings on homepage/main screen. Could it be a static button at the bottom of
            the page along with the cart?"
            <span className="mt-1 block text-xs not-italic text-muted-foreground">Court, TX</span>
          </blockquote>
          <blockquote className="mb-4 border-l-2 border-border pl-4 text-sm italic text-muted-foreground">
            "The touch target seems small (Check WCAG guidelines)."
            <span className="mt-1 block text-xs not-italic text-muted-foreground">Respondent</span>
          </blockquote>
          <p className="text-sm leading-relaxed text-muted-foreground">
            I also reviewed the WCAG guidelines and adjusted the touch targets to the best size for
            accessibility.
          </p>
        </section>

        <section className="mb-10">
          <SectionHeading number="11" title="Outcome" />
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            Small numbers from a small feedback round, but real ones, and the one that matters
            most isn't a percentage.
          </p>
          <OutcomeStats stats={testingOutcomes} />
        </section>

        <section className="mb-10">
          <SectionHeading number="12" title="Impact: What This Means for Real People" />
          <blockquote className="mb-4 border-l-2 border-border pl-4 text-sm italic text-muted-foreground">
            "A stay-at-home mom buying eco-friendly baby wipes can donate her change toward carbon
            removal in the same motion as a purchase she was already making."
          </blockquote>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            I had to step back and ask what this app actually does for the people using it.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            The clearest measure of impact I have isn't a percentage. It's Marie. She came in with
            no prior climate awareness and limited comfort with apps like this, and she needed extra
            support to get through the session. But she completed every task. That's the standard I
            actually care about: not whether a confident user can find their way through, but
            whether someone who assumes this isn't "for them" still gets there.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Companies could even donate their products or advertising space towards the app, and
            Green Change would actively give back a percentage of profit towards the carbon removal
            charities.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Over time, the CO2 saved through donations, from individual users and in aggregate
            across the app, could be represented visually: trees planted, degrees of warming
            offset. Small numbers that add up to something visible. The visual representations would
            demonstrate budding growth or even spark interest in further purchases.
          </p>
          <div className="mb-4 flex flex-col items-center">
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border border-border text-foreground">
              <TreePine className="mb-1 h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">5</span>
            </div>
            <span className="mt-2 text-xs text-muted-foreground">Trees Planted</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            This app can never replace large e-commerce stores, and it will never single-handedly
            neutralize global warming. But it's a step toward improving awareness and making
            generosity a little easier to act on. I'd rather be honest about that ceiling than
            overstate the impact.
          </p>
        </section>

        <section>
          <SectionHeading number="13" title="Reflection: How This Changed Me as a Researcher" />
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            This project changed me as a designer and a researcher by showing me that ideas are
            always evolving, and that being open to changing pace matters more than protecting an
            original plan. I started off wanting to design what I thought looked best and had to
            hold that instinct back to look at what was best for the users, and once I did that,
            everything opened up.
          </p>
          <blockquote className="mb-4 border-l-2 border-border pl-4 text-sm italic text-muted-foreground">
            I used to think good UX research/design was about looking good. Now I think it's about
            helping people feel good.
          </blockquote>
          <h3 className="mb-1 text-sm font-medium text-foreground">
            What I'd do differently next time
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            The whole process from inception to initial prototype was a lot of fun. I never really
            had a chance to flex my creative muscle, and combining different methods I learned
            really kind of excited me. It showed me the stages of development that I love to do,
            such as planning and organizing, especially a business plan for stakeholders.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            I would have really liked to collaborate with a team on this project because it would
            have provided so many more valuable insights into things that I may have missed.
          </p>
        </section>
      </div>
    </div>
  )
}
