import Image from 'next/image'
import { ButtonLink } from '@/components/ui/button-link'

type CtaBannerProps = {
  title?: string
  description?: string
}

export function CtaBanner({
  title = 'Prêt à faire avancer votre entreprise ?',
  description = 'Nouveau site, logiciel sur mesure ou automatisation intelligente : construisons ensemble la suite.',
}: CtaBannerProps) {
  return (
    <section aria-labelledby="cta-title" className="px-5 py-20 lg:px-8">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl bg-navy px-6 py-14 text-primary-foreground md:px-14 md:py-16">
        <Image
          src="/brand/hero-portal.png"
          alt=""
          fill
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="-z-20 object-cover object-right opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-transparent" aria-hidden="true" />
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-cyan uppercase">Construisons la suite</p>
            <h2 id="cta-title" className="mt-4 text-3xl leading-tight font-bold tracking-tight text-balance md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 leading-relaxed text-pretty text-primary-foreground/75">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" size="lg" arrow>
              Démarrer un projet
            </ButtonLink>
            <ButtonLink href="/services" variant="onDark" size="lg">
              Nos services
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
