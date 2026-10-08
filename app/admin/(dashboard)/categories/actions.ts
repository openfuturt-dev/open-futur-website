'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/db'
import { getSession } from '@/lib/auth'

function readCategoryInput(formData: FormData) {
  return {
    name: String(formData.get('name') ?? '').trim(),
    slug: String(formData.get('slug') ?? '').trim(),
    description: String(formData.get('description') ?? '').trim() || null,
  }
}

export async function createCategory(_prevState: { error?: string } | undefined, formData: FormData) {
  const session = await getSession()
  if (!session) redirect('/admin/login')

  const data = readCategoryInput(formData)
  if (!data.name || !data.slug) {
    return { error: 'Nom et URL sont obligatoires.' }
  }

  await prisma.category.create({ data })

  revalidatePath('/admin/categories')
  revalidatePath('/insights')
  redirect('/admin/categories')
}

export async function updateCategory(id: string, _prevState: { error?: string } | undefined, formData: FormData) {
  const session = await getSession()
  if (!session) redirect('/admin/login')

  const data = readCategoryInput(formData)
  if (!data.name || !data.slug) {
    return { error: 'Nom et URL sont obligatoires.' }
  }

  await prisma.category.update({ where: { id }, data })

  revalidatePath('/admin/categories')
  revalidatePath('/insights')
  redirect('/admin/categories')
}

export async function deleteCategory(id: string) {
  const session = await getSession()
  if (!session) redirect('/admin/login')

  await prisma.category.delete({ where: { id } })

  revalidatePath('/admin/categories')
  revalidatePath('/insights')
}
