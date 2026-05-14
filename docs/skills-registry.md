# Skills Registry

Registro de skills instaladas en el proyecto. Actualizar cada vez que se instale, actualice o elimine una skill.

---

## Skills instaladas

### `find-skills`
- **Descripción**: Busca e instala skills del ecosistema open agent skills.
- **Repositorio**: https://skills.sh/ — `npx skills find [query]`
- **Cuándo usar**: Cuando se necesita extender capacidades con una skill existente antes de implementar algo desde cero.
- **Instalar**: pre-instalada en el proyecto

---

### `shadcn`
- **Descripción**: Gestiona componentes shadcn/ui — agregar, buscar, arreglar, estilizar y componer UI.
- **Repositorio**: https://ui.shadcn.com — `vercel-labs/agent-skills`
- **Cuándo usar**: Cualquier trabajo con componentes UI, design systems, forms, o layouts con shadcn.
- **Combina bien con**: `frontend-design`, `impeccable`
- **Instalar**: pre-instalada en el proyecto

---

### `frontend-design`
- **Descripción**: Crea interfaces frontend de producción con alta calidad de diseño y estética distintiva.
- **Repositorio**: `anthropics/skills` — https://skills.sh/anthropics/skills/frontend-design
- **Cuándo usar**: Construcción de componentes, páginas, landing pages, dashboards o cualquier UI que necesite diseño de calidad.
- **Combina bien con**: `shadcn`, `impeccable`
- **Instalar**: pre-instalada en el proyecto

---

## Skills recomendadas (no instaladas)

Listado de skills que podrían ser útiles para este proyecto según necesidades futuras.

| Skill | Descripción | Instalar con |
|-------|-------------|-------------|
| — | — | — |

---

## Referencia para crear skills

Estilo **Karpathy**: construir desde primeros principios, sin abstracciones prematuras, explicando el _por qué_ no el _qué_. Un SKILL.md efectivo tiene:

1. Frontmatter con `name`, `description` (usada para decidir cuándo activarla)
2. Contexto mínimo necesario para que el agente entienda el dominio
3. Reglas críticas con ejemplos Incorrecto/Correcto
4. Sin fluff — cada línea debe justificar su existencia

```bash
# Crear una skill nueva
npx skills init nombre-skill
```