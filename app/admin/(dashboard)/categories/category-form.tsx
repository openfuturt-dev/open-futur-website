'use client'

import { useActionState } from 'react'
import { Button } from '@/components/ui/button'

type CategoryFormValues = {
  name: string
  slug: string
  description: string
}

type Action = (prevState: { error?: string } | undefined, formData: FormData) => Promise<{ error?: string } | undefined>

export function CategoryForm({
  initialValues,
  action,
  submitLabel,
}: {
  initialValues?: Partial<CategoryFormValues>
  action: Action
  submitLabel: string
}) {
  const [state, formAction, pending] = useActionState(action, undefined)

  return (
    <form action={formAction} className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
          Nom <span className="text-destructive">*</span>
          <input name="name" defaultValue={initialValues?.name} required className="input" />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
          URL <span className="text-destructive">*</span>
          <input name="slug" defaultValue={initialValues?.slug} required className="input" />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
        Description
        <textarea name="description" defaultValue={initialValues?.description} rows={4} className="input" />
      </label>

      {state?.error && <p className="text-sm text-destructive">{state.error}</p>}

      <div>
        <Button type="submit" disabled={pending}>
          {pending ? 'Enregistrement…' : submitLabel}
        </Button>
      </div>
    </form>
  )
}
