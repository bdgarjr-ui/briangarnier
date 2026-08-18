import { cn } from "@/lib/utils"
import React, { type ReactNode } from "react"

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode
  showRadialGradient?: boolean
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-background text-foreground transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
          [--aurora:repeating-linear-gradient(100deg,var(--color-brand)_10%,color-mix(in_oklch,var(--color-brand)_60%,white)_20%,var(--color-brand)_30%)]
          [background-image:var(--aurora)]
          [background-size:200%]
          [background-position:50%_50%]
          filter blur-[60px]
          after:content-[""] after:absolute after:inset-0 after:[background-image:var(--aurora)]
          after:[background-size:200%]
          after:animate-aurora after:[background-attachment:fixed]
          pointer-events-none
          absolute -inset-[10px] opacity-[0.08] will-change-transform`,

            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_50%_0%,black_10%,transparent_70%)]`
          )}
        ></div>
      </div>
      {children}
    </div>
  )
}
