# PRODUCT — Sitio Web Comuna 4

## Product Purpose

Sitio web de doble capa para **Comuna 4**, agencia creativa en Puerto Rico. Dos superficies distintas en un mismo dominio:

1. **Capa pública** — vitrina de marca, portafolio y generación de negocio. Prospecto llega, entiende quiénes somos, ve casos reales con resultados medibles, solicita un servicio o reserva un espacio.
2. **Capa interna** (/dashboard, /proyectos, /calendario, /kpis, /recursos) — portal operacional para tres roles. Collaborator gestiona proyectos y clientes. Supplier ve sus asignaciones. Client sigue el progreso de sus campañas y revisa KPIs en tiempo real.

La promesa de producto: **creatividad con datos**. No es una agencia de "soluciones integrales" — es una agencia que mide cada resultado y lo muestra, tanto en la vitrina pública como en el portal del cliente.

## Users

### Capa pública

| Usuario | Objetivo | Punto de dolor |
|---|---|---|
| **Prospecto B2B** (dueño de negocio / CMO) | Evaluar si Comuna 4 es la agencia correcta para su marca | Todas las agencias suenan igual — no sabe quién realmente entrega resultados |
| **Prospecto de renta de espacio** | Reservar estudio fotográfico o equipos audiovisuales | Proceso de cotización opaco, no sabe disponibilidad sin llamar |

### Capa interna

| Rol | Acceso | Objetivo |
|---|---|---|
| **Collaborator** (equipo interno) | Todos los módulos | Gestionar proyectos, clientes, calendario y ver KPIs globales |
| **Supplier** (freelancer / proveedor) | Proyectos asignados + Calendario | Ver sus tareas y fechas de entrega |
| **Client** | Sus proyectos activos + KPIs propios | Seguir el avance de sus campañas sin tener que preguntar |

## Brand

**Tono:** Directo, humano, con criterio. Suena a persona real que sabe de su oficio, no a agencia corporativa.

**Personalidad:** La precisión editorial de Pentagram + la audacia cinética de Locomotive + la valentía conceptual de Resn. Sin el distanciamiento de los grandes estudios.

**Posicionamiento:** Agencia de Puerto Rico con acceso al mercado americano, talento LATAM y autenticidad hispana que ningún estudio de Londres, NY o Auckland puede replicar.

**Voz activa, no declarativa:**
- "Tu marca, construida para durar." — no "Construimos marcas sólidas."
- "Meta, Google, TikTok con datos reales, no estimaciones." — no "Gestionamos campañas digitales."
- "Foto, video y activaciones. Rápido, con nivel." — no "Ofrecemos producción audiovisual."

## Anti-references (qué NO hacer)

**Agencias genéricas:**
- No "soluciones integrales" ni "potenciamos tu marca"
- No slides de proceso con círculos y flechas
- No íconos genéricos en lugar de casos reales como thumbnails
- No bullets abstractos de cultura ("valoramos la colaboración")

**Patrones UI prohibidos:**
- No side-stripe borders como acento decorativo
- No gradient text
- No glassmorphism por defecto
- No hero-metric template (número grande + label pequeño + gradient)
- No grids de cards idénticas (mismo tamaño, mismo layout)
- No modal como primera respuesta

**Estilo visual a evitar:**
- SaaS startup (azul + blanco + ilustraciones flat)
- Agencia boutique hipster (negro + serif + mucho espacio vacío sin intención)
- Portfolio minimalista genérico que podría ser de cualquier agencia

## Strategic Principles

1. **Resultados visibles desde el primer scroll.** Cada caso de portafolio lleva un resultado medible en la card ("↑42% conversión" / "Lanzamiento en 3 semanas"). No thumbnails decorativos.

2. **Solicitud de servicio sin fricción.** El wizard de solicitud pre-selecciona el servicio según de dónde viene el usuario. Máximo 5 pasos; ninguno es obligatorio excepto contacto.

3. **El portal de cliente reemplaza el reporte en PDF.** El cliente ve sus KPIs en tiempo real, con meta vs. actual y badge de estado. No espera al jueves.

4. **Escala por rol, no por versión.** La misma URL sirve a tres roles distintos. El sidebar y el contenido se adaptan al rol autenticado; no hay tres productos distintos.

5. **Puerto Rico como ventaja, no como dato.** US market access, talento LATAM, cultura hispana premium — explícito en la narrativa de marca.

## Register

`brand` — La capa pública es una vitrina donde el diseño es el producto. La capa interna es `product`, pero la inversión de diseño principal está en la capa pública.

## Pages / Sections

### Capa pública
- `/` — Home: manifiesto + casos destacados + servicios resumen + CTA solicitud
- `/servicios` — Catálogo de servicios (core + premium) + modelos de trabajo
- `/servicios/[slug]` — Detalle: qué resuelve, entregables, tiempos, casos relacionados
- `/trabajos` — Grid filtrable por disciplina y sector
- `/trabajos/[slug]` — Caso de estudio: reto, solución, resultados, créditos
- `/renta` — Espacios y equipos disponibles con disponibilidad
- `/renta/[slug]` — Detalle de espacio/equipo
- `/solicitud` — Wizard de 5 pasos para solicitar servicio
- `/sobre` — Manifiesto, equipo, cultura, proceso
- `/contacto` — Formulario directo

### Capa interna
- `/dashboard` — Bienvenida personalizada por rol, KPIs, notificaciones, próximos eventos
- `/proyectos` — Listado con estado, filtros y barra de progreso por proyecto
- `/proyectos/[id]` — Detalle: fases, archivos, equipo, timeline
- `/calendario` — Vista mensual/semanal de entregas y sesiones
- `/kpis` — Dashboard de métricas por cliente (collaborator ve todos; client ve los suyos)
- `/recursos` — Archivos y assets compartidos por proyecto
- `/login` — Auth mock (sin Clerk real en v0)

## Current State

- [x] v0 Mock — todas las rutas navegables, filtros funcionales, MockSectionToggle con sugerencias por sección
- [ ] v1 Low — tipografía + grilla + color base neutral aplicados
- [ ] v3 High — sistema completo de marca, microinteracciones, cursor

## Product Decisions

- **Inter como tipografía v0/v1.** Decisión de legibilidad antes de elegir tipografía editorial final para v3.
- **Sin Clerk en v0.** MockRoleSwitcher en localStorage. Auth real en v1/v3.
- **Sin Medium Fidelity.** Pipeline: Mock → Low → High. Se eliminó v2 para acortar ciclo de iteración.
- **Figma + design system solo desde v1 Low.** El v0 Mock se construye y valida en código únicamente. Tokens Studio, Variables de Figma y sincronización de design tokens comienzan en v1 Low Fidelity.
- **isNew sections en naranja.** Secciones propuestas que no estaban en el brief original se marcan en naranja para distinguirlas de mejoras a contenido existente.
