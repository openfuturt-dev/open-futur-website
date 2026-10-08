import { HomeHero } from '@/components/home/home-hero'
import { WhatWeDo } from '@/components/home/what-we-do'
import { ServicesSection } from '@/components/home/services-section'
import { ProductShowcase } from '@/components/home/product-showcase'
import { SectionHeading } from '@/components/site/section-heading'
import { ProcessTimeline } from '@/components/site/process-timeline'
import { PostCard } from '@/components/site/post-card'
import { CtaBanner } from '@/components/site/cta-banner'
import { ButtonLink } from '@/components/ui/button-link'
import { getPublishedPosts } from '@/lib/posts'

export default async function HomePage() {
  const posts = await getPublishedPosts()

  return (
    <>
      <HomeHero />
      <WhatWeDo />
      <ServicesSection />

      <section aria-labelledby="process-title" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          id="process-title"
          eyebrow="Une méthode claire"
          title="Un processus structuré pour des résultats durables."
          description="Une démarche éprouvée, de la découverte à l’amélioration continue, pour des solutions fiables et évolutives."
        />
        <div className="mt-16">
          <ProcessTimeline />
        </div>
      </section>

      <ProductShowcase />

      <section aria-labelledby="insights-title" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="insights-title"
            eyebrow="Insights"
            title="Idées et perspectives pour la suite."
          />
          <ButtonLink href="/insights" variant="secondary" arrow>
            Tous les articles
          </ButtonLink>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
