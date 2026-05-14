'use client'

export function K({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        color: 'oklch(0.50 0.20 245)',
        fontWeight: 600,
      }}
    >
      {children}
    </span>
  )
}
