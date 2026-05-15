'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { scaleVariants } from '@/lib/motion'

const disciplines = ['Todos', 'Branding', 'Performance', 'Producción', 'Web']
const sectors = ['Todos', 'Moda', 'Gastronomía', 'Tecnología', 'B2B', 'E-commerce']

const projects = [
  { client: 'Casa Caribe', title: 'Identidad completa para restaurante de cocina caribeña', category: 'Branding', sector: 'Gastronomía', slug: 'restaurante-caribeno' },
  { client: 'Moda Local', title: 'Campaña Meta + TikTok para marca de moda local', category: 'Performance', sector: 'Moda', slug: 'marca-moda-performance' },
  { client: 'Marca Nacional', title: 'Producción audiovisual para lanzamiento de producto', category: 'Producción', sector: 'Gastronomía', slug: 'lanzamiento-audiovisual' },
  { client: 'Arq. & Co.', title: 'Rediseño de marca para firma de arquitectura', category: 'Branding', sector: 'B2B', slug: 'firma-arquitectura' },
  { client: 'Tienda Online', title: 'Google Ads + Performance Max para e-commerce', category: 'Performance', sector: 'E-commerce', slug: 'ecommerce-performance-max' },
  { client: 'Consultoría BG', title: 'Sitio web para consultoría de negocios', category: 'Web', sector: 'B2B', slug: 'consultoria-web' },
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

  const pattern = [1, 2, 1, 1, 2]
  const rows: (typeof filtered[number] | typeof filtered[number][])[] = []
  let idx = 0, pi = 0
  while (idx < filtered.length) {
    const count = pattern[pi % pattern.length]
    if (count === 1) { rows.push(filtered[idx]); idx++ }
    else { const pair = filtered.slice(idx, idx + 2); if (pair.length > 0) rows.push(pair); idx += 2 }
    pi++
  }

  const Card = ({ p, tall }: { p: typeof filtered[0]; tall?: boolean }) => (
    <motion.div layout variants={scaleVariants} initial="hidden" animate="visible" exit="exit">
      <Link
        href={`/lofi/trabajos/${p.slug}`}
        className={`group relative lofi-img rounded-2xl overflow-hidden block ${tall ? 'aspect-[16/9] sm:aspect-[4/3]' : 'aspect-[16/9] sm:aspect-[16/8]'}`}
      >
        <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/40 transition-colors duration-300" />
        <div className="absolute bottom-4 left-4">
          <motion.div
            className="flex items-center gap-2.5 bg-white/95 backdrop-blur-sm rounded-full pl-1 pr-4 py-1 shadow-sm"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <div className="w-7 h-7 rounded-full lofi-img border border-neutral-200 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-neutral-900 leading-none">{p.client}</p>
              <p className="text-[10px] text-neutral-400 leading-none mt-0.5">{p.category}</p>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )

  return (
    <div>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-[104px] pb-16 border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6"
          >
            Trabajos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.07 }}
            className="text-4xl md:text-6xl font-display font-semibold text-neutral-900 tracking-tight leading-none mb-6 max-w-[16ch]"
          >
            Proyectos reales, resultados reales.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.14 }}
            className="text-base text-neutral-500 leading-relaxed max-w-[44ch]"
          >
            No mostramos renders. Mostramos lo que construimos y los números que siguieron.
          </motion.p>
        </div>
      </section>

      {/* Filtros */}
      <div className="border-b border-neutral-200 px-6 md:px-12 py-4 bg-white sticky top-0 z-30">
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

          <AnimatePresence>
            {hasFilter && (
              <motion.button
                initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.2 }}
                onClick={() => { setDiscipline('Todos'); setSector('Todos') }}
                className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors underline underline-offset-2 ml-1"
              >
                Limpiar
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Grid */}
      <section className="px-6 md:px-12 py-[104px]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-10">
            {filtered.length} {filtered.length === 1 ? 'proyecto' : 'proyectos'}
            {hasFilter && <span className="ml-2 text-neutral-400">— filtrado</span>}
          </p>

          <motion.div layout className="flex flex-col gap-4">
            <AnimatePresence mode="popLayout">
              {rows.map((row, i) => {
                if (!Array.isArray(row)) {
                  const p = row as typeof filtered[0]
                  return <Card key={p.slug} p={p} />
                }
                const pair = row as typeof filtered[number][]
                return (
                  <motion.div key={pair.map(p => p.slug).join('-')} layout className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pair.map((p) => <Card key={p.slug} p={p} tall />)}
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-24 text-center">
              <p className="text-sm text-neutral-400 mb-3">Sin proyectos para esta combinación.</p>
              <button
                onClick={() => { setDiscipline('Todos'); setSector('Todos') }}
                className="text-sm text-neutral-900 underline underline-offset-4 hover:text-neutral-500 transition-colors"
              >
                Ver todos los proyectos
              </button>
            </motion.div>
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
