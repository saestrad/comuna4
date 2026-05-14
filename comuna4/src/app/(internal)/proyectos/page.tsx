'use client'

import { useState } from 'react'
import { MockPage } from '@/components/mock/MockPage'

const statuses = ['Todos', 'Briefing', 'En diseño', 'Producción', 'Revisión', 'Entregado']

export default function ProyectosPage() {
  const [status, setStatus] = useState('Todos')

  return (
    <div>
      <div className="border-b border-dashed border-neutral-300 px-6 py-4 font-mono bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs uppercase tracking-widest text-neutral-400 w-16 shrink-0">Estado</span>
            <div className="flex gap-2 flex-wrap">
              {statuses.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={[
                    'text-xs px-3 py-1 rounded border transition-colors',
                    status === s
                      ? 'border-neutral-900 bg-neutral-900 text-white'
                      : 'border-dashed border-neutral-400 text-neutral-500 hover:border-neutral-600 hover:text-neutral-800',
                  ].join(' ')}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <MockPage
        title="Proyectos"
        badge="Capa interna — todos los roles"
        description="Listado de proyectos con estado actual. Cada proyecto tiene timeline de fases, archivos compartidos y equipo asignado."
        links={[
          { href: '/proyectos/proyecto-ejemplo', label: 'Ver detalle de proyecto' },
        ]}
        sections={[
          {
            name: 'Estructura de cada card',
            items: [
              'Nombre del proyecto + cliente',
              'Badge de estado: Briefing / En diseño / Producción / Revisión / Entregado',
              'Fechas: inicio y entrega estimada',
              'Avatares del equipo asignado',
            ],
          },
          {
            name: 'Por rol',
            items: [
              'Collaborator — todos los proyectos de la agencia',
              'Supplier — solo proyectos donde está asignado',
              'Client — solo sus proyectos activos',
            ],
          },
        ]}
      />
    </div>
  )
}
