interface FormStepperProps {
  steps: string[]
  current: number
}

export function FormStepper({ steps, current }: FormStepperProps) {
  return (
    <div className="mb-10">
      <div className="flex gap-1.5 mb-3">
        {steps.map((_, i) => (
          <div
            key={i}
            className={[
              'flex-1 h-1 rounded-full transition-colors',
              i <= current ? 'bg-neutral-900' : 'bg-neutral-200',
            ].join(' ')}
          />
        ))}
      </div>
      <p className="text-xs text-neutral-500 font-mono">
        Paso {current + 1} de {steps.length} — {steps[current]}
      </p>
    </div>
  )
}
