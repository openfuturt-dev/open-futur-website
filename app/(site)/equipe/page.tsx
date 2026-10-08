import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/site/page-hero'
import { SectionHeading } from '@/components/site/section-heading'
import { CtaBanner } from '@/components/site/cta-banner'
import { team, values } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Notre équipe',
  description: 'Rencontrez l’équipe d’ingénieurs, designers et stratèges d’Open Futur, basée à Marrakech.',
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Notre équipe"
        title="Les personnes qui construisent vos produits."
        description="Une équipe pluridisciplinaire d’ingénieurs, de designers et de stratèges, réunie autour d’une même exigence de qualité."
        image="/images/team.png"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Équipe' }]}
      />

      <section aria-labelledby="team-title" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          id="team-title"
          eyebrow="L’équipe"
          title="Un interlocuteur dédié, une expertise complète."
          description="Chefs de projet, ingénieurs logiciels, designers UI/UX et experts cloud travaillent ensemble sur chaque projet."
        />
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <li key={member.role} className="flex flex-col gap-5 rounded-2xl border border-border p-6">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="values-title" className="bg-navy py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading id="values-title" tone="dark" eyebrow="Nos valeurs" title="Ce qui guide chacune de nos décisions." />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <li key={v.title} className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-7">
                <h3 className="text-lg font-bold text-cyan-glow">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner title="Envie de rejoindre l’aventure ou de lancer un projet ?" />
    </>
  )
}
