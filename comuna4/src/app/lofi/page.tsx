'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
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

function BentoShowcase() {
  const sp = { type: 'spring' as const, stiffness: 30, damping: 20 }

  const from = (x = 0, y = 0, delay = 0) => ({
    hidden: { opacity: 0, x, y },
    visible: { opacity: 1, x: 0, y: 0, transition: { ...sp, delay } },
  })

  const Cell = ({ n, label }: { n: number; label: string }) => (
    <div className="lofi-img rounded-2xl border border-neutral-200 flex flex-col items-center justify-center gap-1 w-full h-full">
      <span className="text-neutral-400 font-mono text-sm">{n}</span>
      <span className="text-neutral-400 font-mono text-xs">{label}</span>
    </div>
  )

  const vp = { once: true, margin: '-8%' as const }

  return (
    <section className="border-b border-neutral-200 px-6 md:px-12 py-16 md:py-24 overflow-clip">

      {/* Mobile: columna única — celdas 1, 7, 2 */}
      <div className="md:hidden flex flex-col gap-6">
        <div className="lofi-img rounded-2xl border border-neutral-200 aspect-[4/3] flex flex-col items-center justify-center gap-1"><span className="text-neutral-400 font-mono text-sm">1</span><span className="text-neutral-400 font-mono text-xs">Componente</span></div>
        <div className="lofi-img rounded-2xl border border-neutral-200 aspect-[9/19] flex flex-col items-center justify-center gap-1"><span className="text-neutral-400 font-mono text-sm">7</span><span className="text-neutral-400 font-mono text-xs">Mobile</span></div>
        <div className="lofi-img rounded-2xl border border-neutral-200 aspect-[4/3] flex flex-col items-center justify-center gap-1"><span className="text-neutral-400 font-mono text-sm">2</span><span className="text-neutral-400 font-mono text-xs">Componente</span></div>
      </div>

      {/* Desktop: 3 cols, cada celda entra desde una dirección */}
      <div className="hidden md:flex gap-8 h-[1200px]">

        <div className="flex-1 flex flex-col gap-8">
          <motion.div variants={from(-60, 40, 0)}    initial="hidden" whileInView="visible" viewport={vp} style={{ flex: 10 }}><Cell n={1} label="Componente" /></motion.div>
          <motion.div variants={from(0, 80, 0.06)}   initial="hidden" whileInView="visible" viewport={vp} style={{ flex: 30 }}><Cell n={2} label="Componente" /></motion.div>
          <motion.div variants={from(-40, 60, 0.12)} initial="hidden" whileInView="visible" viewport={vp} style={{ flex: 60 }}><Cell n={3} label="Mobile" /></motion.div>
        </div>

        <div className="flex-1 flex flex-col gap-8">
          <motion.div variants={from(0, 100, 0.04)}  initial="hidden" whileInView="visible" viewport={vp} style={{ flex: 70 }}><Cell n={4} label="Mobile" /></motion.div>
          <motion.div variants={from(60, 40, 0.10)}  initial="hidden" whileInView="visible" viewport={vp} style={{ flex: 30 }}><Cell n={5} label="Componente" /></motion.div>
        </div>

        <div className="flex-1 flex flex-col gap-8">
          <motion.div variants={from(50, 60, 0.08)}  initial="hidden" whileInView="visible" viewport={vp} style={{ flex: 40 }}><Cell n={6} label="Dashboard" /></motion.div>
          <motion.div variants={from(0, 80, 0.14)}   initial="hidden" whileInView="visible" viewport={vp} style={{ flex: 60 }}><Cell n={7} label="Mobile" /></motion.div>
        </div>

      </div>
    </section>
  )
}

function HubSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const didDrag = useRef(false)
  const startX = useRef(0)
  const startScroll = useRef(0)
  const paused = useRef(false)
  const pauseTimer = useRef<ReturnType<typeof setTimeout>>()
  const rafRef = useRef<number>()

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let prev = performance.now()
    const SPEED = 0.09 // px per ms — 20% of base

    function tick(now: number) {
      rafRef.current = requestAnimationFrame(tick)
      if (paused.current) { prev = now; return }
      const dt = now - prev
      prev = now
      if (dt > 100) return
      el!.scrollLeft += SPEED * dt
      const half = el!.scrollWidth / 2
      if (el!.scrollLeft >= half) el!.scrollLeft -= half
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true
    didDrag.current = false
    paused.current = true
    startX.current = e.clientX
    startScroll.current = scrollRef.current!.scrollLeft
    e.currentTarget.setPointerCapture(e.pointerId)
    clearTimeout(pauseTimer.current)
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return
    const el = scrollRef.current!
    const dx = startX.current - e.clientX
    if (Math.abs(dx) > 4) didDrag.current = true
    let next = startScroll.current + dx
    const half = el.scrollWidth / 2
    next = ((next % half) + half) % half
    el.scrollLeft = next
  }

  const onPointerUp = () => {
    dragging.current = false
    pauseTimer.current = setTimeout(() => { paused.current = false }, 80)
  }

  return (
    <section className="border-b border-neutral-200 bg-neutral-50 py-[104px]">
      <div className="px-6 md:px-12 mb-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">El Hub</p>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-[clamp(1.875rem,3.5vw,2.25rem)] font-display font-semibold text-neutral-900 tracking-tight leading-none mb-4 max-w-[22ch]">
                Donde la creatividad se produce.
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-[48ch]">
                Más que una agencia — un espacio físico en San Juan, Puerto Rico. Tres estudios equipados para cualquier producción.
              </p>
            </div>
            <Link href="/lofi/renta" className="shrink-0 inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full border border-neutral-300 text-neutral-600 hover:border-neutral-600 hover:text-neutral-900 transition-colors whitespace-nowrap">
              Ver todo <ArrowRight size={12} className="shrink-0" />
            </Link>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div className="flex gap-10 w-max">
          {[...studios, ...studios].map((s, i) => (
            <Link
              key={i}
              href={`/lofi/renta/${s.slug}`}
              className="group block shrink-0 w-[480px]"
              onClick={(e) => { if (didDrag.current) e.preventDefault() }}
            >
              <div className="aspect-[4/3] lofi-img rounded-2xl border border-neutral-200 mb-6" />
              <h3 className="text-lg font-semibold text-neutral-900 leading-snug mb-2 group-hover:text-neutral-500 transition-colors">{s.name}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

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

      {/* Hero + Ticker — juntos ocupan exactamente 100vh */}
      <div className="min-h-screen pt-[60px] flex flex-col">

        {/* Hero */}
        <section className="lofi-img flex-1 flex flex-col px-6 md:px-12 py-10 border-b border-neutral-200">
          <motion.div className="max-w-5xl mx-auto w-full flex flex-col flex-1" variants={stagger} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-8">
              Agencia creativa — Puerto Rico
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(2.25rem,5.5vw,4rem)] font-display font-semibold text-neutral-900 tracking-tight leading-none max-w-[13ch]">
              Tu marca, construida para durar.
            </motion.h1>
            <motion.div variants={fadeUp} className="mt-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <p className="text-lg text-neutral-500 leading-relaxed max-w-[38ch]">
                Meta, Google y TikTok con datos reales. Foto, video y activaciones. Rápido, con nivel.
              </p>
              <div className="flex items-center gap-4 shrink-0">
                <Link href="/lofi/solicitud" className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-medium px-8 py-4 rounded-full transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
                  Solicitar <ArrowRight size={14} className="shrink-0" />
                </Link>
                <Link href="/lofi/trabajos" className="inline-block text-sm font-medium px-8 py-4 rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-600 hover:text-neutral-900">
                  Ver trabajos
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Ticker */}
        <section className="border-b border-neutral-200 py-5 overflow-hidden shrink-0">
          <style>{`
            @keyframes ticker-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            .ticker-track { animation: ticker-scroll 24s linear infinite; will-change: transform; }
            .ticker-track:hover { animation-play-state: paused; }
          `}</style>
          <div className="ticker-track flex gap-10 font-mono text-xs uppercase tracking-widest text-neutral-500 whitespace-nowrap w-max">
            {[...ticker, ...ticker].map((s, i) => <span key={i}>{s} ·</span>)}
          </div>
        </section>

      </div>

      {/* Proyectos */}
      <section className="px-6 md:px-12 py-20 md:py-28 border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500">Proyectos recientes</h2>
            <Link href="/lofi/trabajos" className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full border border-neutral-300 text-neutral-600 hover:border-neutral-600 hover:text-neutral-900 transition-colors">
              Ver todos <ArrowRight size={12} className="shrink-0" />
            </Link>
          </div>
          <InViewSection className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {projects.slice(0, 4).map((p) => (
              <motion.div key={p.slug} variants={fadeUp}>
                <Link href={`/lofi/trabajos/${p.slug}`} className="group block">
                  <div className="aspect-[4/3] lofi-img rounded-2xl border border-neutral-200 mb-6" />
                  <h3 className="text-lg font-semibold text-neutral-900 leading-snug mb-2 group-hover:text-neutral-500 transition-colors">{p.title}</h3>
                  <p className="text-sm text-neutral-400">{p.metric}{p.period && ` · ${p.period}`}</p>
                </Link>
              </motion.div>
            ))}
          </InViewSection>
        </div>
      </section>

      {/* Servicios */}
      <section className="px-6 md:px-12 py-16 md:py-24 border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Lo que hacemos</h2>
            <Link href="/lofi/servicios" className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full border border-neutral-300 text-neutral-600 hover:border-neutral-600 hover:text-neutral-900 transition-colors">
              Ver servicios <ArrowRight size={12} className="shrink-0" />
            </Link>
          </div>
          <InViewSection className="divide-y divide-neutral-200">
            {[
              { num: '01', name: 'Producción', desc: 'Contenido con propósito. Comerciales, foto y digital.' },
              { num: '02', name: 'Estrategia', desc: 'Ideas que conectan con tu audiencia y convierten.' },
              { num: '03', name: 'Medios', desc: 'Meta, Google y TikTok. Visibilidad real, no estimada.' },
              { num: '04', name: 'Influencers', desc: 'El talento adecuado para amplificar tu mensaje.' },
            ].map((s) => (
              <motion.div key={s.name} variants={fadeUp}>
                <Link href="/lofi/servicios" className="group flex items-center gap-6 md:gap-10 py-5 hover:pl-1.5 transition-all duration-200 -mx-1.5 px-1.5">
                  <span className="font-mono text-xs text-neutral-300 w-6 shrink-0 tabular-nums">{s.num}</span>
                  <span className="flex-1 text-xl md:text-2xl font-display font-semibold text-neutral-900 tracking-tight">{s.name}</span>
                  <span className="hidden md:block text-sm text-neutral-400 max-w-[30ch] text-right leading-snug">{s.desc}</span>
                  <ArrowRight size={16} className="text-neutral-300 group-hover:text-neutral-900 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              </motion.div>
            ))}
          </InViewSection>
        </div>
      </section>

      {/* Bento showcase */}
      <BentoShowcase />

      {/* Hub — horizontal scroll */}
      <HubSection />

      {/* CTA */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-display font-semibold text-neutral-900 tracking-tight leading-none mb-5">¿Tienes un proyecto?</h2>
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
