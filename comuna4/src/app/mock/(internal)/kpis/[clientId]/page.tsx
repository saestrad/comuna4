import { MockPage } from '@/components/mock/MockPage'

export default async function KpisClientePage(props: PageProps<'/kpis/[clientId]'>) {
  const { clientId } = await props.params

  return (
    <MockPage
      title={`KPIs — ${clientId}`}
      badge="Capa interna — detalle de cliente"
      breadcrumb={[
        { href: '/mock/dashboard', label: 'Dashboard' },
        { href: '/mock/kpis', label: 'KPIs' },
      ]}
      description="Vista detallada de métricas para un cliente específico. Gráficas por período, comparativos y datos de fuentes externas conectadas."
      sections={[
        {
          name: 'Métricas disponibles',
          items: [
            'Alcance orgánico y pagado',
            'Leads generados',
            'Conversiones / ventas',
            'Métricas de redes sociales',
            'Tráfico web (si GA4 conectado)',
          ],
        },
        {
          name: 'Controles',
          items: [
            'Selector de período (mes, trimestre, año, personalizado)',
            'Comparativo vs. período anterior',
            'Descarga CSV del reporte',
            'Estado de conexiones externas (Meta / GA4 / Sheets)',
          ],
        },
      ]}
      links={[
        { href: '/mock/kpis', label: '← Todos los clientes' },
        { href: '/mock/proyectos', label: 'Proyectos' },
      ]}
    />
  )
}
