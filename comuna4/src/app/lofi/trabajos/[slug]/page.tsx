import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SectionNav } from '@/components/lofi/SectionNav'

const sections = [
  { id: 'resumen',    label: 'Resumen' },
  { id: 'proceso',    label: 'Proceso' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'siguiente',  label: 'Siguiente' },
]

const projects: Record<string, {
  title: string
  category: string
  sector: string
  year: string
  metric: string
  tags: string[]
  challenge: string
  solution: string
  process: { step: string; title: string; desc: string }[]
  results: { metric: string; label: string }[]
  next: { slug: string; category: string; title: string }
}> = {
  'restaurante-caribeno': {
    title: 'Identidad completa para restaurante de cocina caribeña',
    category: 'Branding',
    sector: 'Gastronomía',
    year: '2025',
    metric: '↑ 40% reconocimiento de marca en 6 meses',
    tags: ['Brand strategy', 'Identidad visual', 'Fotografía', 'Menú'],
    challenge: 'La marca no tenía coherencia visual entre sus puntos de venta, redes sociales y materiales impresos. Cada pieza comunicaba algo distinto.',
    solution: 'Desarrollamos un sistema de identidad completo: logotipo, paleta cromática, tipografía, tono de voz y guidelines de aplicación. Produjimos la sesión fotográfica de lanzamiento.',
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
    next: { slug: 'marca-moda-performance', category: 'Performance', title: 'Campaña Meta + TikTok para marca de moda local' },
  },

  'marca-moda-performance': {
    title: 'Campaña Meta + TikTok para marca de moda local',
    category: 'Performance',
    sector: 'Moda',
    year: '2025',
    metric: '3.2× ROAS sostenido en 90 días',
    tags: ['Meta Ads', 'TikTok Ads', 'Creatives', 'Optimización'],
    challenge: 'La marca invertía en paid media pero sin una estrategia de creativos clara. El ROAS no superaba 1.1× y el costo por adquisición era insostenible.',
    solution: 'Rediseñamos la estructura de campañas y produjimos un banco de 24 creativos nativos para cada plataforma. Implementamos testing A/B sistemático semana a semana.',
    process: [
      { step: '01', title: 'Auditoría', desc: 'Revisión de campañas activas, análisis de creativos y benchmarks del sector moda en PR.' },
      { step: '02', title: 'Estrategia', desc: 'Segmentación por funnel: awareness en TikTok, retargeting y conversión en Meta.' },
      { step: '03', title: 'Producción', desc: '24 creativos en 2 semanas: video vertical, statics y carruseles por cada etapa del funnel.' },
      { step: '04', title: 'Optimización', desc: 'Testing semanal, pausa de creativos bajo el umbral y escala de ganadores.' },
    ],
    results: [
      { metric: '3.2×', label: 'ROAS promedio' },
      { metric: '↓ 38%', label: 'Costo por adquisición' },
      { metric: '24', label: 'Creativos producidos' },
      { metric: '90 d', label: 'Para resultados sostenidos' },
    ],
    next: { slug: 'lanzamiento-audiovisual', category: 'Producción', title: 'Producción audiovisual para lanzamiento de producto' },
  },

  'lanzamiento-audiovisual': {
    title: 'Producción audiovisual para lanzamiento de producto',
    category: 'Producción',
    sector: 'Consumo',
    year: '2025',
    metric: '2.4M impresiones orgánicas',
    tags: ['Video', 'Dirección de arte', 'Post-producción', 'Distribución'],
    challenge: 'El cliente necesitaba un hero video para el lanzamiento nacional de un nuevo producto en menos de 3 semanas, con presupuesto ajustado.',
    solution: 'Produjimos el spot completo en el Ciclorama del Hub: dirección de arte, casting, rodaje en 2 días y post-producción en 5. Entrega en formatos TV, digital y vertical.',
    process: [
      { step: '01', title: 'Preproducción', desc: 'Brief creativo, storyboard, casting y plan de rodaje en 5 días hábiles.' },
      { step: '02', title: 'Rodaje', desc: '2 días en el Ciclorama Profesional del Hub. Equipo propio, sin subcontratar.' },
      { step: '03', title: 'Post-producción', desc: 'Edición, corrección de color, sound design y formatos para cada plataforma.' },
      { step: '04', title: 'Distribución', desc: 'Coordinación con el equipo de medios para activación en TV y digital simultánea.' },
    ],
    results: [
      { metric: '2.4M', label: 'Impresiones orgánicas' },
      { metric: '3 sem', label: 'De brief a entrega' },
      { metric: '6', label: 'Formatos entregados' },
      { metric: '↑ 28%', label: 'Ventas semana de lanzamiento' },
    ],
    next: { slug: 'firma-arquitectura', category: 'Branding', title: 'Rediseño de marca para firma de arquitectura' },
  },

  'firma-arquitectura': {
    title: 'Rediseño de marca para firma de arquitectura',
    category: 'Branding',
    sector: 'Servicios profesionales',
    year: '2024',
    metric: 'Sistema visual completo en 4 semanas',
    tags: ['Rediseño', 'Brand system', 'Web', 'Stationery'],
    challenge: 'La firma tenía 15 años de trayectoria pero su identidad visual no reflejaba el nivel de sus proyectos. Perdían propuestas frente a competidores con mejor imagen.',
    solution: 'Rediseñamos la marca desde cero: nuevo logotipo, sistema tipográfico, paleta y aplicaciones. Incluimos plantillas para propuestas, presentaciones y señalética de obra.',
    process: [
      { step: '01', title: 'Discovery', desc: 'Revisión de portafolio, entrevistas con socios y análisis de competencia local e internacional.' },
      { step: '02', title: 'Concepto', desc: 'Dos direcciones creativas con racional. La firma eligió la dirección y refinamos juntos.' },
      { step: '03', title: 'Sistema', desc: 'Logotipo, paleta, tipografía, iconografía y guía de uso. 48 páginas de brandbook.' },
      { step: '04', title: 'Aplicaciones', desc: 'Papelería, plantillas de propuesta, presentación corporativa y señalética de obra.' },
    ],
    results: [
      { metric: '4 sem', label: 'Tiempo de entrega' },
      { metric: '48 p', label: 'Brandbook completo' },
      { metric: '↑ 60%', label: 'Tasa de cierre de propuestas (6 meses post-lanzamiento)' },
      { metric: '100%', label: 'Socios alineados en primera presentación' },
    ],
    next: { slug: 'ecommerce-performance-max', category: 'Performance', title: 'Google Ads + Performance Max para e-commerce' },
  },

  'ecommerce-performance-max': {
    title: 'Google Ads + Performance Max para e-commerce',
    category: 'Performance',
    sector: 'E-commerce',
    year: '2025',
    metric: '↓ 28% CPA vs campaña anterior',
    tags: ['Google Ads', 'Performance Max', 'Shopping', 'Analytics'],
    challenge: 'El e-commerce tenía campañas de Google activas pero sin estructura ni feed optimizado. El CPA era 2× el objetivo y la atribución estaba rota.',
    solution: 'Reorganizamos la estructura de cuentas, optimizamos el feed de productos y migramos a Performance Max con activos creativos propios por categoría de producto.',
    process: [
      { step: '01', title: 'Auditoría', desc: 'Revisión de cuenta, feed, atribución y competidores en Google Shopping.' },
      { step: '02', title: 'Reestructura', desc: 'Nueva arquitectura de campañas por margen de producto y etapa del funnel.' },
      { step: '03', title: 'Feed y creativos', desc: 'Optimización de títulos, descripciones e imágenes del feed. Producción de assets para PMax.' },
      { step: '04', title: 'Escala', desc: 'Incremento de presupuesto progresivo a medida que el CPA bajó al objetivo.' },
    ],
    results: [
      { metric: '↓ 28%', label: 'Costo por adquisición' },
      { metric: '↑ 2.4×', label: 'ROAS vs período anterior' },
      { metric: '45 d', label: 'Para alcanzar objetivo de CPA' },
      { metric: '↑ 55%', label: 'Ingresos atribuidos a paid search' },
    ],
    next: { slug: 'consultoria-web', category: 'Web', title: 'Sitio web para consultoría de negocios' },
  },

  'consultoria-web': {
    title: 'Sitio web para consultoría de negocios',
    category: 'Web',
    sector: 'B2B',
    year: '2024',
    metric: '↑ 55% tiempo en página',
    tags: ['Web design', 'Copywriting', 'SEO', 'Desarrollo'],
    challenge: 'La consultoría tenía un sitio de 2018 que no generaba leads. Tráfico bajo, bounce rate alto y ningún mecanismo de conversión.',
    solution: 'Rediseñamos el sitio con enfoque en conversión: nueva arquitectura de información, copywriting orientado a resultados y formularios de contacto segmentados por tipo de cliente.',
    process: [
      { step: '01', title: 'Estrategia', desc: 'Análisis de audiencia, mapeo del customer journey y definición de páginas clave.' },
      { step: '02', title: 'Diseño', desc: 'Wireframes, prototipo interactivo y diseño final aprobado en dos rondas de revisión.' },
      { step: '03', title: 'Copywriting', desc: 'Textos orientados a beneficios, no a características. Lenguaje del cliente, no de la firma.' },
      { step: '04', title: 'Desarrollo y SEO', desc: 'Desarrollo en Next.js, optimización técnica y configuración de analytics y conversiones.' },
    ],
    results: [
      { metric: '↑ 55%', label: 'Tiempo en página' },
      { metric: '↓ 42%', label: 'Bounce rate' },
      { metric: '3.2×', label: 'Leads mensuales vs sitio anterior' },
      { metric: '6 sem', label: 'De brief a lanzamiento' },
    ],
    next: { slug: 'restaurante-caribeno', category: 'Branding', title: 'Identidad completa para restaurante de cocina caribeña' },
  },
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug]
  if (!project) notFound()

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
                <span key={tag} className="text-xs font-mono text-neutral-500 border border-neutral-200 px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Hero visual */}
        <section className="border-b border-neutral-200">
          <div className="aspect-[16/7] lofi-img" />
        </section>

        {/* Proceso */}
        <section id="proceso" className="px-6 md:px-12 py-[104px] border-b border-neutral-200">
          <div className="max-w-[882px] mx-auto">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-16">Proceso</h2>

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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[4/3] lofi-img rounded-lg border border-neutral-200" />
              ))}
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section id="resultados" className="px-6 md:px-12 py-[120px] border-b border-neutral-200 bg-neutral-50">
          <div className="max-w-[882px] mx-auto">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-16">Resultados</h2>

            <p className="text-2xl md:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-16 max-w-[24ch]">
              {project.metric}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
              {project.results.map((r) => (
                <div key={r.label}>
                  <p className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight mb-2">{r.metric}</p>
                  <p className="text-xs text-neutral-500 leading-snug">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Siguiente */}
        <section id="siguiente" className="px-6 md:px-12 py-[120px]">
          <div className="max-w-[882px] mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-10">Siguiente proyecto</p>

            <Link
              href={`/lofi/trabajos/${project.next.slug}`}
              className="group flex items-end justify-between gap-6 border border-neutral-200 rounded-xl p-8 hover:bg-neutral-50 transition-colors"
            >
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">{project.next.category}</p>
                <p className="text-2xl font-semibold text-neutral-900 tracking-tight leading-tight">{project.next.title}</p>
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
