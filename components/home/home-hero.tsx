import Image from 'next/image'
import { ButtonLink } from '@/components/ui/button-link'
import { stats } from '@/lib/site-data'

export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-navy pt-18 text-primary-foreground">
      <Image
        src="/brand/hero-portal.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center] md:object-right"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/80 to-navy/0 max-md:bg-navy/70"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-5 py-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="animate-rise text-xs font-semibold tracking-[0.25em] text-cyan uppercase">
            Produits numériques · Ingénierie logicielle · Innovation
          </p>
          <h1
            className="mt-6 animate-rise text-5xl leading-[1.05] font-extrabold tracking-tight text-balance md:text-6xl lg:text-7xl"
            style={{ animationDelay: '80ms' }}
          >
            Construire le futur, <span className="text-gradient-brand">un produit à la fois.</span>
          </h1>
          <p
            className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-pretty text-primary-foreground/75"
            style={{ animationDelay: '160ms' }}
          >
            Nous concevons et développons des sites, des logiciels et des automatisations qui aident les entreprises
            ambitieuses à travailler mieux, grandir plus vite et durer.
          </p>
          <div className="mt-10 flex animate-rise flex-wrap gap-3" style={{ animationDelay: '240ms' }}>
            <ButtonLink href="/contact" size="lg" arrow>
              Démarrer un projet
            </ButtonLink>
            <ButtonLink href="/services" variant="onDark" size="lg">
              Découvrir nos services
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 bg-navy/60 backdrop-blur-md">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-5 py-8 md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1 md:border-l md:border-primary-foreground/10 md:pl-6 md:first:border-l-0 md:first:pl-0">
              <dt className="order-2 text-sm text-primary-foreground/60">{s.label}</dt>
              <dd className="order-1 text-3xl font-bold tracking-tight text-cyan-glow tabular-nums">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
