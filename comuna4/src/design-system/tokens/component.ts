/**
 * TOKENS DE COMPONENTE — referencias a tokens semánticos.
 * Define los tokens específicos de cada componente.
 * Se usan para generar variables CSS por componente en globals.css.
 */

export const componentTokens = {
  button: {
    primary: {
      bg:            'var(--color-primary)',
      fg:            'var(--color-on-primary)',
      'bg-hover':    'var(--color-primary)',          // + state layer hover encima
      'bg-pressed':  'var(--color-primary)',          // + state layer pressed encima
      border:        'transparent',
    },
    outline: {
      bg:            'transparent',
      fg:            'var(--color-primary)',
      'bg-hover':    'var(--color-state-layer-hover)',
      border:        'var(--color-outline)',
    },
    ghost: {
      bg:            'transparent',
      fg:            'var(--color-on-surface)',
      'bg-hover':    'var(--color-state-layer-hover)',
      border:        'transparent',
    },
    accent: {
      bg:            'var(--color-accent)',
      fg:            'var(--color-on-accent)',
      'bg-hover':    'var(--color-accent)',
      border:        'transparent',
    },
  },

  card: {
    bg:             'var(--color-surface)',
    fg:             'var(--color-on-surface)',
    border:         'var(--color-outline-variant)',
    'bg-hover':     'var(--color-surface-container)',
    shadow:         'var(--shadow-sm)',
  },

  input: {
    bg:             'var(--color-surface)',
    fg:             'var(--color-on-surface)',
    border:         'var(--color-outline)',
    'border-focus': 'var(--color-primary)',
    placeholder:    'var(--color-on-surface-variant)',
    label:          'var(--color-on-surface-variant)',
    'label-focus':  'var(--color-primary)',
  },

  badge: {
    default: {
      bg:  'var(--color-surface-variant)',
      fg:  'var(--color-on-surface-variant)',
    },
    accent: {
      bg:  'var(--color-accent)',
      fg:  'var(--color-on-accent)',
    },
    error: {
      bg:  'var(--color-error-container)',
      fg:  'var(--color-error)',
    },
  },

  sidebar: {
    bg:           'var(--color-surface)',
    fg:           'var(--color-on-surface)',
    'item-hover': 'var(--color-state-layer-hover)',
    'item-active-bg': 'var(--color-primary-container)',
    'item-active-fg': 'var(--color-on-primary-container)',
    border:       'var(--color-outline-variant)',
    width:        '224px',
  },

  header: {
    bg:     'var(--color-background)',
    fg:     'var(--color-on-background)',
    border: 'var(--color-outline-variant)',
    height: '56px',
  },

  kpiCard: {
    bg:         'var(--color-surface)',
    label:      'var(--color-on-surface-variant)',
    value:      'var(--color-on-surface)',
    positive:   'oklch(0.55 0.15 145)',
    negative:   'var(--color-error)',
    neutral:    'var(--color-on-surface-variant)',
  },
} as const
