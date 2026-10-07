'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { FilterTabs } from '@/components/site/filter-tabs'
import { solutionCategories, solutions } from '@/lib/site-data'

type Category = (typeof solutionCategories)[number]

export function SolutionsGrid() {
  const [category, setCategory] = useState<Category>('Toutes')
  const visible = category === 'Toutes' ? solutions : solutions.filter((s) => s.category === category)

  return (
    <div>
      <FilterTabs options={solutionCategories} value={category} onChange={setCategory} label="Filtrer les solutions" />
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {visible.map((s) => (
          <li key={s.title}>
            <Link href={`/services/${s.service}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <p className="text-xs font-semibold tracking-widest text-primary uppercase">{s.category}</p>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  En savoir plus
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
