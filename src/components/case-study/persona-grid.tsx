export interface PersonaItem {
  name: string
  role: string
  detail?: string
  traits?: string[]
  values?: string
  dislikes?: string
}

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

export function PersonaGrid({ personas }: { personas: PersonaItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {personas.map((p) => (
        <div key={p.name} className="rounded-xl border border-border p-4">
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-xs font-medium text-brand">
              {initials(p.name)}
            </span>
            <div>
              <p className="text-sm font-medium text-foreground">{p.name}</p>
              <p className="text-xs text-muted-foreground">{p.role}</p>
            </div>
          </div>
          {p.detail && (
            <p className="mb-2 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
          )}
          {(p.values || p.dislikes) && (
            <div className="mb-2 space-y-1 text-xs leading-relaxed text-muted-foreground">
              {p.values && (
                <p>
                  <span className="font-medium text-foreground">Values: </span>
                  {p.values}
                </p>
              )}
              {p.dislikes && (
                <p>
                  <span className="font-medium text-foreground">Dislikes: </span>
                  {p.dislikes}
                </p>
              )}
            </div>
          )}
          {p.traits && p.traits.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {p.traits.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
