export function BioSection() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-3xl px-8 py-10 sm:px-10">
        <h2 className="mb-6 text-xl font-semibold text-foreground">Built on the floor, not just the desk</h2>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">The floor</p>
            <p className="mt-1 text-sm text-foreground">Retail · direct care · phone repair</p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">The desk</p>
            <p className="mt-1 text-sm text-foreground">B.A., User Research &amp; UX Design</p>
          </div>
          <div className="rounded-xl border border-brand/30 bg-brand/5 p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">What that gives me</p>
            <p className="mt-1 text-sm font-medium text-foreground">Proof and vocabulary. Most designers only have one.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
