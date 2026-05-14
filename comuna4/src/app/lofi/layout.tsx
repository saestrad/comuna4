import Link from 'next/link'
import { LofiShell } from '@/components/lofi/LofiShell'

const footerLinks = [
  { href: '/lofi/trabajos', label: 'Trabajos' },
  { href: '/lofi/servicios', label: 'Servicios' },
  { href: '/lofi/renta', label: 'Renta' },
  { href: '/lofi/blog', label: 'Blog' },
  { href: '/lofi/nosotros', label: 'Nosotros' },
]

export default function LofiLayout({ children }: { children: React.ReactNode }) {
  return (
    <LofiShell>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-neutral-200 px-6 md:px-12 py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/lofi" className="font-mono font-black text-base tracking-widest text-neutral-900">
              [C4]
            </Link>
            <p className="text-xs text-neutral-500">
              Agencia creativa — San Juan, Puerto Rico
            </p>
            <a href="mailto:info@comuna4.com" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors">
              info@comuna4.com
            </a>
          </div>
          <nav aria-label="Links de pie de página" className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/lofi/solicitud"
              className="text-xs font-medium text-neutral-900 hover:text-neutral-500 transition-colors"
            >
              Solicitar →
            </Link>
          </nav>
        </div>
        <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-neutral-100">
          <p className="text-xs text-neutral-400 font-mono">© 2026 Comuna 4. Todos los derechos reservados.</p>
        </div>
      </footer>
    </LofiShell>
  )
}
