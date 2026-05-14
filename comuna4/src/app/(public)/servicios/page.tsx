import { MockPage } from '@/components/mock/MockPage'

export default function ServiciosPage() {
  return (
    <MockPage
      title="Servicios"
      badge="Capa pública"
      description="Un solo techo. Branding, medios, web, producción e innovación. Todo con métricas vivas. No vendemos horas — vendemos crecimiento."
      links={[
        { href: '/servicios/branding', label: 'Ver detalle de servicio' },
        { href: '/solicitud', label: 'Solicitar servicio →' },
      ]}
      sections={[
        {
          name: 'Core — compite globalmente',
          items: [
            'Branding — identidad, estrategia de marca, sistemas visuales duraderos',
            'Web conversion — sitios premium que convierten (no solo bonitos)',
            'Creative production — fotografía, video, activaciones',
            'Performance media — Meta, Google, TikTok con métricas reales',
          ],
        },
        {
          name: 'Premium — diferenciador de mercado',
          items: [
            'AI Ads Engine — campañas con inteligencia artificial aplicada',
            'TV + Digital sync — campañas que corren en paralelo en medios tradicionales y digitales',
            'Immersive launches — activaciones experienciales, AR, interactivos',
            'Influencer intelligence — selección y medición basada en datos',
            'Growth Dashboard — métricas vivas por cliente, siempre accesibles',
          ],
        },
        {
          name: 'Modelos de trabajo',
          items: [
            'Retainer mensual — equipo dedicado, resultados continuos',
            'Proyecto premium — scope cerrado, entrega definitiva',
            '% crecimiento en performance — nos alineamos con tu resultado',
            'Innovation sprint — semanas de prototipado rápido de ideas nuevas',
          ],
        },
      ]}
    />
  )
}
