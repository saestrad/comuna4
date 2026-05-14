# PRD — Comuna 4 Web Platform

## Stack técnico

| Capa | Tecnología |
|---|---|
| Frontend | Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion |
| Componentes UI | shadcn/ui (ya inicializado) |
| CMS | Sanity (contenido editorial: portafolio, servicios, blog) |
| Base de datos | PostgreSQL (Neon o Railway) |
| Auth | Clerk — SSO Google/Microsoft + 2FA opcional |
| Email | Resend |
| Calendario | FullCalendar + Google Calendar API |
| Dashboards internos | Tremor o Recharts |
| Analítica | Plausible + Microsoft Clarity |
| Hosting | Vercel (frontend) + Railway (DB + servicios) |
| Agente de código | Claude Code |

---

## Arquitectura

```
app/
├── (public)/              # Capa pública (sin auth)
│   ├── page.tsx           # Home
│   ├── servicios/
│   │   ├── page.tsx       # Catálogo de servicios
│   │   └── [slug]/page.tsx
│   ├── trabajos/
│   │   ├── page.tsx       # Portafolio filtrable
│   │   └── [slug]/page.tsx
│   ├── renta/
│   │   ├── page.tsx       # Catálogo espacios + equipos
│   │   └── [slug]/page.tsx
│   ├── solicitud/         # Wizard de solicitud de servicios
│   │   └── page.tsx
│   ├── sobre/page.tsx
│   └── contacto/page.tsx
├── (internal)/            # Capa interna (auth requerida)
│   ├── dashboard/page.tsx
│   ├── calendario/page.tsx
│   ├── proyectos/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── kpis/
│   │   ├── page.tsx
│   │   └── [clientId]/page.tsx
│   └── recursos/page.tsx
├── api/
│   ├── solicitudes/route.ts
│   ├── reservas/route.ts
│   ├── proyectos/route.ts
│   └── webhooks/
└── layout.tsx
```

---

## Modelos de datos

### User (gestionado por Clerk + extensión en DB)
```typescript
type User = {
  id: string              // Clerk user ID
  email: string
  name: string
  role: 'collaborator' | 'supplier' | 'client'
  createdAt: Date
  active: boolean
}
```

### ServiceRequest
```typescript
type ServiceRequest = {
  id: string
  ticketNumber: string    // Ej: C4-2026-0001
  serviceType: string
  brief: {
    objective: string
    audience: string
    deadline: string | null
    budgetRange: string | null
    files: string[]       // URLs a storage
  }
  contact: {
    name: string
    company: string | null
    email: string
    phone: string | null
    preferredContact: 'email' | 'whatsapp' | 'call'
  }
  consent: {
    terms: boolean
    privacy: boolean
    dataUsage: boolean
    acceptedAt: Date
  }
  status: 'pending' | 'in_review' | 'quoted' | 'active' | 'completed' | 'cancelled'
  createdAt: Date
  sessionId: string       // Para autoguardado por sesión
}
```

### RentalItem
```typescript
type RentalItem = {
  id: string
  type: 'space' | 'equipment'
  name: string
  description: string
  specs: Record<string, string>
  photos: string[]
  pricePerHour: number
  pricePerDay: number
  available: boolean
  sanityId: string        // Referencia al CMS para contenido editorial
}
```

### Booking
```typescript
type Booking = {
  id: string
  userId: string | null   // null si es externo
  contact: {
    name: string
    email: string
    phone: string
  }
  items: Array<{
    itemId: string
    startAt: Date
    endAt: Date
    priceSnapshot: number
  }>
  status: 'pending' | 'confirmed' | 'cancelled'
  consentAccepted: boolean
  consentAcceptedAt: Date
  totalAmount: number
  depositAmount: number
  notes: string | null
  createdAt: Date
}
```

### Project
```typescript
type Project = {
  id: string
  name: string
  clientId: string
  status: 'briefing' | 'design' | 'production' | 'review' | 'delivered'
  timeline: Array<{
    phase: string
    startDate: Date
    endDate: Date | null
    completed: boolean
  }>
  team: string[]          // User IDs
  files: Array<{
    name: string
    url: string
    uploadedAt: Date
  }>
  createdAt: Date
}
```

