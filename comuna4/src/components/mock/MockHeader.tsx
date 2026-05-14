'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/mock/nosotros', label: 'Nosotros' },
  { href: '/mock/trabajos', label: 'Trabajos' },
  { href: '/mock/servicios', label: 'Servicios' },
  { href: '/mock/renta', label: 'Renta' },
  { href: '/mock/blog', label: 'Blog' },
]

export function MockHeader() {
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/mock' ? pathname === '/mock' : pathname.startsWith(href)

  return (
    <header className="border-b border-dashed border-neutral-300 bg-neutral-50 px-6 py-4 flex items-center gap-6">
      <Link href="/mock" className="font-mono font-black text-base tracking-widest shrink-0 text-c4-brand">
        [C4]
      </Link>

      <nav className="flex items-center gap-1 flex-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={[
              'text-sm px-3 py-1 rounded transition-colors',
              isActive(link.href)
                ? 'text-neutral-900 bg-neutral-200 font-medium'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200',
            ].join(' ')}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3 shrink-0">
        <Link
          href="/mock/solicitud"
          className={[
            'text-sm font-medium px-4 py-1.5 rounded transition-colors border',
            isActive('/solicitud')
              ? 'bg-neutral-900 text-white border-neutral-900 ring-2 ring-neutral-900 ring-offset-1'
              : 'bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-700',
          ].join(' ')}
        >
          Solicitar →
        </Link>
        <Link
          href="/mock/nosotros"
          className="text-xs font-mono text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          Nosotros
        </Link>
        <Link
          href="/mock/login"
          className="text-xs font-mono text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          Área interna
        </Link>
      </div>
    </header>
  )
}
