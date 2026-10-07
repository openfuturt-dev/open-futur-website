import { Check } from 'lucide-react'
import { pillars } from '@/lib/site-data'

export function WhatWeDo() {
  return (
    <section aria-labelledby="what-title" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Ce que nous faisons</p>
          <h2 id="what-title" className="mt-4 text-3xl leading-tight font-bold tracking-tight text-balance md:text-4xl">
            Des solutions numériques au service d’un vrai progrès.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Nous aidons les entreprises à simplifier, automatiser et grandir grâce à la technologie — des sites web
            performants aux systèmes complexes qui résolvent de vrais problèmes et créent une valeur durable.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
          {pillars.map((p) => (
            <li key={p.title} className="flex flex-col gap-4 rounded-2xl bg-muted p-6">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-4" aria-hidden="true" />
              </span>
              <h3 className="font-bold">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
