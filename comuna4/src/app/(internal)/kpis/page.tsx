import { MockPage } from '@/components/mock/MockPage'

export default function KpisPage() {
  return (
    <MockPage
      title="KPIs — Dashboards de crecimiento"
      badge="Capa interna — collaborator + client"
      description="Métricas de rendimiento por cliente o proyecto. Gráficas descargables, comparativos por período y conectores a fuentes externas como Meta, GA4 y Google Sheets."
      sections={[
        {
          name: 'Vista general (collaborator)',
          items: [
            'Grid de clientes con mini-KPIs (alcance, leads, ventas, redes según cliente)',
            'Selector de período: mes, trimestre, año, personalizado',
            'Comparativo vs. período anterior y mismo período año anterior',
          ],
        },
        {
          name: 'Vista detalle por cliente',
          items: [
            'Gráficas Tremor: línea, barra, área',
            'Descarga de reporte en CSV',
            'Conectores externos: Meta Ads (OAuth), GA4 (OAuth), Google Sheets',
          ],
        },
        {
          name: 'Vista cliente',
          items: [
            'Solo sus propios datos',
            'Mismas gráficas contextualizadas a su proyecto',
          ],
        },
      ]}
      links={[
        { href: '/kpis/cliente-ejemplo', label: 'KPIs de cliente (ejemplo)' },
        { href: '/dashboard', label: 'Dashboard' },
      ]}
    />
  )
}
