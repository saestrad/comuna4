'use client'

import { useState } from 'react'
import { MockPage } from '@/components/mock/MockPage'

const disciplines = ['Todos', 'Branding', 'Contenido', 'Producción', 'Digital']
const sectors = ['Todos', 'Moda', 'Gastronomía', 'Tecnología', 'Cultura', 'Inmobiliario']

export default function TrabajosPage() {
  const [discipline, setDiscipline] = useState('Todos')
  const [sector, setSector] = useState('Todos')

  return (
    <div>
      {/* Filtros — patrón Pentagram: disciplina + sector */}
      <div className="border-b border-dashed border-neutral-300 px-6 py-4 font-mono bg-neutral-50">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs uppercase tracking-widest text-neutral-400 w-20 shrink-0">Disciplina</span>
            <div className="flex gap-2 flex-wrap">
              {disciplines.map((d) => (
                <button
                  key={d}
                  onClick={() => setDiscipline(d)}
                  className={[
                    'text-xs px-3 py-1 rounded border transition-colors',
                    discipline === d
                      ? 'border-neutral-900 bg-neutral-900 text-white'
                      : 'border-dashed border-neutral-400 text-neutral-500 hover:border-neutral-600 hover:text-neutral-800',
                  ].join(' ')}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs uppercase tracking-widest text-neutral-400 w-20 shrink-0">Sector</span>
            <div className="flex gap-2 flex-wrap">
              {sectors.map((s) => (
                <button
                  key={s}
                  onClick={() => setSector(s)}
                  className={[
                    'text-xs px-3 py-1 rounded border transition-colors',
                    sector === s
                      ? 'border-neutral-900 bg-neutral-900 text-white'
                      : 'border-dashed border-neutral-400 text-neutral-500 hover:border-neutral-600 hover:text-neutral-800',
                  ].join(' ')}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          {(discipline !== 'Todos' || sector !== 'Todos') && (
            <p className="text-xs text-neutral-400">
              Filtrando: <span className="text-neutral-700">{discipline}</span> · <span className="text-neutral-700">{sector}</span>
              {' '}—{' '}
              <button onClick={() => { setDiscipline('Todos'); setSector('Todos') }} className="underline hover:text-neutral-900">
                limpiar
              </button>
            </p>
          )}
        </div>
      </div>

      <MockPage
        title="Trabajos"
        badge="Capa pública — portafolio"
        description="Grid filtrable de casos de estudio. Cada proyecto lleva a una página propia con contexto, reto, solución, resultados y créditos del equipo."
        sections={[
          {
            name: 'Estructura de cada card de proyecto',
            items: [
              'Imagen / video thumbnail',
              'Cliente o nombre del proyecto',
              'Tipo de servicio (badge de disciplina)',
              'Sector (badge secundario)',
              'Hover → overlay con descripción corta + CTA ver caso',
            ],
          },
          {
            name: 'Comportamiento (v3)',
            items: [
              'Filtros con animación suave (Framer Motion layout animations)',
              'Grid responsivo con efecto cinematográfico en hover',
              'URL-driven: /trabajos?disciplina=branding&sector=moda',
            ],
          },
        ]}
        links={[
          { href: '/trabajos/caso-ejemplo', label: 'Ver caso de estudio (ejemplo)' },
        ]}
      />
    </div>
  )
}
