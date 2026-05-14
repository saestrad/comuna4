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
          suggestion: [
            '"Buenos días, María." + rol activo + hora local',
            '[KPI] Proyectos activos: 12 · ↑2 vs. mes anterior',
            '[KPI] Clientes con entregas esta semana: 4',
            '[KPI] Solicitudes nuevas sin asignar: 3 · badge rojo si >5',
            '[Notificación] "Cliente Acme aprobó propuesta — hace 2h"',
            '[Próximo] "Sesión fotográfica · Restaurante La Mar · Mañana 9:00am"',
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
    />
  )
}
