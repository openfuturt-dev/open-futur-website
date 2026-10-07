import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/lib/site-data'

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
    >
      <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-navy group-hover:text-cyan-glow">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-lg font-bold">{service.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{service.short}</p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        En savoir plus
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  )
}
