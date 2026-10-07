import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { site } from '@/lib/site-data'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Open Futur — Construire le futur, un produit à la fois.',
    template: '%s · Open Futur',
  },
  description: site.description,
  keywords: ['développement web', 'logiciel sur mesure', 'automatisation', 'intégration API', 'cloud', 'UI/UX', 'Maroc'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: site.name,
    title: 'Open Futur — Construire le futur, un produit à la fois.',
    description: site.description,
    images: [{ url: '/opengraph-image.png', width: 1731, height: 909, alt: 'Open Futur' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Futur',
    description: site.description,
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: '/brand/social-profile.png',
    apple: '/apple-icon.png',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#081b2c',
  colorScheme: 'light',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${manrope.className} bg-background`}>
      <body className="font-sans antialiased">
        <a
          href="#contenu"
          className="sr-only z-[60] rounded-full bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="contenu">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
