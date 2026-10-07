import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { PostCard } from '@/components/site/post-card'
import { CtaBanner } from '@/components/site/cta-banner'
import { formatDate, posts } from '@/lib/site-data'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt, openGraph: { type: 'article', publishedTime: post.date } }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = posts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <section className="bg-navy pt-18 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-5 pt-16 pb-28 lg:px-8">
          <nav aria-label="Fil d'Ariane">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-primary-foreground/60">
              <li>
                <Link href="/" className="hover:text-cyan-glow">Accueil</Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="size-3.5" aria-hidden="true" />
                <Link href="/insights" className="hover:text-cyan-glow">Insights</Link>
              </li>
            </ol>
          </nav>
          <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-cyan uppercase">{post.category}</p>
          <h1 className="mt-4 text-4xl leading-tight font-bold tracking-tight text-balance md:text-5xl">{post.title}</h1>
          <p className="mt-6 text-sm text-primary-foreground/60">
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime} de lecture · Équipe Open Futur
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="relative -mt-16 aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl shadow-navy/20">
          <Image src={post.image} alt="" fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-col gap-6 py-14 text-lg leading-relaxed text-foreground/85">
          <p className="text-xl leading-relaxed font-medium text-foreground">{post.excerpt}</p>
          {post.body.map((para) => (
            <p key={para.slice(0, 32)}>{para}</p>
          ))}
        </div>
        <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent-foreground">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Retour aux articles
        </Link>
      </article>

      <section aria-labelledby="related-title" className="mx-auto max-w-7xl px-5 pt-24 lg:px-8">
        <h2 id="related-title" className="text-2xl font-bold tracking-tight">À lire aussi</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
