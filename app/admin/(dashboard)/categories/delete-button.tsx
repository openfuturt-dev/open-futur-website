'use client'

import { deleteCategory } from './actions'

export function DeleteCategoryButton({ id }: { id: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        if (confirm('Supprimer cette catégorie ?')) {
          deleteCategory(id)
        }
      }}
      className="text-sm font-medium text-destructive hover:underline"
    >
      Supprimer
    </button>
  )
}
