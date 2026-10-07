import {
  ChartColumn,
  Cloud,
  CodeXml,
  Layers,
  PenTool,
  Plug,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export const site = {
  name: 'Open Futur',
  tagline: 'Construire le futur, un produit à la fois.',
  description:
    'Open Futur conçoit et développe des produits numériques pensés pour simplifier le travail, accélérer la croissance et créer de nouvelles possibilités.',
  email: 'contact@open-futur.com',
  city: 'Marrakech, Maroc',
  url: 'https://open-futur.com',
}

export const mainNav = [
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Notre méthode', href: '/methode' },
  { label: 'Insights', href: '/insights' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Équipe', href: '/equipe' },
]

export type Service = {
  slug: string
  title: string
  short: string
  intro: string
  icon: LucideIcon
  image: string
  benefits: string[]
  useCases: { title: string; text: string }[]
  faqs: { q: string; a: string }[]
}

export const services: Service[] = [
  {
    slug: 'sites-applications-web',
    title: 'Sites & applications web',
    short: 'Des plateformes web performantes, accessibles et pensées pour convertir.',
    intro:
      'Nous concevons des sites vitrines, plateformes et applications web rapides, sécurisées et faciles à faire évoluer — du premier wireframe à la mise en production.',
    icon: CodeXml,
    image: '/images/product-laptop.png',
    benefits: [
      'Performance et SEO dès la conception',
      'Design system cohérent avec votre marque',
      'Accessibilité conforme aux standards WCAG',
      'Back-office simple pour vos équipes',
    ],
    useCases: [
      { title: 'Site institutionnel', text: 'Une vitrine claire qui présente votre offre et génère des demandes qualifiées.' },
      { title: 'Plateforme e-commerce', text: 'Un parcours d’achat fluide, connecté à vos stocks et paiements.' },
      { title: 'Portail client', text: 'Un espace sécurisé pour vos clients : suivi, documents, échanges.' },
    ],
    faqs: [
      { q: 'Combien de temps faut-il pour lancer un site ?', a: 'Un site vitrine est généralement livré en 4 à 6 semaines. Une application web sur mesure se planifie par itérations, avec une première version utilisable rapidement.' },
      { q: 'Pourrons-nous modifier le contenu nous-mêmes ?', a: 'Oui. Nous intégrons un outil de gestion de contenu adapté à vos équipes et nous vous formons à son utilisation.' },
      { q: 'Assurez-vous la maintenance ?', a: 'Nous proposons des contrats de maintenance et d’évolution pour garder votre plateforme à jour, sécurisée et performante.' },
    ],
  },
  {
    slug: 'logiciels-metier',
    title: 'Logiciels métier',
    short: 'Des outils sur mesure qui épousent vos processus, vos données et vos équipes.',
    intro:
      'Quand les outils du marché ne suffisent plus, nous construisons le logiciel qui correspond exactement à votre façon de travailler : ERP léger, CRM, outils de planification ou de pilotage.',
    icon: Layers,
    image: '/images/meeting.png',
    benefits: [
      'Processus métier digitalisés de bout en bout',
      'Données centralisées et fiables',
      'Gestion fine des rôles et des accès',
      'Tableaux de bord pour piloter l’activité',
    ],
    useCases: [
      { title: 'Gestion des opérations', text: 'Planification, suivi des interventions et reporting en temps réel.' },
      { title: 'CRM sur mesure', text: 'Un pipeline commercial adapté à votre cycle de vente.' },
      { title: 'Outil de pilotage', text: 'Des indicateurs clés consolidés pour décider plus vite.' },
    ],
    faqs: [
      { q: 'Pourquoi un logiciel sur mesure plutôt qu’une solution existante ?', a: 'Un outil sur mesure s’adapte à vos processus plutôt que l’inverse. Il élimine les contournements et les licences inutiles, et évolue avec votre entreprise.' },
      { q: 'Nos données existantes peuvent-elles être reprises ?', a: 'Oui. Nous planifions la migration de vos données dès la phase de cadrage pour assurer une transition sans rupture.' },
      { q: 'Qui est propriétaire du code ?', a: 'Vous. Le code source et la propriété intellectuelle vous sont transférés à la livraison.' },
    ],
  },
  {
    slug: 'automatisation-workflows',
    title: 'Automatisation & workflows',
    short: 'Supprimez les tâches répétitives et libérez du temps pour ce qui compte.',
    intro:
      'Nous identifions les tâches manuelles qui freinent vos équipes et concevons des automatisations fiables : validation, synchronisation, génération de documents, notifications.',
    icon: Workflow,
    image: '/images/automation.png',
    benefits: [
      'Moins de travail manuel',
      'Moins d’erreurs de saisie',
      'Équipes plus productives',
      'Opérations prêtes à passer à l’échelle',
    ],
    useCases: [
      { title: 'Automatisation de processus', text: 'Approbations, relances et routages exécutés sans intervention.' },
      { title: 'Synchronisation de données', text: 'Vos outils restent alignés automatiquement, sans double saisie.' },
      { title: 'Workflows personnalisés', text: 'Des enchaînements conçus pour vos règles métier.' },
    ],
    faqs: [
      { q: 'Par où commencer l’automatisation ?', a: 'Nous commençons par un audit court de vos processus pour identifier les automatisations au meilleur retour sur investissement.' },
      { q: 'Utilisez-vous l’intelligence artificielle ?', a: 'Quand elle apporte une vraie valeur — classification, extraction de documents, rédaction assistée — oui, toujours avec un contrôle humain sur les décisions sensibles.' },
      { q: 'Que se passe-t-il si une automatisation échoue ?', a: 'Nos workflows sont conçus pour reprendre automatiquement et alerter vos équipes en cas d’anomalie.' },
    ],
  },
  {
    slug: 'integrations-api',
    title: 'Intégrations & API',
    short: 'Connectez vos outils et construisez un écosystème numérique cohérent.',
    intro:
      'Nous connectons vos applications — ERP, CRM, paiement, comptabilité — et développons des API robustes pour que l’information circule là où elle est utile.',
    icon: Plug,
    image: '/images/integrations.png',
    benefits: [
      'Une source de vérité unique',
      'Des API documentées et sécurisées',
      'Des échanges en temps réel',
      'Une architecture évolutive',
    ],
    useCases: [
      { title: 'Connexion ERP / CRM', text: 'Clients, commandes et factures synchronisés entre vos systèmes.' },
      { title: 'Paiements en ligne', text: 'Intégration de passerelles de paiement fiables et conformes.' },
      { title: 'API partenaires', text: 'Ouvrez vos données à vos partenaires en toute sécurité.' },
    ],
    faqs: [
      { q: 'Pouvez-vous intégrer un outil sans API publique ?', a: 'Souvent, oui : via des exports planifiés, des connecteurs dédiés ou des solutions intermédiaires. Nous évaluons la meilleure approche au cas par cas.' },
      { q: 'Comment garantissez-vous la sécurité des échanges ?', a: 'Authentification forte, chiffrement, gestion des secrets et journalisation font partie de chaque intégration.' },
      { q: 'Documentez-vous les API développées ?', a: 'Systématiquement, avec une documentation interactive pour vos développeurs et partenaires.' },
    ],
  },
  {
    slug: 'cloud-infrastructure',
    title: 'Cloud & infrastructure',
    short: 'Une infrastructure fiable, sécurisée et dimensionnée pour votre croissance.',
    intro:
      'Nous déployons et opérons vos applications sur des infrastructures cloud modernes : haute disponibilité, déploiements continus, supervision et maîtrise des coûts.',
    icon: Cloud,
    image: '/images/office-building.png',
    benefits: [
      'Déploiements continus et sans interruption',
      'Haute disponibilité et sauvegardes',
      'Supervision et alertes proactives',
      'Coûts d’infrastructure maîtrisés',
    ],
    useCases: [
      { title: 'Migration vers le cloud', text: 'Déplacez vos applications existantes sans interruption de service.' },
      { title: 'CI/CD', text: 'Chaque modification testée et déployée automatiquement.' },
      { title: 'Observabilité', text: 'Logs, métriques et alertes pour anticiper les incidents.' },
    ],
    faqs: [
      { q: 'Quel fournisseur cloud recommandez-vous ?', a: 'Celui qui correspond à vos contraintes de coûts, de conformité et de localisation des données. Nous restons indépendants des fournisseurs.' },
      { q: 'Pouvez-vous reprendre une infrastructure existante ?', a: 'Oui. Nous commençons par un audit pour sécuriser et optimiser l’existant avant toute évolution.' },
      { q: 'Proposez-vous une astreinte ?', a: 'Selon vos besoins, nous proposons une supervision continue avec des engagements de temps de réponse.' },
    ],
  },
  {
    slug: 'design-produit',
    title: 'Design produit UI/UX',
    short: 'Des interfaces claires, désirables et pensées pour vos utilisateurs.',
    intro:
      'Recherche utilisateur, prototypage et design system : nous concevons des expériences qui rendent vos produits évidents à utiliser.',
    icon: PenTool,
    image: '/images/team.png',
    benefits: [
      'Parcours utilisateurs validés par des tests',
      'Prototypes interactifs avant développement',
      'Design system documenté et réutilisable',
      'Cohérence visuelle sur tous les supports',
    ],
    useCases: [
      { title: 'Refonte d’interface', text: 'Modernisez un produit existant sans perdre vos utilisateurs.' },
      { title: 'Nouveau produit', text: 'Du concept au prototype testé en quelques semaines.' },
      { title: 'Design system', text: 'Une bibliothèque de composants partagée par designers et développeurs.' },
    ],
    faqs: [
      { q: 'Travaillez-vous avec notre charte graphique existante ?', a: 'Bien sûr. Nous la prolongeons dans un design system numérique complet et cohérent.' },
      { q: 'Testez-vous les maquettes avec de vrais utilisateurs ?', a: 'Oui, des sessions de tests courtes permettent de valider les choix avant d’investir dans le développement.' },
      { q: 'Livrez-vous les fichiers sources ?', a: 'Oui, tous les fichiers de design et la documentation du design system vous sont remis.' },
    ],
  },
]

export const pillars = [
  { title: 'Stratégie d’abord', text: 'Une approche structurée pour chaque projet, alignée sur vos objectifs.' },
  { title: 'Conçu pour l’impact', text: 'Des solutions pensées pour produire des résultats mesurables.' },
  { title: 'Partenaire long terme', text: 'Nous accompagnons votre croissance bien après la mise en ligne.' },
]

export const processSteps = [
  { title: 'Comprendre', text: 'Nous écoutons, observons et clarifions vos objectifs et vos contraintes.' },
  { title: 'Planifier', text: 'Nous définissons la bonne solution, la feuille de route et les priorités.' },
  { title: 'Construire', text: 'Nous concevons et développons par itérations, avec qualité et évolutivité.' },
  { title: 'Lancer', text: 'Nous testons, affinons et déployons en production en toute sérénité.' },
  { title: 'Faire grandir', text: 'Nous assurons le suivi, l’optimisation et les évolutions continues.' },
]

export type TeamMember = {
  name: string
  role: string
  bio: string
  image: string
}

export const team: TeamMember[] = [
  {
    name: 'Prénom Nom',
    role: 'Fondateur & Directeur technique',
    bio: 'Pilote la vision produit et l’architecture technique de chaque projet, de la stratégie à la mise en production.',
    image: '/images/team.png',
  },
  {
    name: 'Prénom Nom',
    role: 'Cheffe de projet',
    bio: 'Coordonne les équipes et les clients pour livrer chaque projet dans les délais, avec clarté à chaque étape.',
    image: '/images/team.png',
  },
  {
    name: 'Prénom Nom',
    role: 'Ingénieur logiciel',
    bio: 'Conçoit et développe des applications robustes, performantes et prêtes à évoluer avec votre activité.',
    image: '/images/team.png',
  },
  {
    name: 'Prénom Nom',
    role: 'Designer UI/UX',
    bio: 'Transforme les besoins utilisateurs en interfaces claires, cohérentes et agréables à utiliser.',
    image: '/images/team.png',
  },
  {
    name: 'Prénom Nom',
    role: 'Experte cloud & infrastructure',
    bio: 'Déploie et supervise des infrastructures fiables, sécurisées et dimensionnées pour la croissance.',
    image: '/images/team.png',
  },
]

export const stats = [
  { value: '2026', label: 'Année de création' },
  { value: '100+', label: 'Projets livrés' },
  { value: '30+', label: 'Clients accompagnés' },
  { value: '4.9/5', label: 'Satisfaction client' },
]

export type Solution = {
  title: string
  text: string
  category: 'Secteurs' | 'Défis métier' | 'Technologies'
  image: string
  service: string
}

export type Project = {
  name: string
  url: string
  domain: string
  type: string
  sector: string
  summary: string
  highlights: string[]
  scope: string[]
  image: string
}

export const projects: Project[] = [
  {
    name: 'StartEntreprise',
    url: 'https://startentreprise.ma',
    domain: 'startentreprise.ma',
    type: 'Produit SaaS · ERP',
    sector: 'Gestion d’entreprise',
    summary:
      'Une plateforme de gestion pensée pour les entreprises marocaines : facturation, paiements, comptabilité, échéancier fiscal & social et collaboration avec le cabinet comptable, dans un seul espace.',
    highlights: ['Plan comptable marocain (CGNC)', 'Espace partagé entreprise / cabinet', 'Accès par rôle et sessions serveur'],
    scope: ['Produit SaaS', 'Logiciel métier', 'Sécurité & Keycloak', 'Tableaux de bord'],
    image: '/images/projects/startentreprise.png',
  },
  {
    name: 'NESEL',
    url: 'https://ne-sel.com',
    domain: 'ne-sel.com',
    type: 'Site corporate',
    sector: 'Domiciliation d’entreprise',
    summary:
      'Le site de NESEL, spécialiste de la domiciliation d’entreprise à Marrakech et Casablanca : présentation des services, formules Silver, Golden et Diamond et parcours de souscription accompagné.',
    highlights: ['Trois formules présentées clairement', 'Parcours client en 4 étapes', 'Demandes de devis centralisées'],
    scope: ['Site vitrine', 'UX & contenu', 'SEO local', 'Formulaire de devis'],
    image: '/images/projects/nesel.png',
  },
  {
    name: 'Bluebonnet',
    url: 'https://bluebonnetmaroc.com',
    domain: 'bluebonnetmaroc.com',
    type: 'E-commerce',
    sector: 'Arts de la table',
    summary:
      'Une boutique en ligne raffinée pour une marque marocaine d’arts de la table : vaisselle, verrerie, linge et accessoires, avec une identité élégante inspirée de la nature.',
    highlights: ['Univers produits structurés', 'Direction artistique soignée', 'Livraison partout au Maroc'],
    scope: ['E-commerce', 'Design de marque', 'Catalogue produits', 'Responsive'],
    image: '/images/projects/bluebonnet.png',
  },
  {
    name: 'MCCG',
    url: 'https://mccg.com',
    domain: 'mccg.com',
    type: 'Site corporate',
    sector: 'Conseil & services',
    summary:
      'Une présence en ligne professionnelle pour MCCG : présentation de l’entreprise, de ses expertises et de ses services, avec un design moderne et une prise de contact simplifiée.',
    highlights: ['Image de marque modernisée', 'Présentation claire des expertises', 'Prise de contact simplifiée'],
    scope: ['Site vitrine', 'UI/UX', 'Responsive', 'Performance'],
    image: '/images/projects/mccg.png',
  },
]

export const solutionCategories = ['Toutes', 'Secteurs', 'Défis métier', 'Technologies'] as const

export const solutions: Solution[] = [
  { title: 'E-commerce', text: 'Des boutiques en ligne évolutives pour les marques en croissance.', category: 'Secteurs', image: '/images/product-laptop.png', service: 'sites-applications-web' },
  { title: 'Opérations internes', text: 'Des systèmes sur mesure pour fluidifier vos processus clés.', category: 'Défis métier', image: '/images/meeting.png', service: 'logiciels-metier' },
  { title: 'Portails clients', text: 'Des espaces sécurisés et personnalisés pour vos clients et partenaires.', category: 'Secteurs', image: '/images/team.png', service: 'sites-applications-web' },
  { title: 'Données & intégrations', text: 'Connectez vos systèmes et exploitez des données fiables.', category: 'Technologies', image: '/images/integrations.png', service: 'integrations-api' },
  { title: 'Automatisation des workflows', text: 'Réduisez le travail manuel et gagnez en efficacité.', category: 'Défis métier', image: '/images/automation.png', service: 'automatisation-workflows' },
  { title: 'Infrastructure cloud', text: 'Des plateformes fiables, supervisées et prêtes à grandir.', category: 'Technologies', image: '/images/office-building.png', service: 'cloud-infrastructure' },
]

export const values = [
  { title: 'Clarté', text: 'Nous parlons simplement, documentons tout et rendons chaque décision compréhensible.' },
  { title: 'Exigence', text: 'Qualité du code, sécurité et performance ne sont jamais des options.' },
  { title: 'Proximité', text: 'Une équipe dédiée, disponible, qui connaît votre métier.' },
  { title: 'Impact', text: 'Nous mesurons notre réussite à vos résultats, pas au nombre de fonctionnalités.' },
]

export type Post = {
  slug: string
  title: string
  excerpt: string
  category: 'Technologie' | 'Croissance' | 'Automatisation' | 'Industrie'
  date: string
  readTime: string
  image: string
  body: string[]
}

export const postCategories = ['Tous', 'Technologie', 'Croissance', 'Automatisation', 'Industrie'] as const

export const posts: Post[] = [
  {
    slug: 'construire-un-site-qui-genere-de-la-croissance',
    title: 'Construire un site web qui génère réellement de la croissance',
    excerpt: 'Performance, clarté du message et parcours de conversion : les trois piliers d’un site qui travaille pour vous.',
    category: 'Croissance',
    date: '2026-09-12',
    readTime: '6 min',
    image: '/images/office-building.png',
    body: [
      'Un site web n’est pas une brochure : c’est votre commercial le plus disponible. Pour qu’il génère de la croissance, il doit répondre en quelques secondes à trois questions — que faites-vous, pour qui, et quelle est la prochaine étape.',
      'La performance est le premier levier. Chaque seconde de chargement supplémentaire réduit la conversion. Un rendu côté serveur, des images optimisées et un hébergement en périphérie font une différence immédiate.',
      'Le second levier est la clarté. Un message centré sur les résultats de vos clients, appuyé par des preuves concrètes, convainc davantage qu’une liste de fonctionnalités.',
      'Enfin, chaque page doit proposer une action évidente. Un parcours de conversion simple, mesuré et amélioré en continu transforme vos visiteurs en opportunités.',
    ],
  },
  {
    slug: 'cinq-automatisations-pour-votre-entreprise',
    title: '5 automatisations qui transforment votre entreprise',
    excerpt: 'Relances, validations, synchronisation : ces automatisations simples libèrent des heures chaque semaine.',
    category: 'Automatisation',
    date: '2026-08-28',
    readTime: '5 min',
    image: '/images/automation.png',
    body: [
      'L’automatisation n’est pas réservée aux grandes entreprises. Quelques workflows bien choisis suffisent souvent à libérer plusieurs heures par semaine et par collaborateur.',
      'Les relances de factures, la validation des demandes internes, la synchronisation entre CRM et outil de facturation, la génération de documents et les notifications d’équipe figurent parmi les plus rentables.',
      'La clé : commencer petit, mesurer le temps gagné, puis étendre progressivement. Une automatisation fiable vaut mieux qu’un système complexe que personne ne maîtrise.',
    ],
  },
  {
    slug: 'guide-integration-systemes',
    title: 'Guide pratique de l’intégration de systèmes pour les équipes en croissance',
    excerpt: 'Comment connecter vos outils sans créer une usine à gaz : principes, pièges et bonnes pratiques.',
    category: 'Technologie',
    date: '2026-07-16',
    readTime: '8 min',
    image: '/images/integrations.png',
    body: [
      'À mesure qu’une entreprise grandit, ses outils se multiplient. Sans intégration, l’information se fragmente et les équipes passent leur temps à ressaisir des données.',
      'Le premier principe est de définir une source de vérité pour chaque donnée : le client vit dans le CRM, la facture dans la comptabilité. Les autres systèmes se synchronisent à partir de là.',
      'Privilégiez des échanges événementiels (webhooks) plutôt que des synchronisations massives, documentez chaque flux et surveillez les erreurs dès le premier jour.',
    ],
  },
  {
    slug: 'ia-dans-les-operations',
    title: 'Le rôle de l’IA dans les opérations modernes',
    excerpt: 'Extraction de documents, tri intelligent, assistance : là où l’IA apporte une valeur concrète aujourd’hui.',
    category: 'Technologie',
    date: '2026-06-03',
    readTime: '7 min',
    image: '/images/product-laptop.png',
    body: [
      'L’intelligence artificielle générative a quitté le stade de la démonstration. Dans les opérations, elle excelle pour lire, classer et résumer de grands volumes d’information.',
      'Les cas d’usage les plus solides combinent l’IA avec un contrôle humain : l’IA prépare, l’humain valide. Cette approche réduit le risque tout en accélérant considérablement le travail.',
      'Avant de déployer, définissez des indicateurs clairs — temps de traitement, taux d’erreur — pour mesurer l’impact réel.',
    ],
  },
  {
    slug: 'choisir-son-partenaire-technologique',
    title: 'Comment choisir le bon partenaire technologique',
    excerpt: 'Méthode, transparence, propriété du code : les critères qui comptent vraiment.',
    category: 'Croissance',
    date: '2026-05-19',
    readTime: '4 min',
    image: '/images/meeting.png',
    body: [
      'Choisir un partenaire technologique, c’est choisir une équipe avec qui vous allez construire pendant des années. Le prix ne doit être qu’un critère parmi d’autres.',
      'Interrogez la méthode : comment le partenaire cadre-t-il un projet, comment communique-t-il, comment gère-t-il les imprévus ? Demandez des exemples concrets.',
      'Vérifiez enfin la propriété du code et de la documentation. Vous devez rester libre de vos choix à tout moment.',
    ],
  },
  {
    slug: 'transformation-numerique-lecons',
    title: 'Transformation numérique : les leçons de projets réels',
    excerpt: 'Ce que nous avons appris en accompagnant des dizaines d’entreprises dans leur transformation.',
    category: 'Industrie',
    date: '2026-04-22',
    readTime: '6 min',
    image: '/images/team.png',
    body: [
      'Les projets de transformation qui réussissent ont un point commun : ils partent d’un problème métier précis, pas d’une technologie à la mode.',
      'Impliquer les utilisateurs finaux dès le départ, livrer par petites étapes et célébrer les premiers résultats crée l’adhésion nécessaire au changement.',
      'La technologie est rarement le facteur limitant. L’accompagnement des équipes, lui, fait toute la différence.',
    ],
  },
]

export const highlights = [
  { icon: ChartColumn, label: 'Croissance mesurable' },
  { icon: Workflow, label: 'Automatisation' },
  { icon: Cloud, label: 'Cloud' },
]

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso))
}
