'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FilterChips } from '@/components/lofi/FilterChips'
import { motion, AnimatePresence } from 'framer-motion'
import { cardVariants } from '@/lib/motion'

const disciplines = ['Todos', 'Branding', 'Performance', 'Producción', 'Web']

const projects = [
  { client: 'Casa Caribe', title: 'Identidad completa para restaurante de cocina caribeña', category: 'Branding', sector: 'Gastronomía', metric: '↑ 40% reconocimiento de marca', period: '60 días', slug: 'restaurante-caribeno' },
  { client: 'Moda Local', title: 'Campaña Meta + TikTok para marca de moda local', category: 'Performance', sector: 'Moda', metric: '3.2× ROAS sostenido', period: '90 días', slug: 'marca-moda-performance' },
  { client: 'Marca Nacional', title: 'Producción audiovisual para lanzamiento de producto', category: 'Producción', sector: 'Gastronomía', metric: '2.4M impresiones orgánicas', period: '', slug: 'lanzamiento-audiovisual' },
  { client: 'Arq. & Co.', title: 'Rediseño de marca para firma de arquitectura', category: 'Branding', sector: 'B2B', metric: 'Sistema visual completo', period: '4 semanas', slug: 'firma-arquitectura' },
  { client: 'Tienda Online', title: 'Google Ads + Performance Max para e-commerce', category: 'Performance', sector: 'E-commerce', metric: '↓ 28% CPA vs campaña anterior', period: '', slug: 'ecommerce-performance-max' },
  { client: 'Consultoría BG', title: 'Sitio web para consultoría de negocios', category: 'Web', sector: 'B2B', metric: '↑ 55% tiempo en página', period: '', slug: 'consultoria-web' },
]

export default function LofiTrabajos() {
  const [discipline, setDiscipline] = useState('Todos')

  const filtered = projects.filter((p) =>
    discipline === 'Todos' || p.category === discipline
  )

  return (
    <div>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-[140px] pb-16 border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6"
          >
            Trabajos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.07 }}
            className="text-[clamp(2rem,4.5vw,3.25rem)] font-display font-semibold text-neutral-900 tracking-tight leading-none mb-6 max-w-[16ch]"
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

      <FilterChips options={disciplines} active={discipline} onChange={setDiscipline} label="" className="bg-white sticky top-[60px] z-30" />

      {/* Grid */}
      <section className="px-6 md:px-12 py-[104px]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-10">
            {filtered.length} {filtered.length === 1 ? 'proyecto' : 'proyectos'}
            {discipline !== 'Todos' && <span className="ml-2 text-neutral-400">— {discipline}</span>}
          </p>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div key={p.slug} layout variants={cardVariants} initial="hidden" animate="visible" exit="exit">
                  <Link href={`/lofi/trabajos/${p.slug}`} className="group block">
                    <div className="aspect-[4/3] lofi-img rounded-2xl border border-neutral-200 mb-6" />
                    <h3 className="text-lg font-semibold text-neutral-900 leading-snug mb-2 group-hover:text-neutral-500 transition-colors">
                      {p.client} — {p.title}
                    </h3>
                    <p className="text-sm text-neutral-400">{p.metric}{p.period && ` · ${p.period}`}</p>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-24 text-center">
              <p className="text-sm text-neutral-400 mb-3">Sin proyectos para esta combinación.</p>
              <button
                onClick={() => setDiscipline('Todos')}
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
