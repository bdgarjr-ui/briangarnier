const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
]

export function SiteNav() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-8 py-4 sm:px-10">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">
            B
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-foreground">Brian</p>
            <p className="text-xs text-muted-foreground">UX Researcher</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-brand">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#" className="text-sm font-medium text-foreground hover:text-brand">
          Resume ↗
        </a>
      </div>
    </header>
  )
}
