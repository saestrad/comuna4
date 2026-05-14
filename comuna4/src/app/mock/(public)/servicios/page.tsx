import { MockPage } from '@/components/mock/MockPage'
import { K } from '@/components/mock/MockKeyword'

export default function ServiciosPage() {
  return (
    <MockPage
      title="Servicios"
      badge="Capa pública"
      description={<><K>Agencia de branding Puerto Rico</K>, <K>performance media</K> y <K>producción audiovisual</K>. Cada servicio lleva a una página de detalle con entregables, tiempos y casos relacionados.</>}
      links={[
        { href: '/mock/servicios/branding', label: 'Ver detalle de servicio' },
        { href: '/mock/solicitud', label: 'Solicitar servicio →' },
      ]}
      sections={[
        {
          name: 'Servicios disponibles (contenido desde CMS)',
          items: [
            'Branding — identidad visual completa',
            'Contenido — producción fotográfica y audiovisual',
            'Producción — eventos, activaciones',
            'Diseño digital — UI/UX, campañas',
            'Estrategia creativa',
          ],
          suggestion: [
            'Branding — "Tu marca, construida para durar. Identidad, estrategia, sistema visual completo."',
            'Performance Media — "Meta, Google, TikTok con datos reales, no estimaciones."',
            'Web — "Un sitio que trabaja por ti. Diseño premium + conversión medida."',
            'Producción — "Foto, video y activaciones. Rápido, con nivel."',
            'Estrategia creativa — "Primero entendemos. Luego creamos."',
          ],
        },
        {
          name: 'Estructura de cada card de servicio',
          items: [
            'Nombre del servicio',
            'Descripción corta (1-2 líneas)',
            'Icono o imagen representativa',
            'CTA → página de detalle o directamente al wizard de solicitud pre-seleccionado',
          ],
          suggestion: [
            'Nombre + descriptor de resultado: "Branding — Marcas que duran"',
            'Descripción: qué resuelve, no qué es',
            'Visual: caso real como thumbnail, no ícono genérico',
            'CTA: "Ver cómo lo hacemos" → /servicios/[slug]',
          ],
        },
        {
          name: 'Servicios premium',
          isNew: true,
          items: [
            'AI Ads Engine — campañas con inteligencia artificial aplicada',
            'TV + Digital sync — campaña coordinada en medios tradicionales y digitales',
            'Immersive launches — activaciones experienciales, AR, interactivos',
            'Influencer intelligence — selección y medición basada en datos',
            'Growth Dashboard — métricas vivas por cliente, siempre accesibles',
          ],
        },
        {
          name: 'Modelos de trabajo',
          isNew: true,
          items: [
            'Retainer mensual — equipo dedicado, resultados continuos',
            'Proyecto premium — scope cerrado, entrega definitiva',
            '% crecimiento en performance — nos alineamos con tu resultado',
            'Innovation sprint — prototipado rápido de ideas nuevas',
          ],
        },
      ]}
    />
  )
}
