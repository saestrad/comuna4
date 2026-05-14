'use client'

import { useState } from 'react'

type Props = {
  name: string
  items: string[]
  suggestion?: string[]
  isNew?: boolean
}

export function MockSectionToggle({ name, items, suggestion, isNew }: Props) {
  const [showSuggestion, setShowSuggestion] = useState(false)

  const active = showSuggestion && suggestion ? suggestion : items

  // Sección nueva — no existía en el original, se muestra en naranja
  if (isNew) {
    return (
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-warning">
            {name}
          </h2>
          <span className="text-xs px-2 py-0.5 rounded font-mono text-warning border border-warning">
            nuevo
          </span>
        </div>
        <ul className="space-y-1 pl-4">
          {items.map((item) => (
            <li key={item} className="text-sm text-on-warning-container">
              — {item}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  // Sección existente — con toggle si tiene suggestion
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
          {name}
        </h2>
        {suggestion && (
          <button
            onClick={() => setShowSuggestion((s) => !s)}
            className={[
              'text-xs px-2.5 py-1 rounded transition-colors font-mono border border-accent',
              showSuggestion
                ? 'bg-accent text-accent-foreground'
                : 'bg-transparent text-accent',
            ].join(' ')}
          >
            {showSuggestion ? 'original' : 'sugerencia'}
          </button>
        )}
      </div>
      <ul className="space-y-1 pl-4">
        {active.map((item) => (
          <li key={item} className="text-sm text-neutral-600">
            — {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
