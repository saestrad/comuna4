# Product Roadmap — Comuna 4 Web Platform

---

## Fase 0 — Descubrimiento (1-2 semanas)

- [ ] Workshop con el equipo de Comuna 4: alinear marca, tono y prioridades
- [ ] Definir roles internos y sus permisos exactos (collaborator / supplier / client)
- [ ] Confirmar sitemap final y user flows clave (solicitud, reserva, login)
- [ ] Inventario de servicios a listar en el catálogo
- [ ] Inventario de espacios y equipos rentables (fotos, specs, precios)
- [ ] Inventario de proyectos de portafolio existentes (casos de estudio)
- [ ] Decidir CMS final (Sanity recomendado) y configurar proyecto
- [ ] Definir paleta de colores acento y tipografías display + body
- [ ] Confirmar dominio, hosting y variables de entorno necesarias

---

## Fase 1 — Diseño UX/UI (3-4 semanas)

- [ ] Wireframes en baja fidelidad — capa pública completa
- [ ] Wireframes en baja fidelidad — capa interna (dashboard, calendario, KPIs)
- [ ] Sistema de diseño en Figma: tokens de color, tipografía, espaciado, componentes base
- [ ] Prototipo navegable en alta fidelidad — capa pública
- [ ] Prototipo navegable en alta fidelidad — capa interna
- [ ] Validación con stakeholders de Comuna 4
- [ ] Definir microinteracciones: cursor, page transitions, scroll reveals, hovers
- [ ] Documentar sistema de diseño (tokens, uso de componentes, anti-patrones)

---

## Fase 2 — Desarrollo capa pública (4-6 semanas)

### Setup inicial
- [ ] Configurar variables de entorno (`.env.local`)
- [ ] Conectar Sanity CMS al proyecto Next.js
- [ ] Configurar Clerk (auth, SSO, roles)
- [ ] Configurar Neon/Railway (PostgreSQL) y Prisma schema inicial
- [ ] Configurar Resend (templates de email: solicitud, reserva, notificación interna)
- [ ] Configurar Plausible + Microsoft Clarity

### Layout y sistema de diseño
- [ ] Implementar tokens CSS (colores, tipografías, radios, espaciado) — dark/light mode
- [ ] Componente `<AnimatedCursor />` (desktop)
- [ ] Componente `<PageTransition />` (Framer Motion)
- [ ] Componente `<ScrollReveal />` (intersection observer + Framer Motion)
- [ ] Header y footer globales con navegación
- [ ] Toggle de dark/light mode (persistido en localStorage)

### Home
- [ ] Sección Hero — frase de manifiesto + CTAs
- [ ] Sección Ticker animado — servicios en loop
- [ ] Sección Proyectos destacados — grid con hover cinematográfico
- [ ] Sección Renta de espacios — bloque visual con CTA
- [ ] Sección Clientes/Testimonios
- [ ] Sección CTA final

### Servicios
- [ ] Página catálogo de servicios — listado con cards
- [ ] Schema en Sanity para servicio (nombre, descripción, incluye, tiempos, CTA)
- [ ] Página detalle de servicio — template uniforme
- [ ] CTA que pre-selecciona el servicio en el wizard de solicitud

### Portafolio / Trabajos
- [ ] Página listado — grid filtrable por tipo de servicio e industria
- [ ] Schema en Sanity para caso de estudio (contexto, reto, solución, resultados, créditos)
- [ ] Página detalle de caso de estudio
- [ ] Filtros con animación suave (Framer Motion layout animations)

### Solicitud de servicios — Wizard
- [ ] Estado global del wizard (Zustand o useReducer)
- [ ] Paso 1: selección de tipo de servicio
- [ ] Paso 2: brief corto (objetivo, audiencia, deadline, presupuesto, archivos)
- [ ] Paso 3: datos de contacto
- [ ] Paso 4: pantalla de consentimiento (3 checkboxes, botón deshabilitado)
- [ ] Paso 5: confirmación con número de ticket
- [ ] API `POST /api/solicitudes` — crea registro en DB
- [ ] API `PATCH /api/solicitudes/[id]/session` — autoguardado en sessionStorage
- [ ] Email automático al solicitante (template Resend)
- [ ] Notificación interna al equipo (template Resend)
- [ ] Validación en línea (react-hook-form + zod)
- [ ] Barra de progreso visible en todos los pasos

### Renta de espacios y equipos
- [ ] Schema en Sanity para ítem rentable (fotos, specs, precio)
- [ ] Página catálogo con pestañas Espacios / Equipos
- [ ] Página detalle de ítem (galería, specs, calendario de disponibilidad)
- [ ] Componente `<BookingCalendar />` con FullCalendar
- [ ] API `GET /api/reservas/disponibilidad` — bloques ocupados por ítem y rango
- [ ] Carrito de reserva (múltiples ítems en una solicitud)
- [ ] Formulario de reserva con consentimiento (términos, política de cancelación y depósito)
- [ ] API `POST /api/reservas` — crea reserva en DB + crea CalendarEvent
- [ ] Email de confirmación al reservante (Resend)
- [ ] Notificación interna (Resend)

### Sobre Comuna 4
- [ ] Página manifiesto + equipo (fotos, nombre, rol)
- [ ] Página cultura y valores
- [ ] Schema en Sanity para miembros del equipo

