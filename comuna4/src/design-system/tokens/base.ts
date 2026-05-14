/**
 * TOKENS PRIMITIVOS — valores concretos, sin semántica.
 * Nunca referenciar directamente en componentes. Usar semantic.ts.
 * Nomenclatura adoptada de Material 3.
 */

export const color = {
  // Neutros base
  black:         'oklch(0.10 0 0)',
  'black-soft':  'oklch(0.15 0 0)',
  'gray-900':    'oklch(0.20 0 0)',
  'gray-800':    'oklch(0.30 0 0)',
  'gray-700':    'oklch(0.40 0 0)',
  'gray-500':    'oklch(0.55 0 0)',
  'gray-300':    'oklch(0.75 0 0)',
  'gray-100':    'oklch(0.92 0 0)',
  'gray-50':     'oklch(0.97 0 0)',
  cream:         'oklch(0.97 0.01 85)',
  white:         'oklch(1 0 0)',

  // Acento 1 — verde principal (#00a873 → OKLCH)
  'accent-1':      'oklch(0.63 0.14 162)',
  'accent-1-dark': 'oklch(0.52 0.14 162)',   // hover / pressed
  'accent-1-light':'oklch(0.88 0.07 162)',   // surface tintada

  // Destructivo / error
  error:         'oklch(0.577 0.245 27.325)',
  'error-light': 'oklch(0.85 0.10 27)',

  // Transparencias (state layers — Material 3)
  'state-hover':   'oklch(0 0 0 / 0.08)',
  'state-pressed': 'oklch(0 0 0 / 0.12)',
  'state-focus':   'oklch(0 0 0 / 0.12)',
  'state-dragged': 'oklch(0 0 0 / 0.16)',

  // State layers sobre fondo oscuro
  'state-hover-on-dark':   'oklch(1 0 0 / 0.08)',
  'state-pressed-on-dark': 'oklch(1 0 0 / 0.12)',
  'state-focus-on-dark':   'oklch(1 0 0 / 0.12)',
} as const

export const font = {
  display: 'var(--font-inter)',      // Inter — display y body (v1 Low)
  body:    'var(--font-inter)',
  mono:    'var(--font-geist-mono)',
} as const

export const size = {
  // Escala tipográfica (adoptada de Material 3: Display / Headline / Title / Body / Label)
  'display-lg':  '3.5625rem',   // 57px
  'display-md':  '2.8125rem',   // 45px
  'display-sm':  '2.25rem',     // 36px
  'headline-lg': '2rem',        // 32px
  'headline-md': '1.75rem',     // 28px
  'headline-sm': '1.5rem',      // 24px
  'title-lg':    '1.375rem',    // 22px
  'title-md':    '1rem',        // 16px (medium weight)
  'title-sm':    '0.875rem',    // 14px (medium weight)
  'body-lg':     '1rem',        // 16px
  'body-md':     '0.875rem',    // 14px
  'body-sm':     '0.75rem',     // 12px
  'label-lg':    '0.875rem',    // 14px (medium weight)
  'label-md':    '0.75rem',     // 12px (medium weight)
  'label-sm':    '0.6875rem',   // 11px
} as const

export const space = {
  '0':   '0px',
  '1':   '0.25rem',   // 4px
  '2':   '0.5rem',    // 8px
  '3':   '0.75rem',   // 12px
  '4':   '1rem',      // 16px
  '5':   '1.25rem',   // 20px
  '6':   '1.5rem',    // 24px
  '8':   '2rem',      // 32px
  '10':  '2.5rem',    // 40px
  '12':  '3rem',      // 48px
  '16':  '4rem',      // 64px
  '20':  '5rem',      // 80px
  '24':  '6rem',      // 96px
  '32':  '8rem',      // 128px
} as const

export const radius = {
  none:   '0px',
  sm:     '0.25rem',   // 4px
  md:     '0.5rem',    // 8px
  lg:     '0.75rem',   // 12px
  xl:     '1rem',      // 16px
  '2xl':  '1.5rem',    // 24px
  full:   '9999px',
} as const

export const shadow = {
  none:  'none',
  sm:    '0 1px 2px 0 oklch(0 0 0 / 0.05)',
  md:    '0 4px 6px -1px oklch(0 0 0 / 0.1), 0 2px 4px -2px oklch(0 0 0 / 0.1)',
  lg:    '0 10px 15px -3px oklch(0 0 0 / 0.1), 0 4px 6px -4px oklch(0 0 0 / 0.1)',
  xl:    '0 20px 25px -5px oklch(0 0 0 / 0.1), 0 8px 10px -6px oklch(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px oklch(0 0 0 / 0.25)',
} as const
