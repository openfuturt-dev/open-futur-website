import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { CircleCheck } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { SectionHeading } from '@/components/site/section-heading'
import { ProcessTimeline } from '@/components/site/process-timeline'
import { ServiceCard } from '@/components/site/service-card'
import { CtaBanner } from '@/components/site/cta-banner'
import { FaqList } from '@/components/site/faq-list'
import { ButtonLink } from '@/components/ui/button-link'
import { services } from '@/lib/site-data'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return { title: service.title, description: service.short }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const Icon = service.icon
  const others = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.intro}
        image={service.image}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      >
        <ButtonLink href="/contact" size="lg" arrow>
          Démarrer un projet
        </ButtonLink>
      </PageHero>

      <section aria-labelledby="benefits-title" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="flex size-14 items-center justify-center rounded-2xl bg-navy text-cyan-glow">
              <Icon className="size-7" aria-hidden="true" />
            </span>
            <SectionHeading
              id="benefits-title"
              className="mt-8"
              eyebrow="Bénéfices"
              title="Des opérations plus simples, un impact plus fort."
              description={service.short}
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {service.stack.map((t) => (
                <span key={t} className="rounded-full border border-border px-3.5 py-1.5 text-sm font-medium text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.benefits.map((b) => (
              <li key={b} className="flex flex-col gap-4 rounded-2xl border border-border p-6">
                <CircleCheck className="size-6 text-primary" aria-hidden="true" />
                <p className="font-semibold leading-snug">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="usecases-title" className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading id="usecases-title" eyebrow="Cas d’usage" title="Ce que nous construisons le plus souvent." />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {service.useCases.map((u) => (
              <li key={u.title} className="rounded-2xl bg-card p-7">
                <h3 className="text-lg font-bold">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="approach-title" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src={service.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <SectionHeading
            id="approach-title"
            eyebrow="Notre approche"
            title="Une démarche structurée pour des résultats durables."
            description="Nous suivons un processus éprouvé, de la découverte à la mise en production, pour que chaque solution soit fiable, évolutive et livre des résultats mesurables."
          />
        </div>
        <div className="mt-20">
          <ProcessTimeline />
        </div>
      </section>

      <section aria-labelledby="faq-title" className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions fréquentes" />
          </div>
          <div className="lg:col-span-8">
            <FaqList items={service.faqs} />
          </div>
        </div>
      </section>

      <section aria-labelledby="others-title" className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading id="others-title" eyebrow="Autres services" title="Explorez nos autres expertises." />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug}>
                <ServiceCard service={s} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
