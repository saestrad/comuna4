'use client'

import { useState } from 'react'
import Link from 'next/link'

const disciplines = ['Branding', 'Performance', 'Producción', 'Web']
const sectors = ['Moda', 'Gastronomía', 'Tecnología', 'B2B', 'E-commerce']

const projects = [
  { client: 'Casa Caribe', title: 'Identidad completa para restaurante de cocina caribeña', category: 'Branding', sector: 'Gastronomía', slug: 'restaurante-caribeno' },
  { client: 'Moda Local', title: 'Campaña Meta + TikTok para marca de moda local', category: 'Performance', sector: 'Moda', slug: 'marca-moda-performance' },
  { client: 'Marca Nacional', title: 'Producción audiovisual para lanzamiento de producto', category: 'Producción', sector: 'Gastronomía', slug: 'lanzamiento-audiovisual' },
  { client: 'Arq. & Co.', title: 'Rediseño de marca para firma de arquitectura', category: 'Branding', sector: 'B2B', slug: 'firma-arquitectura' },
  { client: 'Tienda Online', title: 'Google Ads + Performance Max para e-commerce', category: 'Performance', sector: 'E-commerce', slug: 'ecommerce-performance-max' },
  { client: 'Consultoría BG', title: 'Sitio web para consultoría de negocios', category: 'Web', sector: 'B2B', slug: 'consultoria-web' },
]

