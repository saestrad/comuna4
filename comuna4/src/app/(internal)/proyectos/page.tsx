import { MockPage } from '@/components/mock/MockPage'

export default function ProyectosPage() {
  return (
    <MockPage
      title="Proyectos"
      badge="Capa interna — todos los roles"
      description="Listado de proyectos del usuario con estado actual. Cada proyecto tiene su página de detalle con timeline, archivos compartidos y equipo asignado."
      sections={[
        {
          name: 'Vista listado',
          items: [
            'Cards de proyectos con badge de status (briefing / diseño / producción / revisión / entregado)',
            'Nombre del proyecto, cliente, fechas',
            'Filtros: estado, cliente, fecha',
          ],
        },
        {
          name: 'Por rol',
          items: [
            'Collaborator — ve todos los proyectos de la agencia',
            'Supplier — ve solo los proyectos donde está asignado',
            'Client — ve solo sus proyectos activos',
          ],
        },
      ]}
      links={[
        { href: '/proyectos/proyecto-ejemplo', label: 'Ver detalle de proyecto' },
        { href: '/dashboard', label: 'Dashboard' },
      ]}
    />
  )
}
