/**
 * TOKENS PRIMITIVOS — valores concretos, sin semántica.
 * Nunca referenciar directamente en componentes. Usar semantic.ts.
 * Nomenclatura adoptada de Material 3 + Pajamas (GitLab).
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

  // Estado: Info / Progress / Active (azul — Pajamas blue.500 equiv)
  'blue-light': 'oklch(0.94 0.04 250)',      // container / surface
  'blue-base':  'oklch(0.47 0.13 250)',      // texto / icono
  'blue-dark':  'oklch(0.35 0.12 250)',      // hover sobre azul

  // Estado: Success / Done / On track (verde — Pajamas green.500 equiv)
  'green-light': 'oklch(0.93 0.05 155)',     // container / surface
  'green-base':  'oklch(0.48 0.12 155)',     // texto / icono
  'green-dark':  'oklch(0.38 0.11 155)',     // hover sobre verde

  // Estado: Warning / At risk / Pending (naranja — Pajamas orange.500 equiv)
  'orange-light': 'oklch(0.95 0.05 65)',     // container / surface
  'orange-base':  'oklch(0.55 0.13 55)',     // texto / icono
  'orange-dark':  'oklch(0.43 0.12 55)',     // hover sobre naranja

  // Estado: Danger / Blocked / Error (rojo — Pajamas red.500 equiv)
  'red-light': 'oklch(0.94 0.05 25)',        // container / surface
  'red-base':  'oklch(0.47 0.17 25)',        // texto / icono (antes: error)
  'red-dark':  'oklch(0.37 0.15 25)',        // hover sobre rojo

  // Destructivo / error (alias → red-base para compatibilidad)
  error:         'oklch(0.47 0.17 25)',
  'error-light': 'oklch(0.94 0.05 25)',

  // Transparencias (state layers — Material 3 + Pajamas)
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
  display: 'var(--font-satoshi)',    // Satoshi — headings display
  body:    'var(--font-inter)',      // Inter — body y UI
  mono:    'var(--font-geist-mono)',
} as const

export const fontWeight = {
  regular:   '400',
  medium:    '500',
  semibold:  '600',
  bold:      '700',
  black:     '900',
} as const

export const size = {
  // Escala tipográfica (Material 3: Display / Headline / Title / Body / Label)
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

export const lineHeight = {
  none:    '1',
  tight:   '1.2',
  snug:    '1.35',
  normal:  '1.5',
  relaxed: '1.625',
} as const

// Espaciado base 8px (Pajamas-aligned)
// 2px granularity para micro-spacing interno de componentes
export const space = {
  '0':    '0px',
  'px':   '1px',
  '0.5':  '0.125rem',   // 2px
  '1':    '0.25rem',    // 4px  — micro interno de componente
  '1.5':  '0.375rem',   // 6px
  '2':    '0.5rem',     // 8px  — entre elementos relacionados
  '3':    '0.75rem',    // 12px — padding h: tabs, botones, inputs
  '4':    '1rem',       // 16px — entre elementos no relacionados
  '5':    '1.25rem',    // 20px
  '6':    '1.5rem',     // 24px — separación de sub-sección
  '8':    '2rem',       // 32px — separación de sección
  '10':   '2.5rem',     // 40px
  '12':   '3rem',       // 48px
  '16':   '4rem',       // 64px
  '20':   '5rem',       // 80px
  '24':   '6rem',       // 96px
  '32':   '8rem',       // 128px
} as const

export const radius = {
  none:  '0px',
  sm:    '0.25rem',   // 4px
  md:    '0.375rem',  // 6px — base para v0
  lg:    '0.5rem',    // 8px
  xl:    '0.75rem',   // 12px
  '2xl': '1rem',      // 16px
  '3xl': '1.5rem',    // 24px
  full:  '9999px',
} as const

export const shadow = {
  none:  'none',
  sm:    '0 1px 2px 0 oklch(0 0 0 / 0.05)',
  md:    '0 4px 6px -1px oklch(0 0 0 / 0.08), 0 2px 4px -2px oklch(0 0 0 / 0.06)',
  lg:    '0 10px 15px -3px oklch(0 0 0 / 0.08), 0 4px 6px -4px oklch(0 0 0 / 0.04)',
  xl:    '0 20px 25px -5px oklch(0 0 0 / 0.08), 0 8px 10px -6px oklch(0 0 0 / 0.04)',
} as const

// Motion — Material 3 easing + duraciones
export const motion = {
  easing: {
    standard:   'cubic-bezier(0.2, 0, 0, 1)',      // transiciones UI
    emphasized: 'cubic-bezier(0.2, 0, 0, 1)',      // entradas importantes (duración mayor)
    decelerate: 'cubic-bezier(0, 0, 0, 1)',        // elementos que entran al viewport
    accelerate: 'cubic-bezier(0.3, 0, 1, 1)',      // elementos que salen
    linear:     'linear',
  },
  duration: {
    micro:      '100ms',   // hover, focus
    short:      '150ms',   // micro-interacciones simples
    medium:     '250ms',   // filtros, chips, toggles
    long:       '400ms',   // entradas de sección
    narrative:  '600ms',   // transiciones de página (v3)
  },
} as const
