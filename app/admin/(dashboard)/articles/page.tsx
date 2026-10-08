import Link from 'next/link'
import { prisma } from '@/lib/db'
import { formatDate } from '@/lib/site-data'
import { Button } from '@/components/ui/button'
import { DeleteArticleButton } from './delete-button'

export default async function AdminArticlesPage() {
  const articles = await prisma.article.findMany({
    include: { category: true, author: true },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Articles</h1>
        <Link href="/admin/articles/new">
          <Button>Créer</Button>
        </Link>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              <th className="px-5 py-3">Titre</th>
              <th className="px-5 py-3">Catégorie</th>
              <th className="px-5 py-3">Statut</th>
              <th className="px-5 py-3">Publication</th>
              <th className="px-5 py-3">Auteur</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {articles.map((a) => (
              <tr key={a.id} className="border-b border-border last:border-0">
                <td className="max-w-xs truncate px-5 py-3 font-medium text-foreground">{a.title}</td>
                <td className="px-5 py-3 text-muted-foreground">{a.category?.name ?? '—'}</td>
                <td className="px-5 py-3">
                  <span
                    className={
                      a.status === 'PUBLISHED'
                        ? 'rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground'
                        : 'rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground'
                    }
                  >
                    {a.status === 'PUBLISHED' ? 'Publié' : 'Brouillon'}
                  </span>
                </td>
                <td className="px-5 py-3 text-muted-foreground">{a.publishedAt ? formatDate(a.publishedAt.toISOString()) : '—'}</td>
                <td className="px-5 py-3 text-muted-foreground">{a.author.name}</td>
                <td className="px-5 py-3 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <Link href={`/admin/articles/${a.id}`} className="text-sm font-medium text-primary hover:underline">
                      Modifier
                    </Link>
                    <DeleteArticleButton id={a.id} />
                  </div>
                </td>
              </tr>
            ))}
            {articles.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-8 text-center text-muted-foreground">
                  Aucun article pour l’instant.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
