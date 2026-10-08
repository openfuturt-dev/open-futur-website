import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import { CategoryForm } from '../category-form'
import { updateCategory } from '../actions'

export default async function EditCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const category = await prisma.category.findUnique({ where: { id } })

  if (!category) notFound()

  const boundAction = updateCategory.bind(null, category.id)

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Modifier la catégorie</h1>
      <div className="mt-6">
        <CategoryForm
          action={boundAction}
          submitLabel="Enregistrer"
          initialValues={{
            name: category.name,
            slug: category.slug,
            description: category.description ?? '',
          }}
        />
      </div>
    </div>
  )
}
