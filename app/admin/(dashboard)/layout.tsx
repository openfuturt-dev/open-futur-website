import Link from 'next/link'
import { LayoutDashboard, FileText, Tag, LogOut } from 'lucide-react'
import { getSession } from '@/lib/auth'
import { logout } from '@/app/admin/actions'
import { Logo } from '@/components/brand/logo'

const navItems = [
  { href: '/admin', label: 'Tableau de bord', icon: LayoutDashboard },
  { href: '/admin/articles', label: 'Articles', icon: FileText },
  { href: '/admin/categories', label: 'Catégories', icon: Tag },
]

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()

  return (
    <div className="flex min-h-screen bg-muted">
      <aside className="flex w-64 shrink-0 flex-col bg-navy text-primary-foreground">
        <div className="px-6 py-6">
          <Logo />
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-3">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-primary-foreground/75 transition-colors hover:bg-primary-foreground/5 hover:text-primary-foreground"
              >
                <Icon className="size-4.5" aria-hidden="true" />
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="border-t border-primary-foreground/10 p-4">
          <p className="truncate text-sm font-semibold text-primary-foreground">{session?.name}</p>
          <p className="truncate text-xs text-primary-foreground/50">{session?.email}</p>
          <form action={logout} className="mt-3">
            <button
              type="submit"
              className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-medium text-primary-foreground/70 transition-colors hover:bg-primary-foreground/5 hover:text-primary-foreground"
            >
              <LogOut className="size-4" aria-hidden="true" />
              Déconnexion
            </button>
          </form>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl px-8 py-10">{children}</div>
      </main>
    </div>
  )
}
