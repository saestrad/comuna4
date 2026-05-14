# DESIGN — Sitio Web Comuna 4

## Aesthetic Direction

**Referentes principales:**
- **Pentagram** — editorial, jerarquía tipográfica clara, navegación dual-level (disciplina + sector), sin decoración innecesaria
- **Locomotive** — scroll narrativo, timing cinematográfico, máximo 4 items en nav + CTA separado
- **Resn** — valentía conceptual, interacciones inesperadas, nunca safe
- **Active Theory** — scroll como medio narrativo, proyectos como protagonistas

**Posición estética:** Restrained → Committed. La capa pública avanza hacia Committed en v3 (el acento verde lleva el 30-40% de la superficie en heros y casos). La capa interna se mantiene Restrained durante todo el pipeline.

**Escena de uso — capa pública:** CMO o dueño de negocio, escritorio o móvil, durante el día, evaluando si esta agencia tiene el nivel suficiente. La interfaz debe proyectar criterio, no intentar impresionar.

**Escena de uso — capa interna:** Collaborator en oficina, monitor grande, día de trabajo. Cliente en móvil revisando estado de su campaña. La UI es funcional, densa sin ser ruidosa. Tema claro.

## Color

**Estrategia:** Restrained con acento verde identitario.

| Token | Valor OKLCH | Equivalente hex | Uso |
|---|---|---|---|
| `--accent` | `oklch(0.63 0.14 162)` | #00a873 | CTA primarios, badges activos, links de acción |
| `--accent-foreground` | `oklch(1 0 0)` | blanco | Texto sobre acento |
| `--background` | `oklch(1 0 0)` | blanco puro | Fondos principales (v0) |
| `--foreground` | `oklch(0.145 0 0)` | negro suave | Texto principal |
| `--muted` | `oklch(0.97 0 0)` | gris muy claro | Fondos secundarios, headers de filtros |
| `--muted-foreground` | `oklch(0.556 0 0)` | gris medio | Texto auxiliar, labels |
| `--border` | `oklch(0.922 0 0)` | gris claro | Bordes, separadores |

**Primitivos adicionales (design-system/tokens/base.ts):**
- `color.cream` → `oklch(0.97 0.01 85)` — fondo cálido para v1/v3
- `color['accent-1-dark']` → `oklch(0.52 0.14 162)` — hover sobre acento
- `color['accent-1-light']` → `oklch(0.88 0.07 162)` — surface tintada, backgrounds de badges

**Naranja para isNew:** `oklch(0.72 0.15 55)` aprox — secciones nuevas propuestas en MockPage.

**Semántica de colores de estado (capa interna):**
- Azul → En diseño / En producción
- Verde → Entregado / On track
- Naranja → En revisión / At risk
- Rojo → Bloqueado / Behind

**Modo oscuro:** Definido en globals.css pero no activo en v0. Background `oklch(0.145 0 0)`, acento igual.

## Typography

**Fuente actual (v0 + v1):** Inter (Google Fonts, variable weight)
- Cargada vía `next/font/google` en `app/layout.tsx`
- CSS var: `--font-inter` → `--font-sans`
- Monospace: Geist Mono → `--font-mono`

**Fuente editorial (v3):** Por definir — candidatos: Clash Display, Editorial New, o GT Super. Decisión en v1 según dirección de marca.

**Escala tipográfica (Material 3):**

| Nivel | Tamaño | Uso |
|---|---|---|
| Display LG | 57px / 3.5625rem | Heros principales |
| Display SM | 36px / 2.25rem | Títulos de sección |
| Headline LG | 32px / 2rem | H1 de páginas internas |
| Headline SM | 24px / 1.5rem | H2, títulos de módulos |
| Title MD | 16px / 1rem | Labels, nav items |
| Body LG | 16px / 1rem | Cuerpo de texto principal |
| Body MD | 14px / 0.875rem | Texto auxiliar, descripciones |
| Label SM | 11px / 0.6875rem | Badges, tracking-widest labels |

**Reglas:**
- Body máx. 65–75ch de ancho
- Jerarquía por escala + peso: ratio mínimo 1.25 entre steps
- UPPERCASE + tracking-widest solo para labels auxiliares (≤12px)

## Layout

