import Link from 'next/link'

type Section = {
  name: string
  items: string[]
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
  description: string
  sections?: Section[]
  links?: RelatedLink[]
  badge?: string
  breadcrumb?: Crumb[]
}

export function MockPage({ title, description, sections = [], links = [], badge, breadcrumb }: MockPageProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 font-mono">

      {breadcrumb && breadcrumb.length > 0 && (
        <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
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

      <div className="mb-2 flex items-center gap-3">
        {badge && (
          <span className="text-xs border border-dashed border-neutral-400 text-neutral-500 px-2 py-0.5 rounded">
            {badge}
          </span>
        )}
        <span className="text-xs text-neutral-400 uppercase tracking-widest">v0 — mock</span>
      </div>

      <h1 className="text-3xl font-bold text-neutral-900 mb-3">{title}</h1>
      <p className="text-neutral-500 text-sm leading-relaxed mb-8 max-w-prose">{description}</p>

      {sections.length > 0 && (
        <div className="mb-10 space-y-6">
          {sections.map((section) => (
            <div key={section.name}>
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
                {section.name}
              </h2>
              <ul className="space-y-1 border-l-2 border-dashed border-neutral-200 pl-4">
                {section.items.map((item) => (
                  <li key={item} className="text-sm text-neutral-600">
                    — {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}
