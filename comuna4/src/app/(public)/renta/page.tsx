'use client'

import { useState } from 'react'
import { MockPage } from '@/components/mock/MockPage'

const categories = ['Espacios', 'Equipos']
const filters = ['Todos', 'Disponible hoy', 'Por hora', 'Por día']

export default function RentaPage() {
  const [category, setCategory] = useState('Espacios')
  const [filter, setFilter] = useState('Todos')

  return (
    <div>
      <div className="border-b border-dashed border-neutral-300 px-6 py-4 font-mono bg-neutral-50">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs uppercase tracking-widest text-neutral-400 w-20 shrink-0">Categoría</span>
            <div className="flex gap-2">
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
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs uppercase tracking-widest text-neutral-400 w-20 shrink-0">Filtrar</span>
            <div className="flex gap-2 flex-wrap">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={[
                    'text-xs px-3 py-1 rounded border transition-colors',
                    filter === f
                      ? 'border-neutral-900 bg-neutral-900 text-white'
                      : 'border-dashed border-neutral-400 text-neutral-500 hover:border-neutral-600 hover:text-neutral-800',
                  ].join(' ')}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <MockPage
        title={`Renta — ${category}`}
        badge="Capa pública"
        description="Catálogo de espacios y equipos rentables. Cada ítem tiene ficha propia con fotos, specs, precio por hora/día y calendario de disponibilidad en tiempo real."
        links={[
          { href: '/renta/estudio-principal', label: 'Ver ítem (ejemplo)' },
        ]}
        sections={[
          {
            name: category === 'Espacios' ? 'Espacios disponibles' : 'Equipos disponibles',
            items: category === 'Espacios'
              ? ['Estudio principal', 'Sala de reunión A', 'Sala de reunión B', 'Locación exterior']
              : ['Cámara Sony FX3', 'Kit de iluminación LED', 'Audio — Rode Wireless Pro', 'Steadicam'],
          },
          {
            name: 'Estructura de cada ficha',
            items: [
              'Galería de fotos (slider)',
              'Especificaciones técnicas',
              'Precio por hora y por día',
              'Badge de disponibilidad',
              'Calendario en tiempo real (FullCalendar)',
              'Botón "Reservar"',
            ],
          },
        ]}
      />
    </div>
  )
}
