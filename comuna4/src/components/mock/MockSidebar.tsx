'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MockRoleSwitcher, useMockRole, type MockRole } from './MockRoleSwitcher'

type NavItem = {
  href: string
  label: string
  roles: MockRole[]
}

const navItems: NavItem[] = [
  { href: '/dashboard',  label: 'Dashboard',  roles: ['collaborator', 'supplier', 'client'] },
  { href: '/calendario', label: 'Calendario', roles: ['collaborator', 'supplier', 'client'] },
  { href: '/proyectos',  label: 'Proyectos',  roles: ['collaborator', 'supplier', 'client'] },
  { href: '/kpis',       label: 'KPIs',       roles: ['collaborator', 'client'] },
  { href: '/recursos',   label: 'Recursos',   roles: ['collaborator', 'supplier'] },
]

export function MockSidebar({ children }: { children: React.ReactNode }) {
  const { role, changeRole } = useMockRole()
  const pathname = usePathname()

  const visibleItems = navItems.filter((item) => item.roles.includes(role))

  const isActive = (href: string) => pathname.startsWith(href)

  return (
    <div className="flex min-h-screen">
      <aside className="w-56 shrink-0 bg-neutral-900 text-white flex flex-col px-4 py-6 border-r border-dashed border-neutral-700">
        <div className="mb-6 space-y-1">
          <Link
            href="/"
            className="block font-mono text-xs tracking-widest text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            ← Sitio público
          </Link>
          <p className="font-mono text-sm tracking-widest text-white font-black">[C4] Interno</p>
        </div>

        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Navegación</p>
        <nav className="flex flex-col gap-1 flex-1">
          {visibleItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                'text-sm px-2 py-1.5 rounded transition-colors',
                isActive(item.href)
                  ? 'bg-neutral-700 text-white font-medium'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800',
              ].join(' ')}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <MockRoleSwitcher currentRole={role} onRoleChange={changeRole} />
      </aside>

      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
