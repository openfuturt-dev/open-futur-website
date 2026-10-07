import type { Metadata } from 'next'
import { Clock, Mail, MapPin } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { ContactForm } from '@/components/contact/contact-form'
import { site } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Parlez-nous de votre projet : site web, logiciel sur mesure, automatisation ou intégration. Réponse sous 24 h ouvrées.',
}

const info = [
  { icon: Mail, label: 'E-mail', value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: 'Bureau', value: site.city },
  { icon: Clock, label: 'Délai de réponse', value: 'Sous 48 h ouvrées' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Construisons ensemble ce qui vient."
        description="Parlez-nous de votre projet, de vos objectifs et de vos délais. Notre équipe vous répond rapidement."
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Contact' }]}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-12 lg:px-8">
        <aside className="flex flex-col gap-8 lg:col-span-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Échangeons</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Un premier appel de 30 minutes, sans engagement, pour comprendre votre besoin et vous orienter vers la
              bonne approche.
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            {info.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4 rounded-2xl bg-muted p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-cyan-glow">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">{label}</p>
                  {href ? (
                    <a href={href} className="font-semibold hover:text-primary">
                      {value}
                    </a>
                  ) : (
                    <p className="font-semibold">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </aside>
        <div className="lg:col-span-8">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
