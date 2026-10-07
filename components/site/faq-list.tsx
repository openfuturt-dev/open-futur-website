import { Plus } from 'lucide-react'

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => (
        <details key={item.q} className="group py-2" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-4 text-left text-lg font-semibold [&::-webkit-details-marker]:hidden">
            {item.q}
            <Plus
              className="size-5 shrink-0 text-primary transition-transform group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="pb-5 leading-relaxed text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
