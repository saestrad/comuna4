'use client'

import { useEffect, useState } from 'react'

const sections = [
  { id: 'reto', label: 'El reto' },
  { id: 'proceso', label: 'Proceso' },
  { id: 'resultado', label: 'Resultado' },
]

export function CaseSidebarNav() {
  const [activeId, setActiveId] = useState('reto')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col gap-5">
      {sections.map(({ id, label }) => {
        const isActive = activeId === id
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div
              className={[
                'rounded-full shrink-0 transition-all duration-200',
                isActive
                  ? 'w-2 h-2 bg-neutral-900'
                  : 'w-1.5 h-1.5 bg-neutral-300 group-hover:bg-neutral-500',
              ].join(' ')}
            />
            <span
              className={[
                'text-xs transition-colors duration-200',
                isActive
                  ? 'font-medium text-neutral-900'
                  : 'text-neutral-400 group-hover:text-neutral-700',
              ].join(' ')}
            >
              {label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
