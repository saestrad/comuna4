'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { stagger, fadeUp } from '@/lib/motion'

const ticker = ['Producción de Contenido', 'Estrategia Creativa', 'Compra de Medios', 'Influencer Collabs', 'Renta de Espacios', 'Branding', 'Performance Digital']

const projects = [
  { title: 'Identidad completa para restaurante de cocina caribeña', category: 'Branding', sector: 'Gastronomía', metric: '↑ 40% reconocimiento de marca', period: '60 días', slug: 'restaurante-caribeno' },
  { title: 'Campaña Meta + TikTok para marca de moda local', category: 'Performance', sector: 'Moda', metric: '3.2× ROAS sostenido', period: '90 días', slug: 'marca-moda-performance' },
  { title: 'Producción audiovisual para lanzamiento de producto', category: 'Producción', sector: 'Gastronomía', metric: '2.4M impresiones orgánicas', period: '', slug: 'lanzamiento-audiovisual' },
  { title: 'Rediseño de marca para firma de arquitectura', category: 'Branding', sector: 'B2B', metric: 'Sistema visual completo', period: '4 semanas', slug: 'firma-arquitectura' },
  { title: 'Google Ads + Performance Max para e-commerce', category: 'Performance', sector: 'E-commerce', metric: '↓ 28% CPA vs campaña anterior', period: '', slug: 'ecommerce-performance-max' },
  { title: 'Sitio web para consultoría de negocios', category: 'Web', sector: 'B2B', metric: '↑ 55% tiempo en página', period: '', slug: 'consultoria-web' },
]

const studios = [
  { name: 'Ciclorama Profesional', size: "25' × 25'", desc: 'Producciones publicitarias, fotografía de producto y contenido. Fondo infinito blanco.', slug: 'ciclorama-profesional' },
  { name: 'Estudio de Cocina', size: "25' × 25'", desc: 'Contenido gastronómico variado con calidad de cine.', slug: 'estudio-cocina' },
  { name: 'Estudio Multiusos', size: "25' × 25'", desc: 'Entrevistas, campañas digitales y cualquier formato.', slug: 'estudio-multiusos' },
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

export default function LofiHome() {
  return (
    <div>

      {/* Hero */}
      <section className="lofi-img px-6 md:px-12 pt-[140px] pb-[120px] border-b border-neutral-200">
        <motion.div className="max-w-5xl mx-auto flex flex-col items-center text-center" variants={stagger} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-10">
            Agencia creativa — Puerto Rico
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-display font-semibold text-neutral-900 tracking-tight leading-none mb-8 max-w-[14ch]">
            Tu marca, construida para durar.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-neutral-500 leading-relaxed mb-14 max-w-[40ch]">
            Meta, Google y TikTok con datos reales. Foto, video y activaciones. Rápido, con nivel.
          </motion.p>
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <Link href="/lofi/solicitud" className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-medium px-8 py-4 rounded-full transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
              Solicitar <ArrowRight size={14} className="shrink-0" />
            </Link>
            <Link href="/lofi/trabajos" className="inline-block text-sm font-medium px-8 py-4 rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-600 hover:text-neutral-900">
              Ver trabajos
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Ticker */}
      <section className="border-b border-neutral-200 py-5 overflow-hidden">
        <style>{`
          @keyframes ticker-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .ticker-track { animation: ticker-scroll 24s linear infinite; }
          .ticker-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="ticker-track flex gap-10 font-mono text-xs uppercase tracking-widest text-neutral-500 whitespace-nowrap w-max">
          {[...ticker, ...ticker].map((s, i) => <span key={i}>{s} ·</span>)}
        </div>
      </section>

      {/* Proyectos */}
      <section className="px-6 md:px-12 py-[104px] border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500">Proyectos recientes</h2>
            <Link href="/lofi/trabajos" className="inline-flex items-center gap-2 text-xs text-neutral-500 hover:text-neutral-700 transition-colors">
              Ver todos <ArrowRight size={14} className="shrink-0" />
            </Link>
          </div>
          <InViewSection className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
            {projects.map((p) => (
              <motion.div key={p.slug} variants={fadeUp}>
                <Link href={`/lofi/trabajos/${p.slug}`} className="group block">
                  <div className="aspect-[4/3] lofi-img rounded-lg border border-neutral-200 mb-5" />
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">{p.category} · {p.sector}</p>
                  <p className="text-sm font-semibold text-neutral-800 leading-snug mb-4 group-hover:text-neutral-500 transition-colors">{p.title}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-semibold text-neutral-900">{p.metric}</span>
                    {p.period && <span className="text-xs text-neutral-400">{p.period}</span>}
                  </div>
                </Link>
              </motion.div>
            ))}
          </InViewSection>
        </div>
      </section>

      {/* Servicios */}
      <section className="px-6 md:px-12 py-[104px] border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-16">Lo que hacemos</h2>
          <InViewSection className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200">
            {[
              { name: 'Producción', desc: 'Contenido con propósito. Comerciales, foto y digital.' },
              { name: 'Estrategia', desc: 'Ideas que conectan con tu audiencia y convierten.' },
              { name: 'Medios', desc: 'Meta, Google y TikTok. Visibilidad real, no estimada.' },
              { name: 'Influencers', desc: 'El talento adecuado para amplificar tu mensaje.' },
            ].map((s) => (
              <motion.div key={s.name} variants={fadeUp}>
                <Link href="/lofi/servicios" className="bg-white p-8 hover:bg-neutral-50 transition-colors group block h-full">
                  <p className="text-sm font-semibold text-neutral-800 mb-3">{s.name}</p>
                  <p className="text-xs text-neutral-500 leading-relaxed">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </InViewSection>
        </div>
      </section>

      {/* Hub */}
      <section className="px-6 md:px-12 py-[120px] border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">El Hub</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-neutral-900 tracking-tight leading-none mb-6 max-w-[22ch]">
            Donde la creatividad se produce.
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed mb-16 max-w-[48ch]">
            Más que una agencia — un espacio físico en San Juan, Puerto Rico. Tres estudios equipados para cualquier producción.
          </p>
          <InViewSection className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 mb-10">
            {studios.map((s) => (
              <motion.div key={s.name} variants={fadeUp}>
                <Link href={`/lofi/renta/${s.slug}`} className="group bg-white p-8 block hover:bg-neutral-50 transition-colors">
                  <div className="aspect-[4/3] lofi-img rounded-lg border border-neutral-200 mb-5" />
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1">{s.size}</p>
                  <p className="text-sm font-semibold text-neutral-800 mb-2 group-hover:text-neutral-500 transition-colors">{s.name}</p>
                  <p className="text-xs text-neutral-500 leading-relaxed">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </InViewSection>
          <Link href="/lofi/renta" className="inline-flex items-center gap-2 text-sm text-neutral-900 hover:text-neutral-500 transition-colors underline underline-offset-4">
            Ver disponibilidad y equipo <ArrowRight size={14} className="shrink-0" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-[120px]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-neutral-900 tracking-tight leading-none mb-5">¿Tienes un proyecto?</h2>
            <p className="text-base text-neutral-500 max-w-[38ch] leading-relaxed">Cuéntanos. Respondemos en menos de 24 horas.</p>
          </div>
          <Link href="/lofi/solicitud" className="shrink-0 inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-medium px-8 py-4 rounded-full transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
            Solicitar <ArrowRight size={14} className="shrink-0" />
          </Link>
        </div>
      </section>

    </div>
  )
}
