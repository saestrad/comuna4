import Link from 'next/link'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'

interface FormNavProps {
  step: number
  isLast: boolean
  cancelHref: string
  onBack: () => void
  onNext: () => void
  nextLabel?: string
}

export function FormNav({ step, isLast, cancelHref, onBack, onNext, nextLabel }: FormNavProps) {
  return (
    <div className="flex items-center gap-3 pt-8 border-t border-neutral-200 mt-8">
      {step === 0 ? (
        <Link
          href={cancelHref}
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 border border-neutral-200 px-4 py-2.5 rounded-full transition-colors"
        >
          <X size={14} className="shrink-0" /> Cancelar
        </Link>
      ) : (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 border border-neutral-200 px-4 py-2.5 rounded-full transition-colors"
        >
          <ArrowLeft size={14} className="shrink-0" /> Anterior
        </button>
      )}

      <button
        type="button"
        onClick={onNext}
        className="ml-auto inline-flex items-center gap-2 text-sm font-medium bg-accent text-accent-foreground px-6 py-2.5 rounded-full transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        {isLast ? (nextLabel ?? 'Enviar solicitud') : 'Siguiente'} <ArrowRight size={14} className="shrink-0" />
      </button>
    </div>
  )
}
