import Link from 'next/link'

const versions = [
  {
    label: 'v0 — Mock',
    href: '/mock',
    desc: 'Navegabilidad y estructura. Sin diseño real.',
    badge: 'Activo',
    color: 'oklch(0.63 0.14 162)',
  },
  {
    label: 'v1 — Low Fidelity',
    href: '/lofi',
    desc: 'Tipografía, grilla y layout real. Sin assets de marca.',
    badge: 'En construcción',
    color: 'oklch(0.55 0.20 245)',
  },
  {
    label: 'v3 — High Fidelity',
    href: '#',
    desc: 'Sistema de marca completo, animaciones y producción.',
    badge: 'Pendiente',
    color: 'oklch(0.50 0 0)',
  },
]

export default function VersionSelector() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white">
      <div className="max-w-xl w-full">
        <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: 'oklch(0.63 0.14 162)' }}>
          [C4] — Sitio web
        </p>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight leading-none mb-10">
          Versiones
        </h1>
        <div className="flex flex-col gap-px bg-neutral-200">
          {versions.map((v) => (
            <Link
              key={v.href}
              href={v.href}
              className={[
                'bg-white px-6 py-5 flex items-center justify-between gap-6 transition-colors',
                v.href === '#' ? 'pointer-events-none opacity-40' : 'hover:bg-neutral-50',
              ].join(' ')}
            >
              <div>
                <p className="text-sm font-semibold text-neutral-900 mb-1">{v.label}</p>
                <p className="text-xs text-neutral-500">{v.desc}</p>
              </div>
              <span
                className="text-xs font-mono shrink-0"
                style={{ color: v.color }}
              >
                {v.badge}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
