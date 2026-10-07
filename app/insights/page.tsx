import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { InsightsBrowser } from '@/components/insights/insights-browser'
import { CtaBanner } from '@/components/site/cta-banner'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Articles, guides et retours d’expérience sur la technologie, l’automatisation et la croissance des entreprises.',
}

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Idées et perspectives pour la suite."
        description="Conseils pratiques, retours d’expérience et analyses de notre équipe d’experts."
        image="/images/integrations.png"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Insights' }]}
      />
      <section aria-label="Articles" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <InsightsBrowser />
      </section>
      <CtaBanner />
    </>
  )
}
