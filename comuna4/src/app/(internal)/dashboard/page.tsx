import { MockPage } from '@/components/mock/MockPage'

export default function DashboardPage() {
  return (
    <MockPage
      title="Dashboard"
      badge="Capa interna — todos los roles"
      description="Pantalla de bienvenida personalizada por rol. Muestra saludo, KPIs rápidos, notificaciones recientes y próximos eventos."
      sections={[
        {
          name: 'Bloques de contenido (Salesforce Lightning pattern)',
          items: [
            '[Card] Saludo + hora del día + rol activo',
            '[KPI row] 3-4 métricas según rol — número grande + label + delta ↑↓',
            '[Lista] Notificaciones recientes — últimas 5 actividades',
            '[Timeline] Próximos 3 eventos del calendario',
          ],
        },
        {
          name: 'Diferencias por rol',
          items: [
            'Collaborator → KPIs de todos los clientes + acceso a todos los módulos',
            'Supplier → solo eventos propios + proyectos asignados',
            'Client → sus proyectos activos + KPIs de sus campañas',
          ],
        },
      ]}
    />
  )
}
