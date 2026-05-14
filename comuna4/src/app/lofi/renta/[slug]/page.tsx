'use client'

import Link from 'next/link'
import { useState } from 'react'

const item = {
  name: 'Ciclorama Profesional',
  category: 'Estudios',
  size: "25' × 25'",
  desc: 'Perfecto para producciones publicitarias, fotografía de productos y creación de contenido. Fondo infinito blanco.',
  includes: [
    'Fondo blanco infinito (sweep)',
    'Iluminación de relleno básica incluida',
    'Estacionamiento para equipo de producción',
    'Sala de maquillaje y vestuario',
    'Acceso a sala de conferencias',
    'Café, agua y snacks',
  ],
  requires: [
    'Seguro de responsabilidad (lo gestionamos por ti)',
    'Depósito reembolsable del 25%',
    'Aviso de 48h para cancelación sin cargo',
  ],
  priceHour: '$150',
  priceDay: '$600',
}

const similar = [
  { name: 'Estudio de Cocina', size: "25' × 25'", category: 'Estudios', slug: 'estudio-cocina' },
  { name: 'Estudio Multiusos', size: "25' × 25'", category: 'Estudios', slug: 'estudio-multiusos' },
  { name: 'Sony FX3 Full-Frame Cinema', size: 'Con baterías y tarjetas', category: 'Cámaras', slug: 'sony-fx3' },
]

const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D']
const calDays = Array.from({ length: 35 }, (_, i) => {
  const d = i - 2
  const available = d > 0 && d <= 31 && ![4, 5, 11, 12, 18, 19, 25, 26].includes(d)
  const booked = [7, 8, 14, 21, 22].includes(d)
  return { d, available, booked }
})

