import { PageHero } from '@/components/site/page-hero'
import { ButtonLink } from '@/components/ui/button-link'

export default function NotFound() {
  return (
    <PageHero
      eyebrow="Erreur 404"
      title="Cette porte ne mène nulle part."
      description="La page que vous cherchez n’existe pas ou a été déplacée. Revenez à l’accueil pour continuer."
    >
      <ButtonLink href="/" size="lg" arrow>
        Retour à l’accueil
      </ButtonLink>
      <ButtonLink href="/contact" variant="onDark" size="lg">
        Nous contacter
      </ButtonLink>
    </PageHero>
  )
}
