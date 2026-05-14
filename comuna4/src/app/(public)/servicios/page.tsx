import { MockPage } from '@/components/mock/MockPage'

export default function ServiciosPage() {
  return (
    <MockPage
      title="Servicios"
      badge="Capa pública"
      description="Catálogo de servicios de la agencia. Cada servicio lleva a una página de detalle con descripción, entregables, tiempos, casos relacionados y CTA de solicitud."
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
        },
        {
          name: 'Estructura de cada card de servicio',
          items: [
            'Nombre del servicio',
            'Descripción corta (1-2 líneas)',
            'Icono o imagen representativa',
            'CTA → página de detalle o directamente al wizard de solicitud pre-seleccionado',
          ],
        },
      ]}
      links={[
        { href: '/servicios/branding', label: 'Detalle servicio (ejemplo)' },
        { href: '/solicitud', label: 'Solicitar servicio' },
        { href: '/', label: 'Home' },
      ]}
    />
  )
}