export default function LofiTrabajos() {
  const [activeDisciplines, setActiveDisciplines] = useState<string[]>([])
  const [activeSectors, setActiveSectors] = useState<string[]>([])

  function toggleDiscipline(d: string) {
    setActiveDisciplines((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    )
  }

  function toggleSector(s: string) {
    setActiveSectors((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    )
  }

  const hasFilter = activeDisciplines.length > 0 || activeSectors.length > 0

  const filtered = projects.filter((p) => {
    const matchD = activeDisciplines.length === 0 || activeDisciplines.includes(p.category)
    const matchS = activeSectors.length === 0 || activeSectors.includes(p.sector)
    return matchD && matchS
  })

  return (
    <div>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-[104px] pb-8 md:pb-14 border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">Trabajos</p>
          <h1 className="text-4xl md:text-6xl font-display font-semibold text-neutral-900 tracking-tight leading-none max-w-[16ch] mb-8 md:mb-0">
            Proyectos reales, resultados reales.
          </h1>
        </div>

        {/* Filtro móvil — scroll horizontal, solo visible en mobile */}
        <div className="md:hidden mt-6 -mx-6 px-6 overflow-x-auto scrollbar-none">
          <div className="flex gap-2 w-max pb-1">
            {[...disciplines, ...sectors].map((tag) => {
              const isActive = activeDisciplines.includes(tag) || activeSectors.includes(tag)
              const isDiscipline = disciplines.includes(tag)
              return (
                <button
                  key={tag}
                  onClick={() => isDiscipline ? toggleDiscipline(tag) : toggleSector(tag)}
                  className={[
                    'text-xs px-3 py-1.5 rounded-full border whitespace-nowrap transition-colors',
                    isActive
                      ? 'bg-neutral-900 text-white border-neutral-900'
                      : 'border-neutral-200 text-neutral-500',
                  ].join(' ')}
                >
                  {tag}
                </button>
              )
            })}
            {hasFilter && (
              <button
                onClick={() => { setActiveDisciplines([]); setActiveSectors([]) }}
                className="text-xs px-3 py-1.5 rounded-full border border-dashed border-neutral-300 text-neutral-400 whitespace-nowrap"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Layout: sidebar + grid */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 flex gap-12 items-start">

        {/* Sidebar — sticky */}
        <aside className="hidden md:flex flex-col gap-8 w-48 shrink-0 sticky top-[72px]">

          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">Disciplina</p>
            <div className="flex flex-col gap-1.5">
              {disciplines.map((d) => (
                <button
                  key={d}
                  onClick={() => toggleDiscipline(d)}
                  className={[
                    'text-xs px-3 py-1.5 rounded-full border text-left transition-colors',
                    activeDisciplines.includes(d)
                      ? 'bg-neutral-900 text-white border-neutral-900'
                      : 'border-neutral-200 text-neutral-500 hover:border-neutral-400 hover:text-neutral-800',
                  ].join(' ')}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">Sector</p>
            <div className="flex flex-col gap-1.5">
              {sectors.map((s) => (
                <button
                  key={s}
                  onClick={() => toggleSector(s)}
                  className={[
                    'text-xs px-3 py-1.5 rounded-full border text-left transition-colors',
                    activeSectors.includes(s)
                      ? 'bg-neutral-900 text-white border-neutral-900'
                      : 'border-neutral-200 text-neutral-500 hover:border-neutral-400 hover:text-neutral-800',
                  ].join(' ')}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {hasFilter && (
            <button
              onClick={() => { setActiveDisciplines([]); setActiveSectors([]) }}
              className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors underline underline-offset-2 text-left"
            >
              Limpiar filtros
            </button>
          )}
        </aside>

        {/* Grid de proyectos */}
        <div className="flex-1 min-w-0">

          <p className="text-xs font-mono text-neutral-400 mb-8">
            {filtered.length} {filtered.length === 1 ? 'proyecto' : 'proyectos'}
            {hasFilter && ' — filtrado'}
          </p>

          <div className="flex flex-col gap-4">
            {(() => {
              // Pattern: single, pair, single, single, pair, single, pair, ...
              const pattern = [1, 2, 1, 1, 2]
              const rows: (typeof filtered[number] | typeof filtered[number][])[] = []
              let idx = 0
              let pi = 0
              while (idx < filtered.length) {
                const count = pattern[pi % pattern.length]
                if (count === 1) {
                  rows.push(filtered[idx])
                  idx++
                } else {
                  const pair = filtered.slice(idx, idx + 2)
                  if (pair.length > 0) rows.push(pair)
                  idx += 2
                }
                pi++
              }

              return rows.map((row, i) => {
                const isArray = Array.isArray(row)

                const Card = ({ p, tall }: { p: typeof filtered[0]; tall?: boolean }) => (
                  <Link
                    href={`/lofi/trabajos/${p.slug}`}
                    className={`group relative lofi-img rounded-2xl overflow-hidden block ${tall ? 'aspect-[4/3]' : 'aspect-[16/8]'}`}
                  >
                    <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/40 transition-colors duration-300" />

                    {/* Burbuja logo cliente — abajo izquierda */}
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-sm rounded-full pl-1 pr-4 py-1 shadow-sm">
                        {/* Logo placeholder circular */}
                        <div className="w-7 h-7 rounded-full lofi-img border border-neutral-200 shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-neutral-900 leading-none">{p.client}</p>
                          <p className="text-[10px] text-neutral-400 leading-none mt-0.5">{p.category}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )

                if (!isArray) {
                  return <Card key={i} p={row as typeof filtered[0]} />
                }

                const pair = row as typeof filtered[number][]
                return (
                  <div key={i} className="grid grid-cols-2 gap-4">
                    {pair.map((p) => <Card key={p.slug} p={p} tall />)}
                  </div>
                )
              })
            })()}
          </div>

          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-sm text-neutral-400 mb-3">Sin proyectos para esta combinación.</p>
              <button
                onClick={() => { setActiveDisciplines([]); setActiveSectors([]) }}
                className="text-sm text-neutral-900 underline underline-offset-4 hover:text-neutral-500 transition-colors"
              >
                Ver todos
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <section className="px-6 md:px-12 py-[104px] border-t border-neutral-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm text-neutral-500 max-w-[44ch]">
            ¿Tu proyecto podría estar aquí? Cuéntanos qué necesitas.
          </p>
          <Link
            href="/lofi/solicitud"
            className="shrink-0 inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-medium px-8 py-4 rounded-full transition-colors hover:opacity-90"
          >
            Solicitar
          </Link>
        </div>
      </section>

    </div>
  )
}
