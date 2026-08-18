export function ClosingSection() {
  return (
    <section className="border-t border-border bg-background py-16 text-center">
      <div className="mx-auto max-w-3xl px-8 sm:px-10">
        <p className="mb-6 font-serif text-xl italic leading-snug text-foreground sm:text-2xl">
          My mission is to raise the floor of who gets good design, not just build
          experiences for the already-confident, but for everyone who's been quietly{" "}
          <span className="text-brand not-italic font-semibold">written off</span> by
          products that weren't made with them in mind.
        </p>
        <p className="mb-6 text-sm text-muted-foreground">I reply fast. Faster if there are dogs involved.</p>
        <p className="mb-3 text-sm text-muted-foreground">
          <a href="mailto:bdgarjr@gmail.com" className="hover:text-brand">
            Reach out
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/briangarnierjr/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand"
          >
            LinkedIn
          </a>
          ,{" "}
          <a href="#" className="hover:text-brand">
            See Resume
          </a>
        </p>
        <p className="text-xs text-muted-foreground/70">Brian © 2026. All Rights Reserved.</p>
      </div>
    </section>
  )
}
