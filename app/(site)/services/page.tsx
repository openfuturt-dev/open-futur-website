import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/site/page-hero'
import { SectionHeading } from '@/components/site/section-heading'
import { ServiceCard } from '@/components/site/service-card'
import { CtaBanner } from '@/components/site/cta-banner'
import { ButtonLink } from '@/components/ui/button-link'
import { services } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Sites web, logiciels métier, automatisation, intégrations, cloud et design produit : des services technologiques de bout en bout.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Des services technologiques de bout en bout."
        description="De la stratégie à la mise en production, nous aidons les entreprises à simplifier, automatiser et faire grandir leur activité grâce à la technologie."
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Services' }]}
      >
        <ButtonLink href="/contact" size="lg" arrow>
          Démarrer un projet
        </ButtonLink>
      </PageHero>

      <section aria-labelledby="all-services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          id="all-services"
          eyebrow="Notre expertise"
          title="Une gamme complète pour construire, améliorer et faire évoluer vos activités."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <ServiceCard service={s} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="partner-title" className="bg-muted py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/team.png"
              alt="L’équipe Open Futur en séance de travail collaborative"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              id="partner-title"
              eyebrow="Notre approche"
              title="Un partenaire technologique, une approche centrée sur l’humain."
              description="Nous combinons une expertise technique approfondie et une collaboration étroite pour livrer des solutions qui comptent vraiment. Chaque projet est piloté par une équipe dédiée qui comprend votre métier."
            />
            <ButtonLink href="/methode" variant="secondary" className="mt-8" arrow>
              Découvrir notre méthode
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
