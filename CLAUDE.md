# Proyecto: Sitio Web Comuna 4

## Reglas de trabajo

### Skills primero
Antes de implementar cualquier tarea, revisar si existe una skill instalada que la resuelva (ver `docs/skills-registry.md`). Si no existe pero la tarea lo amerita, buscar una con `/find-skills` o `npx skills find [query]`.

### Idioma
- Comunicación: español
- Código, nombres de variables, funciones, archivos, commits: inglés

### Auditorías de UI (`/impeccable`)
Antes de ejecutar `/impeccable`, verificar que `docs/product.md` y `docs/design.md` estén actualizados con el estado actual del producto. Si están desactualizados, actualizarlos primero.

### Creación de skills y procesos
Toda skill o proceso nuevo debe seguir el estilo Karpathy: directo, sin capas de abstracción innecesarias, construido desde los primeros principios, con SKILL.md claro y sin fluff. Ver referencia: `docs/skills-registry.md`.

### Combinación de skills
Identificar activamente oportunidades de combinar skills para mejores resultados (ej: `frontend-design` + `shadcn` + `impeccable` para UI de alta calidad).

## Stack
- Framework: Next.js (App Router) — leer `node_modules/next/dist/docs/` antes de escribir código
- UI: shadcn/ui + Tailwind CSS
- Lenguaje: TypeScript

## Estructura del proyecto
```
Comuna4/
├── comuna4/          # App Next.js
├── externos/         # Assets externos (briefs, referencias)
├── docs/             # Documentación del proyecto
│   ├── product.md
│   ├── design.md
│   └── skills-registry.md
└── .agents/skills/   # Skills instaladas
```