import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
  tone?: 'default' | 'dark'
  className?: string
  id?: string
}

export function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'default', className, id }: SectionHeadingProps) {
  return (
    <div className={cn('flex max-w-2xl flex-col gap-4', align === 'center' && 'mx-auto items-center text-center', className)}>
      <p className={cn('text-xs font-semibold tracking-[0.2em] uppercase', tone === 'dark' ? 'text-cyan' : 'text-primary')}>
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          'text-3xl leading-tight font-bold tracking-tight text-balance md:text-4xl',
          tone === 'dark' ? 'text-primary-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-base leading-relaxed text-pretty md:text-lg',
            tone === 'dark' ? 'text-primary-foreground/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
