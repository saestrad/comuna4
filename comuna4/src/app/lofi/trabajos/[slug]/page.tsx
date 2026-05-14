import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects, getProject, getAdjacentProjects } from '@/lib/projects'
import { CaseSidebarNav } from '@/components/lofi/CaseSidebarNav'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

function oklchToBackground(color: string) {
  return `linear-gradient(135deg, color-mix(in oklch, ${color} 10%, transparent) 0%, white 60%)`
}

function OtherProjectCard({ slug }: { slug: string }) {
  const p = getProject(slug)
  if (!p) return null
  return (
    <Link href={`/lofi/trabajos/${p.slug}`} className="group block">
      <div className="relative overflow-hidden rounded border border-neutral-200 mb-4">
        <div className="aspect-[4/3] bg-neutral-100 transition-transform duration-500 ease-out group-hover:-translate-y-2" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none"
          style={{ backgroundColor: p.color }}
        />
      </div>
      <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1.5">
        {p.category} · {p.sector}
      </p>
      <p className="text-sm font-semibold text-neutral-800 leading-snug mb-1 group-hover:text-neutral-600 transition-colors duration-300">
        {p.title}
      </p>
      <p className="text-xs text-neutral-500">{p.metric}</p>
    </Link>
  )
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const { prev, next } = getAdjacentProjects(slug)
  const others = [next?.slug, prev?.slug].filter(Boolean) as string[]

  return (
    <>
      <CaseSidebarNav />

      {/* Banner */}
      <section
        className="px-6 pt-20 pb-16 border-b border-neutral-200"
        style={{ background: oklchToBackground(project.color) }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">
            {project.category} · {project.sector}
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-neutral-900 tracking-tight leading-none mb-6 max-w-[20ch]">
            {project.fullTitle}
          </h1>
          <span className="inline-block text-xs text-neutral-600 bg-white/80 border border-neutral-200 px-3 py-1.5 rounded-full">
            {project.metric}
          </span>
          <div className="aspect-[16/9] bg-neutral-100 rounded border border-neutral-200 mt-12" />
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-16 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-5">Overview</p>
            <p className="text-base text-neutral-600 leading-relaxed">{project.overview}</p>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { label: 'Categoría', value: project.category },
              { label: 'Sector', value: project.sector },
              { label: 'Resultado', value: project.metric },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">{label}</p>
                <p className="text-sm text-neutral-700 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* El reto */}
      <section id="reto" className="px-6 py-16 border-b border-neutral-200 scroll-mt-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-5">El reto</p>
            <p className="text-base text-neutral-600 leading-relaxed">{project.challenge}</p>
          </div>
          <div className="aspect-[4/3] bg-neutral-100 rounded border border-neutral-200" />
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="px-6 py-16 border-b border-neutral-200 bg-neutral-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-5">Proceso</p>
          <p className="text-base text-neutral-600 leading-relaxed max-w-[60ch]">{project.approach}</p>
          <div className="aspect-[16/9] bg-neutral-100 rounded border border-neutral-200 mt-10" />
        </div>
      </section>

      {/* Resultado */}
      <section id="resultado" className="px-6 py-20 border-b border-neutral-200 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-8">Resultado</p>
          <p className="text-6xl font-black text-c4-brand tracking-tight leading-none mb-8">
            {project.metric}
          </p>
          <p className="text-base text-neutral-600 leading-relaxed max-w-[56ch]">{project.result}</p>
        </div>
      </section>

      {/* Otros proyectos */}
      {others.length > 0 && (
        <section className="px-6 py-16 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-10">
              Otros proyectos
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {others.map((s) => (
                <OtherProjectCard key={s} slug={s} />
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-neutral-200">
              <Link
                href="/lofi/trabajos"
                className="text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                ← Ver todos los trabajos
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
