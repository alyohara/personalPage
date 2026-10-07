import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, disabled, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[80px] w-full rounded-lg border border-border bg-bg-elevated px-3 py-2 text-fg placeholder-fg-subtle focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-[border-color,box-shadow,background-color]",
        className
      )}
      disabled={disabled}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }