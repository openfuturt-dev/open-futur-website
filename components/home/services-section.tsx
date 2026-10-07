import { SectionHeading } from '@/components/site/section-heading'
import { ServiceCard } from '@/components/site/service-card'
import { ButtonLink } from '@/components/ui/button-link'
import { services } from '@/lib/site-data'

export function ServicesSection() {
  return (
    <section aria-labelledby="services-title" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="services-title"
            eyebrow="Nos services"
            title="Des services technologiques de bout en bout pour les entreprises modernes."
          />
          <ButtonLink href="/services" variant="secondary" arrow>
            Tous les services
          </ButtonLink>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <ServiceCard service={s} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
