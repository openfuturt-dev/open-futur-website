import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/lib/site-data'
import type { PublicPost } from '@/lib/posts'

export function PostCard({ post }: { post: PublicPost }) {
  return (
    <article className="group flex flex-col">
      <Link href={`/insights/${post.slug}`} className="flex flex-col gap-4">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-accent-foreground backdrop-blur">
            {post.category}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg leading-snug font-bold text-balance group-hover:text-primary">{post.title}</h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <p className="text-xs text-muted-foreground">
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime} de lecture
          </p>
        </div>
      </Link>
    </article>
  )
}
