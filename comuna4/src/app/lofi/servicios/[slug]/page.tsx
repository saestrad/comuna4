import Link from 'next/link'
import { SectionNav } from '@/components/lofi/SectionNav'

const sections = [
  { id: 'servicio', label: 'Servicio' },
  { id: 'proceso',  label: 'Proceso' },
  { id: 'casos',    label: 'Casos' },
  { id: 'siguiente', label: 'Siguiente' },
]

const service = {
  name: 'Producción de Contenido',
  tagline: 'Producimos con propósito.',
  description: 'Desde comerciales hasta contenido digital. Cada pieza tiene un objetivo claro y una distribución planificada. No producimos por producir — cada entregable nace de una estrategia y termina en una métrica.',
  deliverables: [
    'Comerciales y spots para TV y digital',
    'Contenido para redes sociales (Reels, TikTok, Shorts)',
    'Fotografía de producto y lifestyle',
    'Video vertical y horizontal',
    'Producción en el Hub o en locación',
    'Post-producción y edición final',
  ],
  process: [
    { step: '01', title: 'Brief creativo', desc: 'Definimos el objetivo, el tono y el canal de distribución antes de escribir una sola línea de guion.' },
    { step: '02', title: 'Preproducción', desc: 'Storyboard, casting, locaciones, plan de rodaje. Todo coordinado desde el Hub en San Juan.' },
    { step: '03', title: 'Producción', desc: 'Rodaje en nuestros tres estudios o en locación. Equipo propio, sin subcontratar lo crítico.' },
    { step: '04', title: 'Post y entrega', desc: 'Edición, corrección de color, audio y formatos para cada plataforma. Tiempo promedio: 5–7 días hábiles.' },
  ],
}

const cases = [
  { title: 'Producción audiovisual para lanzamiento de producto', category: 'Producción', metric: '2.4M impresiones orgánicas', slug: 'lanzamiento-audiovisual' },
  { title: 'Identidad completa para restaurante de cocina caribeña', category: 'Branding', metric: '↑ 40% reconocimiento de marca', slug: 'restaurante-caribeno' },
  { title: 'Campaña Meta + TikTok para marca de moda local', category: 'Performance', metric: '3.2× ROAS sostenido', slug: 'marca-moda-performance' },
]

export default async function ServicioDetail({ params }: { params: Promise<{ slug: string }> }) {
  await params
  return (
    <div className="flex">
      <div className="flex-1 min-w-0">

        {/* Servicio */}
        <section id="servicio" className="px-6 md:px-12 pt-[104px] pb-[104px] border-b border-neutral-200">
          <div className="max-w-[882px] mx-auto">
            <Link
              href="/lofi/servicios"
              className="inline-block text-xs font-mono text-neutral-400 hover:text-neutral-700 transition-colors mb-12"
            >
              ← Todos los servicios
            </Link>

            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">{service.name}</p>

            <h1 className="text-3xl md:text-5xl font-display font-semibold text-neutral-900 tracking-tight leading-tight mb-6 max-w-[18ch]">
              {service.tagline}
            </h1>

            <p className="text-base text-neutral-500 leading-relaxed mb-10 max-w-[52ch]">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {service.deliverables.map((d) => (
                <span key={d} className="text-xs font-mono text-neutral-500 border border-neutral-200 px-3 py-1.5 rounded-full">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Visual */}
        <section className="border-b border-neutral-200">
          <div className="aspect-[16/7] lofi-img" />
        </section>

        {/* Proceso */}
        <section id="proceso" className="px-6 md:px-12 py-[104px] border-b border-neutral-200">
          <div className="max-w-[882px] mx-auto">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-16">Cómo trabajamos</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {service.process.map((p) => (
                <div key={p.step}>
                  <p className="text-xs font-mono text-neutral-400 mb-4">{p.step}</p>
                  <p className="text-sm font-semibold text-neutral-800 mb-2">{p.title}</p>
                  <p className="text-sm text-neutral-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Casos */}
        <section id="casos" className="px-6 md:px-12 py-[104px] border-b border-neutral-200 bg-neutral-50">
          <div className="max-w-[882px] mx-auto">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-12">Proyectos relacionados</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {cases.map((c) => (
                <Link key={c.slug} href={`/lofi/trabajos/${c.slug}`} className="group block">
                  <div className="aspect-[4/3] lofi-img rounded-lg border border-neutral-200 mb-4" />
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1.5">{c.category}</p>
                  <p className="text-sm font-semibold text-neutral-800 leading-snug mb-1.5 group-hover:text-neutral-600 transition-colors">
                    {c.title}
                  </p>
                  <p className="text-xs text-neutral-500">{c.metric}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Siguiente — CTA */}
        <section id="siguiente" className="px-6 md:px-12 py-[120px]">
          <div className="max-w-[882px] mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-neutral-900 tracking-tight leading-tight mb-5 max-w-[20ch]">
              ¿Es esto lo que necesita tu marca?
            </h2>
            <p className="text-base text-neutral-500 leading-relaxed mb-10 max-w-[44ch]">
              Cuéntanos el proyecto. En 24 horas tienes una propuesta inicial sin compromiso.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/lofi/solicitud"
                className="inline-block bg-accent text-accent-foreground text-sm font-medium px-8 py-4 rounded-full transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Solicitar producción →
              </Link>
              <Link
                href="/lofi/servicios"
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors underline underline-offset-4"
              >
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </section>

      </div>

      <SectionNav sections={sections} />
    </div>
  )
}
