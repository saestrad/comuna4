'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/lofi/nosotros', label: 'Nosotros' },
  { href: '/lofi/trabajos', label: 'Trabajos' },
  { href: '/lofi/servicios', label: 'Servicios' },
  { href: '/lofi/renta', label: 'Renta' },
  { href: '/lofi/blog', label: 'Blog' },
]

export function LofiHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/lofi' ? pathname === '/lofi' : pathname.startsWith(href)

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white px-6 md:px-12 py-4 flex items-center justify-between relative">
        <Link
          href="/lofi"
          className="font-mono font-black text-base tracking-widest shrink-0 text-c4-brand"
        >
          [C4]
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navegación principal" className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                'text-sm px-3 py-3 rounded-full transition-colors',
                isActive(link.href)
                  ? 'text-neutral-900 font-medium'
                  : 'text-neutral-500 hover:text-neutral-900',
              ].join(' ')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/lofi/solicitud"
          className="hidden md:inline-block text-sm font-medium px-5 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-700 transition-colors shrink-0"
        >
          Solicitar →
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-full hover:bg-neutral-100 transition-colors"
        >
          <span className={['block w-5 h-px bg-neutral-900 transition-transform duration-200', open ? 'translate-y-[7px] rotate-45' : ''].join(' ')} />
          <span className={['block w-5 h-px bg-neutral-900 transition-opacity duration-200', open ? 'opacity-0' : ''].join(' ')} />
          <span className={['block w-5 h-px bg-neutral-900 transition-transform duration-200', open ? '-translate-y-[7px] -rotate-45' : ''].join(' ')} />
        </button>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 top-[57px] z-40 bg-white border-t border-neutral-200 flex flex-col px-6 py-8 gap-1">
          <nav aria-label="Navegación móvil" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={[
                  'text-base px-4 py-3 rounded-full transition-colors',
                  isActive(link.href)
                    ? 'text-neutral-900 font-medium bg-neutral-100'
                    : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50',
                ].join(' ')}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-8">
            <Link
              href="/lofi/solicitud"
              onClick={() => setOpen(false)}
              className="block text-center text-sm font-medium px-5 py-3.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-700 transition-colors"
            >
              Solicitar →
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
