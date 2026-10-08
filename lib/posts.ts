import { prisma } from '@/lib/db'

export type PublicPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  body: string[]
}

function readTimeFor(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  return `${Math.max(1, Math.round(words / 200))} min`
}

function toPublicPost(article: {
  slug: string
  title: string
  excerpt: string | null
  content: string
  image: string | null
  publishedAt: Date | null
  createdAt: Date
  category: { name: string } | null
}): PublicPost {
  return {
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt ?? '',
    category: article.category?.name ?? '',
    date: (article.publishedAt ?? article.createdAt).toISOString(),
    readTime: readTimeFor(article.content),
    image: article.image ?? '/images/team.png',
    body: article.content.split('\n\n'),
  }
}

export async function getPublishedPosts(): Promise<PublicPost[]> {
  const articles = await prisma.article.findMany({
    where: { status: 'PUBLISHED' },
    include: { category: true },
    orderBy: { publishedAt: 'desc' },
  })
  return articles.map(toPublicPost)
}

export async function getPublishedPostBySlug(slug: string): Promise<PublicPost | null> {
  const article = await prisma.article.findFirst({
    where: { slug, status: 'PUBLISHED' },
    include: { category: true },
  })
  return article ? toPublicPost(article) : null
}

export async function getPublishedCategories(): Promise<string[]> {
  const categories = await prisma.category.findMany({
    where: { articles: { some: { status: 'PUBLISHED' } } },
    orderBy: { name: 'asc' },
    select: { name: true },
  })
  return ['Tous', ...categories.map((c) => c.name)]
}
