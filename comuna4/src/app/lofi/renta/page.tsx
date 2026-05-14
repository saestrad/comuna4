'use client'

import { useState } from 'react'
import Link from 'next/link'

const categories = ['Todos', 'Estudios', 'Cámaras', 'Iluminación', 'Audio']

const amenities = [
  'Cámaras, luces y props disponibles',
  'Estacionamiento amplio incluido',
  'Sala de conferencias',
  'Booths privados (2-4 personas)',
  'Café y agua gratuitos',
]

const items = [
  {
    name: 'Ciclorama Profesional',
    category: 'Estudios',
    size: "25' × 25'",
    desc: 'Perfecto para producciones publicitarias, fotografía de productos y creación de contenido. Fondo infinito blanco.',
    slug: 'ciclorama-profesional',
  },
  {
    name: 'Estudio de Cocina',
    category: 'Estudios',
    size: "25' × 25'",
    desc: 'Diseñado de forma modular para crear contenido gastronómico variado con calidad de cine.',
    slug: 'estudio-cocina',
  },
  {
    name: 'Estudio Multiusos',
    category: 'Estudios',
    size: "25' × 25'",
    desc: 'Desde entrevistas hasta campañas digitales. Un espacio flexible para crear contenido en cualquier formato.',
    slug: 'estudio-multiusos',
  },
  {
    name: 'Sony FX3 Full-Frame Cinema',
    category: 'Cámaras',
    size: 'Con baterías y tarjetas',
    desc: 'Cámara de cine full-frame compacta. Ideal para producciones de alto nivel con presupuesto eficiente.',
    slug: 'sony-fx3',
  },
  {
    name: 'Kit de iluminación LED — 3 puntos',
    category: 'Iluminación',
    size: 'Incluye soportes y difusores',
    desc: 'Setup de 3 puntos con LEDs de temperatura ajustable. Para entrevistas, productos y lifestyle.',
    slug: 'kit-led-3-puntos',
  },
  {
    name: 'Rode NTG5 + grabadora portátil',
    category: 'Audio',
    size: 'Ideal para entrevistas y voz',
    desc: 'Micrófono de cañón de referencia con grabadora portátil de alta resolución.',
    slug: 'rode-ntg5',
  },
]

export default function LofiRenta() {
  const [active, setActive] = useState('Todos')
  const filtered = active === 'Todos' ? items : items.filter((i) => i.category === active)

  return (
    <div>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-[104px] pb-[104px] border-b border-neutral-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">Renta</p>
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-neutral-900 tracking-tight leading-none mb-6 max-w-[16ch]">
              Tu idea necesita un espacio. Nosotros lo tenemos.
            </h1>
            <p className="text-base text-neutral-500 leading-relaxed">
              Infraestructura pensada para el crecimiento de la industria creativa en Puerto Rico.
            </p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">Incluido en todos los espacios</p>
            <ul className="flex flex-col gap-2">
              {amenities.map((a) => (
                <li key={a} className="text-sm text-neutral-600 flex items-start gap-2">
                  <span className="text-neutral-300 shrink-0 mt-0.5">—</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Filter */}
      <div className="border-b border-neutral-200 px-6 md:px-12 py-5 bg-neutral-50">
        <div className="max-w-5xl mx-auto flex items-center gap-2 flex-wrap">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 w-20 shrink-0">Categoría</span>
          <div className="flex gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={[
                  'text-xs px-3 py-2.5 rounded-full border transition-colors',
                  active === c
                    ? 'border-neutral-900 bg-neutral-900 text-white'
                    : 'border-neutral-300 text-neutral-500 hover:border-neutral-600 hover:text-neutral-800',
                ].join(' ')}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Items */}
      <section className="px-6 md:px-12 py-[104px]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-8">
            {active === 'Todos' ? 'Todo el equipo' : active} — {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <Link key={item.slug} href={`/lofi/renta/${item.slug}`} className="group block">
                <div className="aspect-[4/3] lofi-img rounded-lg border border-neutral-200 mb-4" />
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1.5">
                  {item.category} · {item.size}
                </p>
                <p className="text-sm font-semibold text-neutral-800 leading-snug mb-2 group-hover:text-neutral-600 transition-colors">
                  {item.name}
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-[104px] border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-neutral-800 mb-1">¿Necesitas algo específico?</p>
            <p className="text-xs text-neutral-500">Escríbenos a info@comuna4.com para paquetes personalizados o fechas especiales.</p>
          </div>
          <Link
            href="/lofi/solicitud"
            className="shrink-0 inline-block bg-c4-brand text-white text-sm font-medium px-8 py-4 rounded-full transition-colors hover:bg-c4-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-c4-brand focus-visible:ring-offset-2"
          >
            Reservar →
          </Link>
        </div>
      </section>

    </div>
  )
}