### Contacto
- [ ] Formulario corto (nombre, email, mensaje)
- [ ] Links directos: WhatsApp, email, mapa, horario de atención
- [ ] Email al equipo al recibir mensaje (Resend)

### SEO y performance
- [ ] `sitemap.xml` dinámico (servicios, trabajos, páginas estáticas)
- [ ] `robots.txt`
- [ ] Metadata dinámica por página (OpenGraph, Twitter Card)
- [ ] Structured data: Organization, BreadcrumbList
- [ ] Optimización de imágenes (next/image en todos los casos)
- [ ] Audit Lighthouse ≥ 90 en todas las páginas
- [ ] Audit accesibilidad ≥ 95 (axe-core)

---

## Fase 3 — Desarrollo capa interna (4-6 semanas)

### Auth y roles
- [ ] Middleware Next.js para proteger rutas `(internal)/`
- [ ] Página de login con Clerk (email, Google SSO, Microsoft SSO)
- [ ] Recuperación de contraseña (flujo nativo Clerk)
- [ ] Invitación de usuarios por rol (collaborator invita suppliers y clients)
- [ ] Perfil de usuario: editar nombre, foto, preferencias, activar 2FA
- [ ] Lógica de permisos por rol en cada módulo
- [ ] Sesión con expiración automática (configurar en Clerk)

### Dashboard inicial
- [ ] Layout de área interna (sidebar de navegación + header con perfil)
- [ ] Saludo personalizado por hora del día
- [ ] Accesos directos por rol (3-4 shortcuts)
- [ ] Notificaciones recientes (últimas 5 actividades del usuario)
- [ ] Próximos 3 eventos del calendario
- [ ] Mini-KPIs para collaborator y client (resumen numérico)

### Calendario
- [ ] Integración FullCalendar con datos de DB (CalendarEvent)
- [ ] Vistas: mensual, semanal, lista
- [ ] Filtros: tipo de evento, suplidor, cliente, proyecto
- [ ] Modal de detalle de evento (notas, archivos adjuntos)
- [ ] Formulario de creación/edición de evento
- [ ] Integración Google Calendar API — OAuth2 + sincronización de lectura
- [ ] Webhook `POST /api/webhooks/google-calendar` — sincronización bidireccional
- [ ] Filtrado de eventos por rol (supplier/client ven solo los suyos)

### Dashboards de crecimiento (KPIs)
- [ ] Componente `<KPICard />` — métrica con variación vs. período anterior
- [ ] Vista general (collaborator) — grid de clientes con mini-KPIs
- [ ] Vista detalle por cliente — gráficas Tremor (línea, barra, área)
- [ ] Selector de período (mes, trimestre, año, personalizado)
- [ ] Comparativo vs. período anterior y mismo período año anterior
- [ ] Descarga de reporte en CSV
- [ ] Conectar fuente Meta Ads (OAuth, lectura de métricas)
- [ ] Conectar fuente Google Analytics 4 (OAuth, lectura de métricas)
- [ ] Conectar Google Sheets como fuente de datos flexible

### Recursos
- [ ] Listado de recursos con categorías
- [ ] Búsqueda en tiempo real (client-side filter)
- [ ] CRUD de recursos (solo collaborators)
- [ ] Visibilidad por rol (collaborator puede limitar qué ven suppliers y clients)

### Mis proyectos
- [ ] Listado de proyectos del usuario con badge de status
- [ ] Página detalle de proyecto (timeline, archivos, equipo)
- [ ] Componente `<ProjectTimeline />` — fases con status visual
- [ ] Subida de archivos (collaborators) — almacenamiento en Vercel Blob o S3
- [ ] Descarga de archivos compartidos (todos los roles)

---

## Fase 4 — QA, accesibilidad y lanzamiento (2 semanas)

- [ ] Testing cross-browser: Chrome, Safari, Firefox, Edge — desktop y mobile
- [ ] Testing en dispositivos reales (iOS Safari, Android Chrome)
- [ ] Auditoría de accesibilidad con axe-core — resolver issues AA
- [ ] Auditoría Lighthouse en todas las páginas — resolver issues de performance
- [ ] SEO técnico: verificar sitemap, robots, metadata, structured data
- [ ] Revisión de seguridad: headers HTTP, validación de inputs, rate limiting en APIs públicas
- [ ] Prueba de flujo completo de solicitud de servicios (end-to-end)
- [ ] Prueba de flujo completo de reserva de espacios/equipos (end-to-end)
- [ ] Prueba de área interna por los 3 roles
- [ ] Capacitación al equipo — sesión 1: uso del CMS (Sanity)
- [ ] Capacitación al equipo — sesión 2: uso del área interna por rol
- [ ] Documentar variables de entorno y proceso de deploy en README
- [ ] Configurar monitoreo de errores (Sentry o Vercel observability)
- [ ] Go-live en dominio definitivo
- [ ] Monitoreo activo primeros 15 días

---

## Fase 5 — Mejora continua (post-lanzamiento)

- [ ] Sprint mensual de optimización con datos de Plausible y Clarity
- [ ] A/B testing en hero y CTA de solicitud (si la herramienta lo permite)
- [ ] Blog / Diario creativo (módulo Sanity + páginas en /blog)
- [ ] Vista Gantt simplificada para proyectos internos
- [ ] Módulo de e-commerce de equipos (venta, no solo renta)
- [ ] App móvil para colaboradores (Expo / PWA)
- [ ] Nuevas integraciones de KPIs según necesidades del cliente
