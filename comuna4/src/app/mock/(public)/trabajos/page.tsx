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
      <div className="border-b border-dashed border-neutral-300 px-6 md:px-12 py-5 font-mono bg-neutral-50">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="flex items-center gap-3 flex-wrap">
            <span className={['text-xs uppercase tracking-widest w-20 shrink-0 transition-colors', discipline !== 'Todos' ? 'text-accent' : 'text-muted-foreground'].join(' ')}>Disciplina</span>
            <div className="flex gap-2 flex-wrap">
              {disciplines.map((d) => (
                <button
                  key={d}
                  onClick={() => setDiscipline(d)}
                  className={[
                    'text-xs px-3 py-1 rounded border transition-colors',
                    discipline === d
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'border-dashed border-neutral-400 text-neutral-500 hover:border-neutral-600 hover:text-neutral-800',
                  ].join(' ')}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className={['text-xs uppercase tracking-widest w-20 shrink-0 transition-colors', sector !== 'Todos' ? 'text-accent' : 'text-muted-foreground'].join(' ')}>Sector</span>
            <div className="flex gap-2 flex-wrap">
              {sectors.map((s) => (
                <button
                  key={s}
                  onClick={() => setSector(s)}
                  className={[
                    'text-xs px-3 py-1 rounded border transition-colors',
                    sector === s
                      ? 'bg-primary text-primary-foreground border-primary'
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
            suggestion: [
              'Thumbnail: foto o video del resultado final — no del proceso',
              'Nombre del cliente (si aprueba publicarse) o nombre del proyecto',
              'Badge disciplina: Branding / Performance / Web / Producción / Innovación',
              'Resultado visible en la card: "↑42% conversión" o "Lanzamiento en 3 semanas"',
              'Hover: headline del caso + CTA "Ver caso completo →"',
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
          { href: '/mock/trabajos/caso-ejemplo', label: 'Ver caso de estudio (ejemplo)' },
        ]}
      />
    </div>
  )
}
