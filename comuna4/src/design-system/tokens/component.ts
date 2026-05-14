/**
 * TOKENS DE COMPONENTE — referencias a tokens semánticos vía CSS vars.
 * Define contratos visuales por componente. Nunca valores directos.
 * Fuentes de referencia: M3, Pajamas (GitLab), Lightning (Salesforce).
 */

export const componentTokens = {
  // ─── Botones ───────────────────────────────────────────────────────────────
  button: {
    primary: {
      bg:           'var(--color-primary)',
      fg:           'var(--color-on-primary)',
      border:       'transparent',
      // hover/pressed se implementan como state layers encima del bg
    },
    outline: {
      bg:           'transparent',
      fg:           'var(--color-primary)',
      'bg-hover':   'var(--color-state-layer-hover)',
      border:       'var(--color-outline)',
    },
    ghost: {
      bg:           'transparent',
      fg:           'var(--color-on-surface)',
      'bg-hover':   'var(--color-state-layer-hover)',
      border:       'transparent',
    },
    accent: {
      bg:           'var(--color-accent)',
      fg:           'var(--color-on-accent)',
      border:       'transparent',
    },
    // Padding horizontal: 12px (Pajamas — spacing-scale.4 exclusivo para botones)
    'padding-x':    'var(--space-3)',   // 12px
    'padding-y':    'var(--space-2)',   // 8px
    radius:         'var(--radius-md)',
    height:         '36px',
  },

  // ─── Card ──────────────────────────────────────────────────────────────────
  card: {
    bg:             'var(--color-surface)',
    fg:             'var(--color-on-surface)',
    border:         'var(--color-outline)',
    'bg-hover':     'var(--color-surface-container)',
    shadow:         'var(--shadow-sm)',
    radius:         'var(--radius-lg)',
    padding:        'var(--space-6)',   // 24px
  },

  // ─── Input ─────────────────────────────────────────────────────────────────
  input: {
    bg:             'var(--color-surface)',
    fg:             'var(--color-on-surface)',
    border:         'var(--color-outline)',
    'border-focus': 'var(--color-primary)',
    placeholder:    'var(--color-on-surface-variant)',
    label:          'var(--color-on-surface-variant)',
    'label-focus':  'var(--color-primary)',
    height:         '36px',
    'padding-x':    'var(--space-3)',   // 12px
    radius:         'var(--radius-md)',
  },

  // ─── Badge ─────────────────────────────────────────────────────────────────
  // Pajamas: badge con color semántico — background + foreground por estado
  badge: {
    default: {
      bg:   'var(--color-surface-variant)',
      fg:   'var(--color-on-surface-variant)',
    },
    accent: {
      bg:   'var(--color-accent-container)',
      fg:   'var(--color-on-accent-container)',
    },
    // Estados semánticos (capa interna)
    info: {
      bg:   'var(--color-info-container)',
      fg:   'var(--color-on-info-container)',
    },
    success: {
      bg:   'var(--color-success-container)',
      fg:   'var(--color-on-success-container)',
    },
    warning: {
      bg:   'var(--color-warning-container)',
      fg:   'var(--color-on-warning-container)',
    },
    danger: {
      bg:   'var(--color-danger-container)',
      fg:   'var(--color-on-danger-container)',
    },
    // Tokens de forma (iguales para todas las variantes)
    'padding-x':  'var(--space-2)',    // 8px
    'padding-y':  'var(--space-0.5)',  // 2px
    radius:       'var(--radius-full)',
    'font-size':  'var(--size-label-sm)',   // 11px
    'font-weight':'var(--weight-medium)',
  },

  // ─── Filter Chip ───────────────────────────────────────────────────────────
  // Pentagram: filtros visibles, opciones ≤7, chips con estado sólido activo
  filterChip: {
    default: {
      bg:     'transparent',
      fg:     'var(--color-on-surface-variant)',
      border: 'var(--color-outline)',
    },
    active: {
      bg:     'var(--color-primary)',
      fg:     'var(--color-on-primary)',
      border: 'var(--color-primary)',
    },
    'bg-hover':   'var(--color-state-layer-hover)',
    'padding-x':  'var(--space-3)',    // 12px
    'padding-y':  'var(--space-1)',    // 4px
    radius:       'var(--radius-full)',
    'font-size':  'var(--size-body-md)',
    height:       '32px',
  },

  // ─── Progress Bar ──────────────────────────────────────────────────────────
  // Pajamas: progress por proyecto con % completado
  progressBar: {
    track:    'var(--color-surface-container-high)',
    fill:     'var(--color-accent)',
    'fill-info':    'var(--color-info)',
    'fill-success': 'var(--color-success)',
    'fill-warning': 'var(--color-warning)',
    'fill-danger':  'var(--color-danger)',
    height:   '6px',
    radius:   'var(--radius-full)',
  },

  // ─── Table ─────────────────────────────────────────────────────────────────
  // Pajamas + Lightning: tablas de datos con sorting, filtering, paginación
  table: {
    bg:           'var(--color-surface)',
    header: {
      bg:         'var(--color-surface-variant)',
      fg:         'var(--color-on-surface-variant)',
      'font-size':'var(--size-label-md)',
      'font-weight': 'var(--weight-medium)',
      border:     'var(--color-outline)',
      'padding-x':'var(--space-4)',   // 16px
      'padding-y':'var(--space-3)',   // 12px
    },
    row: {
      fg:          'var(--color-on-surface)',
      'fg-muted':  'var(--color-on-surface-variant)',
      border:      'var(--color-outline)',
      'bg-hover':  'var(--color-state-layer-hover)',
      'bg-selected':'var(--color-accent-container)',
      'padding-x': 'var(--space-4)',  // 16px
      'padding-y': 'var(--space-3)',  // 12px
      'font-size': 'var(--size-body-md)',
    },
    // Espaciado entre tabla y filtros (Lightning: filter bar sobre tabla)
    'filter-gap': 'var(--space-4)',   // 16px
  },

  // ─── Attribute List ────────────────────────────────────────────────────────
  // Pajamas: layout de 2 col para metadata de entidad (cliente, fechas, estado)
  attributeList: {
    label: {
      fg:         'var(--color-on-surface-variant)',
      'font-size':'var(--size-body-sm)',
      'font-weight': 'var(--weight-medium)',
    },
    value: {
      fg:         'var(--color-on-surface)',
      'font-size':'var(--size-body-md)',
    },
    gap:    'var(--space-3)',   // 12px entre label y value
    'row-gap': 'var(--space-4)', // 16px entre filas
  },

  // ─── KPI Card ──────────────────────────────────────────────────────────────
  // Pajamas: valor actual / meta / delta / badge de estado
  kpiCard: {
    bg:         'var(--color-surface)',
    border:     'var(--color-outline)',
    shadow:     'var(--shadow-sm)',
    radius:     'var(--radius-lg)',
    padding:    'var(--space-6)',    // 24px
    label: {
      fg:         'var(--color-on-surface-variant)',
      'font-size':'var(--size-label-md)',
      'font-weight': 'var(--weight-medium)',
    },
    value: {
      fg:         'var(--color-on-surface)',
      'font-size':'var(--size-headline-sm)',
      'font-weight': 'var(--weight-semibold)',
    },
    delta: {
      positive: 'var(--color-success)',
      negative: 'var(--color-danger)',
      neutral:  'var(--color-on-surface-variant)',
      'font-size': 'var(--size-body-sm)',
    },
  },

  // ─── Sidebar (capa interna) ────────────────────────────────────────────────
  sidebar: {
    bg:               'var(--color-surface)',
    fg:               'var(--color-on-surface)',
    border:           'var(--color-outline)',
    'item-fg':        'var(--color-on-surface-variant)',
    'item-hover':     'var(--color-state-layer-hover)',
    'item-active-bg': 'var(--color-primary-container)',
    'item-active-fg': 'var(--color-on-primary-container)',
    'item-padding-x': 'var(--space-3)',   // 12px
    'item-padding-y': 'var(--space-2)',   // 8px
    width:            '224px',
    'item-radius':    'var(--radius-md)',
  },

  // ─── Header (nav pública) ──────────────────────────────────────────────────
  header: {
    bg:       'var(--color-background)',
    fg:       'var(--color-on-background)',
    border:   'var(--color-outline)',
    height:   '56px',
    'padding-x': 'var(--space-6)',   // 24px
    'nav-gap':   'var(--space-8)',   // 32px entre nav items
  },

  // ─── Skeleton Loader ───────────────────────────────────────────────────────
  // Pajamas: placeholder antes de datos, imita el layout final
  skeleton: {
    bg:        'var(--color-surface-container)',
    highlight: 'var(--color-surface-container-high)',
    radius:    'var(--radius-md)',
  },
} as const
