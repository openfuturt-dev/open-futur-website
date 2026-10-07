import Image from 'next/image'
import { CircleCheck } from 'lucide-react'
import { ButtonLink } from '@/components/ui/button-link'

const points = [
  'Une équipe dédiée, du cadrage à l’évolution continue',
  'Un code dont vous êtes propriétaire, documenté et testé',
  'Des livraisons régulières et des résultats visibles',
  'Une sécurité et une performance pensées dès le premier jour',
]

export function ProductShowcase() {
  return (
    <section aria-labelledby="showcase-title" className="relative isolate overflow-hidden bg-navy py-24 text-primary-foreground">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid-navy [mask-image:radial-gradient(ellipse_at_left,black,transparent_70%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-cyan/20">
          <Image
            src="/images/product-laptop.png"
            alt="Ordinateur portable affichant un tableau de bord analytique conçu par Open Futur"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan uppercase">Un partenaire technologique</p>
          <h2 id="showcase-title" className="mt-4 text-3xl leading-tight font-bold tracking-tight text-balance md:text-4xl">
            Une expertise technique, une approche centrée sur l’humain.
          </h2>
          <p className="mt-5 leading-relaxed text-primary-foreground/70">
            Nous combinons une expertise technique pointue et une collaboration étroite pour livrer des solutions qui
            font une vraie différence dans votre quotidien.
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CircleCheck className="mt-0.5 size-5 shrink-0 text-cyan-glow" aria-hidden="true" />
                <span className="leading-relaxed text-primary-foreground/85">{p}</span>
              </li>
            ))}
          </ul>
          <ButtonLink href="/a-propos" variant="glow" className="mt-10" arrow>
            Découvrir Open Futur
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
