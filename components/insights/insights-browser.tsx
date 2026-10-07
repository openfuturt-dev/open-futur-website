'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { FilterTabs } from '@/components/site/filter-tabs'
import { PostCard } from '@/components/site/post-card'
import { postCategories, posts } from '@/lib/site-data'

type Category = (typeof postCategories)[number]

export function InsightsBrowser() {
  const [category, setCategory] = useState<Category>('Tous')
  const [query, setQuery] = useState('')

  const q = query.trim().toLowerCase()
  const visible = posts.filter(
    (p) =>
      (category === 'Tous' || p.category === category) &&
      (!q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)),
  )

  return (
    <div>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <FilterTabs options={postCategories} value={category} onChange={setCategory} label="Filtrer par catégorie" />
        <label className="relative block w-full lg:w-80">
          <span className="sr-only">Rechercher un article</span>
          <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un article…"
            className="h-11 w-full rounded-full border border-input bg-background pr-4 pl-11 text-sm outline-none transition focus:border-primary focus:ring-3 focus:ring-ring/20"
          />
        </label>
      </div>

      <div aria-live="polite" className="mt-12">
        {visible.length > 0 ? (
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl bg-muted p-10 text-center text-muted-foreground">
            Aucun article ne correspond à votre recherche.
          </p>
        )}
      </div>
    </div>
  )
}
