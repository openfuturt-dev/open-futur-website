import { prisma } from '@/lib/db'
import { getSession } from '@/lib/auth'

export default async function AdminDashboardPage() {
  const session = await getSession()

  const [published, drafts, categories] = await Promise.all([
    prisma.article.count({ where: { status: 'PUBLISHED' } }),
    prisma.article.count({ where: { status: 'DRAFT' } }),
    prisma.category.count(),
  ])

  const stats = [
    { label: 'Articles publiés', value: published, hint: `${drafts} brouillon(s)` },
    { label: 'Catégories', value: categories, hint: 'Au total' },
    { label: 'Total articles', value: published + drafts, hint: 'Publiés + brouillons' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Tableau de bord</h1>

      <div className="mt-6 rounded-2xl border border-border bg-card p-5">
        <p className="text-sm text-muted-foreground">Bonjour</p>
        <p className="mt-1 text-lg font-bold text-foreground">{session?.name}</p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">{s.label}</p>
            <p className="mt-2 text-4xl font-bold tabular-nums text-foreground">{s.value}</p>
            <p className="mt-1 text-sm text-primary">{s.hint}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
