import Link from 'next/link'

const leadership = [
  { name: 'José Chiclana', role: 'Founder & CEO' },
  { name: 'Olga Chapman Rivera', role: 'Senior Brand Strategist' },
  { name: 'Raiza Irizarry', role: 'Content Director' },
  { name: 'Rossginia Maldonado', role: 'Project Director & Influencer Relationship Manager' },
  { name: 'Alberto Quiles', role: 'Audiovisual Director' },
]

const partners = [
  { name: 'Braave Tribu Colab', desc: 'Branding y estrategia' },
  { name: 'Loud & Live', desc: 'Producción de entretenimiento' },
  { name: 'Mana-T Studios', desc: 'Animación 2D/3D' },
  { name: 'SJ Media', desc: 'Estrategia y contenido de alto impacto' },
]

const differentiators = [
  {
    label: 'Estructura modular',
    body: 'Cada equipo se construye según la necesidad del proyecto. Tu presupuesto se invierte en talento, producción y distribución efectiva, no en estructuras fijas.',
  },
  {
    label: 'Low overhead, high output',
    body: 'Sin capas innecesarias de management. El equipo que hace tu brief es el que ejecuta tu proyecto. Sin brief que se pierde entre intermediarios.',
  },
  {
    label: 'Espacios propios in-house',
    body: 'Tres estudios equipados dentro del mismo hub. Producción sin logística externa, sin costos de terceros, sin días perdidos coordinando locaciones.',
  },
  {
    label: 'Red de creadores e influencers',
    body: 'Acceso a un cast amplio de talento local y regional, seleccionado por afinidad de marca y métricas reales, no por número de seguidores.',
  },
]

export default function LofiSobre() {
  return (
    <div>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-[104px] pb-[104px] border-b border-neutral-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">Nosotros</p>
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-neutral-900 tracking-tight leading-none mb-6">
              Más que una agencia, un motor de cambio.
            </h1>
            <p className="text-base text-neutral-500 leading-relaxed">
              Somos Comuna 4. Un hub de producción y publicidad en Puerto Rico diseñado para fortalecer marcas y proyectar la creatividad de la isla al mundo.
            </p>
          </div>
          <div className="aspect-[4/3] lofi-img rounded-lg border border-neutral-200" />
        </div>
      </section>

      {/* Manifesto */}
      <section className="px-6 md:px-12 py-[104px] border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-8">Manifiesto</h2>
          <p className="text-3xl font-display font-semibold text-neutral-900 tracking-tight leading-tight mb-8 max-w-[22ch]">
            No trabajamos con todas las marcas. Solo con las que quieren ganar.
          </p>
          <div className="flex flex-col gap-4 text-sm text-neutral-500 leading-relaxed max-w-[56ch]">
            <p>
              Conectamos creatividad con industria para hacer crecer la economía local. No como slogan, sino como modelo operativo.
            </p>
            <p>
              Las marcas que sobreviven no son las más grandes ni las que gastan más en publicidad. Son las que tienen una perspectiva clara, ejecutan rápido y miden todo.
            </p>
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="px-6 md:px-12 py-[104px] border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-10">Nuestra ventaja</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200">
            {differentiators.map((d) => (
              <div key={d.label} className="bg-white p-8">
                <p className="text-sm font-semibold text-neutral-800 mb-3">{d.label}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-12 py-[104px] border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-10">Equipo de liderazgo</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {leadership.map((p) => (
              <div key={p.name}>
                <div className="aspect-square lofi-img rounded-lg border border-neutral-200 mb-3" />
                <p className="text-sm font-semibold text-neutral-800 leading-snug mb-1">{p.name}</p>
                <p className="text-xs text-neutral-500 leading-snug">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="px-6 md:px-12 py-[104px] border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">C4 Collabs</h2>
          <p className="text-sm text-neutral-500 mb-10 max-w-[48ch]">
            Alianzas estratégicas que amplían nuestra capacidad sin inflar nuestra estructura.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200">
            {partners.map((p) => (
              <div key={p.name} className="bg-white p-6">
                <div className="h-10 bg-neutral-100 rounded-lg mb-4 border border-neutral-200" />
                <p className="text-sm font-semibold text-neutral-800 mb-1">{p.name}</p>
                <p className="text-xs text-neutral-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-[120px]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-neutral-900 tracking-tight leading-none mb-3">
              ¿Trabajamos juntos?
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-[38ch]">
              Sin compromisos. Cuéntanos el proyecto y vemos si hay fit.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/lofi/solicitud" className="inline-block bg-c4-brand text-white text-sm font-medium px-8 py-4 rounded-full transition-colors hover:bg-c4-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-c4-brand focus-visible:ring-offset-2">
              Solicitar →
            </Link>
            <Link href="/lofi/trabajos" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors underline underline-offset-4">
              Ver trabajos
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
