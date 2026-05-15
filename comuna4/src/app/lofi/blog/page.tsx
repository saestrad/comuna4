'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FilterChips } from '@/components/lofi/FilterChips'

const categories = ['Todos', 'Branding', 'Performance', 'Producción', 'Industria', 'Cultura C4']

const articles = [
  { title: 'AI Overviews y el fin del SEO de contenido genérico', category: 'Industria', date: 'Mayo 2026', readTime: '6 min', excerpt: 'Google redujo el tráfico a contenido sin perspectiva propia. Lo que sobrevive y lo que no.', slug: 'ai-overviews-seo-2026' },
  { title: 'Branding en la era post-logo: sistemas visuales que escalan', category: 'Branding', date: 'Abril 2026', readTime: '8 min', excerpt: 'Las marcas que funcionan en 2026 no tienen logos bonitos. Tienen sistemas.', slug: 'branding-post-logo-sistemas' },
  { title: 'TikTok Shop para el mercado hispano: qué vende y por qué', category: 'Performance', date: 'Abril 2026', readTime: '7 min', excerpt: 'Social commerce cruzó $100B. Lo que funciona para marcas hispanohablantes.', slug: 'tiktok-shop-mercado-hispano' },
  { title: 'Video vertical no es video horizontal recortado', category: 'Producción', date: 'Marzo 2026', readTime: '5 min', excerpt: 'Guía de producción para Reels y Shorts. Encuadre, ritmo, audio y CTAs.', slug: 'produccion-video-vertical-2026' },
  { title: 'Puerto Rico como hub creativo: ventajas reales para marcas americanas', category: 'Industria', date: 'Marzo 2026', readTime: '9 min', excerpt: 'Por qué marcas de NYC y Miami están moviendo producción a Puerto Rico en 2026.', slug: 'puerto-rico-hub-creativo' },
  { title: 'Cómo construimos una marca de restaurante en 5 semanas', category: 'Cultura C4', date: 'Febrero 2026', readTime: '10 min', excerpt: 'Proceso completo, decisiones difíciles y lo que haríamos diferente.', slug: 'marca-restaurante-5-semanas' },
]

export default function LofiBlog() {
  const [active, setActive] = useState('Todos')
  const filtered = active === 'Todos' ? articles : articles.filter((a) => a.category === active)

  return (
    <div>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-[104px] pb-[104px] border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">Blog</p>
          <h1 className="text-[clamp(2.25rem,5.5vw,3.75rem)] font-display font-semibold text-neutral-900 tracking-tight leading-none mb-6 max-w-[18ch]">
            Perspectiva de industria.
          </h1>
          <p className="text-base text-neutral-500 leading-relaxed max-w-[44ch]">
            Lo que estamos viendo, probando y midiendo. Datos reales, sin contenido genérico de agencia.
          </p>
        </div>
      </section>

      <FilterChips options={categories} active={active} onChange={setActive} />

      {/* Articles */}
      <section className="px-6 md:px-12 py-[104px]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-8">
            {active === 'Todos' ? 'Todos los artículos' : active} — {filtered.length} {filtered.length === 1 ? 'artículo' : 'artículos'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {filtered.map((a) => (
              <Link key={a.slug} href={`/lofi/blog/${a.slug}`} className="group block">
                <div className="aspect-[4/3] lofi-img rounded-2xl border border-neutral-200 mb-6" />
                <h3 className="text-base font-semibold text-neutral-900 leading-snug mb-2 group-hover:text-neutral-500 transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed line-clamp-2">{a.excerpt}</p>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-sm text-neutral-500 py-16 text-center">
              No hay artículos en esta categoría aún.
            </p>
          )}
        </div>
      </section>

    </div>
  )
}
