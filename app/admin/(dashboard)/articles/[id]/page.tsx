import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import { ArticleForm } from '../article-form'
import { updateArticle } from '../actions'

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [article, categories] = await Promise.all([
    prisma.article.findUnique({ where: { id } }),
    prisma.category.findMany({ orderBy: { name: 'asc' } }),
  ])

  if (!article) notFound()

  const boundAction = updateArticle.bind(null, article.id)

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Modifier l’article</h1>
      <div className="mt-6">
        <ArticleForm
          categories={categories}
          action={boundAction}
          submitLabel="Enregistrer"
          initialValues={{
            title: article.title,
            slug: article.slug,
            categoryId: article.categoryId,
            excerpt: article.excerpt ?? '',
            content: article.content,
            image: article.image ?? '',
            status: article.status,
            publishedAt: article.publishedAt ? article.publishedAt.toISOString().slice(0, 10) : '',
            metaTitle: article.metaTitle ?? '',
            metaDescription: article.metaDescription ?? '',
            keywords: article.keywords ?? '',
          }}
        />
      </div>
    </div>
  )
}
