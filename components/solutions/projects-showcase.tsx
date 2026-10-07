import Image from 'next/image'
import { ArrowUpRight, Check } from 'lucide-react'
import { projects } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function ProjectsShowcase() {
  return (
    <section aria-labelledby="projects-title" className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-primary uppercase">Nos réalisations</p>
            <h2 id="projects-title" className="mt-3 text-3xl font-bold text-balance md:text-4xl">
              Des solutions en production, utilisées chaque jour.
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-muted-foreground text-pretty">
            Produits SaaS, sites corporate et e-commerce : voici quelques solutions conçues et livrées par Open Futur.
          </p>
        </div>

        <ul className="mt-14 flex flex-col gap-10">
          {projects.map((project, index) => (
            <li key={project.name}>
              <article className="grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2">
                <div className={cn('relative aspect-[16/10] bg-muted lg:aspect-auto lg:min-h-96', index % 2 === 1 && 'lg:order-2')}>
                  <Image
                    src={project.image}
                    alt={`Aperçu de la solution ${project.name}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                    {project.type}
                  </span>
                </div>

                <div className="flex flex-col gap-6 p-8 md:p-10">
                  <div>
                    <p className="text-sm font-medium text-primary">{project.sector}</p>
                    <h3 className="mt-1 text-2xl font-bold md:text-3xl">{project.name}</h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">{project.summary}</p>
                  </div>

                  <ul className="flex flex-col gap-2.5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="size-3.5" aria-hidden="true" />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-wrap gap-2" aria-label="Périmètre du projet">
                    {project.scope.map((s) => (
                      <li key={s} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                        {s}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-auto inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Visiter {project.domain}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    <span className="sr-only">(nouvel onglet)</span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
