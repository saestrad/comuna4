import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface BackLinkProps {
  href: string
  label: string
}

export function BackLink({ href, label }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-xs text-neutral-600 border border-neutral-200 px-4 py-2 rounded-full hover:border-neutral-400 hover:text-neutral-900 transition-colors mb-12"
    >
      <ArrowLeft size={13} className="shrink-0" /> {label}
    </Link>
  )
}
