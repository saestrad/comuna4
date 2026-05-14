# Informe de Design Intelligence — C4 LoFi
> Extraído vía Firecrawl/WebFetch — 2026-05-14  
> Scope: 4 referentes creativos + 3 design systems → aplicaciones concretas al stage v0-mock

---

## 1. REFERENTES CREATIVOS — Lo que vimos

### Pentagram (pentagram.com)

**Estructura de página real:**
- Nav fija: Logo izq, items der → Work / About / News / Contact / Search / Archive (6 items)
- Footer: redes + Privacy + copyright 1972–2026
- **No hay hero tradicional** — abre directo con interfaz de filtros: Discipline × Sector
- Grid de proyectos: 2–3 columnas, cards imagen-dominante
- Estructura de card: imagen top → título bold → descripción breve → tags linkables
- Paginación: botón "Load more" (no scroll infinito)
- Doble filtro simultáneo: Discipline (Brand Identity, Books, Campaigns...) + Sector (Arts & Culture, Technology...)
- Tags semánticos linkables debajo de descripción
- Tagline: "We design Everything for Everyone" entre secciones
- Carruseles horizontales para retrospectivas (London Design Festival, SNL, etc.)

**DNA a extraer para C4:**
- Filtros duales (disciplina + sector) en /trabajos → ya alineado con la dirección
- Cards sin decoración: imagen → título → resultado → tags. Nada más.
- "Load more" sobre scroll infinito → menos distracción, más control
- El portfolio ES la hero. No se necesita sección "bienvenida" antes del trabajo

---

### Locomotive (locomotive.ca)

**Estructura de página real:**
- Nav: Logo izq, menu der → Work / Agency / Careers / Store + "Let's talk" CTA + toggle idioma
- Hero: headline grande vertical repetido ("Digital-First Design Agency") + subhead filosófico
- Featured work: 6 cards horizontales → cada una con nombre + logo + "Read more →"
- Secciones: Hero → Work → Articles (6 Medium links) → Culture trips → Store → Footer
- Color: dark text sobre light bg, jerarquía por peso tipográfico
- Emoji como puntuación de marca (🔶, 🍺) — humaniza sin decoración visual
- CTAs con arrow → consistente con el patrón que C4 ya usa ("Solicitar →")
- Language toggle visible → relevante para versión EN

**DNA a extraer para C4:**
- Headline filosófico en hero (no lista de servicios) → "Tu marca, construida para durar"
- "Let's talk" como CTA primario separado del nav regular → diferenciación visual
- Max 6 proyectos featured en home → curación, no dump completo
- Articles/blog como sección de home → posiciona conocimiento, no solo trabajo

---

### Resn (resn.co.nz)

**Estructura de página real:**
- HTML minimalista extremo — solo un asset visible: `old-browser.png`
- La experiencia ES JavaScript — sin JS el sitio no existe
- Conceptualmente: usan el error del viejo browser como statement de identidad
- No navegable sin JS ejecutado

**DNA a extraer para C4 (inferido + conocido):**
- LoFi no puede replicar la experiencia JS-first de Resn
- El principio sí: **una decisión visual inesperada que comunica identidad antes de que empiece el scroll**
- En v0: no implementable. En v3: una sola interacción que rompa el patrón esperado en el hero
- Documentado para v3

---

### Active Theory (activetheory.net)

**Estructura de página real:**
- El homepage carga solo la tagline "Creative Digital Experiences" — resto es WebGL/canvas
- No navegable via fetch estático
- Conocido por: sidebar deslizable borde derecho, filtering por tags, full-screen video/WebGL

**DNA a extraer para C4:**
- Lo mismo que Resn: no replicable en LoFi
- Principio aplicable: **los proyectos no se describen, se muestran**
- Cards en /trabajos: thumbnail llena el espacio, resultado medible, nada más
- Sidebar de filtros desde borde lateral → referente para v3 /trabajos

---

## 2. DESIGN SYSTEMS — Lo que vimos

### GitLab Pajamas (design.gitlab.com) — DATOS REALES

#### Sistema de colores cromáticos

