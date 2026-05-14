import { MockPage } from '@/components/mock/MockPage'

export default async function ServicioDetallePage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params

  return (
    <MockPage
      title={`Servicio: ${slug}`}
      badge="Capa pública — detalle"
      breadcrumb={[
        { href: '/mock', label: 'Inicio' },
        { href: '/mock/servicios', label: 'Servicios' },
      ]}
      description="Página de detalle de servicio. Template uniforme para todos los servicios. El contenido viene del CMS (Sanity)."
      sections={[
        {
          name: 'Contenido de la página',
          items: [
            'Descripción detallada en lenguaje humano (qué es y qué no es)',
            'Qué incluye / qué entrega el cliente',
            'Tiempos estimados y rango de inversión (opcional)',
            'Casos de éxito relacionados (3 máximo)',
            'CTA principal — iniciar solicitud (pre-selecciona este servicio en el wizard)',
          ],
        },
      ]}
      links={[
        { href: '/mock/servicios', label: '← Todos los servicios' },
        { href: `/solicitud?servicio=${slug}`, label: 'Solicitar este servicio' },
      ]}
    />
  )
}
