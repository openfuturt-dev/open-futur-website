import { CategoryForm } from '../category-form'
import { createCategory } from '../actions'

export default function NewCategoryPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Créer une catégorie</h1>
      <div className="mt-6">
        <CategoryForm action={createCategory} submitLabel="Créer" />
      </div>
    </div>
  )
}
