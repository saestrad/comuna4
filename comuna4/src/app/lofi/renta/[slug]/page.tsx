'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { use, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { LofiCard } from '@/components/lofi/LofiCard'
import { BackLink } from '@/components/lofi/BackLink'

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


export default function RentaDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const router = useRouter()
  const [duracion, setDuracion] = useState<'hora' | 'dia'>('hora')

  const price = duracion === 'hora' ? item.priceHour : item.priceDay
  const priceLabel = duracion === 'hora' ? 'por hora' : 'por día completo (8h)'

  function handleConfirmar() {
    router.push(`/lofi/renta/solicitud?espacio=${slug}&duracion=${duracion}`)
  }

  return (
    <div>
      <div className="pb-24 lg:pb-0">

        {/* Detalle */}
        <section id="detalle" className="px-6 md:px-12 pt-[104px] pb-[104px] border-b border-neutral-200">
          <div className="max-w-[882px] mx-auto">
            <BackLink href="/lofi/renta" label="Todos los espacios y equipos" />

            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">{item.category}</span>
              <span className="text-neutral-300">·</span>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">{item.size}</span>
            </div>

            <h1 className="text-[clamp(1.875rem,4.5vw,3rem)] font-display font-semibold text-neutral-900 tracking-tight leading-tight mb-6">
              {item.name}
            </h1>

            <p className="text-base text-neutral-500 leading-relaxed mb-10 max-w-[52ch]">
              {item.desc}
            </p>

            {/* Galería */}
            <div className="grid grid-cols-4 gap-3">
              <div className="col-span-4 md:col-span-3 aspect-[4/3] lofi-img rounded-2xl border border-neutral-200" />
              <div className="hidden md:flex flex-col gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex-1 lofi-img rounded-2xl border border-neutral-200" />
                ))}
              </div>
            </div>

            {/* CTA de reserva */}
            <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-display font-semibold text-neutral-900">{price}</span>
                  <span className="text-sm text-neutral-400">{priceLabel}</span>
                </div>
                <div className="flex gap-1.5">
                  {(['hora', 'dia'] as const).map((d) => (
                    <button key={d} onClick={() => setDuracion(d)}
                      className={['text-xs px-3 py-1.5 rounded-full border transition-colors',
                        duracion === d ? 'bg-neutral-900 text-white border-neutral-900' : 'border-neutral-200 bg-white text-neutral-400 hover:border-neutral-400 hover:text-neutral-700'].join(' ')}>
                      Por {d}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                <button onClick={handleConfirmar}
                  className="inline-flex items-center gap-2 text-sm font-medium px-7 py-3.5 rounded-full bg-accent text-accent-foreground hover:opacity-90 transition-colors">
                  Solicitar reserva <ArrowRight size={14} className="shrink-0" />
                </button>
                <p className="text-xs text-neutral-400">Respuesta en menos de 2 h</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
              {similar.map((s) => (
                <LofiCard
                  key={s.slug}
                  href={`/lofi/renta/${s.slug}`}
                  title={`${s.category} — ${s.name}`}
                  subtitle={s.size}
                />
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* Mobile booking bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-neutral-200 px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-base font-bold text-neutral-900">
            {price}
            <span className="text-xs font-normal text-neutral-500 ml-1">/ {duracion === 'hora' ? 'hora' : 'día'}</span>
          </p>
        </div>
        <button
          onClick={handleConfirmar}
          className="shrink-0 inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full bg-accent text-accent-foreground hover:opacity-90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          Solicitar reserva <ArrowRight size={14} className="shrink-0" />
        </button>
      </div>

    </div>
  )
}
