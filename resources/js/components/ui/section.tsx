import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "muted" | "bordered"
  size?: "default" | "lg" | "xl"
  className?: string
}

export function Section({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: SectionProps) {
  const variants = {
    default: "bg-bg",
    muted: "bg-bg-muted",
    bordered: "bg-bg border-y border-border",
  }

  const sizes = {
    default: "py-16 sm:py-20 lg:py-24",
    lg: "py-20 sm:py-24 lg:py-28",
    xl: "py-24 sm:py-28 lg:py-32",
  }

  return (
    <section
      className={cn(variants[variant], sizes[size], className)}
      {...props}
    >
      <div className="container-main">
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  title: string
  description?: string
  action?: React.ReactNode
}

export function SectionHeader({ title, description, action, className, ...props }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-12", className)} {...props}>
      <div>
        <h2 className="text-h2">{title}</h2>
        {description && (
          <p className="mt-3 text-body text-fg-muted max-w-2xl">{description}</p>
        )}
      </div>
      {action && <div className="mt-4 sm:mt-0 flex-shrink-0">{action}</div>}
    </div>
  )
}