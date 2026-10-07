'use client'

import { cn } from '@/lib/utils'

type FilterTabsProps<T extends string> = {
  options: readonly T[]
  value: T
  onChange: (value: T) => void
  label: string
}

export function FilterTabs<T extends string>({ options, value, onChange, label }: FilterTabsProps<T>) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          aria-pressed={value === opt}
          onClick={() => onChange(opt)}
          className={cn(
            'rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
            value === opt
              ? 'border-navy bg-navy text-primary-foreground'
              : 'border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground',
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}
