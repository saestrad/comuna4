'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState, useEffect } from 'react'

const navLinks = [
  { href: '/lofi/nosotros', label: 'Nosotros' },
  { href: '/lofi/trabajos', label: 'Trabajos' },
  { href: '/lofi/servicios', label: 'Servicios' },
  { href: '/lofi/renta', label: 'Renta' },
  { href: '/lofi/blog', label: 'Blog' },
]

export function LofiPillNav() {
  const pathname = usePathname()
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  const activeIndex = navLinks.findIndex((l) =>
    l.href === '/lofi' ? pathname === '/lofi' : pathname.startsWith(l.href)
  )

  useEffect(() => {
    const el = linkRefs.current[activeIndex]
    if (!el) return
    setIndicator({ left: el.offsetLeft, width: el.offsetWidth })
  }, [activeIndex, pathname])

  return (
    <div className="relative hidden md:flex items-center bg-neutral-900 rounded-full p-1">
      {/* sliding indicator */}
      {indicator.width > 0 && (
        <div
          className="absolute top-1 bottom-1 bg-white rounded-full transition-all duration-300 ease-out"
          style={{ left: indicator.left, width: indicator.width }}
        />
      )}

      {navLinks.map((link, i) => (
        <Link
          key={link.href}
          href={link.href}
          ref={(el) => { linkRefs.current[i] = el }}
          className={[
            'relative z-10 text-xs px-4 py-1.5 rounded-full transition-colors duration-200 select-none',
            i === activeIndex
              ? 'text-neutral-900 font-medium'
              : 'text-neutral-400 hover:text-neutral-200',
          ].join(' ')}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
