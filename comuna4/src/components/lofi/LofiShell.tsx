'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { href: '/lofi', label: 'Inicio' },
  { href: '/lofi/trabajos', label: 'Trabajos' },
  { href: '/lofi/servicios', label: 'Servicios' },
  { href: '/lofi/renta', label: 'Renta' },
  { href: '/lofi/nosotros', label: 'Nosotros' },
  { href: '/lofi/blog', label: 'Blog' },
]

const MENU_W = 380

export function LofiShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (href: string) =>
    href === '/lofi' ? pathname === '/lofi' : pathname.startsWith(href)

  return (
    <div className="overflow-x-hidden">

      {/* ── Header fijo — nunca se mueve ── */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between">
        <Link href="/lofi" className="font-mono font-black text-base tracking-widest text-c4-brand">
          [C4]
        </Link>

        {open ? (
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-1.5"
          >
            Cerrar <X size={18} aria-hidden />
          </button>
        ) : (
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <span>Menú</span>
            <Menu size={18} aria-hidden />
          </button>
        )}
      </header>

      {/* ── Contenido de la página — se desplaza a la izquierda ── */}
      <div
        className="relative transition-all duration-300 ease-in-out"
        style={{
          transform: open ? `translateX(-${MENU_W}px)` : 'translateX(0)',
          borderRadius: open ? '20px' : '0',
          overflow: open ? 'hidden' : 'visible',
        }}
      >
        {children}
      </div>

      {/* ── Backdrop invisible para cerrar con click/tap fuera del panel ── */}
      {open && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {/* ── Panel del menú — entra desde la derecha ── */}
      <div
        aria-hidden={!open}
        className="fixed top-0 right-0 h-full z-40 bg-white flex flex-col transition-transform duration-300 ease-in-out"
        style={{
          width: `${MENU_W}px`,
          transform: open ? 'translateX(0)' : `translateX(${MENU_W}px)`,
        }}
      >
        {/* Links */}
        <nav className="flex flex-col px-10 pt-[80px] pb-10 gap-0.5 flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
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
        <div className="px-10 py-8 border-t border-neutral-100">
          <Link
            href="/lofi/solicitud"
            className="flex items-center justify-center gap-2 text-sm font-medium px-5 py-3.5 rounded-full bg-accent text-accent-foreground hover:opacity-90 transition-colors mb-5"
          >
            Solicitar <ArrowRight size={14} className="shrink-0" />
          </Link>
          <p className="text-xs text-neutral-400 font-mono">info@comuna4.com</p>
        </div>
      </div>
    </div>
  )
}
