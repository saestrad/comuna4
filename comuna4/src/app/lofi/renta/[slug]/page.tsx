'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
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

const WEEK_DAYS = ['L', 'M', 'X', 'J', 'V', 'S', 'D']
const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const BOOKED = new Set([7, 8, 14, 21, 22])
const WEEKENDS = new Set([4, 5, 11, 12, 18, 19, 25, 26])

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstWeekday(year: number, month: number) {
  const day = new Date(year, month, 1).getDay()
  return day === 0 ? 6 : day - 1
}

export default function RentaDetail({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [duracion, setDuracion] = useState<'hora' | 'dia'>('hora')
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [calYear, setCalYear] = useState(2026)
  const [calMonth, setCalMonth] = useState(4) // Mayo = 4

  const daysInMonth = getDaysInMonth(calYear, calMonth)
  const firstWeekday = getFirstWeekday(calYear, calMonth)
  const today = new Date()

  function isBooked(d: number) {
    return calMonth === 4 && calYear === 2026 && BOOKED.has(d)
  }
  function isWeekend(d: number) {
    return calMonth === 4 && calYear === 2026 && WEEKENDS.has(d)
  }
  function isPast(d: number) {
    const date = new Date(calYear, calMonth, d)
    return date < new Date(today.getFullYear(), today.getMonth(), today.getDate())
  }
  function isAvailable(d: number) {
    return !isBooked(d) && !isWeekend(d) && !isPast(d)
  }

  function prevMonth() {
    if (calMonth === 0) { setCalMonth(11); setCalYear(y => y - 1) }
    else setCalMonth(m => m - 1)
    setSelectedDay(null)
  }
  function nextMonth() {
    if (calMonth === 11) { setCalMonth(0); setCalYear(y => y + 1) }
    else setCalMonth(m => m + 1)
    setSelectedDay(null)
  }

  function handleReservar() {
    const fecha = selectedDay
      ? `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`
      : undefined
    const url = fecha
      ? `/lofi/solicitud?espacio=${params.slug}&fecha=${fecha}`
      : `/lofi/solicitud?espacio=${params.slug}`
    router.push(url)
  }

  const price = duracion === 'hora' ? item.priceHour : item.priceDay
  const priceLabel = duracion === 'hora' ? 'por hora' : 'por día completo (8h)'

  // Build calendar cells: empty prefix + days
  const cells: (number | null)[] = [
    ...Array(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  // Pad to complete last row
  while (cells.length % 7 !== 0) cells.push(null)

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

      {/* Panel de reserva — desktop sticky, full height, no scroll */}
      <aside className="hidden lg:flex flex-col sticky top-0 h-screen w-[300px] shrink-0 border-l border-neutral-200 bg-white">

        {/* Header */}
        <div className="px-5 pt-6 pb-4 border-b border-neutral-100">
          <p className="text-sm font-black text-neutral-900 leading-tight">{item.name}</p>
          <p className="text-xs font-mono text-neutral-400 mt-0.5">{item.category} · {item.size}</p>
        </div>

        {/* Duración */}
        <div className="px-5 py-4 border-b border-neutral-100">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2.5">Duración</p>
          <div className="flex gap-2">
            {(['hora', 'dia'] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDuracion(d)}
                className={[
                  'flex-1 text-xs py-2 rounded-full border transition-colors',
                  duracion === d
                    ? 'border-neutral-900 bg-neutral-900 text-white'
                    : 'border-neutral-200 text-neutral-500 hover:border-neutral-500',
                ].join(' ')}
              >
                Por {d}
              </button>
            ))}
          </div>
        </div>

        {/* Mini daypicker — flex-1 para ocupar el espacio restante */}
        <div className="flex-1 flex flex-col px-5 py-4 min-h-0">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">Fecha</p>

          {/* Month nav */}
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={prevMonth}
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors text-neutral-500 text-sm"
            >
              ‹
            </button>
            <p className="text-xs font-semibold text-neutral-800">
              {MONTHS[calMonth]} {calYear}
            </p>
            <button
              onClick={nextMonth}
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors text-neutral-500 text-sm"
            >
              ›
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 mb-1">
            {WEEK_DAYS.map((d) => (
              <div key={d} className="text-[10px] font-mono text-neutral-400 text-center py-1">{d}</div>
            ))}
          </div>

          {/* Calendar grid — flex-1 distributes rows evenly */}
          <div className="flex-1 flex flex-col gap-0.5">
            {Array.from({ length: cells.length / 7 }, (_, row) => (
              <div key={row} className="flex-1 grid grid-cols-7 gap-0.5">
                {cells.slice(row * 7, row * 7 + 7).map((d, col) => {
                  if (!d) return <div key={col} />
                  const avail = isAvailable(d)
                  const selected = selectedDay === d
                  const booked = isBooked(d)
                  const past = isPast(d)
                  return (
                    <button
                      key={col}
                      disabled={!avail}
                      onClick={() => setSelectedDay(selected ? null : d)}
                      title={booked ? 'Reservado' : isWeekend(d) ? 'Fin de semana' : past ? 'Fecha pasada' : undefined}
                      className={[
                        'w-full h-full rounded-md text-xs transition-colors flex items-center justify-center',
                        selected
                          ? 'bg-neutral-900 text-white font-semibold'
                          : avail
                            ? 'hover:bg-neutral-100 text-neutral-700'
                            : booked
                              ? 'text-neutral-300 line-through'
                              : past
                                ? 'text-neutral-200'
                                : 'text-neutral-300',
                      ].join(' ')}
                    >
                      {d}
                    </button>
                  )
                })}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-3 flex-wrap mt-3 pt-3 border-t border-neutral-100">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-sm bg-neutral-900" />
              <span className="text-[10px] text-neutral-400">Seleccionado</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-sm bg-neutral-200 line-through" />
              <span className="text-[10px] text-neutral-400">Reservado</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-sm bg-neutral-100" />
              <span className="text-[10px] text-neutral-400">No disponible</span>
            </div>
          </div>
        </div>

        {/* Precio + CTA — siempre en el fondo */}
        <div className="px-5 py-4 border-t border-neutral-100">
          <div className="flex items-baseline justify-between mb-4">
            <p className="text-2xl font-black text-neutral-900">{price}</p>
            <p className="text-xs text-neutral-400">{priceLabel}</p>
          </div>
          {selectedDay && (
            <p className="text-xs text-neutral-500 mb-3">
              {MONTHS[calMonth]} {selectedDay}, {calYear}
            </p>
          )}
          <button
            onClick={handleReservar}
            className="w-full text-center text-sm font-medium py-3.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-700 transition-colors mb-2"
          >
            {selectedDay ? 'Confirmar fecha →' : 'Solicitar reserva →'}
          </button>
          <p className="text-[10px] text-neutral-400 text-center">Respuesta en menos de 2 horas</p>
        </div>

      </aside>

      {/* Mobile booking bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-neutral-200 px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-base font-black text-neutral-900">
            {price}
            <span className="text-xs font-normal text-neutral-500 ml-1">/ {duracion === 'hora' ? 'hora' : 'día'}</span>
          </p>
        </div>
        <button
          onClick={handleReservar}
          className="shrink-0 text-sm font-medium px-6 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-700 transition-colors"
        >
          Solicitar reserva →
        </button>
      </div>

    </div>
  )
}
