import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { SolutionsGrid } from '@/components/solutions/solutions-grid'
import { ProjectsShowcase } from '@/components/solutions/projects-showcase'
import { ButtonLink } from '@/components/ui/button-link'
import { CtaBanner } from '@/components/site/cta-banner'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Des solutions numériques adaptées à votre secteur, à vos défis métier et à votre écosystème technologique.',
}

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Des solutions numériques pour un vrai progrès."
        description="Nous aidons les entreprises à simplifier, automatiser et grandir. Explorez nos solutions ou échangez avec un expert pour trouver la bonne approche."
        image="/images/office-building.png"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Solutions' }]}
      />

      <ProjectsShowcase />

      <section aria-labelledby="catalog-title" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <p className="text-xs font-semibold tracking-widest text-primary uppercase">Ce que nous pouvons construire</p>
        <h2 id="catalog-title" className="mt-3 mb-10 text-3xl font-bold text-balance md:text-4xl">
          Des solutions pour chaque besoin.
        </h2>
        <SolutionsGrid />

        <div className="mt-16 flex flex-col gap-6 rounded-3xl bg-accent p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <h2 className="text-xl font-bold text-balance">Vous ne savez pas quelle solution correspond à votre besoin ?</h2>
            <p className="mt-2 text-muted-foreground">Notre équipe vous aide à identifier la bonne approche pour vos objectifs.</p>
          </div>
          <ButtonLink href="/contact" arrow>
            Parler à un expert
          </ButtonLink>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
