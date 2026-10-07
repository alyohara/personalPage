import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow,background-color,border-color] overflow-auto",
  {
    variants: {
      variant: {
        default:
          "bg-accent-muted text-accent border-accent-border [a&]:hover:bg-accent-muted/80",
        muted:
          "bg-bg-muted text-fg-muted border-border [a&]:hover:bg-bg-muted/80",
        outline:
          "text-fg border-border bg-transparent hover:bg-accent-muted hover:text-accent",
        destructive:
          "bg-destructive-muted text-destructive border-destructive/30 [a&]:hover:bg-destructive-muted/80 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        success:
          "bg-[oklch(0.18_0.08_145)] text-accent border-accent-border [a&]:hover:bg-[oklch(0.18_0.08_145)/0.8]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }