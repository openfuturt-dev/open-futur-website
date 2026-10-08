import { config } from 'dotenv'
import bcrypt from 'bcryptjs'
import { posts, postCategories } from '../lib/site-data'

config({ path: '.env.development.local' })

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

async function main() {
  const { prisma } = await import('../lib/db')

  const adminEmail = process.env.ADMIN_EMAIL!
  const adminPassword = process.env.ADMIN_PASSWORD!
  const passwordHash = await bcrypt.hash(adminPassword, 10)

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: { name: 'Administrateur Open Futur', email: adminEmail, passwordHash },
  })
  console.log(`Admin user ready: ${admin.email}`)

  const categoryNames = postCategories.filter((c) => c !== 'Tous')
  const categoryMap = new Map<string, string>()
  for (const name of categoryNames) {
    const category = await prisma.category.upsert({
      where: { slug: slugify(name) },
      update: {},
      create: { name, slug: slugify(name) },
    })
    categoryMap.set(name, category.id)
  }
  console.log(`${categoryMap.size} categories ready.`)

  for (const post of posts) {
    const categoryId = categoryMap.get(post.category)
    await prisma.article.upsert({
      where: { slug: post.slug },
      update: {},
      create: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.body.join('\n\n'),
        image: post.image,
        status: 'PUBLISHED',
        publishedAt: new Date(post.date),
        authorId: admin.id,
        categoryId,
      },
    })
  }
  console.log(`${posts.length} articles migrated.`)

  await prisma.$disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
