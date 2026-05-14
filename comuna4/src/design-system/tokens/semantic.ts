/**
 * TOKENS SEMÁNTICOS — referencian primitivos, no valores directos.
 * Estos son los que se usan en CSS variables y en componentes.
 * Nomenclatura adoptada de Material 3 (sys.color).
 *
 * Cada token tiene variante light y dark.
 */

import { color } from './base'

export const semantic = {
  light: {
    // Superficies
    background:             color.cream,
    'on-background':        color.black,
    surface:                color.white,
    'on-surface':           color.black,
    'surface-variant':      color['gray-100'],
    'on-surface-variant':   color['gray-700'],
    'surface-container':    color['gray-50'],
    outline:                color['gray-300'],
    'outline-variant':      color['gray-100'],

    // Primario (brand — negro sobre crema)
    primary:                color.black,
    'on-primary':           color.cream,
    'primary-container':    color['gray-100'],
    'on-primary-container': color.black,

    // Acento (vibrante — por definir Fase 1)
    accent:                 color['accent-1'],
    'on-accent':            color.white,

    // Error
    error:                  color.error,
    'on-error':             color.white,
    'error-container':      color['error-light'],

    // State layers
    'state-layer-hover':    color['state-hover'],
    'state-layer-pressed':  color['state-pressed'],
    'state-layer-focus':    color['state-focus'],
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
    outline:                color['gray-700'],
    'outline-variant':      color['gray-800'],

    // Primario (invertido)
    primary:                color.cream,
    'on-primary':           color.black,
    'primary-container':    color['gray-800'],
    'on-primary-container': color.cream,

    // Acento (vibrante — por definir Fase 1)
    accent:                 color['accent-1'],
    'on-accent':            color.black,

    // Error
    error:                  color['error-light'],
    'on-error':             color.black,
    'error-container':      color['gray-900'],

    // State layers (sobre fondo oscuro)
    'state-layer-hover':    color['state-hover-on-dark'],
    'state-layer-pressed':  color['state-pressed-on-dark'],
    'state-layer-focus':    color['state-focus-on-dark'],
  },
} as const
