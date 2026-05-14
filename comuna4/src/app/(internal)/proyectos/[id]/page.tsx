import { MockPage } from '@/components/mock/MockPage'

export default async function ProyectoDetallePage(props: PageProps<'/proyectos/[id]'>) {
  const { id } = await props.params

  return (
    <MockPage
      title={`Proyecto: ${id}`}
      badge="Capa interna — detalle"
      breadcrumb={[
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/proyectos', label: 'Proyectos' },
      ]}
      description="Vista detallada de un proyecto. Muestra la línea de tiempo por fases, archivos compartidos y los contactos del equipo asignado."
      sections={[
        {
          name: 'Contenido del detalle',
          items: [
            'Nombre del proyecto, cliente, status',
            'Línea de tiempo — fases con status visual (completada / en curso / pendiente)',
            'Archivos compartidos — listado con nombre, fecha, botón de descarga',
            'Equipo asignado — fotos, nombre, rol',
            'Subida de archivos (solo collaborators)',
          ],
        },
      ]}
      links={[
        { href: '/proyectos', label: '← Todos los proyectos' },
        { href: '/calendario', label: 'Calendario' },
      ]}
    />
  )
}
