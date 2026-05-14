import Link from 'next/link'

const ticker = ['Producción de Contenido', 'Estrategia Creativa', 'Compra de Medios', 'Influencer Collabs', 'Renta de Espacios', 'Branding', 'Performance Digital']

const projects = [
  { title: 'Identidad completa para marca de gastronomía', category: 'Branding', metric: '↑ 40% reconocimiento' },
  { title: 'Campaña Meta + TikTok para marca local', category: 'Performance', metric: '↑ 3.2× ROAS' },
  { title: 'Producción audiovisual para lanzamiento', category: 'Producción', metric: '2.4M impresiones' },
]

const studios = [
  { name: 'Ciclorama Profesional', size: "25' × 25'", desc: 'Producciones publicitarias, fotografía de producto y contenido.' },
  { name: 'Estudio de Cocina', size: "25' × 25'", desc: 'Contenido gastronómico variado con calidad de cine.' },
  { name: 'Estudio Multiusos', size: "25' × 25'", desc: 'Entrevistas, campañas digitales y cualquier formato.' },
]

export default function LofiHome() {
  return (
    <div>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-[104px] pb-[104px] border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-8">
            Agencia creativa — Puerto Rico
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tight leading-none mb-8 max-w-[14ch]">
            Hacemos que tu marca crezca.
          </h1>
          <p className="text-lg text-neutral-500 leading-relaxed mb-12 max-w-[44ch]">
            Producción, estrategia y medios bajo un mismo techo. Desde Puerto Rico, con resultados medibles.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/lofi/solicitud"
              className="inline-block bg-neutral-900 text-white text-sm font-medium px-7 py-3.5 rounded-full transition-colors hover:bg-neutral-700"
            >
              Empieza hoy →
            </Link>
            <Link
              href="/lofi/trabajos"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors underline underline-offset-4"
            >
              Ver nuestro trabajo
            </Link>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <section className="border-b border-neutral-200 py-5 overflow-hidden">
        <style>{`
          @keyframes ticker-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .ticker-track { animation: ticker-scroll 24s linear infinite; }
          .ticker-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="ticker-track flex gap-10 font-mono text-xs uppercase tracking-widest text-neutral-500 whitespace-nowrap w-max">
          {[...ticker, ...ticker].map((s, i) => (
            <span key={i}>{s} ·</span>
          ))}
        </div>
      </section>

      {/* Featured works */}
      <section className="px-6 md:px-12 py-[104px] border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              Proyectos recientes
            </h2>
            <Link href="/lofi/trabajos" className="text-xs text-neutral-500 hover:text-neutral-700 transition-colors">
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((p) => (
              <Link href="/lofi/trabajos" key={p.title} className="group block">
                <div className="aspect-[4/3] bg-neutral-100 rounded-lg border border-neutral-200 mb-5" />
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">{p.category}</p>
                <p className="text-sm font-semibold text-neutral-800 leading-snug mb-1.5">{p.title}</p>
                <p className="text-xs text-neutral-500">{p.metric}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 md:px-12 py-[104px] border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-16">Lo que hacemos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200">
            {[
              { name: 'Producción', desc: 'Contenido con propósito. Comerciales, foto y digital.' },
              { name: 'Estrategia', desc: 'Ideas que conectan con tu audiencia y convierten.' },
              { name: 'Medios', desc: 'Meta, Google y TikTok. Visibilidad real, no estimada.' },
              { name: 'Influencers', desc: 'El talento adecuado para amplificar tu mensaje.' },
            ].map((s) => (
              <Link key={s.name} href="/lofi/servicios" className="bg-white p-8 hover:bg-neutral-50 transition-colors group">
                <p className="text-sm font-semibold text-neutral-800 mb-3">{s.name}</p>
                <p className="text-xs text-neutral-500 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hub / Spaces */}
      <section className="px-6 md:px-12 py-[120px] border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">El Hub</p>
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight leading-none mb-6 max-w-[22ch]">
            Donde la creatividad se produce.
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed mb-16 max-w-[48ch]">
            Más que una agencia — un espacio físico en San Juan, Puerto Rico. Tres estudios equipados para cualquier producción.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 mb-10">
            {studios.map((s) => (
              <div key={s.name} className="bg-white p-8">
                <div className="aspect-[4/3] bg-neutral-100 rounded-lg border border-neutral-200 mb-5" />
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1">{s.size}</p>
                <p className="text-sm font-semibold text-neutral-800 mb-2">{s.name}</p>
                <p className="text-xs text-neutral-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/lofi/renta" className="text-sm text-neutral-900 hover:text-neutral-500 transition-colors underline underline-offset-4">
            Ver disponibilidad y equipo →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 py-[120px]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight leading-none mb-5">
              ¿Tienes un proyecto?
            </h2>
            <p className="text-base text-neutral-500 max-w-[38ch] leading-relaxed">
              Cuéntanos. Respondemos en menos de 24 horas.
            </p>
          </div>
          <Link
            href="/lofi/solicitud"
            className="shrink-0 inline-block bg-neutral-900 text-white text-sm font-medium px-8 py-4 rounded-full transition-colors hover:bg-neutral-700"
          >
            Solicitar →
          </Link>
        </div>
      </section>

    </div>
  )
}