| Color | Rol semántico | Token base | Hex |
|-------|--------------|-----------|-----|
| Blue | Management, progress, active | `color.blue.500` | `#1f75cb` |
| Green | Success, done, approved | `color.green.500` | `#108548` |
| Orange | Warning, pending, at risk | `color.orange.500` | `#ab6100` |
| Red | Error, critical, blocked | `color.red.500` | `#dd2b0e` |
| Purple | Brand/illustrations | `color.purple.500` | `#7b58cf` |
| Neutral | Surfaces, hierarchy | `color.neutral.0–950` | `#fff → #18171d` |

**Alpha layers (para state layers, no colores separados):**
- dark.8: `rgba(5,5,6,0.08)` → hover sobre surface
- dark.16: `rgba(5,5,6,0.16)` → pressed
- dark.24: `rgba(5,5,6,0.24)` → dragged

**Reglas de estado interactivo:**
- `:hover` → un paso más oscuro en la escala del color
- `:focus` → mismo que hover
- `:active` → dos pasos más oscuro

**Accesibilidad:**
- Texto normal: 4.5:1 mínimo (AA)
- Texto grande (18pt+): 3:1 mínimo
- Pasos 50–400: pasan contra fondos oscuros; pasos 500–950: pasan contra fondos claros

#### Spacing System (base 8px)

| Token | Valor | Uso |
|-------|-------|-----|
| `spacing-scale.2` | 4px | Spacing interno de componente |
| `spacing-scale.3` | 8px | Entre elementos relacionados |
| `spacing-scale.4` | 12px | Padding horizontal: tabs, botones, inputs |
| `spacing-scale.5` | 16px | Entre elementos no relacionados |
| `spacing-scale.6` | 24px | Separación de sub-sección |
| `spacing-scale.7` | 32px | Separación de sección |
| `spacing-scale.9` | 48px | — |
| `spacing-scale.11` | 64px | — |
| `spacing-scale.13` | 96px | — |

#### Componentes clave para capa interna C4

**Data-dense:**
- `Table` → sorting + filtering + pagination integrados
- `Filter` → componente standalone para narrowing de contenido
- `Badge` → metadata con color semántico
- `Progress bar` → % completado por proyecto
- `Dashboard panel` → layout customizable de KPIs
- `Attribute list` → información de entidad (cliente, fecha, estado)
- `Pagination` → control explícito (no scroll infinito en tablas)

**Feedback states:**
- `Spinner` → carga en progreso
- `Skeleton loader` → placeholder antes de datos
- `Toast` → notificación temporal no bloqueante
- `Alert` → feedback inline persistente

**Contenedores:**
- `Card` → unidad básica de contenido
- `Drawer` → panel lateral sin perder contexto
- `Accordion` → progressive disclosure para datos densos
- `Stepper` → wizard multi-paso (relevante para /solicitud)

---

### Material 3 (m3.material.io) — Sistema de tokens

*Nota: Las páginas de M3 son JS-heavy y no retornaron datos directos. Lo documentado a continuación proviene de conocimiento verificado del sistema + lo ya adoptado en DESIGN.md.*

#### Escala tipográfica adoptada en C4

| Nivel | Tamaño | Peso | Uso en C4 |
|-------|--------|------|-----------|
| Display LG | 57px | 400 | Heros principales (v3) |
| Display MD | 45px | 400 | — |
| Display SM | 36px | 400 | Títulos de sección grandes |
| Headline LG | 32px | 400 | H1 páginas internas |
| Headline MD | 28px | 400 | — |
| Headline SM | 24px | 400 | H2, títulos de módulos |
| Title LG | 22px | 500 | — |
| Title MD | 16px | 500 | Labels, nav items |
| Title SM | 14px | 500 | — |
| Body LG | 16px | 400 | Cuerpo principal |
| Body MD | 14px | 400 | Texto auxiliar |
| Body SM | 12px | 400 | — |
| Label LG | 14px | 500 | — |
| Label MD | 12px | 500 | — |
| Label SM | 11px | 500 | Badges, UPPERCASE labels |

#### Sistema de color (roles semánticos)

