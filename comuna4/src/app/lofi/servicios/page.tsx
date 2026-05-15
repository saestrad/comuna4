'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { stagger, fadeUp } from '@/lib/motion'

const services = [
  { name: 'Producción de Contenido', tagline: 'Producimos con propósito.', description: 'Desde comerciales hasta contenido digital. Cada pieza tiene un objetivo claro y una distribución planificada.', deliverables: ['Comerciales y spots', 'Contenido para redes sociales', 'Fotografía de producto y lifestyle', 'Video vertical y horizontal'], slug: 'produccion' },
  { name: 'Estrategia y Creatividad', tagline: 'Ideas que conectan.', description: 'Transformamos ideas en campañas de impacto diseñadas para conectar con tu audiencia y mover números reales.', deliverables: ['Estrategia de marca', 'Concepto creativo', 'Brand guidelines', 'Dirección de arte'], slug: 'estrategia' },
  { name: 'Compra de Medios y Distribución', tagline: 'Visibilidad real, no estimada.', description: 'Optimizamos cada inversión publicitaria online y offline. Meta, Google, TikTok y medios tradicionales con datos de primera mano.', deliverables: ['Planificación de medios', 'Gestión de campañas pagas', 'Reportes en tiempo real', 'Optimización continua de ROAS'], slug: 'medios' },
  { name: 'Colaboración con Creadores e Influencers', tagline: 'El talento adecuado para tu marca.', description: 'Alineamos tu marca con el talento creativo correcto. Selección basada en datos, no en seguidores.', deliverables: ['Identificación y vetting de creadores', 'Gestión de relaciones', 'Producción colaborativa', 'Medición de impacto real'], slug: 'influencers' },
]

const models = [
  { name: 'Agencia modular', desc: 'Cada equipo se construye según tu proyecto. Tu presupuesto va a talento y producción, no a estructuras fijas.' },
  { name: 'Retainer mensual', desc: 'Equipo dedicado, resultados continuos. Ideal para marcas con presencia constante y contenido regular.' },
  { name: 'Proyecto puntual', desc: 'Scope cerrado, entrega definitiva. Lanzamientos, rediseños o campañas de temporada.' },
  { name: 'Innovation sprint', desc: 'Prototipado rápido. 2–4 semanas, equipo enfocado, entregable concreto.' },
]

function InViewSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className={className}>
      {children}
    </motion.div>
  )
}

export default function LofiServicios() {
  return (
    <div>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-[140px] pb-20 border-b border-neutral-200">
        <motion.div className="max-w-5xl mx-auto" variants={stagger} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">Servicios</motion.p>
          <motion.h1 variants={fadeUp} className="text-[clamp(2rem,4.5vw,3.25rem)] font-display font-semibold text-neutral-900 tracking-tight leading-none mb-6 max-w-[18ch]">
            Publicidad de alto nivel. Sin las barreras de costo tradicionales.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base text-neutral-500 leading-relaxed max-w-[48ch]">
            Producción, estrategia, medios e influencers bajo un mismo techo. Sin subcontratar lo crítico.
          </motion.p>
        </motion.div>
      </section>

      {/* Services */}
      <section className="px-6 md:px-12 py-[104px] border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <InViewSection className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200">
            {services.map((s) => (
              <motion.div key={s.name} variants={fadeUp} className="bg-white p-8 flex flex-col gap-5">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">{s.name}</p>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-neutral-900 tracking-tight leading-tight mb-3">{s.tagline}</h2>
                  <p className="text-sm text-neutral-500 leading-relaxed">{s.description}</p>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {s.deliverables.map((d) => (
                    <li key={d} className="text-xs text-neutral-500 flex items-start gap-2">
                      <span className="text-neutral-300 shrink-0 mt-0.5">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <Link href={`/lofi/servicios/${s.slug}`} className="mt-auto inline-flex items-center gap-2 text-xs font-medium text-neutral-900 hover:text-neutral-500 transition-colors">
                  Ver detalle <ArrowRight size={14} className="shrink-0" />
                </Link>
              </motion.div>
            ))}
          </InViewSection>
        </div>
      </section>

      {/* Models */}
      <section className="px-6 md:px-12 py-[104px] border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-10">Modelos de trabajo</h2>
          <InViewSection className="grid grid-cols-1 md:grid-cols-4 gap-px bg-neutral-200">
            {models.map((m) => (
              <motion.div key={m.name} variants={fadeUp} className="bg-white p-6">
                <p className="text-sm font-semibold text-neutral-800 mb-2 leading-snug">{m.name}</p>
                <p className="text-xs text-neutral-500 leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </InViewSection>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-[120px]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-display font-semibold text-neutral-900 tracking-tight leading-none mb-3">¿Qué necesita tu marca?</h2>
            <p className="text-sm text-neutral-500 max-w-[38ch] leading-relaxed">Cuéntanos el reto. En 24 horas tienes respuesta.</p>
          </div>
          <Link href="/lofi/solicitud" className="shrink-0 inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-medium px-8 py-4 rounded-full transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
            Solicitar <ArrowRight size={14} className="shrink-0" />
          </Link>
        </div>
      </section>

    </div>
  )
}
