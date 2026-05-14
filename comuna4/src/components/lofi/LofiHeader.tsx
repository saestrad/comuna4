'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/lofi/nosotros', label: 'Nosotros' },
  { href: '/lofi/trabajos', label: 'Trabajos' },
  { href: '/lofi/servicios', label: 'Servicios' },
  { href: '/lofi/renta', label: 'Renta' },
  { href: '/lofi/blog', label: 'Blog' },
]

export function LofiHeader() {
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/lofi' ? pathname === '/lofi' : pathname.startsWith(href)

  return (
    <header className="border-b border-neutral-200 bg-white px-6 py-4 flex items-center gap-6">
      <Link
        href="/lofi"
        className="font-mono font-black text-base tracking-widest shrink-0 text-c4-brand"
      >
        [C4]
      </Link>

      <nav className="flex items-center gap-1 flex-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={[
              'text-sm px-3 py-1.5 rounded transition-colors',
              isActive(link.href)
                ? 'text-neutral-900 font-medium'
                : 'text-neutral-500 hover:text-neutral-900',
            ].join(' ')}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4 shrink-0">
        <Link
          href="/lofi/solicitud"
          className="text-sm font-medium px-5 py-2 rounded bg-neutral-900 text-white hover:bg-neutral-700 transition-colors"
        >
          Solicitar →
        </Link>
        <Link
          href="/lofi/nosotros"
          className="text-xs text-neutral-500 hover:text-neutral-700 transition-colors"
        >
          Nosotros
        </Link>
      </div>
    </header>
  )
}
