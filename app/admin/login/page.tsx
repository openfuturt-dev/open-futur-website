'use client'

import { useActionState } from 'react'
import { login } from '@/app/admin/actions'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/brand/logo'

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(login, undefined)

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy px-5 py-16">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <div className="rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan uppercase">Administration</p>
          <h1 className="mt-3 text-2xl font-bold text-primary-foreground">Connexion</h1>
          <p className="mt-2 text-sm text-primary-foreground/60">Accédez au tableau de bord Open Futur.</p>

          <form action={formAction} className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-primary-foreground/80">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="rounded-xl border border-primary-foreground/15 bg-navy-deep px-4 py-2.5 text-sm text-primary-foreground outline-none focus:border-cyan"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-sm font-medium text-primary-foreground/80">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="rounded-xl border border-primary-foreground/15 bg-navy-deep px-4 py-2.5 text-sm text-primary-foreground outline-none focus:border-cyan"
              />
            </div>

            {state?.error && <p className="text-sm text-destructive">{state.error}</p>}

            <Button type="submit" disabled={pending} className="mt-2 h-11 w-full justify-center rounded-xl text-sm">
              {pending ? 'Connexion…' : 'Se connecter'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
