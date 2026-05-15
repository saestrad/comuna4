interface OptionButtonProps {
  label: string
  selected: boolean
  onClick: () => void
  size?: 'sm' | 'md'
}

export function OptionButton({ label, selected, onClick, size = 'md' }: OptionButtonProps) {
  const padding = size === 'sm' ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-sm'

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={[
        `${padding} rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 text-center`,
        selected
          ? 'bg-neutral-900 text-white border-neutral-900'
          : 'border-neutral-200 text-neutral-700 hover:border-neutral-400',
      ].join(' ')}
    >
      {label}
    </button>
  )
}