**Grilla:** Max-width contextual, no un container universal.
- Capa pública: sin max-width global — cada sección define el suyo
- Filtros y headers de página: `max-w-3xl mx-auto`
- Contenido editorial: `max-w-2xl` (65ch aprox)
- Capa interna: sidebar fijo + área de contenido flexible

**Espaciado:** Escala 4px base (`space` tokens en base.ts). Vary spacing for rhythm.

**Responsive:**
- Mobile-first
- Filtros con `flex-wrap` en móvil
- Sidebar collapsa en móvil (hamburger en v1+)

## Motion

**Principio:** Movimiento con propósito — nada decorativo.

**Easing adoptado (Material 3):**
- Standard: `cubic-bezier(0.2, 0, 0, 1)` — transiciones de UI
- Emphasized: `cubic-bezier(0.2, 0, 0, 1)` con duración más larga — entradas de elementos importantes
- Decelerate: `cubic-bezier(0, 0, 0, 1)` — elementos que entran al viewport

**Duraciones:**
- Micro (hover, focus): 100–150ms
- Transición (filter chips, toggle): 200–300ms
- Narrativa (scroll animations, page transitions): 400–600ms

**v0:** Solo `transition-colors` en botones y `transition` en filtros. Sin Framer Motion todavía.
**v1:** Framer Motion layout animations para filtros en /trabajos y /renta.
**v3:** Scroll narrativo, cursor customizado, animaciones de entrada por sección.

**Nunca animar:** layout properties (width, height, margin, padding). Solo transform + opacity.

## Components

**shadcn/ui** instalado con estilo `base-nova`.

**Componentes mock activos (sin shadcn, custom):**
- `MockHeader` — nav pública, usePathname active states, 4 items + CTA "Solicitar →"
- `MockSidebar` — nav interna por rol, usePathname, "← Sitio público" link
- `MockRoleSwitcher` — selector de rol en localStorage, dropdown en sidebar
- `MockPage` — wrapper server component con breadcrumb, título, badge, links, secciones
- `MockSectionToggle` — client component con toggle original/sugerencia por sección, botón verde
- `WizardMock` — 5 pasos navegables, stepper no-clickable, estado en URL

**Patrones de la capa interna (referente GitLab Pajamas + Salesforce Lightning):**
- KPI cards: valor actual / meta / delta / badge On track|At risk|Behind
- Filtros: chips con estado activo solid (`border-neutral-900 bg-neutral-900 text-white`)
- Status badges con color semántico: azul/verde/naranja/rojo
- Barra de progreso por proyecto con % completado

## Tokens Structure

```
src/design-system/
├── tokens/
│   ├── base.ts          # Primitivos (OKLCH, tamaños, espacios, sombras)
│   ├── semantic.ts      # Semánticos light/dark (background, accent, surface, etc.)
│   └── component.ts     # Por componente (TBD — v1)
├── stages/
│   ├── v0-mock.ts       # Solo layout tokens activos
│   ├── v1-low.ts        # Tipografía + grilla + color base (TBD)
│   └── v3-high.ts       # Sistema completo de marca (TBD)
└── index.ts             # Re-exporta stage activa (ENV: DESIGN_STAGE)
```

**Stage activa:** `v0-mock`

**Figma + design system:** Comienzan en v1 Low Fidelity. El v0 Mock no tiene archivo Figma ni sincronización de tokens. La conexión Tokens Studio → Figma Variables se configura al iniciar v1.

## Design Decisions

- **OKLCH para todos los colores.** Consistencia perceptual, safe interpolation. Sin #hex directo en componentes.
- **Acento verde (#00a873) como único color cromático en v0.** Solo aparece en CTAs primarios, filtros activos y el botón de sugerencia en MockPage.
- **Sin modo oscuro en v0.** Se define en tokens pero no se activa. Decisión: simplificar el mock.
- **State layers sobre transparencias (Material 3).** Hover/pressed/focus como capas de opacidad sobre el color base, no colores hover separados.
- **Filtros como chips, no dropdowns.** Patrón Pentagram: opciones visibles de un vistazo. Solo aplica cuando las opciones son ≤7.
- **isNew sections en naranja.** Propuestas que no estaban en el brief original. Color naranja semántico: "esto es nuevo, decidir si incluir."
