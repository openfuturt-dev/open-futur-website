'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { ArticleStatus } from '@prisma/client'
import { prisma } from '@/lib/db'
import { getSession } from '@/lib/auth'

function readArticleInput(formData: FormData) {
  const status: ArticleStatus = formData.get('status') === 'PUBLISHED' ? ArticleStatus.PUBLISHED : ArticleStatus.DRAFT
  const publishedAtRaw = String(formData.get('publishedAt') ?? '')
  const categoryId = String(formData.get('categoryId') ?? '') || null

  return {
    title: String(formData.get('title') ?? '').trim(),
    slug: String(formData.get('slug') ?? '').trim(),
    excerpt: String(formData.get('excerpt') ?? '').trim() || null,
    content: String(formData.get('content') ?? '').trim(),
    image: String(formData.get('image') ?? '').trim() || null,
    status,
    publishedAt: publishedAtRaw ? new Date(publishedAtRaw) : status === 'PUBLISHED' ? new Date() : null,
    categoryId,
    metaTitle: String(formData.get('metaTitle') ?? '').trim() || null,
    metaDescription: String(formData.get('metaDescription') ?? '').trim() || null,
    keywords: String(formData.get('keywords') ?? '').trim() || null,
  }
}

export async function createArticle(_prevState: { error?: string } | undefined, formData: FormData) {
  const session = await getSession()
  if (!session) redirect('/admin/login')

  const data = readArticleInput(formData)
  if (!data.title || !data.slug || !data.content) {
    return { error: 'Titre, URL et contenu sont obligatoires.' }
  }

  await prisma.article.create({
    data: { ...data, authorId: session.userId },
  })

  revalidatePath('/admin/articles')
  revalidatePath('/insights')
  redirect('/admin/articles')
}

export async function updateArticle(id: string, _prevState: { error?: string } | undefined, formData: FormData) {
  const session = await getSession()
  if (!session) redirect('/admin/login')

  const data = readArticleInput(formData)
  if (!data.title || !data.slug || !data.content) {
    return { error: 'Titre, URL et contenu sont obligatoires.' }
  }

  await prisma.article.update({ where: { id }, data })

  revalidatePath('/admin/articles')
  revalidatePath('/insights')
  redirect('/admin/articles')
}

export async function deleteArticle(id: string) {
  const session = await getSession()
  if (!session) redirect('/admin/login')

  await prisma.article.delete({ where: { id } })

  revalidatePath('/admin/articles')
  revalidatePath('/insights')
}