### CalendarEvent
```typescript
type CalendarEvent = {
  id: string
  googleEventId: string | null
  title: string
  start: Date
  end: Date
  type: 'client' | 'supplier' | 'internal' | 'booking'
  relatedId: string | null    // bookingId o projectId
  attendees: string[]         // User IDs o emails externos
  notes: string | null
  attachments: string[]
}
```

---

## Módulos — Capa pública

### Home
**Estructura de secciones:**
1. Hero — frase de manifiesto corta + CTA primario (Solicitar servicio) + CTA secundario (Ver trabajos)
2. Ticker animado — servicios principales en loop horizontal
3. Proyectos destacados — grid con hover cinematográfico (3-4 casos)
4. Renta de espacios — bloque visual con CTA directo al catálogo
5. Clientes / Con quienes hemos trabajado — logos o testimonios
6. CTA final — iniciar conversación

**Animaciones requeridas:**
- Scroll narrativo con Framer Motion (secciones que revelan al entrar en viewport)
- Hover en proyectos: efecto de overlay con detalle del proyecto
- Ticker con velocidad configurable y pausa en hover

### Solicitud de servicios — Wizard multi-paso

**Flujo:**
```
Paso 1: Tipo de servicio
  → Selección de servicio (puede venir pre-seleccionado desde /servicios/[slug])
  → Autoguardado a sessionStorage en cada cambio

Paso 2: Brief corto
  → Objetivo del proyecto (textarea, max 500 chars)
  → Audiencia objetivo (textarea, max 300 chars)
  → Deadline (date picker, opcional)
  → Rango de inversión (select con rangos predefinidos, opcional)
  → Archivos de referencia (upload, opcional, max 5 archivos, 10MB c/u)

Paso 3: Datos de contacto
  → Nombre completo (required)
  → Empresa (opcional)
  → Email (required, validación en línea)
  → Teléfono (opcional)
  → Canal preferido de contacto (email / WhatsApp / llamada)

Paso 4: Consentimiento
  → Resumen de lo que el usuario va a enviar
  → Checkbox: acepto términos y condiciones (required, link al doc)
  → Checkbox: acepto política de privacidad (required, link al doc)
  → Checkbox: autorizo el uso de mis datos (required)
  → Botón "Enviar solicitud" deshabilitado hasta que los 3 están marcados

Paso 5: Confirmación
  → Número de ticket generado (C4-YYYY-XXXX)
  → Resumen de la solicitud
  → Próximos pasos esperados
  → Email automático al solicitante (Resend)
  → Notificación interna al equipo (Resend)
```

**Reglas:**
- Barra de progreso visible siempre (paso X de 5)
- Validación en línea sin recargar página
- Autoguardado por sessionStorage — si el usuario recarga, vuelve donde estaba
- Mobile-first
- Sin recarga de página entre pasos (SPA con estados de React)

### Renta de espacios y equipos

**Catálogo:**
- Dos pestañas: Espacios / Equipos
- Cada ítem: fotos (galería), nombre, descripción, specs técnicas, precio por hora y por día, disponibilidad (badge)
- Filtros: tipo, disponibilidad, precio

**Reserva:**
- Calendario de disponibilidad en tiempo real (FullCalendar + datos de DB)
- Carrito: permite agregar múltiples ítems en una sola reserva
- Formulario de reserva con consentimiento (términos de uso, política de cancelación y depósito)
- Confirmación automática por email (Resend)
- Registro automático en panel interno como `CalendarEvent` de tipo `booking`

---

## Módulos — Capa interna

### Auth y roles

**Implementación con Clerk:**
- Login: email + contraseña, Google SSO, Microsoft SSO
- Recuperación de contraseña: flujo nativo de Clerk
- 2FA: opcional, activable desde perfil (obligatorio sugerido para collaborator)
- Sesión con expiración automática (configurable en Clerk)
- Middleware de Next.js para proteger rutas `(internal)/`

**Roles y acceso:**
| Sección | collaborator | supplier | client |
|---|---|---|---|
| Dashboard | ✓ | ✓ | ✓ |
| Calendario | ✓ (todos) | ✓ (solo los suyos) | ✓ (solo los suyos) |
| KPIs | ✓ (todos) | ✗ | ✓ (solo los suyos) |
| Proyectos | ✓ (todos) | ✓ (solo los suyos) | ✓ (solo los suyos) |
| Recursos | ✓ | ✓ | ✗ |
| Admin panel | ✓ | ✗ | ✗ |

### Dashboard inicial

