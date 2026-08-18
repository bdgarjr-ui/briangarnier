import * as React from "react"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  title: string
  description: string
  link: string
  linkText?: string
  /** When true, navigates via React Router instead of opening an external link in a new tab. */
  internal?: boolean
  /** Short skill/method tags shown as pills. */
  tags?: string[]
  /** The one number a hiring manager should see at a glance. */
  metric?: { value: string; label: string }
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      className,
      imgSrc,
      title,
      description,
      link,
      linkText = "View Project",
      internal = false,
      tags = [],
      metric,
      ...props
    },
    ref
  ) => {
    const cta = internal ? (
      <Link
        to={link}
        className="group/button mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand transition-all duration-300 hover:underline"
        onClick={(e) => e.stopPropagation()}
      >
        {linkText}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
      </Link>
    ) : (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group/button mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand transition-all duration-300 hover:underline"
        onClick={(e) => e.stopPropagation()}
      >
        {linkText}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
      </a>
    )

    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-xl sm:flex-row",
          className
        )}
        {...props}
      >
        {/* Card Image Section */}
        <div className="aspect-video overflow-hidden sm:aspect-auto sm:w-2/5 sm:shrink-0">
          <img
            src={imgSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Card Content Section */}
        <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 flex-1">
              <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-brand">
                {title}
              </h3>
              <p className="mt-3 text-muted-foreground">{description}</p>
            </div>

            {/* At-a-glance metric */}
            {metric && (
              <div className="flex shrink-0 flex-col items-start gap-0.5 self-start rounded-xl border border-brand/30 bg-brand/5 px-4 py-3 sm:min-w-[9rem] sm:items-center sm:text-center">
                <span className="font-serif text-3xl leading-none text-brand sm:text-4xl">
                  {metric.value}
                </span>
                <span className="mt-1.5 text-[11px] uppercase tracking-wide text-muted-foreground">
                  {metric.label}
                </span>
              </div>
            )}
          </div>

          {cta}
        </div>
      </div>
    )
  }
)
ProjectCard.displayName = "ProjectCard"

export { ProjectCard }
