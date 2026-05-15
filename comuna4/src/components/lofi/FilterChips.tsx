'use client'

import { motion } from 'framer-motion'

interface FilterChipsProps {
  label?: string
  options: string[]
  active: string
  onChange: (value: string) => void
  className?: string
}

export function FilterChips({ label = 'Categoría', options, active, onChange, className = 'bg-neutral-50' }: FilterChipsProps) {
  return (
    <div className={`border-b border-neutral-200 py-5 ${className}`}>
      <div className="flex items-center gap-3 overflow-x-auto scrollbar-none px-6 md:px-12">
        {label && (
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 shrink-0">{label}</span>
        )}
        {options.map((opt) => (
          <motion.button
            key={opt}
            onClick={() => onChange(opt)}
            whileTap={{ scale: 0.95 }}
            className={[
              'text-xs px-4 py-2.5 rounded-full border transition-colors shrink-0',
              active === opt
                ? 'bg-neutral-900 text-white border-neutral-900'
                : 'border-neutral-300 text-neutral-500 hover:border-neutral-600 hover:text-neutral-800',
            ].join(' ')}
          >
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
