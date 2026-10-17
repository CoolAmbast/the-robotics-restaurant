import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-0.5 text-xs font-semibold tracking-wider uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border border-[var(--accent)]/30 bg-[var(--accent)]/15 text-[var(--accent)]',
        secondary:
          'border border-[var(--primary)]/20 bg-[var(--primary)]/10 text-[var(--primary)]',
        outline:
          'border border-[var(--border)] text-[var(--text)] bg-transparent',
        accent:
          'bg-[var(--accent)] text-[var(--text-on-accent)] shadow-sm',
        glass:
          'border border-white/20 bg-black/40 text-white backdrop-blur-md',
        gold:
          'border border-[var(--tertiary)]/40 bg-[var(--tertiary)]/20 text-[var(--tertiary)] font-bold',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
