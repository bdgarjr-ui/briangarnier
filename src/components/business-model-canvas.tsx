import type { ReactNode } from "react"
import { Handshake, CheckCircle2, Package, Sparkles, Heart, Users, Radio, Wallet, Coins, Link2 } from "lucide-react"

function Cell({
  icon,
  iconColor,
  title,
  children,
  className = "",
}: {
  icon: ReactNode
  iconColor: string
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`rounded-xl border border-border p-4 ${className}`}>
      <div className="mb-3 flex items-center justify-between">
        <p className="font-serif text-sm italic text-foreground">{title}</p>
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border ${iconColor}`}
        >
          {icon}
        </span>
      </div>
      <div className="space-y-2 text-xs leading-relaxed text-muted-foreground">{children}</div>
    </div>
  )
}

export function BusinessModelCanvas() {
  return (
    <div className="my-8 -mx-6 sm:-mx-16">
      <div className="mb-4 px-6 text-xs text-muted-foreground sm:px-16">
        Business model canvas, Stage 01: Carbon Removal Investment App
      </div>
      <div className="grid gap-3 px-6 sm:px-16 lg:grid-cols-5">
        <Cell icon={<Handshake className="h-3.5 w-3.5" />} iconColor="text-emerald-600" title="Key partners" className="lg:col-start-1 lg:row-start-1 lg:row-span-2">
          <p>
            The back-end developers and companies like Aspiration or Frontier Climate that would
            partner or back the app from its inception.
          </p>
        </Cell>

        <Cell icon={<CheckCircle2 className="h-3.5 w-3.5" />} iconColor="text-blue-600" title="Activities needed" className="lg:col-start-2 lg:row-start-1">
          <p>
            Coding the back end of the app, offering eco-friendly resources, and carbon removal
            purchasing. The activities are functions that the app needs and can hire a team for.
          </p>
        </Cell>

        <Cell icon={<Package className="h-3.5 w-3.5" />} iconColor="text-amber-500" title="Key resources" className="lg:col-start-2 lg:row-start-2">
          <p>
            What are the key resources or the MVP? Offering products that provide sustainable
            options. Vetted groups that give back to the environment after donations.
          </p>
        </Cell>

        <Cell icon={<Sparkles className="h-3.5 w-3.5" />} iconColor="text-violet-600" title="Value proposition" className="lg:col-start-3 lg:row-start-1 lg:row-span-2">
          <p>
            I intend to raise awareness of the negative impact of carbon in the environment and draw
            attention towards an option of investing in companies that remove carbon. View REAL TIME
            DATA on the dashboard on the amount of CO2 saved.
          </p>
        </Cell>

        <Cell icon={<Heart className="h-3.5 w-3.5" />} iconColor="text-yellow-500" title="Customer relation / experience" className="lg:col-start-4 lg:row-start-1">
          <p>Personalized Experience and fast support by using an AI chatbot.</p>
        </Cell>

        <Cell icon={<Radio className="h-3.5 w-3.5" />} iconColor="text-violet-600" title="Channels" className="lg:col-start-4 lg:row-start-2">
          <p>
            Ways to raise brand awareness. Financial magazines, YT or Podcasts. Purchases with a
            partner program.
          </p>
        </Cell>

        <Cell icon={<Users className="h-3.5 w-3.5" />} iconColor="text-pink-500" title="Customer segments" className="lg:col-start-5 lg:row-start-1 lg:row-span-2">
          <p>18 and above individuals able to make sound financial decisions.</p>
          <p>People looking for new eco-friendly investment options.</p>
        </Cell>

        <Cell icon={<Wallet className="h-3.5 w-3.5" />} iconColor="text-sky-600" title="Cost structure" className="lg:col-start-1 lg:col-span-2 lg:row-start-3">
          <p>
            Varied price per ton of carbon removal, i.e., Frontiers 2027 offtake removal cost today
            is $550 per 1 ton of carbon removal. Employee pay varies. Site maintenance and app fees.
            Data cost for displaying real-time information: Marketstack API billed yearly $1560.
          </p>
        </Cell>

        <Cell icon={<Coins className="h-3.5 w-3.5" />} iconColor="text-emerald-600" title="Revenue streams" className="lg:col-start-3 lg:col-span-3 lg:row-start-3">
          <p>
            Possible commission at market price. Advertising. Sustainable merchandise — t-shirts,
            mugs, stationery — with a percentage of proceeds routed to the carbon removal option a
            user chooses.
          </p>
        </Cell>

        <Cell icon={<Link2 className="h-3.5 w-3.5" />} iconColor="text-muted-foreground" title="References" className="lg:col-start-1 lg:col-span-2 lg:row-start-4">
          <p>stripe.com/climate</p>
          <p>aspiration.com</p>
          <p>frontierclimate.com</p>
        </Cell>
      </div>
    </div>
  )
}
