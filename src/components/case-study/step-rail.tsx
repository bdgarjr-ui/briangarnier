export interface RailStep {
  label: string
  detail?: string
  friction?: boolean
}

export function StepRail({ steps, caption }: { steps: RailStep[]; caption?: string }) {
  return (
    <div className="my-2">
      {caption && <p className="mb-4 text-xs text-muted-foreground">{caption}</p>}
      <div className="flex flex-wrap gap-y-6 sm:flex-nowrap sm:items-start">
        {steps.map((step, i) => (
          <div key={i} className="flex w-1/2 flex-col items-center sm:w-auto sm:flex-1">
            <div className="flex w-full items-center">
              <div className={`hidden h-px flex-1 sm:block ${i === 0 ? "opacity-0" : "bg-border"}`} />
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-medium ${
                  step.friction
                    ? "border-dashed border-brand text-brand"
                    : "border-border bg-card text-foreground"
                }`}
              >
                {i + 1}
              </span>
              <div
                className={`hidden h-px flex-1 sm:block ${i === steps.length - 1 ? "opacity-0" : "bg-border"}`}
              />
            </div>
            <div className="mt-2 max-w-[9rem] px-1 text-center">
              <p className="text-xs font-medium text-foreground">{step.label}</p>
              {step.detail && (
                <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">{step.detail}</p>
              )}
              {step.friction && (
                <span className="mt-1.5 inline-block rounded-full border border-dashed border-brand px-2 py-0.5 text-[9px] uppercase tracking-wide text-brand">
                  Friction
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export interface RailBranch {
  label: string
  outcome: string
  friction?: boolean
}

export function BranchRail({ from, branches }: { from: string; branches: RailBranch[] }) {
  return (
    <div className="my-2">
      <div className="mx-auto w-fit rounded-lg border border-border bg-card px-3 py-2 text-center text-xs font-medium text-foreground">
        {from}
      </div>
      <div className="mx-auto h-5 w-px bg-border" />
      <div className="grid gap-4 sm:grid-cols-2">
        {branches.map((b) => (
          <div key={b.label} className="flex flex-col items-center gap-2 text-center">
            <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              {b.label}
            </span>
            <div className="h-4 w-px bg-border" />
            <div
              className={`w-full rounded-lg border p-3 text-xs leading-relaxed ${
                b.friction
                  ? "border-dashed border-brand text-muted-foreground"
                  : "border-border text-foreground"
              }`}
            >
              {b.outcome}
            </div>
            {b.friction && (
              <span className="rounded-full border border-dashed border-brand px-2 py-0.5 text-[9px] uppercase tracking-wide text-brand">
                Friction
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
