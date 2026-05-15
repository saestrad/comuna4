import Link from 'next/link'

interface LofiCardProps {
  href: string
  title: string
  subtitle?: string
  aspectClass?: string
}

export function LofiCard({ href, title, subtitle, aspectClass = 'aspect-[4/3]' }: LofiCardProps) {
  return (
    <Link href={href} className="group block">
      <div className={`${aspectClass} lofi-img rounded-2xl border border-neutral-200 mb-6`} />
      <h3 className="text-lg font-semibold text-neutral-900 leading-snug mb-2 group-hover:text-neutral-500 transition-colors">
        {title}
      </h3>
      {subtitle && (
        <p className="text-sm text-neutral-400">{subtitle}</p>
      )}
    </Link>
  )
}
