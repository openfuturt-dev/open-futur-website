import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type PageHeroProps = {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  image?: string
  breadcrumbs?: { label: string; href?: string }[]
  children?: React.ReactNode
}

export function PageHero({ eyebrow, title, description, image = '/brand/hero-portal.png', breadcrumbs, children }: PageHeroProps) {
  const isPortal = image === '/brand/hero-portal.png'
  return (
    <section className="relative isolate overflow-hidden bg-navy pt-18 text-primary-foreground">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className={cn('-z-20 object-cover', isPortal ? 'object-right' : 'object-center opacity-40')}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/20" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28 lg:px-8">
        <div className="max-w-2xl animate-rise">
          {breadcrumbs && (
            <nav aria-label="Fil d'Ariane" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-primary-foreground/60">
                {breadcrumbs.map((b, i) => (
                  <li key={b.label} className="flex items-center gap-1.5">
                    {i > 0 && <ChevronRight className="size-3.5" aria-hidden="true" />}
                    {b.href ? (
                      <Link href={b.href} className="hover:text-cyan-glow">
                        {b.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-primary-foreground/90">
                        {b.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {eyebrow && <p className="text-xs font-semibold tracking-[0.2em] text-cyan uppercase">{eyebrow}</p>}
          <h1 className="mt-4 text-4xl leading-tight font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-primary-foreground/75">{description}</p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  )
}
