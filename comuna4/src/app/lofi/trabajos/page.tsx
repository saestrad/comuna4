'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const disciplines = ['Todos', 'Branding', 'Performance', 'Producción', 'Web']
const sectors = ['Todos', 'Moda', 'Gastronomía', 'Tecnología', 'B2B', 'E-commerce']

const projects = [
  { title: 'Identidad completa para restaurante de cocina caribeña', category: 'Branding', sector: 'Gastronomía', metric: '↑ 40% reconocimiento de marca', period: '60 días', slug: 'restaurante-caribeno' },
  { title: 'Campaña Meta + TikTok para marca de moda local', category: 'Performance', sector: 'Moda', metric: '3.2× ROAS sostenido', period: '90 días', slug: 'marca-moda-performance' },
  { title: 'Producción audiovisual para lanzamiento de producto', category: 'Producción', sector: 'Gastronomía', metric: '2.4M impresiones orgánicas', period: '', slug: 'lanzamiento-audiovisual' },
  { title: 'Rediseño de marca para firma de arquitectura', category: 'Branding', sector: 'B2B', metric: 'Sistema visual completo', period: '4 semanas', slug: 'firma-arquitectura' },
  { title: 'Google Ads + Performance Max para e-commerce', category: 'Performance', sector: 'E-commerce', metric: '↓ 28% CPA vs campaña anterior', period: '', slug: 'ecommerce-performance-max' },
  { title: 'Sitio web para consultoría de negocios', category: 'Web', sector: 'B2B', metric: '↑ 55% tiempo en página', period: '', slug: 'consultoria-web' },
]

export default function LofiTrabajos() {
  const [discipline, setDiscipline] = useState('Todos')
  const [sector, setSector] = useState('Todos')

  const filtered = projects.filter((p) => {
    const matchDiscipline = discipline === 'Todos' || p.category === discipline
    const matchSector = sector === 'Todos' || p.sector === sector
    return matchDiscipline && matchSector
  })

  const hasFilter = discipline !== 'Todos' || sector !== 'Todos'

  return (
    <div>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-[104px] pb-16 border-b border-neutral-200">
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

      {/* Filtros — una sola barra */}
      <div className="border-b border-neutral-200 px-6 md:px-12 py-4 bg-neutral-50 sticky top-[57px] z-30">
        <div className="max-w-5xl mx-auto flex items-center gap-3 flex-wrap">
          <select
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
            className={[
              'text-xs border rounded-full px-3 py-2 bg-white transition-colors appearance-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 pr-7',
              discipline !== 'Todos' ? 'border-neutral-900 text-neutral-900 font-medium' : 'border-neutral-300 text-neutral-500',
            ].join(' ')}
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23737373' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
          >
            <option value="Todos">Disciplina</option>
            {disciplines.filter((d) => d !== 'Todos').map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <select
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className={[
              'text-xs border rounded-full px-3 py-2 bg-white transition-colors appearance-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 pr-7',
              sector !== 'Todos' ? 'border-neutral-900 text-neutral-900 font-medium' : 'border-neutral-300 text-neutral-500',
            ].join(' ')}
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23737373' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
          >
            <option value="Todos">Sector</option>
            {sectors.filter((s) => s !== 'Todos').map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          {hasFilter && (
            <button
              onClick={() => { setDiscipline('Todos'); setSector('Todos') }}
              className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors underline underline-offset-2 ml-1"
            >
              Limpiar
            </button>
          )}
        </div>
      </div>

      {/* Projects grid — Active Theory: card work-first, métrica prominente */}
      <section className="px-6 md:px-12 py-[104px]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-10">
            {filtered.length} {filtered.length === 1 ? 'proyecto' : 'proyectos'}
            {hasFilter && <span className="ml-2 text-neutral-400">— filtrado</span>}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
            {filtered.map((p) => (
              <Link key={p.slug} href={`/lofi/trabajos/${p.slug}`} className="group block">
                {/* Imagen placeholder */}
                <div className="aspect-[4/3] lofi-img rounded-lg border border-neutral-200 mb-5" />

                {/* Tags: disciplina + sector */}
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
                  {p.category} · {p.sector}
                </p>

                {/* Título */}
                <p className="text-sm font-semibold text-neutral-800 leading-snug mb-4 group-hover:text-neutral-500 transition-colors">
                  {p.title}
                </p>

                {/* Métrica — Pentagram: resultado medible prominente */}
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-neutral-900">{p.metric}</span>
                  {p.period && (
                    <span className="text-xs text-neutral-400">{p.period}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-sm text-neutral-400 mb-3">Sin proyectos para esta combinación.</p>
              <button
                onClick={() => { setDiscipline('Todos'); setSector('Todos') }}
                className="text-sm text-neutral-900 underline underline-offset-4 hover:text-neutral-500 transition-colors"
              >
                Ver todos los proyectos
              </button>
            </div>
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
            className="shrink-0 inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-medium px-8 py-4 rounded-full transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Solicitar <ArrowRight size={14} className="shrink-0" />
          </Link>
        </div>
      </section>

    </div>
  )
}
