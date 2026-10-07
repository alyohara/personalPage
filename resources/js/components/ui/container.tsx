import * as React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "full"
  className?: string
}

export function Container({ size = "default", className, children, ...props }: ContainerProps) {
  const sizes = {
    default: "mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8",
    narrow: "mx-auto max-w-[var(--container-narrow)] px-4 sm:px-6 lg:px-8",
    full: "w-full px-4 sm:px-6 lg:px-8",
  }

  return (
    <div className={cn(sizes[size], className)} {...props}>
      {children}
    </div>
  )
}