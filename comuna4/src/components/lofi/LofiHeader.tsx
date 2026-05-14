'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/lofi', label: 'Inicio' },
  { href: '/lofi/trabajos', label: 'Trabajos' },
  { href: '/lofi/servicios', label: 'Servicios' },
  { href: '/lofi/renta', label: 'Renta' },
  { href: '/lofi/nosotros', label: 'Nosotros' },
  { href: '/lofi/blog', label: 'Blog' },
]

export function LofiHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActive = (href: string) =>
    href === '/lofi' ? pathname === '/lofi' : pathname.startsWith(href)

  const close = () => setOpen(false)

  return (
    <>
      {/* Barra mínima */}
      <header className="sticky top-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between bg-white border-b border-neutral-200">
        <Link href="/lofi" className="font-mono font-black text-base tracking-widest text-c4-brand">
          [C4]
        </Link>
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          <span>Menú</span>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
            <rect y="0" width="18" height="1.5" rx="0.75" fill="currentColor" />
            <rect y="5.25" width="18" height="1.5" rx="0.75" fill="currentColor" />
            <rect y="10.5" width="18" height="1.5" rx="0.75" fill="currentColor" />
          </svg>
        </button>
      </header>

      {/* Overlay */}
      {open && (
      <div className="fixed inset-0 z-[100] flex">
        {/* Panel izquierdo — placeholder + texto hero (solo desktop) */}
        <div
          className="hidden md:flex flex-col justify-end p-12 flex-1"
          style={{
            backgroundColor: 'var(--c4-surface-variant)',
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cline x1='0' y1='0' x2='100%25' y2='100%25' stroke='%23e5e5e5' stroke-width='0.75'/%3E%3Cline x1='100%25' y1='0' x2='0' y2='100%25' stroke='%23e5e5e5' stroke-width='0.75'/%3E%3C/svg%3E\")",
          }}
        >
          <p className="font-mono font-black text-xl tracking-widest text-neutral-400 mb-8">[C4]</p>
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
            Agencia creativa — Puerto Rico
          </p>
          <h2 className="text-4xl font-display font-semibold text-neutral-500 tracking-tight leading-none max-w-[12ch]">
            Tu marca, construida para durar.
          </h2>
        </div>

        {/* Panel derecho — nav */}
        <div className="w-full md:w-[380px] bg-white flex flex-col shadow-xl">

          {/* Header del panel */}
          <div className="flex items-center justify-between px-8 py-5 border-b border-neutral-100">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Menú</span>
            <button
              onClick={close}
              aria-label="Cerrar menú"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1.5"
            >
              Cerrar <span aria-hidden className="text-base leading-none">×</span>
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col px-8 py-8 gap-1 flex-1 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={[
                  'text-3xl font-display font-semibold tracking-tight py-2 transition-colors',
                  isActive(link.href)
                    ? 'text-neutral-900'
                    : 'text-neutral-300 hover:text-neutral-700',
                ].join(' ')}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Pie */}
          <div className="px-8 py-8 border-t border-neutral-100">
            <Link
              href="/lofi/solicitud"
              onClick={close}
              className="block text-center text-sm font-medium px-5 py-3.5 rounded-full bg-accent text-accent-foreground hover:opacity-90 transition-colors mb-5"
            >
              Solicitar →
            </Link>
            <p className="text-xs text-neutral-400 font-mono">info@comuna4.com</p>
          </div>
        </div>
      </div>
      )}
    </>
  )
}