export default function RentaDetail({ params }: { params: { slug: string } }) {
  const [duracion, setDuracion] = useState<'hora' | 'dia'>('hora')

  return (
    <div className="flex">
      <div className="flex-1 min-w-0">

        {/* Detalle */}
        <section id="detalle" className="px-6 md:px-12 pt-[104px] pb-[104px] border-b border-neutral-200">
          <div className="max-w-[882px] mx-auto">
            <Link
              href="/lofi/renta"
              className="inline-block text-xs font-mono text-neutral-400 hover:text-neutral-700 transition-colors mb-12"
            >
              ← Todos los espacios y equipos
            </Link>

            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">{item.category}</span>
              <span className="text-neutral-300">·</span>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">{item.size}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-6">
              {item.name}
            </h1>

            <p className="text-base text-neutral-500 leading-relaxed mb-10 max-w-[52ch]">
              {item.desc}
            </p>

            {/* Galería */}
            <div className="grid grid-cols-4 gap-3">
              <div className="col-span-4 md:col-span-3 aspect-[4/3] bg-neutral-100 rounded-lg border border-neutral-200" />
              <div className="hidden md:flex flex-col gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex-1 bg-neutral-100 rounded-lg border border-neutral-200" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specs */}
        <section id="specs" className="px-6 md:px-12 py-[104px] border-b border-neutral-200">
          <div className="max-w-[882px] mx-auto">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-12">Especificaciones</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-sm font-semibold text-neutral-800 mb-6">Incluido</p>
                <ul className="flex flex-col gap-3">
                  {item.includes.map((s) => (
                    <li key={s} className="text-sm text-neutral-600 flex items-start gap-2">
                      <span className="text-neutral-300 shrink-0 mt-0.5">—</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-800 mb-6">Requisitos</p>
                <ul className="flex flex-col gap-3">
                  {item.requires.map((r) => (
                    <li key={r} className="text-sm text-neutral-600 flex items-start gap-2">
                      <span className="text-neutral-300 shrink-0 mt-0.5">—</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Disponibilidad */}
        <section id="disponibilidad" className="px-6 md:px-12 py-[104px] border-b border-neutral-200 bg-neutral-50">
          <div className="max-w-[882px] mx-auto">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-12">Disponibilidad — Mayo 2026</h2>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {days.map((d) => (
                <div key={d} className="text-xs font-mono text-neutral-400 text-center py-1">{d}</div>
              ))}
              {calDays.map(({ d, available, booked }, i) => (
                <div
                  key={i}
                  className={[
                    'aspect-square rounded-lg flex items-center justify-center text-xs transition-colors',
                    d <= 0 || d > 31 ? 'bg-transparent' :
                    booked ? 'bg-neutral-200 text-neutral-400 line-through' :
                    available ? 'bg-white border border-neutral-200 text-neutral-700 hover:border-neutral-900 cursor-pointer' :
                    'bg-neutral-100 text-neutral-300',
                  ].join(' ')}
                >
                  {d > 0 && d <= 31 ? d : ''}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-4">
              {[
                { color: 'bg-white border border-neutral-200', label: 'Disponible' },
                { color: 'bg-neutral-200', label: 'Reservado' },
                { color: 'bg-neutral-100', label: 'No disponible' },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-sm ${l.color}`} />
                  <span className="text-xs text-neutral-500">{l.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Similares */}
        <section id="similares" className="px-6 md:px-12 py-[120px]">
          <div className="max-w-[882px] mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-12">También disponible</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {similar.map((s) => (
                <Link key={s.slug} href={`/lofi/renta/${s.slug}`} className="group block">
                  <div className="aspect-[4/3] bg-neutral-100 rounded-lg border border-neutral-200 mb-4" />
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1.5">
                    {s.category} · {s.size}
                  </p>
                  <p className="text-sm font-semibold text-neutral-800 group-hover:text-neutral-600 transition-colors">
                    {s.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* Panel de reserva — sticky en desktop, fijo abajo en mobile */}
      <aside className="hidden lg:flex flex-col sticky top-0 self-start h-screen w-72 shrink-0 border-l border-neutral-200 bg-white">
        <div className="flex flex-col gap-0 divide-y divide-neutral-200 overflow-y-auto">

          {/* Nombre */}
          <div className="px-6 pt-8 pb-6">
            <p className="text-sm font-black text-neutral-900 leading-tight mb-1">{item.name}</p>
            <p className="text-xs font-mono text-neutral-500">{item.size}</p>
          </div>

          {/* Fecha */}
          <div className="px-6 py-6">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">Fecha</p>
            <div className="w-full border border-neutral-200 rounded-full px-4 py-2.5 text-sm text-neutral-400 bg-neutral-50">
              Selecciona una fecha
            </div>
          </div>

          {/* Duración */}
          <div className="px-6 py-6">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">Duración</p>
            <div className="flex gap-2">
              {(['hora', 'dia'] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setDuracion(d)}
                  className={[
                    'flex-1 text-xs px-3 py-2.5 rounded-full border transition-colors',
                    duracion === d
                      ? 'border-neutral-900 bg-neutral-900 text-white'
                      : 'border-neutral-300 text-neutral-500 hover:border-neutral-600',
                  ].join(' ')}
                >
                  Por {d}
                </button>
              ))}
            </div>
          </div>

          {/* Precio */}
          <div className="px-6 py-6">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">Precio estimado</p>
            <p className="text-2xl font-black text-neutral-900">
              {duracion === 'hora' ? item.priceHour : item.priceDay}
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              por {duracion === 'hora' ? 'hora' : 'día completo (8h)'}
            </p>
          </div>

          {/* CTA */}
          <div className="px-6 py-6">
            <Link
              href="/lofi/solicitud"
              className="block text-center text-sm font-medium px-5 py-3.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-700 transition-colors mb-3"
            >
              Solicitar reserva →
            </Link>
            <p className="text-xs text-neutral-400 text-center">Respuesta en menos de 2 horas</p>
          </div>

        </div>
      </aside>

      {/* Mobile booking bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-neutral-200 px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-base font-black text-neutral-900">
            {duracion === 'hora' ? item.priceHour : item.priceDay}
            <span className="text-xs font-normal text-neutral-500 ml-1">/ {duracion === 'hora' ? 'hora' : 'día'}</span>
          </p>
        </div>
        <Link
          href="/lofi/solicitud"
          className="shrink-0 text-sm font-medium px-6 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-700 transition-colors"
        >
          Solicitar reserva →
        </Link>
      </div>

    </div>
  )
}
