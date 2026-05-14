'use client'

import { useState } from 'react'
import Link from 'next/link'

const categories = ['Todos', 'Branding', 'Performance', 'Producción', 'Web']

const projects = [
  { title: 'Identidad completa para restaurante de cocina caribeña', category: 'Branding', sector: 'Gastronomía', metric: '↑ 40% reconocimiento de marca en 60 días', slug: 'restaurante-caribeno' },
  { title: 'Campaña Meta + TikTok para marca de moda local', category: 'Performance', sector: 'Moda', metric: '3.2× ROAS sostenido en 90 días', slug: 'marca-moda-performance' },
  { title: 'Producción audiovisual para lanzamiento de producto', category: 'Producción', sector: 'Consumo', metric: '2.4M impresiones orgánicas', slug: 'lanzamiento-audiovisual' },
  { title: 'Rediseño de marca para firma de arquitectura', category: 'Branding', sector: 'Servicios profesionales', metric: 'Sistema visual en 4 semanas', slug: 'firma-arquitectura' },
  { title: 'Google Ads + Performance Max para e-commerce', category: 'Performance', sector: 'E-commerce', metric: '↓ 28% CPA vs campaña anterior', slug: 'ecommerce-performance-max' },
  { title: 'Sitio web para consultoría de negocios', category: 'Web', sector: 'B2B', metric: '↑ 55% tiempo en página', slug: 'consultoria-web' },
]

export default function LofiTrabajos() {
  const [active, setActive] = useState('Todos')
  const filtered = active === 'Todos' ? projects : projects.filter((p) => p.category === active)

  return (
    <div>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-[104px] pb-[104px] border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">Trabajos</p>
          <h1 className="text-4xl md:text-6xl font-display font-semibold text-neutral-900 tracking-tight leading-none mb-6 max-w-[16ch]">
            Proyectos reales, resultados reales.
          </h1>
          <p className="text-base text-neutral-500 leading-relaxed max-w-[44ch]">
            No mostramos renders. Mostramos lo que construimos y los números que siguieron.
          </p>
        </div>
      </section>

      {/* Filter */}
      <div className="border-b border-neutral-200 px-6 md:px-12 py-5 bg-neutral-50">
        <div className="max-w-5xl mx-auto flex items-center gap-2 flex-wrap">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 w-20 shrink-0">
            Disciplina
          </span>
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

      {/* Projects grid */}
      <section className="px-6 md:px-12 py-[104px]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-8">
            {active === 'Todos' ? 'Todos los proyectos' : active} — {filtered.length} {filtered.length === 1 ? 'proyecto' : 'proyectos'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <Link key={p.slug} href={`/lofi/trabajos/${p.slug}`} className="group block">
                <div className="aspect-[4/3] lofi-img rounded-lg border border-neutral-200 mb-4" />
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1.5">
                  {p.category} · {p.sector}
                </p>
                <p className="text-sm font-semibold text-neutral-800 leading-snug mb-2 group-hover:text-neutral-600 transition-colors">
                  {p.title}
                </p>
                <p className="text-xs text-neutral-500">{p.metric}</p>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-sm text-neutral-500 py-16 text-center">
              No hay proyectos en esta categoría aún.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-[104px] border-t border-neutral-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm text-neutral-500 max-w-[44ch]">
            ¿Tu proyecto podría estar aquí? Cuéntanos qué necesitas.
          </p>
          <Link
            href="/lofi/solicitud"
            className="shrink-0 inline-block bg-c4-brand text-white text-sm font-medium px-8 py-4 rounded-full transition-colors hover:bg-c4-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-c4-brand focus-visible:ring-offset-2"
          >
            Solicitar →
          </Link>
        </div>
      </section>

    </div>
  )
}
