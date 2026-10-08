'use client'

import { useActionState } from 'react'
import { Button } from '@/components/ui/button'

type Category = { id: string; name: string }

type ArticleFormValues = {
  title: string
  slug: string
  categoryId: string | null
  excerpt: string
  content: string
  image: string
  status: string
  publishedAt: string
  metaTitle: string
  metaDescription: string
  keywords: string
}

type Action = (prevState: { error?: string } | undefined, formData: FormData) => Promise<{ error?: string } | undefined>

export function ArticleForm({
  categories,
  initialValues,
  action,
  submitLabel,
}: {
  categories: Category[]
  initialValues?: Partial<ArticleFormValues>
  action: Action
  submitLabel: string
}) {
  const [state, formAction, pending] = useActionState(action, undefined)

  return (
    <form action={formAction} className="flex flex-col gap-8">
      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-base font-bold text-foreground">Contenu éditorial</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Field label="Titre" required>
            <input name="title" defaultValue={initialValues?.title} required className="input" />
          </Field>
          <Field label="URL" required>
            <input name="slug" defaultValue={initialValues?.slug} required className="input" />
          </Field>
        </div>

        <div className="mt-5">
          <Field label="Catégorie">
            <select name="categoryId" defaultValue={initialValues?.categoryId ?? ''} className="input">
              <option value="">Sélectionnez une option</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="mt-5">
          <Field label="Résumé">
            <textarea name="excerpt" defaultValue={initialValues?.excerpt} rows={3} className="input" />
          </Field>
        </div>

        <div className="mt-5">
          <Field label="Contenu" required>
            <textarea name="content" defaultValue={initialValues?.content} required rows={12} className="input font-mono text-sm" />
          </Field>
        </div>

        <div className="mt-5">
          <Field label="Image à la une (URL)">
            <input name="image" defaultValue={initialValues?.image} placeholder="/images/mon-image.png" className="input" />
          </Field>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-base font-bold text-foreground">Publication</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Field label="Statut" required>
            <select name="status" defaultValue={initialValues?.status ?? 'DRAFT'} className="input">
              <option value="DRAFT">Brouillon</option>
              <option value="PUBLISHED">Publié</option>
            </select>
          </Field>
          <Field label="Date de publication">
            <input type="date" name="publishedAt" defaultValue={initialValues?.publishedAt} className="input" />
          </Field>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-base font-bold text-foreground">Référencement SEO</h2>
        <p className="mt-1 text-sm text-muted-foreground">Laissez vide pour utiliser le titre et le résumé de l’article.</p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Field label="Meta title">
            <input name="metaTitle" defaultValue={initialValues?.metaTitle} className="input" />
          </Field>
          <Field label="Meta description">
            <textarea name="metaDescription" defaultValue={initialValues?.metaDescription} rows={3} className="input" />
          </Field>
        </div>
        <div className="mt-5">
          <Field label="Mots-clés">
            <input name="keywords" defaultValue={initialValues?.keywords} placeholder="Séparez les mots-clés par des virgules." className="input" />
          </Field>
        </div>
      </section>

      {state?.error && <p className="text-sm text-destructive">{state.error}</p>}

      <div className="flex gap-3">
        <Button type="submit" disabled={pending}>
          {pending ? 'Enregistrement…' : submitLabel}
        </Button>
      </div>
    </form>
  )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
      {label}
      {required && <span className="text-destructive">*</span>}
      {children}
    </label>
  )
}
