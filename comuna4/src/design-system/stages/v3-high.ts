/**
 * ETAPA v3 — HIGH FIDELITY
 * Sistema completo de tokens de marca. Todos los valores definidos.
 * Microinteracciones, cursor, animaciones, modo claro/oscuro.
 * Snapshot: por completar — requiere aprobación de marca en Fase 1.
 */

export const v3Tokens = {
  meta: {
    stage: 'v3-high',
    date: 'TBD',
    purpose: 'Sistema de diseño completo con brand final, animaciones y modo dual.',
    verified: false,
  },

  // Este archivo se completa en Fase 1 post-aprobación de marca.
  // Estructura reservada:

  color: {
    // Primitivos finales — valores concretos oklch
    'black':        'TBD',
    'cream':        'TBD',
    'accent-1':     'oklch(0.63 0.14 162)',  // #00a873 — base confirmada; refinar en Fase 1
    'accent-2':     'TBD',                  // Vibrante secundario — por definir

    // Semánticos finales
    background:     'TBD',
    foreground:     'TBD',
    accent:         'TBD',
    surface:        'TBD',
  },

  typography: {
    fontDisplay:  'TBD',   // Nombre de la fuente display editorial elegida
    fontBody:     'TBD',   // Nombre de la fuente body elegida
    fontFiles:    'TBD',   // Fuente: Google Fonts / Adobe Fonts / self-hosted
  },

  cursor: {
    // Cursor personalizado — desktop only
    default:  'TBD',       // Imagen o SVG del cursor base
    hover:    'TBD',       // Cursor al hacer hover sobre elementos interactivos
    drag:     'TBD',       // Cursor al arrastrar
  },

  animation: {
    pageTransition: 'TBD',  // Tipo y duración de page transition
    scrollReveal:   'TBD',  // Config de scroll reveal (threshold, delay, easing)
    ticker:         'TBD',  // Velocidad del ticker y comportamiento en hover
    hovers:         'TBD',  // Tipo de hover en cards de portafolio
  },

  darkMode: {
    strategy: 'class',  // .dark en <html> + system preference como default
    toggle:   'localStorage',  // Persistido en localStorage
  },

  accessibility: {
    minContrastRatio: 4.5,  // WCAG AA para texto normal
    focusRing: 'TBD',       // Estilo del focus-visible
    motionReduced: true,    // Respetar prefers-reduced-motion
  },
} as const
