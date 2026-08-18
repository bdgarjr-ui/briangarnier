export interface TradeOffRow {
  title: string
  kept: string
  cut: string
}

export function TradeOffGrid({ items }: { items: TradeOffRow[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <div key={item.title} className="rounded-xl border border-border p-4">
          <p className="mb-3 text-sm font-medium text-foreground">{item.title}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              <div>
                <p className="mb-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                  Kept
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.kept}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500/70" />
              <div>
                <p className="mb-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                  Cut
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.cut}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
