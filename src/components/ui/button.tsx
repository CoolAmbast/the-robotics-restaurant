import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius)] font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer text-sm tracking-wide',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--accent)] text-[var(--text-on-accent)] font-semibold shadow-md hover:brightness-105 hover:-translate-y-0.5 hover:shadow-lg transition-transform',
        primary:
          'bg-[var(--accent)] text-[var(--text-on-accent)] font-bold shadow-md hover:brightness-105 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(143,186,93,0.3)]',
        secondary:
          'bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] hover:bg-[var(--border)]/40',
        outline:
          'border-2 border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] bg-transparent',
        ghost:
          'bg-transparent text-[var(--text-on-surface-strong)] border border-[var(--text-on-surface-strong)]/30 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10',
        link: 'text-[var(--link)] underline-offset-4 hover:underline hover:text-[var(--link-hover)] p-0 h-auto',
      },
      size: {
        default: 'h-11 px-5 py-2.5',
        sm: 'h-9 px-3.5 text-xs',
        lg: 'h-13 px-8 text-base font-semibold',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
