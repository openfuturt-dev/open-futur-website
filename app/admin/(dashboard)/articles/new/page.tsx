import { prisma } from '@/lib/db'
import { ArticleForm } from '../article-form'
import { createArticle } from '../actions'

export default async function NewArticlePage() {
  const categories = await prisma.category.findMany({ orderBy: { name: 'asc' } })

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Créer un article</h1>
      <div className="mt-6">
        <ArticleForm categories={categories} action={createArticle} submitLabel="Créer" />
      </div>
    </div>
  )
}
