import { MockPage } from '@/components/mock/MockPage'

export default function DashboardPage() {
  return (
    <MockPage
      title="Dashboard"
      badge="Capa interna — todos los roles"
      description="Pantalla de bienvenida personalizada por rol. Muestra saludo, accesos directos, notificaciones recientes y próximos eventos del calendario."
      sections={[
        {
          name: 'Contenido por rol',
          items: [
            'Saludo personalizado con nombre y hora del día',
            'Accesos directos (3-4 shortcuts según rol)',
            'Notificaciones recientes — últimas 5 actividades del usuario',
            'Próximos 3 eventos del calendario',
            'Mini-KPIs (solo collaborator y client)',
          ],
        },
        {
          name: 'Diferencias por rol',
          items: [
            'Collaborator → accesos a todos los módulos + KPIs de todos los clientes',
            'Supplier → accesos a Calendario y Proyectos propios',
            'Client → accesos a sus Proyectos + KPIs de sus campañas',
          ],
        },
      ]}
      links={[
        { href: '/calendario', label: 'Calendario' },
        { href: '/proyectos', label: 'Proyectos' },
        { href: '/kpis', label: 'KPIs' },
        { href: '/recursos', label: 'Recursos' },
      ]}
    />
  )
}
