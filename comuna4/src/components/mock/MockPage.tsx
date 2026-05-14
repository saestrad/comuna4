import React from 'react'
import Link from 'next/link'
import { MockSectionToggle } from './MockSectionToggle'

type Section = {
  name: string
  items: string[]
  suggestion?: string[]
  isNew?: boolean
}

type RelatedLink = {
  href: string
  label: string
}

type Crumb = {
  href: string
  label: string
}

type MockPageProps = {
  title: string
  description: React.ReactNode
  sections?: Section[]
  links?: RelatedLink[]
  badge?: string
  breadcrumb?: Crumb[]
}

export function MockPage({ title, description, sections = [], links = [], badge, breadcrumb }: MockPageProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">

      {breadcrumb && breadcrumb.length > 0 && (
        <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-mono">
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.href} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              <Link href={crumb.href} className="hover:text-neutral-700 transition-colors">
                {crumb.label}
              </Link>
            </span>
          ))}
          <span>/</span>
          <span className="text-neutral-600">{title}</span>
        </nav>
      )}

      {links.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 hover:text-neutral-900 border border-dashed border-neutral-300 px-3 py-1 rounded transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <div className="mb-2 flex items-center gap-3 font-mono">
        {badge && (
          <span className="text-xs border border-dashed border-neutral-400 text-neutral-500 px-2 py-0.5 rounded">
            {badge}
          </span>
        )}
        <span className="text-xs text-neutral-400 uppercase tracking-widest">v0 — mock</span>
      </div>

      <h1 className="text-5xl font-black text-neutral-900 tracking-tight leading-none mb-5">{title}</h1>
      <p className="text-base text-neutral-500 leading-relaxed mb-3 max-w-[52ch]">{description}</p>

      {(() => {
        const count = sections.filter((s) => s.suggestion && !s.isNew).length
        return count > 0 ? (
          <p className="text-xs mb-8" style={{ color: 'oklch(0.63 0.14 162)' }}>
            {count} {count === 1 ? 'sección tiene' : 'secciones tienen'} sugerencia de copy — presiona{' '}
            <span className="font-mono border rounded px-1" style={{ borderColor: 'oklch(0.63 0.14 162)' }}>
              sugerencia
            </span>{' '}
            para verla.
          </p>
        ) : <div className="mb-8" />
      })()}

      {sections.length > 0 && (
        <div className="mb-10 space-y-6">
          {sections.map((section) => (
            <MockSectionToggle
              key={section.name}
              name={section.name}
              items={section.items}
              suggestion={section.suggestion}
              isNew={section.isNew}
            />
          ))}
        </div>
      )}

    </div>
  )
}
