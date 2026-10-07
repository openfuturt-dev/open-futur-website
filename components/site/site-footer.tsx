import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
import { Logo } from '@/components/brand/logo'
import { mainNav, services, site } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-12 lg:px-8">
        <div className="flex flex-col gap-5 lg:col-span-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/65">{site.description}</p>
          <ul className="flex flex-col gap-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 text-cyan" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-cyan-glow">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="size-4 text-cyan" aria-hidden="true" />
              {site.city}
            </li>
          </ul>
        </div>

        <FooterColumn title="Services" className="lg:col-span-3">
          {services.map((s) => (
            <FooterLink key={s.slug} href={`/services/${s.slug}`}>
              {s.title}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Entreprise" className="lg:col-span-2">
          {mainNav.map((n) => (
            <FooterLink key={n.href} href={n.href}>
              {n.label}
            </FooterLink>
          ))}
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterColumn>

        <FooterColumn title="Suivez-nous" className="lg:col-span-3">
          <FooterLink href="https://www.linkedin.com" external>
            LinkedIn
          </FooterLink>
          <FooterLink href="https://www.instagram.com" external>
            Instagram
          </FooterLink>
          <FooterLink href="https://x.com" external>
            X / Twitter
          </FooterLink>
        </FooterColumn>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-primary-foreground/55 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. Tous droits réservés.
          </p>
          <p className="tracking-widest uppercase">Produits numériques · Technologie · Innovation</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  children,
  className,
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <h2 className="text-xs font-semibold tracking-widest text-cyan uppercase">{title}</h2>
      <ul className="mt-5 flex flex-col gap-3">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <li>
      <Link
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="text-sm text-primary-foreground/70 transition-colors hover:text-cyan-glow"
      >
        {children}
      </Link>
    </li>
  )
}
