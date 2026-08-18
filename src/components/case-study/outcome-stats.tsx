export interface OutcomeStat {
  value: string
  label: string
  note?: string
}

export function OutcomeStats({ stats }: { stats: OutcomeStat[] }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-card p-5">
          <span className="block font-serif text-3xl text-brand">{s.value}</span>
          <span className="mt-1 block text-xs uppercase tracking-wide text-muted-foreground">
            {s.label}
          </span>
          {s.note && (
            <span className="mt-1.5 block text-[11px] leading-snug text-muted-foreground/80">
              {s.note}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
