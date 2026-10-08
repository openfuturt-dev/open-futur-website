import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/site/page-hero'
import { SectionHeading } from '@/components/site/section-heading'
import { CtaBanner } from '@/components/site/cta-banner'
import { stats, values } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'À propos',
  description: 'Open Futur est une équipe d’ingénieurs et de designers basée à Marrakech qui construit des produits numériques à fort impact.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Des idées et des produits pour la suite."
        description="Open Futur réunit ingénieurs, designers et stratèges autour d’une conviction : la technologie doit simplifier le travail et ouvrir de nouvelles possibilités."
        image="/images/team.png"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'À propos' }]}
      />

      <section aria-label="Chiffres clés" className="border-b border-border">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-14 md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <dt className="order-2 text-sm text-muted-foreground">{s.label}</dt>
              <dd className="order-1 text-4xl font-bold tracking-tight text-primary tabular-nums">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="story-title" className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading id="story-title" eyebrow="Notre histoire" title="Ouvrir une porte vers le futur de chaque entreprise." />
          <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-foreground">
            <p>
              Fondée en 2026 à Marrakech, Open Futur est née d’un constat simple : trop d’entreprises subissent leurs
              outils numériques au lieu d’en tirer parti.
            </p>
            <p>
              Notre symbole — une porte ouverte sur la lumière — résume notre mission : accompagner chaque client vers
              de nouvelles possibilités, avec des produits clairs, robustes et pensés pour durer.
            </p>
            <p>
              Aujourd’hui, notre équipe accompagne des PME et des groupes au Maroc et à l’international, de la
              conception d’un premier produit à la transformation de systèmes existants.
            </p>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-navy">
          <Image
            src="/brand/social-profile.png"
            alt="Le symbole Open Futur : une porte lumineuse ouverte sur l’avenir"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
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

      <section aria-labelledby="team-title" className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:order-2">
          <Image
            src="/images/meeting.png"
            alt="Deux consultants Open Futur en atelier de stratégie"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <SectionHeading
          id="team-title"
          eyebrow="Notre équipe"
          title="Une équipe pluridisciplinaire, un interlocuteur unique."
          description="Chefs de projet, ingénieurs logiciels, designers UI/UX et experts cloud travaillent ensemble sur chaque projet. Vous disposez d’un interlocuteur dédié qui connaît votre métier et pilote l’ensemble."
        />
      </section>

      <CtaBanner title="Envie de rejoindre l’aventure ou de lancer un projet ?" />
    </>
  )
}
