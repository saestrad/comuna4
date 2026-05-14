'use client'

import Link from 'next/link'
import { LofiPillNav } from './LofiPillNav'

export function LofiHeader() {
  return (
    <header className="border-b border-neutral-200 bg-white px-6 py-3 flex items-center justify-between gap-6 sticky top-0 z-50">
      <Link
        href="/lofi"
        className="font-mono font-black text-base tracking-widest shrink-0 text-c4-brand"
      >
        [C4]
      </Link>

      <LofiPillNav />

      <div className="flex items-center shrink-0">
        <Link
          href="/lofi/solicitud"
          className="text-sm font-medium px-5 py-2 rounded bg-neutral-900 text-white hover:bg-neutral-700 transition-colors"
        >
          Solicitar →
        </Link>
      </div>
    </header>
  )
}
