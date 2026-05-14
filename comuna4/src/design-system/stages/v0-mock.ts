/**
 * ETAPA v0 — MOCK
 * Tokens mínimos para validar navegabilidad.
 * Solo layout: espaciado base, tamaño de fuente base, radios.
 * Sin paleta de marca, sin acento definido.
 * Snapshot: 2026-05-14
 */

export const v0Tokens = {
  meta: {
    stage: 'v0-mock',
    date: '2026-05-14',
    purpose: 'Validar navegabilidad de capa pública e interna. Sin diseño.',
    verified: true,   // 18/18 rutas 200 OK — 2026-05-14
  },

  space: {
    base: '1rem',        // 16px — unidad base de espaciado
    page: '1.5rem',      // padding lateral de páginas
    section: '3rem',     // separación entre secciones
  },

  typography: {
    fontBase: 'system-ui, sans-serif',
    fontMono: 'monospace',
    sizeBase: '1rem',
    lineHeight: '1.5',
  },

  color: {
    background: '#fafafa',
    foreground: '#0a0a0a',
    border:     '#e5e5e5',
    muted:      '#737373',
    surface:    '#ffffff',
  },

  radius: {
    base: '0.5rem',
  },

  // Lo que NO está definido en esta etapa
  pending: [
    'Tipografía display editorial',
    'Paleta de colores acento',
    'Tokens de motion (easing, duración)',
    'Sombras definitivas',
    'Tokens de componente finales',
  ],
} as const
