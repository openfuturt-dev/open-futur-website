import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { SectionHeading } from '@/components/site/section-heading'
import { CtaBanner } from '@/components/site/cta-banner'
import { processSteps } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Notre méthode',
  description: 'Comprendre, planifier, construire, lancer, faire grandir : la méthode Open Futur pour des résultats durables.',
}

const details = [
  ['Ateliers de découverte', 'Entretiens avec les utilisateurs', 'Audit de l’existant'],
  ['Feuille de route priorisée', 'Architecture technique', 'Estimation transparente'],
  ['Sprints de deux semaines', 'Démonstrations régulières', 'Tests automatisés'],
  ['Recette et validation', 'Mise en production progressive', 'Formation des équipes'],
  ['Suivi des indicateurs', 'Maintenance évolutive', 'Améliorations continues'],
]

export default function MethodPage() {
  return (
    <>
      <PageHero
        eyebrow="Notre méthode"
        title="Un processus clair pour des résultats durables."
        description="Une démarche éprouvée qui rend chaque étape visible, chaque décision compréhensible et chaque livraison utile."
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Notre méthode' }]}
      />

      <section aria-labelledby="steps-title" className="mx-auto max-w-5xl px-5 py-24 lg:px-8">
        <SectionHeading
          id="steps-title"
          eyebrow="Cinq étapes"
          title="De l’idée à l’impact, sans zone d’ombre."
          align="center"
        />
        <ol className="relative mt-16 flex flex-col gap-6 before:absolute before:top-4 before:bottom-4 before:left-6 before:w-px before:bg-gradient-to-b before:from-teal before:to-cyan-glow md:before:left-8">
          {processSteps.map((step, i) => (
            <li key={step.title} className="relative grid grid-cols-[3rem_1fr] gap-5 md:grid-cols-[4rem_1fr] md:gap-8">
              <span className="relative z-10 flex size-12 items-center justify-center rounded-full bg-navy text-sm font-bold text-cyan-glow tabular-nums md:size-16 md:text-base">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{step.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {details[i].map((d) => (
                    <li key={d} className="rounded-full bg-accent px-3.5 py-1.5 text-sm font-medium text-accent-foreground">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <CtaBanner />
    </>
  )
}
