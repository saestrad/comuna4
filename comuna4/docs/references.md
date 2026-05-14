# Referencias — Fuente de verdad de diseño
## Comuna 4 Design System

> Este documento es la fuente de verdad compartida para discutir, aprobar y referenciar decisiones de diseño. Todo lo que se trae de afuera se acopla a nuestra personalidad, branding y animaciones. Nunca copiamos — extraemos la estructura y las mejores prácticas.

---

## 1. Referentes creativos

Estas son agencias y estudios cuya **forma** (no contenido) usamos como referencia visual y de interacción. El qué hacen es suyo; el cómo lo presentan nos inspira.

### Pentagram
**URL:** https://www.pentagram.com/
**ADN competitivo:** Prestigio + pensamiento. Branding estratégico de élite. "No necesito impresionar, ya sé que soy bueno."
**Debilidad que aprovechamos:** Distante, sin músculo en performance marketing, poca agilidad.

**Qué tomamos:**
- Uso radical del espacio en blanco como elemento de diseño
- Tipografía editorial de gran tamaño como protagonista
- Grid asimétrico con disciplina — no es desorden, es intención
- Nav de dos niveles: categoría principal + filtros por disciplina y sector (13 disciplinas, 16 sectores)
- Active state por categoría visible, no solo por URL
- Tags como sistema de navegación cruzada entre proyectos

