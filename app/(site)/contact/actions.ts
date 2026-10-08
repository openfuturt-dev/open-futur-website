'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'name' | 'email' | 'message' | 'consent', string>>
  values?: Record<string, string>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const get = (k: string) => String(formData.get(k) ?? '').trim()
  const values = {
    name: get('name').slice(0, 120),
    email: get('email').slice(0, 200),
    company: get('company').slice(0, 120),
    service: get('service').slice(0, 80),
    budget: get('budget').slice(0, 40),
    message: get('message').slice(0, 4000),
  }

  if (get('website')) return { status: 'success', message: 'Merci, votre message a bien été envoyé.' }

  const errors: ContactState['errors'] = {}
  if (values.name.length < 2) errors.name = 'Veuillez indiquer votre nom.'
  if (!EMAIL_RE.test(values.email)) errors.email = 'Veuillez saisir une adresse e-mail valide.'
  if (values.message.length < 10) errors.message = 'Votre message doit contenir au moins 10 caractères.'
  if (formData.get('consent') !== 'on') errors.consent = 'Veuillez accepter d’être recontacté.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Merci de corriger les champs indiqués.', errors, values }
  }

  // TODO: connecter un service d'e-mail (ex. Resend) ou une base de données pour stocker la demande.
  console.log('[contact] Nouvelle demande reçue de', values.email)

  return {
    status: 'success',
    message: `Merci ${values.name.split(' ')[0]}, votre message a bien été envoyé. Nous revenons vers vous sous 48 h ouvrées.`,
  }
}
