'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/lofi', label: 'Inicio' },
  { href: '/lofi/trabajos', label: 'Trabajos' },
  { href: '/lofi/servicios', label: 'Servicios' },
  { href: '/lofi/renta', label: 'Renta' },
  { href: '/lofi/nosotros', label: 'Nosotros' },
  { href: '/lofi/blog', label: 'Blog' },
]

const MENU_W_MAX = 380

export function LofiShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [menuW, setMenuW] = useState(MENU_W_MAX)

  useEffect(() => {
    const update = () => setMenuW(Math.min(MENU_W_MAX, window.innerWidth - 40))
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (href: string) =>
    href === '/lofi' ? pathname === '/lofi' : pathname.startsWith(href)

  return (
    <div className="overflow-x-clip">

      {/* ── Header fijo — nunca se mueve ── */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 h-[60px] flex items-center justify-between bg-white/95 backdrop-blur-sm border-b border-neutral-100">
        <Link href="/lofi" className="font-mono font-black text-base tracking-widest text-neutral-900">
          [C4]
        </Link>

        <AnimatePresence mode="wait">
          {open ? (
            <motion.button
              key="close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-1.5"
            >
              Cerrar <X size={18} aria-hidden />
            </motion.button>
          ) : (
            <motion.button
              key="open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <span>Menú</span>
              <Menu size={18} aria-hidden />
            </motion.button>
          )}
        </AnimatePresence>
      </header>

      {/* ── Contenido de la página — se desplaza a la izquierda ── */}
      <motion.div
        animate={{
          x: open ? -menuW : 0,
          borderRadius: open ? 20 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 35 }}
        style={{ overflow: open ? 'hidden' : 'visible' }}
      >
        {children}
      </motion.div>

      {/* ── Backdrop invisible para cerrar con click/tap fuera del panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30"
            onClick={() => setOpen(false)}
            aria-hidden
          />
        )}
      </AnimatePresence>

      {/* ── Panel del menú — entra desde la derecha ── */}
      <motion.div
        aria-hidden={!open}
        initial={false}
        animate={{ x: open ? 0 : menuW }}
        transition={{ type: 'spring', stiffness: 300, damping: 35 }}
        className="fixed top-0 right-0 h-full z-40 bg-white flex flex-col"
        style={{ width: `${menuW}px` }}
      >
        {/* Links */}
        <nav className="flex flex-col px-10 pt-[80px] pb-10 gap-0.5 flex-1 overflow-y-auto">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={false}
              animate={{ opacity: open ? 1 : 0, x: open ? 0 : 16 }}
              transition={{ delay: open ? i * 0.04 : 0, duration: 0.25, ease: 'easeOut' }}
            >
              <Link
                href={link.href}
                className={[
                  'text-3xl font-display font-semibold tracking-tight py-2 transition-colors block',
                  isActive(link.href)
                    ? 'text-neutral-900'
                    : 'text-neutral-300 hover:text-neutral-700',
                ].join(' ')}
              >
                {link.label}
              </Link>
            </motion.div>
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
      </motion.div>
    </div>
  )
}
