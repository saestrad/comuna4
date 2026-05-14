'use client'

import { useState } from 'react'
import { MockPage } from '@/components/mock/MockPage'
import { K } from '@/components/mock/MockKeyword'

const categories = ['Todos', 'Branding', 'Performance', 'Producción', 'Industria', 'Cultura C4']

export default function BlogPage() {
  const [category, setCategory] = useState('Todos')

  return (
    <div>
      <div className="border-b border-dashed border-neutral-300 px-6 py-4 font-mono bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className="text-xs uppercase tracking-widest w-24 shrink-0 transition-colors"
              style={category !== 'Todos' ? { color: 'oklch(0.63 0.14 162)' } : { color: 'oklch(0.556 0 0)' }}
            >
              Categoría
            </span>
            <div className="flex gap-2 flex-wrap">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={[
                    'text-xs px-3 py-1 rounded border transition-colors',
                    category === c
                      ? 'border-neutral-900 bg-neutral-900 text-white'
                      : 'border-dashed border-neutral-400 text-neutral-500 hover:border-neutral-600 hover:text-neutral-800',
                  ].join(' ')}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <MockPage
        title="Blog"
        badge="Capa pública"
        description={<>Perspectiva real de industria — lo que estamos viendo, probando y midiendo en 2026. Artículos sobre <K>branding</K>, <K>performance media</K>, <K>producción audiovisual</K> y <K>mercado creativo Puerto Rico</K>.</>}
        links={[{ href: '/blog/articulo-ejemplo', label: 'Ver artículo (ejemplo)' }]}
        sections={[
          {
            name: 'Artículos por categoría',
            items: [
              'Branding — identidad, estrategia y sistemas visuales',
              'Performance — medios, datos y campañas',
              'Producción — foto, video y activaciones',
              'Industria — tendencias y análisis de mercado',
              'Cultura C4 — cómo trabajamos y qué aprendimos',
            ],
            suggestion: [
              'Branding: "Por qué las marcas que triunfaron en 2026 apostaron por sistemas, no por logos"',
              'Performance: "Cómo el auge de los AI Overviews de Google está cambiando el paid media — datos reales"',
              'Performance: "TikTok Shop en 2026: lo que funciona para marcas hispanohablantes y lo que no"',
              'Producción: "Video vertical no es video horizontal recortado — guía de producción para Reels y Shorts en 2026"',
              'Industria: "El mercado creativo de Puerto Rico en 2026: por qué las marcas americanas están mirando hacia aquí"',
              'Cultura C4: "Cómo construimos una marca de restaurante en 5 semanas con un equipo de 4 personas"',
            ],
          },
          {
            name: 'Estructura de cada card de artículo',
            items: [
              'Imagen de portada (thumbnail)',
              'Badge de categoría',
              'Título del artículo',
              'Fecha + tiempo de lectura estimado',
              'Extracto (2 líneas)',
            ],
          },
          {
            name: 'Filtro activo',
            items: [
              `Mostrando: ${category === 'Todos' ? 'todos los artículos' : `categoría "${category}"`}`,
              'En v1: URL-driven (/blog?categoria=branding) para compartir y SEO',
            ],
          },
        ]}
      />
    </div>
  )
}
