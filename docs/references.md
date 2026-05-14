# References — DNA Visual Extraído

> Scrapeado vía WebFetch — 2026-05-14. Fuente de verdad para decisiones de diseño basadas en referentes. Mantener lofi hasta v1; estas notas nutren v3.

---

## Pentagram — pentagram.com

**Postura:** Anti-decorativo. El trabajo es el contenido. La confianza se comunica con vacío.

**Tipografía**
- Typefaces comisionados a medida — en v3 equivale a fuente editorial propia (Clash Display / GT Super candidatos)
- Sans-serif limpio en navegación y body; sin ornamentos
- Jerarquía por escala y peso, sin color como jerarquizador

**Layout**
- Whitespace dominante — el espacio vacío no es error, es decisión
- Hero como slider de 7 imágenes; el portfolio es la hero, no el copy
- Grid limpio; sin decoración de fondo

**Color**
- Monocromático (negro/blanco) + un acento rojo estratégico solo en el wordmark
- → Para C4: blanco + acento verde #00a873 solo en CTAs. Nunca decorativo.

**Navegación**
- Utilitaria, sin complejidad; filtrado por tipo de cliente
- ≤5 items visibles — sin mega-menús

**Interacción**
- Hover sutil; nada animado por decoración
- El portfolio slider es la única interacción activa en home

**Lofi takeaway:** Máximo whitespace. Work-first. El verde solo aparece donde hay acción.

---

## Locomotive — locomotive.ca

**Postura:** Humana dentro de lo minimalista. "Design and code son herramientas; las personas son el diferenciador."

**Tipografía**
- Sans-serif con jerarquía de pesos clara
- Body optimizado para legibilidad; heading vs body bien diferenciados

**Layout**
- Grid modular con cards para trabajo destacado
- Whitespace generoso — cada elemento respira
- Left-aligned nav con profundidad jerárquica

**Color**
- Base neutra (blanco/gris/negro) + acentos puntuales warm (orange/gold)
- Alto contraste para accesibilidad

**Navegación**
- Dual: horizontal primaria + footer redundante
- Arrows en CTAs ("→") — patrón que C4 ya usa en "Solicitar →"
- Language toggle — relevante para versión en inglés en v1+

**Motion/Scroll**
- Transiciones sutiles en hover (no documentadas en HTML estático)
- Scroll narrativo inferido por estructura de secciones

**Interacción distintiva**
- Emoji como puntuación de marca — humaniza sin perder sofisticación
- → Para C4: no replicar emojis, pero sí el principio: un elemento "humano" inesperado en copia

**Lofi takeaway:** CTAs con arrow (ya implementado). Whitespace como respiración. Copy con personalidad sin decoración visual.

---

## Resn — resn.co.nz

**Postura:** Minimalismo moderno con provocaciones conceptuales. Subvierte expectativas sin perder limpieza.

**Conceptual**
- Usan imagery de "old-browser" — contraste pasado/presente como statement
- El site es el concepto, no el contenedor
- Nada es "safe" — cada decisión tiene intención

**Tipografía**
- Sparse, esencial — el texto no compite con el trabajo
- Sin ornamento tipográfico

**Layout**
- Breathing room extremo — menos es más
- El trabajo carga el peso visual, no el layout

**Interacción**
- Subversión de patrones esperados — el usuario se sorprende sin sentirse perdido
- → Para C4 en v3: al menos una interacción en home que rompa el patrón esperado

**Lofi takeaway:** No implementable en lofi, pero documentado para v3. En v0/v1: mantener el principio de "nunca lo seguro por defecto".

---

## Active Theory — activetheory.net

**Postura:** El scroll es el medio narrativo. El portfolio es la experiencia, no la descripción.

**Tipografía**
- Mínima — project titles en esquina inferior izquierda
- Copy reducido al mínimo para no competir con el trabajo visual

**Layout**
- Full-screen hero por proyecto
- Single dominant image por pieza — pantalla completa
- Sidebar deslizable desde el borde derecho para filtros
- Tag-based filtering dentro del sidebar

**Color**
- Imagen como color — backgrounds oscuros de alto contraste para showcases
- Dark palette como base cuando el trabajo es visual-first

**Navegación**
- Sidebar desde borde derecho (trigger)
- Filtering por tags dentro del sidebar
- Desktop-first; video como interacción primaria

**Motion/Scroll**
- Video full-screen como navegación central
- Scroll-as-narrative: cada scroll es un acto narrativo, no un desplazamiento
- → Para C4 en v3: scroll de la sección /trabajos como experiencia narrativa

**Lofi takeaway:** Cards de trabajos sin texto decorativo — el thumbnail carga todo el peso. En lofi: placeholder + resultado medible ("↑42% conversión"), nada más.

---

