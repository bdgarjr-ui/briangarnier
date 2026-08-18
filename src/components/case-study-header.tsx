import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"

export function CaseStudyHeader({ title, highlightWord }: { title: string; highlightWord: string }) {
  const [before, after] = title.split(highlightWord)

  return (
    <div className="border-b border-border">
      <div className="mx-auto max-w-3xl px-8 pt-8 sm:px-10">
        <Link to="/" className="inline-block text-sm text-muted-foreground hover:text-brand">
          ← Back to work
        </Link>
      </div>

      <HeroHighlight containerClassName="h-[20rem] bg-background sm:h-[24rem] dark:bg-background">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="mx-auto max-w-4xl px-8 text-center font-serif text-4xl font-bold tracking-tight text-foreground sm:px-10 sm:text-5xl"
        >
          {before}
          <Highlight className="text-foreground">{highlightWord}</Highlight>
          {after}
        </motion.h1>
      </HeroHighlight>
    </div>
  )
}
