import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type LogoProps = {
  tone?: 'light' | 'dark'
  className?: string
}

export function Logo({ tone = 'light', className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Open Futur — accueil"
      className={cn('inline-flex items-center gap-2.5 rounded-md', className)}
    >
      <Image
        src="/brand/social-profile.png"
        alt=""
        width={36}
        height={36}
        className="size-9 rounded-lg ring-1 ring-cyan/20"
        priority
      />
      <span
        className={cn(
          'text-lg font-bold tracking-tight',
          tone === 'light' ? 'text-primary-foreground' : 'text-foreground',
        )}
      >
        Open <span className={tone === 'light' ? 'text-cyan-glow' : 'text-teal'}>Futur</span>
      </span>
    </Link>
  )
}