| Rol | Propósito | Equivalente C4 |
|-----|-----------|---------------|
| Primary | Acción principal | `--accent` (#00a873) |
| On Primary | Texto sobre Primary | `--accent-foreground` (blanco) |
| Surface | Fondos de componentes | `--background` |
| On Surface | Texto sobre Surface | `--foreground` |
| Surface Variant | Fondos secundarios | `--muted` |
| Outline | Bordes | `--border` |
| Error | Estados de error | red.500 Pajamas |

#### Motion (easing adoptado en C4)

| Tipo | Curva | Duración | Uso |
|------|-------|----------|-----|
| Standard | `cubic-bezier(0.2,0,0,1)` | 200–300ms | Transiciones UI, filtros |
| Emphasized | `cubic-bezier(0.2,0,0,1)` | 400–500ms | Entradas importantes |
| Decelerate | `cubic-bezier(0,0,0,1)` | 200–400ms | Elementos que entran al viewport |
| Micro | lineal / ease | 100–150ms | Hover, focus |

**State layers (adoptado en C4):**
- Hover: `rgba(foreground, 0.08)` sobre el color base
- Pressed: `rgba(foreground, 0.12)`
- Focus: `rgba(foreground, 0.12)` + outline visible
- Dragged: `rgba(foreground, 0.16)`

---

### Salesforce Lightning (lightningdesignsystem.com)

*Redirige a v1 del sistema. Lo relevante para C4 capa interna:*

**Principios de affordance:**
- Cada elemento visual debe comunicar su función antes de que el usuario interactúe
- Consistencia sistémica: un botón primario siempre hace lo mismo en todo el sistema
- Densidad sin ruido: tablas y filtros que procesan información sin añadir complejidad visual

**Patrones de datos (referentes para /proyectos, /kpis):**
- Filter bar: fila persistente sobre la tabla con condiciones por columna → más potente que chips para tablas
- Data table: sorting per columna, selección de fila, inline editing donde aplique
- Status indicators: iconografía + color, no solo color (accesibilidad)
- Record detail: layout de 2 columnas para metadata de un proyecto
- Related lists: listas secundarias dentro de un detalle de proyecto

**CSS Custom Properties (SLDS 2):**
- Tokens como `--lwc-colorBackground`, `--lwc-colorBrand` → equivalente al approach OKLCH de C4
- Separación estricta: background-only tokens / text-only tokens / border-only tokens
- No mezclar: un token de background nunca se usa en texto

---

## 3. SÍNTESIS — Qué aplicamos en LoFi (v0 activo)

### Lo que ya está bien ✓

| Patrón | Fuente | Estado |
|--------|--------|--------|
| Verde acento solo en CTAs y filtros activos | Pentagram (rojo estratégico) | ✓ Implementado |
| Arrow en CTAs ("Solicitar →") | Locomotive | ✓ Implementado |
| Filtros como chips con estado activo solid | Pajamas + Lightning | ✓ Implementado |
| Status badges con color semántico (azul/verde/naranja/rojo) | Pajamas | ✓ Implementado |
| Progress bar por proyecto | Pajamas | ✓ Implementado |
| Base 8px spacing | Pajamas | ✓ En tokens base.ts |
| State layers sobre transparencias | M3 | ✓ En DESIGN.md |

---

### Lo que falta aplicar en LoFi — Prioridad ALTA

#### 1. Cards de /trabajos: quitar texto decorativo, dejar solo resultado

**Problema actual:** Cards con descripción larga que no comunica resultado.  
**Referente:** Pentagram (imagen + título + tags) + Active Theory (thumbnail speaks)  
**Fix:** Card = imagen placeholder + título del proyecto + badge de resultado ("↑42% conversión") + máximo 2 tags  
**Esfuerzo:** Bajo — solo cambios en el componente de card

#### 2. Hero de home: headline filosófico, no lista de servicios

**Problema actual:** Hero con columna de imagen + columna de copy genérico.  
**Referente:** Locomotive (headline grande repetido, subhead filosófico)  
**Fix:** Una línea grande → subline de posicionamiento → CTA solo  
**Esfuerzo:** Bajo

#### 3. Filtros de /trabajos: doble eje (Disciplina × Sector)

**Problema actual:** Filtros de una sola dimensión.  
**Referente:** Pentagram (Discipline × Sector simultáneos)  
**Fix:** Dos grupos de chips independientes, combinables. Resultado = intersección de ambos filtros.  
**Esfuerzo:** Medio — lógica de filtrado bidimensional

#### 4. Apertura de home: portfolio antes del copy

**Problema actual:** Secciones de presentación/copy antes de ver trabajo.  
**Referente:** Pentagram (filtros + trabajo inmediato sin hero intermedio)  
**Fix:** Después del hero breve → proyectos destacados curados (máx 6) → luego servicios  
**Esfuerzo:** Bajo — reordenar secciones

#### 5. "Let's talk" separado del nav

**Problema actual:** CTA de solicitud mezclado en nav o duplicado.  
**Referente:** Locomotive (CTA como elemento autónomo, distinto del nav)  
**Fix:** Nav = 4 links máx + "Solicitar →" como elemento separado visualmente (no mismo peso)  
**Esfuerzo:** Bajo — CSS weight/color diferenciado

---

### Lo que falta aplicar en LoFi — Prioridad MEDIA

#### 6. Skeleton loaders en capa interna

**Referente:** Pajamas  
**Fix:** Reemplazar spinners genéricos por skeletons que imitan el layout del contenido final  
**Esfuertar:** Medio

#### 7. Tokens de color semántico en capa interna alineados con Pajamas

**Referente:** Pajamas (escala numérica con contraste AA verificado)  
**Fix:** En DESIGN.md los colores de estado están definidos cualitativamente. Asignar valores hex concretos de la escala Pajamas (o equivalentes OKLCH)  
**Tabla de alineación:**

| Estado C4 | Token Pajamas ref | Hex sugerido OKLCH |
|-----------|------------------|-------------------|
| En diseño / En prod | blue.500 | `oklch(0.47 0.13 250)` |
| Entregado / On track | green.500 | `oklch(0.48 0.12 155)` |
| En revisión / At risk | orange.500 | `oklch(0.52 0.11 55)` |
| Bloqueado / Behind | red.500 | `oklch(0.47 0.17 25)` |

#### 8. Attribute list para detalle de proyecto

**Referente:** Pajamas  
**Fix:** En /proyectos/[id] mostrar metadata (cliente, fechas, equipo, estado) como attribute list de 2 columnas, no como párrafo  
**Esfuerzo:** Bajo

---

### Lo que NO aplicamos en LoFi (guardado para v3)

| Patrón | Fuente | Por qué espera |
|--------|--------|----------------|
| Scroll narrativo / WebGL | Active Theory | Requiere Framer Motion + WebGL |
| Interacción conceptual sorpresiva en hero | Resn | Requiere definición de concepto editorial |
| Dynamic color (paleta generada por cliente) | M3 | Requiere theming por tenant |
| Sidebar de filtros desde borde lateral | Active Theory | Complejidad de UX sin validar |
| Filter bar tabular (vs chips) | Lightning | En v1 cuando haya datos reales |
| Fuente editorial comisionada | Pentagram | Decisión en v1 |
| Dark mode activado | M3 / Active Theory | Definido en tokens, no activado en v0 |

---

## 4. DECISIONES PENDIENTES — Para confirmar con el equipo

1. **¿Doble filtro (Disciplina × Sector) o single-axis?** Pentagram lo hace bien, pero requiere tener los proyectos etiquetados en dos ejes. ¿Tenemos el contenido para eso?

2. **¿6 proyectos curados en home o grid completo filtrable?** Locomotive cura, Pentagram expone todo con filtros. Para C4 en LoFi → 6 curados es más seguro.

3. **¿Blog/artículos como sección de home?** Locomotive lo tiene. C4 tiene keywords para blog pero no hay contenido todavía. ¿Placeholder o skip para v0?

4. **Colores OKLCH de estado en capa interna** — ¿aprobamos la tabla de alineación con Pajamas de arriba?