**Contenido por rol:**
- Saludo personalizado con nombre + hora del día
- Accesos directos: 3-4 shortcuts según el rol
- Notificaciones recientes: últimas 5 actividades relacionadas con el usuario
- Próximos eventos del calendario: 3 más cercanos
- Vista resumida de KPIs (solo collaborator y client)

### Calendario

**Funcionalidades:**
- FullCalendar con vistas: mensual, semanal, lista
- Filtros: por tipo de evento, por suplidor, por cliente, por proyecto
- Integración Google Calendar API (bidireccional — eventos creados en la app se sincronizan y viceversa)
- Click en evento: modal con detalle, archivos adjuntos y notas
- Crear evento: form modal con campos básicos + adjuntar archivos
- Export a .ics (opcional)

### Dashboards de crecimiento (KPIs)

**Vista general (collaborator):**
- Grid de clientes con mini-KPI: alcance, leads, ventas, redes (según cliente)
- Gráficas Tremor (línea, barra, area)
- Comparativo por período: mes anterior, mismo período año anterior
- Descarga de datos: CSV o PDF por cliente

**Vista cliente:**
- Solo sus propios datos
- Mismos gráficos pero contextualizados
- Posibilidad de conectar fuentes externas (Meta Ads, GA4, Google Sheets) — OAuth

### Recursos

- Repositorio de enlaces organizados por categorías (Drive, manuales, plantillas, herramientas, suplidores)
- Búsqueda en tiempo real
- Cada recurso: nombre, URL, descripción corta, categoría, visibilidad por rol
- CRUD para collaborators

### Mis proyectos

- Listado de proyectos del usuario con estado visual (badge de status)
- Detalle de proyecto: timeline por fases, archivos compartidos, contactos del equipo asignado
- Subida de archivos (solo collaborators)
- Vista de línea de tiempo Gantt simplificada (opcional, Fase 2)

---

## APIs

### POST /api/solicitudes
Crea una nueva solicitud de servicio. Genera número de ticket. Envía emails (Resend).

### PATCH /api/solicitudes/[id]/session
Guarda estado parcial de un wizard en progreso (sin autenticación requerida, solo sessionId).

### GET /api/solicitudes/[id]/session
Recupera estado guardado de un wizard por sessionId.

### POST /api/reservas
Crea una reserva. Valida disponibilidad, genera confirmación, crea CalendarEvent.

### GET /api/reservas/disponibilidad?itemId=&from=&to=
Retorna bloques ocupados para un ítem en un rango de fechas.

### POST /api/webhooks/google-calendar
Webhook para sincronización bidireccional con Google Calendar.

---

## Sistema de diseño

Basado en shadcn/ui (ya inicializado en el proyecto) con extensiones para las necesidades de Comuna 4:

### Tokens a definir
- `--color-base-dark`: negro profundo (base dark mode)
- `--color-base-light`: crema/blanco cálido (base light mode)
- `--color-accent-1`: color vibrante principal (definir en Fase 1)
- `--color-accent-2`: color vibrante secundario (definir en Fase 1)
- `--font-display`: tipografía editorial de titulares
- `--font-body`: sans-serif limpia para cuerpo

### Componentes custom requeridos
- `<AnimatedCursor />` — cursor personalizado (desktop only)
- `<PageTransition />` — wrapper de transición entre rutas
- `<ScrollReveal />` — wrapper para animaciones de entrada en viewport
- `<Ticker />` — tira horizontal animada en loop
- `<WizardStepper />` — barra de progreso y navegación del wizard
- `<BookingCalendar />` — calendario de disponibilidad para reservas
- `<KPICard />` — tarjeta de métrica para dashboards
- `<ProjectTimeline />` — línea de tiempo de proyecto

---

## Requerimientos no funcionales

- **Performance:** Lighthouse ≥ 90 en todas las páginas públicas
- **Accesibilidad:** WCAG 2.1 nivel AA — contraste, navegación por teclado, ARIA, alt en imágenes
- **SEO técnico:** sitemap.xml dinámico, robots.txt, structured data (Organization, BreadcrumbList)
- **Seguridad:** HTTPS obligatorio, headers de seguridad (CSP, HSTS), sanitización de inputs
- **Internacionalización:** español por defecto; arquitectura compatible con i18n futuro
- **Dark/Light mode:** basado en CSS variables, preferencia del sistema como default, toggle persistido en localStorage
