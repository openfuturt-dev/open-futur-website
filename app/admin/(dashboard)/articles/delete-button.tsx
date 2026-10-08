'use client'

import { deleteArticle } from './actions'

export function DeleteArticleButton({ id }: { id: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        if (confirm('Supprimer cet article ?')) {
          deleteArticle(id)
        }
      }}
      className="text-sm font-medium text-destructive hover:underline"
    >
      Supprimer
    </button>
  )
}
