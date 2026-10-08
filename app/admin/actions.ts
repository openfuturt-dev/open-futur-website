'use server'

import { redirect } from 'next/navigation'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/db'
import { createSession, destroySession } from '@/lib/auth'

export async function login(_prevState: { error?: string } | undefined, formData: FormData) {
  const email = String(formData.get('email') ?? '').trim().toLowerCase()
  const password = String(formData.get('password') ?? '')

  if (!email || !password) {
    return { error: 'Veuillez renseigner votre email et votre mot de passe.' }
  }

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return { error: 'Identifiants invalides.' }
  }

  const valid = await bcrypt.compare(password, user.passwordHash)
  if (!valid) {
    return { error: 'Identifiants invalides.' }
  }

  await createSession({ userId: user.id, email: user.email, name: user.name })
  redirect('/admin')
}

export async function logout() {
  await destroySession()
  redirect('/admin/login')
}
