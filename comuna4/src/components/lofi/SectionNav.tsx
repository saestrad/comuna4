'use client'

import { useEffect, useState } from 'react'

type Section = { id: string; label: string }

const defaultSections: Section[] = [
  { id: 'inicio',    label: 'Inicio' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'hub',       label: 'El Hub' },
]

export function SectionNav({ sections = defaultSections }: { sections?: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    for (const { id } of sections) {
      const el = document.getElementById(id)
      if (!el) continue

      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    }

    return () => observers.forEach(o => o.disconnect())
  }, [sections])

  return (
    <aside aria-label="Contenido de esta página" className="hidden md:flex flex-col gap-3 sticky top-0 h-screen pt-20 pb-8 pl-6 pr-4 w-32 lg:w-40 lg:pl-8 lg:pr-6 shrink-0">
      <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1">
        Contenido
      </p>
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-current={active === id ? 'true' : undefined}
          className={[
            'text-xs transition-colors duration-150',
            active === id
              ? 'text-neutral-900 font-medium'
              : 'text-neutral-500 hover:text-neutral-700',
          ].join(' ')}
        >
          {label}
        </a>
      ))}
    </aside>
  )
}