**Qué no tomamos / cómo lo adaptamos:**
- Su minimalismo puede sentirse frío — nosotros añadimos calidez con tono de voz humano
- Su marca depende de reputación, no de color — nosotros sí usamos acento vibrante (#00a873)
- No persiguen performance — nosotros medimos todo

---

### Locomotive
**URL:** https://locomotive.ca/en
**ADN competitivo:** Craft + UX. Boutique premium. "Somos cool, pero también serios."
**Debilidad que aprovechamos:** Sin músculo en medios, no full-funnel, sin escala masiva.

**Qué tomamos:**
- Nav horizontal de máx 4 ítems + 1 CTA separado visualmente ("Let's talk" → nuestro "Solicitar")
- Scroll narrativo — las secciones se revelan con propósito, no solo aparecen
- Page transitions que dan continuidad entre páginas (no saltos abruptos)
- Velocidad de scroll personalizada (smooth scroll con Lenis o similar)
- Microinteracciones que hacen que el sitio "respire"
- Footer duplica nav principal — punto de reenganche al fondo de cada página

**Qué no tomamos / cómo lo adaptamos:**
- Sus efectos pueden ser pesados en mobile — nosotros priorizamos performance y `prefers-reduced-motion`
- No replicamos efectos por el efecto mismo — cada animación tiene propósito narrativo
- Ellos son solo craft digital — nosotros añadimos medios y métricas

---

### Resn
**URL:** https://resn.co.nz/
**ADN competitivo:** Tecnología + sorpresa. "Internet todavía puede sorprender." 350+ premios.
**Debilidad que aprovechamos:** Priorizan wow sobre ROI, clientes no siempre entienden ese nivel experimental.

**Qué tomamos:**
- Cursor personalizado como extensión de la identidad de marca (v3, desktop only)
- Grilla de proyectos navegable con filtros por categoría — cada card revela contexto en hover
- Hover states que revelan información en lugar de solo cambiar color
- Uso de WebGL / Canvas para momentos de impacto específicos (v3+)
- Experiencias que sorprenden sin sacrificar usabilidad

**Qué no tomamos / cómo lo adaptamos:**
- Sus proyectos son standalone experimentales — nosotros necesitamos conversión y funcionalidad real
- Priorizan premios — nosotros priorizamos resultados medibles del cliente
- El cursor personalizado es desktop only; mobile tiene su propia experiencia táctil

---

### Active Theory
**URL:** activetheory.net
**Qué tomamos:**
- Motion como lenguaje — las animaciones tienen personalidad propia
- Transiciones entre estados que cuentan una historia
- Cómo articulan la identidad de marca a través del movimiento
- Referencias para el sistema de motion: easing curves, timing, coreografía

**Qué no tomamos / cómo lo adaptamos:**
- Sus proyectos son experiencias standalone — nosotros necesitamos funcionalidad real (wizard de solicitud, reservas, dashboard)
- Adaptamos la intensidad del motion para que no interfiera con la usabilidad

---

## 2. Sistemas de diseño de referencia

Estos sistemas los usamos como **referencia de estructura, arquitectura y patrones** — no de estética. Sus componentes visuales son suyos; sus mejores prácticas son universales.

---

### Material 3 (Google)
**URL:** m3.material.io
**Versión de referencia:** Material Design 3

#### Qué tomamos

**Nomenclatura de tokens (adoptada directamente):**
```
Primitivos:   color.black, color.cream, color.accent-1
Semánticos:   background, on-background, surface, on-surface
              primary, on-primary, accent, on-accent
              error, outline, outline-variant
Por rol:      surface-container, surface-variant
```

**State layers (capas de estado):**
En lugar de cambiar el color de fondo de un botón en hover, M3 superpone una capa semitransparente encima del color base. Esto asegura que todos los estados sean legibles sobre cualquier color de fondo.
```
hover:    oklch(0 0 0 / 0.08)   — 8% de opacidad
pressed:  oklch(0 0 0 / 0.12)  — 12%
focus:    oklch(0 0 0 / 0.12)  — 12%
dragged:  oklch(0 0 0 / 0.16)  — 16%
```
Sobre fondo oscuro, se usa blanco con la misma opacidad.

**Escala tipográfica (nombres adoptados):**
| Rol M3 | Uso en C4 |
|---|---|
| Display Large/Medium/Small | Titulares de hero, manifiestos |
| Headline Large/Medium/Small | Títulos de sección |
| Title Large/Medium/Small | Subtítulos, labels de sección |
| Body Large/Medium/Small | Texto de cuerpo, descripciones |
| Label Large/Medium/Small | Labels de formulario, badges, tags |

**Motion easing curves (adoptadas):**
| Nombre | Curve | Cuándo usar |
|---|---|---|
| Emphasized | `cubic-bezier(0.2, 0, 0, 1)` | Elementos principales entrando en pantalla |
| Standard | `cubic-bezier(0.2, 0, 0, 1)` | Mayoría de transiciones de UI |
| Decelerate | `cubic-bezier(0, 0, 0, 1)` | Elementos entrando al viewport |
| Accelerate | `cubic-bezier(0.3, 0, 1, 1)` | Elementos saliendo de pantalla |

#### Qué NO tomamos
- Los componentes visuales de Material (botones redondeados, color scheme purple/teal)
- El color scheme generator de M3 (usamos nuestros propios colores oklch)
- La estética "Material" de elevaciones y sombras — la nuestra es más editorial

---

### GitLab Pajamas
**URL:** design.gitlab.com

#### Qué tomamos

**Estructura de documentación de componentes:**
Cada componente documentado con: descripción, cuándo usar, cuándo NO usar, variantes, estados, accesibilidad, ejemplos de código. Adoptamos este formato para nuestra propia documentación de componentes.

**Patrones de dashboard interno:**
- Cómo estructurar tablas de datos con filtros y acciones por fila
- Patrones de paginación y carga incremental
- Estructura de formularios complejos con validación en línea
- Manejo de estados vacíos (empty states) — cada módulo sin datos tiene un estado propio con ilustración + CTA

**Enfoque accessibility-first:**
- Cada componente se diseña con navegación por teclado desde el inicio
- Focus management en modales y drawers
- Live regions para notificaciones dinámicas (aria-live)
- Labels descriptivos que funcionan sin contexto visual

**Patrones de filtros:**
- Estructura de filtros con chips removibles (para portafolio y recursos internos)
- Búsqueda en tiempo real sin reload de página
- Estado URL-driven para filtros (compartibles por link)

#### Qué NO tomamos
- La estética GitLab (azules, grises técnicos)
- Los componentes Vue de Pajamas (usamos React + shadcn/ui)

---

### Salesforce Lightning
**URL:** lightningdesignsystem.com

#### Qué tomamos

**Patrones para el área interna (datos complejos):**

*KPI Cards:*
- Estructura: métrica principal (número grande) + label + variación vs. período anterior (badge con delta ↑↓)
- Estados: cargando (skeleton), sin datos (empty state), error
- Acción secundaria: expandir para ver gráfica detallada

*Data tables:*
- Columnas con ordenamiento (sort) por cabecera
- Selección de filas (checkbox)
- Acciones inline por fila
- Paginación o scroll infinito
- Sticky header al hacer scroll

*Timeline de proyecto:*
- Fases como ítems verticales con línea conectora
- Estado visual por fase: completada (check), en curso (spinner/dot pulsante), pendiente (círculo vacío)
- Fecha estimada vs. fecha real

*Status badges:*
- Colores semánticos consistentes: verde = completado, azul = en curso, gris = pendiente, rojo = bloqueado
- Texto + ícono para accesibilidad (no solo color)

*Formularios complejos:*
- Validación progresiva (valida campo al salir del foco, no al submit)
- Mensajes de error debajo del campo, no en un banner global
- Helper text para campos que requieren formato específico

#### Qué NO tomamos
- La estética Salesforce (azules corporativos, estilo enterprise)
- El sistema de utility classes de Lightning (usamos Tailwind)

---

## 3. Principios de motion

Reglas que gobiernan cuándo y cómo animamos. Tomado de M3 + Active Theory.

### Regla 1: Movimiento con propósito
Cada animación comunica algo: una jerarquía, un estado, una relación entre elementos. Si una animación se puede quitar sin perder información, se quita.

### Regla 2: Respetar preferencias del usuario
```css
@media (prefers-reduced-motion: reduce) {
  /* Desactivar o reducir todas las animaciones */
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

### Regla 3: Duraciones según tipo de interacción
| Tipo | Duración | Ejemplos |
|---|---|---|
| Micro | 100-200ms | Hover, checkbox toggle, tooltip appear |
| Transición | 300-400ms | Modal open, drawer slide, tab switch |
| Narrativa | 600-800ms | Scroll reveal, page hero, page transition |

### Regla 4: Easing apropiado al movimiento
- Elementos **entrando**: decelerate — empiezan rápido, desaceleran al llegar
- Elementos **saliendo**: accelerate — salen despacio y aceleran
- Elementos **moviéndose** (dentro del viewport): emphasized

### Regla 5: El cursor es parte del diseño (desktop)
El cursor personalizado es un elemento de identidad — se mueve con fluidez, reacciona a los elementos interactivos, y refuerza el carácter de la marca.

---

## 4. Accesibilidad

WCAG 2.1 nivel AA como estándar mínimo. No es opcional.

### Contraste de color (ratio mínimo)
| Tipo de texto | Ratio mínimo AA |
|---|---|
| Texto normal (< 18px) | 4.5:1 |
| Texto grande (≥ 18px o ≥ 14px bold) | 3:1 |
| Componentes de UI y gráficos | 3:1 |

Al definir el color acento en Fase 1, verificar ratio contra fondo claro Y oscuro.

### Navegación por teclado
- Todos los elementos interactivos accesibles con Tab / Shift+Tab
- Focus-visible siempre visible (no `outline: none` sin reemplazo)
- Modales: focus management al abrir (foco va al primer elemento) y al cerrar (foco vuelve al trigger)
- Drawers y sidebars: misma regla que modales

### Semántica HTML
- Un solo `<h1>` por página
- Jerarquía de headings consistente (h1 → h2 → h3, sin saltar)
- `<button>` para acciones, `<a>` para navegación (no al revés)
- `aria-label` en iconos sin texto visible
- `aria-live` para notificaciones y cambios dinámicos

### Imágenes
- `alt` descriptivo en todas las imágenes informativas
- `alt=""` en imágenes decorativas
- SVGs con `role="img"` y `<title>` o `aria-label`

---

## 5. Posicionamiento competitivo — el hueco

Lo que Pentagram + Locomotive + Resn **no cubren juntos:**

| Capacidad | Pentagram | Locomotive | Resn | **C4** |
|---|---|---|---|---|
| Branding | ✓✓ | ✓ | ~ | ✓✓ |
| UX/UI web | ✓ | ✓✓ | ✓✓ | ✓✓ |
| Innovación digital | ~ | ✓ | ✓✓ | ✓✓ |
| Publicidad tradicional (TV/radio/OOH) | ~ | ✗ | ✗ | **✓✓** |
| Performance marketing | ✗ | ~ | ✗ | **✓✓** |
| Métricas vivas / growth dashboard | ✗ | ✗ | ✗ | **✓✓** |
| Mercado US Hispanic + LATAM | ✗ | ✗ | ✗ | **✓✓** |

**Triple ventaja estructural de Puerto Rico:**
- US market access — sin barreras regulatorias ni de moneda
- LATAM talento y costos — producción eficiente
- Cultura hispana premium — autenticidad que Londres, NY y NZ no pueden replicar

**Posicionamiento resultante:**
> "La agencia que une creatividad mundial + velocidad + resultados medibles."

No vendemos diseño. Vendemos **crecimiento con status.**

→ Ver análisis completo: `docs/competitive-analysis.md`

---

## 6. Anti-patrones documentados

Lo que NO hacemos, extraído del brief original y de decisiones en proceso.

| Anti-patrón | Por qué no | Alternativa C4 |
|---|---|---|
| Hero con video de stock genérico | Comunica genericidad, no identidad | Video o foto propia con tratamiento editorial consistente |
| Paleta de azules corporativos | Igual que el 80% de agencias regionales | Negro/crema base + 1-2 acentos vibrantes propios |
| Grid de portafolio sin contexto | El trabajo sin historia no comunica el valor | Casos de estudio con reto, proceso y resultados |
| Formulario plano de contacto | Sin guía, genera abandonos | Wizard multi-paso con autoguardado |
| Textos con clichés de agencia | "Potenciamos tu marca" → nadie lo lee | Lenguaje directo, específico, en primera persona |
| Animaciones por el efecto mismo | Lento, distrae, sin propósito | Animación que comunica una relación o un estado |
| `outline: none` en focus | Inaccesible, excluye usuarios de teclado | Focus-visible con estilo propio de la marca |
| Solo color para comunicar estados | Excluye personas con daltonismo | Color + ícono + texto |

---

## 7. Stack de referencia y herramientas de diseño

| Herramienta | Propósito |
|---|---|
| **Figma** | Prototipos navegables por etapa (v0-v3), sistema de variables sincronizado |
| **Tokens Studio** | Sincronización bidireccional tokens código ↔ Figma Variables |
| **Style Dictionary** | Transformación de tokens TypeScript → CSS variables → JSON para Figma |
| **Framer Motion** | Animaciones e interacciones en React |
| **shadcn/ui** | Base de componentes (ya inicializado con base-nova) |
| **Tailwind CSS v4** | Utilitarios de estilo |
| **OKLCH** | Espacio de color para tokens (perceptualmente uniforme, mejor que HSL) |

---

*Última actualización: 2026-05-14 — generado desde Design-Brief-C4.docx*
*Este documento evoluciona con el proyecto. Cada decisión nueva se documenta aquí.*
