import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { ArrowRight } from 'lucide-react'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

export const brandButton = cva(
  'group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-accent-foreground shadow-sm shadow-primary/20',
        secondary: 'border border-primary/40 bg-background text-foreground hover:border-primary hover:bg-accent',
        onDark:
          'border border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground hover:border-cyan hover:bg-primary-foreground/10',
        glow: 'bg-cyan-glow text-navy hover:bg-cyan',
        link: 'px-0 text-primary hover:text-accent-foreground',
      },
      size: {
        default: 'h-11 px-6',
        sm: 'h-9 px-4',
        lg: 'h-12 px-7 text-base',
        none: '',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  },
)

type ButtonLinkProps = ComponentProps<typeof Link> &
  VariantProps<typeof brandButton> & { arrow?: boolean }

export function ButtonLink({ className, variant, size, arrow = false, children, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cn(brandButton({ variant, size: variant === 'link' ? 'none' : size }), className)}
      {...props}
    >
      {children}
      {arrow && (
        <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </Link>
  )
}
