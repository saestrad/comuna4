/**
 * ETAPA v1 — LOW FIDELITY
 * Agrega: tipografía elegida, grilla definitiva, color base neutral.
 * Aún sin acento vibrante ni animaciones.
 * Snapshot: por completar
 */

export const v1Tokens = {
  meta: {
    stage: 'v1-low',
    date: '2026-05-14',
    purpose: 'Estructura visual básica. Tipografía + grilla + color neutro.',
    verified: false,
  },

  typography: {
    fontDisplay: 'Inter',   // Google Fonts — confirmado 2026-05-14
    fontBody:    'Inter',
    fontMono:    'Geist Mono',
    scale: {
      'display-lg':  '3.5625rem',
      'headline-lg': '2rem',
      'title-md':    '1rem',
      'body-md':     '0.875rem',
      'label-md':    '0.75rem',
    },
  },

  grid: {
    columns:     12,
    gutter:      '1.5rem',
    margin:      '1.5rem',    // móvil
    marginLg:    '4rem',      // desktop
    maxWidth:    '1280px',
  },

  color: {
    background: 'oklch(0.97 0.01 85)',  // crema
    foreground: 'oklch(0.10 0 0)',       // negro profundo
    surface:    'oklch(1 0 0)',
    outline:    'oklch(0.92 0 0)',
    muted:      'oklch(0.55 0 0)',
    'accent-1':  'oklch(0.63 0.14 162)',  // #00a873 — confirmado 2026-05-14
    'on-accent': 'oklch(1 0 0)',
  },

  pending: [
    'Tipografía display editorial diferente a Inter (opcional para v3)',
    'Motion tokens',
    'Componentes con estados (hover, focus, disabled)',
  ],
} as const
