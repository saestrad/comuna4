/**
 * TOKENS SEMÁNTICOS — referencian primitivos, no valores directos.
 * Estos son los que se usan en CSS variables y en componentes.
 * Nomenclatura: M3 (sys.color) + Pajamas (status roles).
 *
 * Cada token tiene variante light y dark.
 */

import { color } from './base'

export const semantic = {
  light: {
    // Superficies
    background:             color.white,
    'on-background':        color.black,
    surface:                color.white,
    'on-surface':           color.black,
    'surface-variant':      color['gray-50'],
    'on-surface-variant':   color['gray-700'],
    'surface-container':    color['gray-50'],
    'surface-container-high': color['gray-100'],
    outline:                color['gray-100'],
    'outline-variant':      color['gray-50'],

    // Primario (brand — negro sobre blanco en v0)
    primary:                color.black,
    'on-primary':           color.white,
    'primary-container':    color['gray-50'],
    'on-primary-container': color.black,

    // Acento (verde #00a873 — CTAs y filtros activos únicamente)
    accent:                 color['accent-1'],
    'on-accent':            color.white,
    'accent-container':     color['accent-1-light'],
    'on-accent-container':  color['accent-1-dark'],

    // Error (alias de danger para compatibilidad shadcn)
    error:                  color.error,
    'on-error':             color.white,
    'error-container':      color['error-light'],
    'on-error-container':   color['red-dark'],

    // Estado: Info — En diseño, En producción, Conectado (azul)
    info:                   color['blue-base'],
    'on-info':              color.white,
    'info-container':       color['blue-light'],
    'on-info-container':    color['blue-dark'],

    // Estado: Success — Entregado, On track, Aprobado (verde)
    success:                color['green-base'],
    'on-success':           color.white,
    'success-container':    color['green-light'],
    'on-success-container': color['green-dark'],

    // Estado: Warning — En revisión, At risk, Pendiente (naranja)
    warning:                color['orange-base'],
    'on-warning':           color.white,
    'warning-container':    color['orange-light'],
    'on-warning-container': color['orange-dark'],

    // Estado: Danger — Bloqueado, Behind, Error crítico (rojo)
    danger:                 color['red-base'],
    'on-danger':            color.white,
    'danger-container':     color['red-light'],
    'on-danger-container':  color['red-dark'],

    // State layers (M3 — opacidad sobre color base, no colores separados)
    'state-layer-hover':    color['state-hover'],
    'state-layer-pressed':  color['state-pressed'],
    'state-layer-focus':    color['state-focus'],
    'state-layer-dragged':  color['state-dragged'],
  },

  dark: {
    // Superficies
    background:             color['black-soft'],
    'on-background':        color.cream,
    surface:                color.black,
    'on-surface':           color.cream,
    'surface-variant':      color['gray-900'],
    'on-surface-variant':   color['gray-300'],
    'surface-container':    color['gray-800'],
    'surface-container-high': color['gray-700'],
    outline:                color['gray-700'],
    'outline-variant':      color['gray-800'],

    // Primario (invertido en dark)
    primary:                color.cream,
    'on-primary':           color.black,
    'primary-container':    color['gray-800'],
    'on-primary-container': color.cream,

    // Acento (mismo verde, foreground oscuro en dark)
    accent:                 color['accent-1'],
    'on-accent':            color.black,
    'accent-container':     color['accent-1-dark'],
    'on-accent-container':  color['accent-1-light'],

    // Error
    error:                  color['error-light'],
    'on-error':             color.black,
    'error-container':      color['gray-900'],
    'on-error-container':   color['error-light'],

    // Estado: Info
    info:                   color['blue-light'],
    'on-info':              color['blue-dark'],
    'info-container':       color['blue-dark'],
    'on-info-container':    color['blue-light'],

    // Estado: Success
    success:                color['green-light'],
    'on-success':           color['green-dark'],
    'success-container':    color['green-dark'],
    'on-success-container': color['green-light'],

    // Estado: Warning
    warning:                color['orange-light'],
    'on-warning':           color['orange-dark'],
    'warning-container':    color['orange-dark'],
    'on-warning-container': color['orange-light'],

    // Estado: Danger
    danger:                 color['red-light'],
    'on-danger':            color['red-dark'],
    'danger-container':     color['red-dark'],
    'on-danger-container':  color['red-light'],

    // State layers (sobre fondo oscuro)
    'state-layer-hover':    color['state-hover-on-dark'],
    'state-layer-pressed':  color['state-pressed-on-dark'],
    'state-layer-focus':    color['state-focus-on-dark'],
    'state-layer-dragged':  color['state-focus-on-dark'],
  },
} as const

// Mapa de estado → token semántico (para uso programático en componentes)
export const statusMap = {
  info:    { color: 'info',    label: 'En diseño'   },
  success: { color: 'success', label: 'Entregado'   },
  warning: { color: 'warning', label: 'En revisión' },
  danger:  { color: 'danger',  label: 'Bloqueado'   },
} as const

export type StatusVariant = keyof typeof statusMap
