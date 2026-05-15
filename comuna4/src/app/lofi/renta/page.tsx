'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cardVariants } from '@/lib/motion'

const categories = ['Todos', 'Estudios', 'Cámaras', 'Iluminación', 'Audio']

const amenities = [
  'Cámaras, luces y props disponibles',
  'Estacionamiento amplio incluido',
  'Sala de conferencias',
  'Booths privados (2-4 personas)',
  'Café y agua gratuitos',
]

const items = [
  { name: 'Ciclorama Profesional', category: 'Estudios', size: "25' × 25'", desc: 'Perfecto para producciones publicitarias, fotografía de productos y creación de contenido. Fondo infinito blanco.', slug: 'ciclorama-profesional' },
  { name: 'Estudio de Cocina', category: 'Estudios', size: "25' × 25'", desc: 'Diseñado de forma modular para crear contenido gastronómico variado con calidad de cine.', slug: 'estudio-cocina' },
  { name: 'Estudio Multiusos', category: 'Estudios', size: "25' × 25'", desc: 'Desde entrevistas hasta campañas digitales. Un espacio flexible para crear contenido en cualquier formato.', slug: 'estudio-multiusos' },
  { name: 'Sony FX3 Full-Frame Cinema', category: 'Cámaras', size: 'Con baterías y tarjetas', desc: 'Cámara de cine full-frame compacta. Ideal para producciones de alto nivel con presupuesto eficiente.', slug: 'sony-fx3' },
  { name: 'Kit de iluminación LED — 3 puntos', category: 'Iluminación', size: 'Incluye soportes y difusores', desc: 'Setup de 3 puntos con LEDs de temperatura ajustable. Para entrevistas, productos y lifestyle.', slug: 'kit-led-3-puntos' },
  { name: 'Rode NTG5 + grabadora portátil', category: 'Audio', size: 'Ideal para entrevistas y voz', desc: 'Micrófono de cañón de referencia con grabadora portátil de alta resolución.', slug: 'rode-ntg5' },
]


export default function LofiRenta() {
  const [active, setActive] = useState('Todos')
  const filtered = active === 'Todos' ? items : items.filter((i) => i.category === active)

  return (
    <div>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-[140px] pb-20 border-b border-neutral-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">Renta</p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-display font-semibold text-neutral-900 tracking-tight leading-none mb-6 max-w-[16ch]">
              Tu idea necesita un espacio. Nosotros lo tenemos.
            </h1>
            <p className="text-base text-neutral-500 leading-relaxed">
              Infraestructura pensada para el crecimiento de la industria creativa en Puerto Rico.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">Incluido en todos los espacios</p>
            <ul className="flex flex-col gap-2">
              {amenities.map((a, i) => (
                <motion.li
                  key={a}
                  initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.3 }}
                  className="text-sm text-neutral-600 flex items-start gap-2"
                >
                  <span className="text-neutral-300 shrink-0 mt-0.5">—</span>
                  {a}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <div className="border-b border-neutral-200 py-5 bg-neutral-50">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-none px-6 md:px-12">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 shrink-0">Categoría</span>
          {categories.map((c) => (
            <motion.button
              key={c}
              onClick={() => setActive(c)}
              whileTap={{ scale: 0.95 }}
              className={[
                'text-xs px-4 py-2.5 rounded-full border transition-colors shrink-0',
                active === c
                  ? 'bg-neutral-900 text-white border-neutral-900'
                  : 'border-neutral-300 text-neutral-500 hover:border-neutral-600 hover:text-neutral-800',
              ].join(' ')}
            >
              {c}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Items */}
      <section className="px-6 md:px-12 py-[104px]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-8">
            {active === 'Todos' ? 'Todo el equipo' : active} — {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
          </p>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div key={item.slug} layout variants={cardVariants} initial="hidden" animate="visible" exit="exit">
                  <Link href={`/lofi/renta/${item.slug}`} className="group block">
                    <div className="aspect-[4/3] lofi-img rounded-2xl border border-neutral-200 mb-6" />
                    <h3 className="text-lg font-semibold text-neutral-900 leading-snug mb-2 group-hover:text-neutral-500 transition-colors">{item.category} — {item.name}</h3>
                    <p className="text-sm text-neutral-400">{item.size}</p>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-[104px] border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-neutral-800 mb-1">¿Necesitas algo específico?</p>
            <p className="text-xs text-neutral-500">Escríbenos a info@comuna4.com para paquetes personalizados o fechas especiales.</p>
          </div>
          <Link
            href="/lofi/solicitud"
            className="shrink-0 inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-medium px-8 py-4 rounded-full transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Reservar <ArrowRight size={14} className="shrink-0" />
          </Link>
        </div>
      </section>

    </div>
  )
}
