import Link from 'next/link'
import { SectionNav } from '@/components/lofi/SectionNav'

const sections = [
  { id: 'resumen',    label: 'Resumen' },
  { id: 'proceso',    label: 'Proceso' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'siguiente',  label: 'Siguiente' },
]

const project = {
  title: 'Identidad completa para marca de gastronomía',
  category: 'Branding',
  sector: 'Restaurantes',
  year: '2025',
  metric: '↑ 40% reconocimiento de marca en 6 meses',
  tags: ['Brand strategy', 'Identidad visual', 'Fotografía', 'Menú'],
  challenge:
    'La marca no tenía coherencia visual entre sus puntos de venta, redes sociales y materiales impresos. Cada pieza comunicaba algo distinto.',
  solution:
    'Desarrollamos un sistema de identidad completo: logotipo, paleta cromática, tipografía, tono de voz y guidelines de aplicación. Produjimos la sesión fotográfica de lanzamiento.',
  process: [
    { step: '01', title: 'Discovery', desc: 'Entrevistas con el equipo, análisis de competencia y auditoría de assets existentes.' },
    { step: '02', title: 'Estrategia', desc: 'Definición de posicionamiento, personalidad de marca y principios de diseño.' },
    { step: '03', title: 'Diseño', desc: 'Tres propuestas de identidad, refinamiento iterativo con el cliente.' },
    { step: '04', title: 'Producción', desc: 'Sesión fotográfica en el Hub, edición y entrega de brandbook final.' },
  ],
  results: [
    { metric: '↑ 40%', label: 'Reconocimiento de marca' },
    { metric: '2.1×',  label: 'Engagement en redes' },
    { metric: '4 sem', label: 'Tiempo de entrega' },
    { metric: '100%',  label: 'Assets aprobados en primera revisión' },
  ],
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex">
      <div className="flex-1 min-w-0">

        {/* Resumen */}
        <section id="resumen" className="px-6 md:px-12 pt-[104px] pb-[104px] border-b border-neutral-200">
          <div className="max-w-[882px] mx-auto">
            <Link
              href="/lofi/trabajos"
              className="inline-block text-xs font-mono text-neutral-400 hover:text-neutral-700 transition-colors mb-12"
            >
              ← Todos los proyectos
            </Link>

            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">{project.category}</span>
              <span className="text-neutral-300">·</span>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">{project.sector}</span>
              <span className="text-neutral-300">·</span>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">{project.year}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-6 max-w-[20ch]">
              {project.title}
            </h1>

            <p className="text-base text-neutral-500 leading-relaxed mb-10 max-w-[52ch]">
              {project.challenge}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-neutral-500 border border-neutral-200 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Hero visual */}
        <section className="border-b border-neutral-200">
          <div className="aspect-[16/7] bg-neutral-100" />
        </section>

        {/* Proceso */}
        <section id="proceso" className="px-6 md:px-12 py-[104px] border-b border-neutral-200">
          <div className="max-w-[882px] mx-auto">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-16">
              Proceso
            </h2>

            <p className="text-base text-neutral-600 leading-relaxed mb-16 max-w-[52ch]">
              {project.solution}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {project.process.map((p) => (
                <div key={p.step}>
                  <p className="text-xs font-mono text-neutral-400 mb-4">{p.step}</p>
                  <p className="text-sm font-semibold text-neutral-800 mb-2">{p.title}</p>
                  <p className="text-sm text-neutral-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Galería */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[4/3] bg-neutral-100 rounded-lg" />
              ))}
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section id="resultados" className="px-6 md:px-12 py-[120px] border-b border-neutral-200 bg-neutral-50">
          <div className="max-w-[882px] mx-auto">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-16">
              Resultados
            </h2>

            <p className="text-2xl md:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-16 max-w-[24ch]">
              {project.metric}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
              {project.results.map((r) => (
                <div key={r.label}>
                  <p className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight mb-2">
                    {r.metric}
                  </p>
                  <p className="text-xs text-neutral-500 leading-snug">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Siguiente */}
        <section id="siguiente" className="px-6 md:px-12 py-[120px]">
          <div className="max-w-[882px] mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-10">
              Siguiente proyecto
            </p>

            <Link href="/lofi/trabajos" className="group flex items-end justify-between gap-6 border border-neutral-200 rounded-xl p-8 hover:bg-neutral-50 transition-colors">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">Performance</p>
                <p className="text-2xl font-black text-neutral-900 tracking-tight leading-tight">
                  Campaña Meta + TikTok para marca local
                </p>
              </div>
              <span className="text-neutral-400 group-hover:text-neutral-900 transition-colors text-2xl shrink-0">→</span>
            </Link>
          </div>
        </section>

      </div>

      <SectionNav sections={sections} />
    </div>
  )
}