## Síntesis para C4 — Lofi (v0 activo)

| Principio extraído | Fuente | Aplicación inmediata |
|---|---|---|
| Work-first, copy mínimo en cards | Pentagram + Active Theory | Cards de /trabajos: thumbnail + resultado, sin descripción larga |
| Whitespace como decisión activa | Pentagram + Locomotive | Secciones con padding generoso; no rellenar espacio vacío |
| Arrow CTAs (`→`) | Locomotive | Ya implementado en "Solicitar →" — mantener consistente |
| Verde solo en acción | Pentagram (rojo estratégico) | Acento verde solo en CTA primarios y filtros activos; nunca decorativo |
| Un elemento inesperado | Resn | Reservado para v3 — placeholder en DESIGN.md |
| Resultados medibles visibles | Active Theory (work como protagonista) | Badge de resultado en cards desde v0 |

---

## Sistemas de Diseño de Referencia

### Material 3 — m3.material.io

**Uso en C4:** Base del sistema de tokens y motion. Ya adoptado en DESIGN.md (escala tipográfica, easing, state layers).

**Color**
- Sistema HCT (Hue, Chroma, Tone) — C4 usa OKLCH, principio equivalente de consistencia perceptual
- Roles: primary, secondary, tertiary, neutral, on-* — C4 simplifica a: background/foreground/accent/muted/border
- Dynamic color: generación de paleta desde un color fuente → relevante para v3 theming por cliente

**Tipografía**
- Display (3 tamaños) / Headline (3) / Title (3) / Body (3) / Label (3)
- Valores base: Display LG 57px, Headline MD 28px, Title MD 16px, Body MD 14px, Label SM 12px
- Pesos: 400 regular / 500 medium / 700 bold
- → C4 ya adoptó esta escala en DESIGN.md

**Spacing**
- Base 4dp → escala: 4, 8, 12, 16, 24, 32, 48, 56, 64, 80, 96
- → Mapear a Tailwind spacing tokens en v1

**Motion**
- Easing adoptado: Standard `cubic-bezier(0.2,0,0,1)`, Emphasized (más duración), Decelerate `cubic-bezier(0,0,0,1)`
- Duraciones: short 100-200ms / medium 300-400ms / long 500-700ms
- → Ya documentado y adoptado en DESIGN.md

**State layers**
- Hover/pressed/focus como capas de opacidad sobre el color base, no colores separados
- → Ya adoptado en DESIGN.md como principio

---

### GitLab Pajamas — design.gitlab.com

**Uso en C4:** Referente principal para la **capa interna** (dashboard, /proyectos, /kpis). Ya citado en DESIGN.md.

**Patrones de datos densos**
- KPI cards: valor actual / meta / delta / badge de estado — ya implementado en MockPage
- Tables con paginación para datasets grandes
- Status badges con color semántico (crítico para /kpis y /proyectos)
- Progress bars por proyecto con % completado — ya implementado

**Filtros**
- Checkboxes, selects, comboboxes para filtros de dashboard
- Accordion / collapse para progressive disclosure en layouts densos

**Color**
- Tokens separados: Brand colors + Product colors + Data visualization
- Status colors para badges: crítico/warning/success/info → C4 usa: rojo/naranja/verde/azul

**Implementación**
- Design tokens disponibles en múltiples formatos (Figma, Storybook)
- Componentes como React + Tailwind directamente aplicables
- Separación clara layout / tipografía / color

---

### Salesforce Lightning — lightningdesignsystem.com

**Uso en C4:** Patrones de affordance y data tables para la **capa interna**. Ya citado en DESIGN.md.

**Principios clave**
- Clarity (descubrimiento) + Efficiency (componentes reutilizables)
- Diseñar para el sistema completo, no secciones aisladas
- SLDS 2: CSS custom properties en lugar de tokens estáticos → habilita dark mode real

**Patrones de datos**
- Data tables: sorting, filtering, inline editing, row selection — referente para /proyectos en v1
- Filter bars con condiciones por columna — referente para filtros de /trabajos y /proyectos
- KPI cards ejecutivos — referente para /kpis
- Status indicators: spinners, skeletons, progress para estados de carga

**Tokens → Tailwind**
- `--lwc-colorBackground` → `bg-*` utilities
- Tokens separados por uso: background / text / border (no mezclar)
- Font weight / size / line-height como tokens separados

---

## Para v3 (documentado, no implementar aún)

- **Scroll narrativo** en home y /trabajos (Active Theory)
- **Una interacción conceptual sorpresiva** en hero de home (Resn)
- **Fuente editorial comisionada o premium** — Clash Display / GT Super (Pentagram)
- **Sidebar de filtros** desde borde lateral en /trabajos (Active Theory)
- **Dark mode** activado para secciones de showcase (Active Theory palette)
