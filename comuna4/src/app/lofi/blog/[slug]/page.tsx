import Link from 'next/link'
import { SectionNav } from '@/components/lofi/SectionNav'

const sections = [
  { id: 'articulo',   label: 'Artículo' },
  { id: 'cuerpo',     label: 'Contenido' },
  { id: 'datos',      label: 'Datos' },
  { id: 'mas',        label: 'Más' },
]

const related = [
  { title: 'Branding en la era post-logo: sistemas visuales que escalan', category: 'Branding', readTime: '8 min', slug: 'branding-post-logo-sistemas' },
  { title: 'TikTok Shop para el mercado hispano: qué vende y por qué', category: 'Performance', readTime: '7 min', slug: 'tiktok-shop-mercado-hispano' },
  { title: 'Puerto Rico como hub creativo: ventajas reales para marcas americanas', category: 'Industria', readTime: '9 min', slug: 'puerto-rico-hub-creativo' },
]

const article = {
  title: 'AI Overviews y el fin del SEO de contenido genérico',
  category: 'Industria',
  date: 'Mayo 2026',
  readTime: '6 min',
  excerpt: 'Google redujo el tráfico a contenido sin perspectiva propia. Lo que sobrevive y lo que no.',
  body: [
    'En marzo de 2026, Google comenzó a mostrar AI Overviews en más del 60% de las búsquedas informacionales. El resultado: el tráfico orgánico a artículos genéricos cayó un promedio de 45% en 90 días.',
    'Lo que sobrevive no es el volumen de palabras ni la densidad de keywords. Es la perspectiva. El dato propio. La experiencia de primera mano que ningún modelo puede sintetizar porque no existía antes de que tú lo escribieras.',
    'Para marcas y agencias, esto cambia el brief de contenido completamente. Ya no se trata de rankear por un término. Se trata de ser la fuente que nadie más puede replicar.',
  ],
  pullQuote: 'El contenido que sobrevive al AI Overview es el que no podría haber generado la IA porque viene de experiencia directa.',
  insight: {
    stat: '45%',
    label: 'Caída en tráfico orgánico a contenido genérico en 90 días',
    context: 'Dato propio de análisis de 12 clientes de agencia entre enero y abril 2026. Sectores: gastronomía, moda, servicios profesionales.',
  },
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  await params
  return (
    <div className="flex">
      <div className="flex-1 min-w-0">

        {/* Hero */}
        <section id="articulo" className="px-6 md:px-12 pt-[104px] pb-[104px] border-b border-neutral-200">
          <div className="max-w-[882px] mx-auto">
            <Link
              href="/lofi/blog"
              className="inline-block text-xs font-mono text-neutral-400 hover:text-neutral-700 transition-colors mb-12"
            >
              ← Todos los artículos
            </Link>

            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">{article.category}</span>
              <span className="text-neutral-300">·</span>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">{article.date}</span>
              <span className="text-neutral-300">·</span>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">{article.readTime} de lectura</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-black text-neutral-900 tracking-tight leading-tight mb-6 max-w-[22ch]">
              {article.title}
            </h1>

            <p className="text-base text-neutral-500 leading-relaxed max-w-[52ch]">
              {article.excerpt}
            </p>
          </div>
        </section>

        {/* Cover image */}
        <section className="border-b border-neutral-200">
          <div className="aspect-[16/7] lofi-img" />
        </section>

        {/* Cuerpo */}
        <section id="cuerpo" className="px-6 md:px-12 py-[104px] border-b border-neutral-200">
          <div className="max-w-[882px] mx-auto">
            <div className="flex flex-col gap-6 text-base text-neutral-700 leading-relaxed max-w-[60ch]">
              {article.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Pull quote */}
            <blockquote className="my-16">
              <p className="text-4xl font-black text-neutral-200 leading-none mb-2 select-none">"</p>
              <p className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight leading-tight max-w-[34ch]">
                {article.pullQuote}
              </p>
            </blockquote>

            {/* Inline image */}
            <div className="aspect-[16/9] lofi-img rounded-lg border border-neutral-200 mb-6" />
            <p className="text-xs text-neutral-400 font-mono">
              Análisis de impresiones orgánicas enero–abril 2026. Fuente: Search Console de 12 clientes.
            </p>
          </div>
        </section>

        {/* Datos */}
        <section id="datos" className="px-6 md:px-12 py-[120px] border-b border-neutral-200 bg-neutral-50">
          <div className="max-w-[882px] mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-16">Datos</p>

            <p className="text-6xl md:text-8xl font-display font-black text-neutral-900 tracking-tight leading-none mb-4">
              {article.insight.stat}
            </p>
            <p className="text-base text-neutral-700 font-semibold mb-6 max-w-[38ch]">
              {article.insight.label}
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-[52ch]">
              {article.insight.context}
            </p>

            {/* Simulated data table */}
            <div className="mt-16 grid grid-cols-3 gap-px bg-neutral-200">
              {['Genérico', 'Curado', 'Propio'].map((col, i) => (
                <div key={col} className="bg-white p-6">
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">{col}</p>
                  <p className="text-2xl font-black text-neutral-900">
                    {i === 0 ? '−45%' : i === 1 ? '−12%' : '+18%'}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">variación de tráfico</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Más artículos */}
        <section id="mas" className="px-6 md:px-12 py-[120px]">
          <div className="max-w-[882px] mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-12">
              Más artículos
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
              {related.map((a) => (
                <Link key={a.slug} href={`/lofi/blog/${a.slug}`} className="group block">
                  <div className="aspect-[16/9] lofi-img rounded-lg border border-neutral-200 mb-4" />
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">{a.category}</span>
                    <span className="text-neutral-300">·</span>
                    <span className="text-xs text-neutral-500">{a.readTime}</span>
                  </div>
                  <p className="text-sm font-semibold text-neutral-800 leading-snug group-hover:text-neutral-600 transition-colors">
                    {a.title}
                  </p>
                </Link>
              ))}
            </div>

            <div className="border-t border-neutral-200 pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-sm font-semibold text-neutral-800 mb-1">¿Tienes un proyecto?</p>
                <p className="text-xs text-neutral-500">Respondemos en menos de 24 horas.</p>
              </div>
              <Link
                href="/lofi/solicitud"
                className="shrink-0 inline-block bg-c4-brand text-white text-sm font-medium px-8 py-4 rounded-full transition-colors hover:bg-c4-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-c4-brand focus-visible:ring-offset-2"
              >
                Solicitar →
              </Link>
            </div>
          </div>
        </section>

      </div>

      <SectionNav sections={sections} />
    </div>
  )
}
