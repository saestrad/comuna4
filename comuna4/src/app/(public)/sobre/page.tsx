import { MockPage } from '@/components/mock/MockPage'

export default function SobrePage() {
  return (
    <MockPage
      title="Sobre Comuna 4"
      badge="Capa pública"
      description="No somos la agencia más grande. Somos la agencia que conecta creatividad mundial con velocidad de ejecución y resultados medibles — desde Puerto Rico para el mercado US Hispanic y LATAM."
      links={[
        { href: '/trabajos', label: 'Ver nuestros trabajos' },
        { href: '/solicitud', label: 'Trabajar con nosotros →' },
      ]}
      sections={[
        {
          name: 'Manifiesto',
          items: [
            'Las agencias tradicionales venden horas.',
            'Las nuevas venden crecimiento.',
            'Las legendarias venden status.',
            'Nosotros vendemos crecimiento con status.',
          ],
        },
        {
          name: 'Lo que hacemos diferente',
          items: [
            'Branding con la misma disciplina que Pentagram — sin el distanciamiento',
            'Webs con el nivel de craft de Locomotive — con métricas de conversión reales',
            'Activaciones digitales con la audacia de Resn — con ROI medible',
            'Medios full-stack: Meta, Google, TikTok, TV, radio, OOH',
            'Growth Dashboard: métricas vivas por cliente, no reportes mensuales en PDF',
          ],
        },
        {
          name: 'Ventaja Puerto Rico',
          items: [
            'US market access — sin barreras regulatorias ni de moneda',
            'LATAM talento y costos — producción eficiente',
            'Cultura hispana premium — autenticidad que Londres, NY y NZ no replican',
          ],
        },
        {
          name: 'Equipo',
          items: [
            'Fotos, nombre y rol de cada persona',
            'Especialidades — branding / media / tech / producción',
            'Tono: personas reales, no perfiles de LinkedIn',
          ],
        },
        {
          name: 'Cómo trabajamos',
          items: [
            'Discovery — entendemos el negocio antes de diseñar',
            'Estrategia — definimos qué medir antes de producir',
            'Ejecución — branding + medios + web + producción bajo un mismo techo',
            'Medición — growth dashboard con métricas vivas',
          ],
        },
      ]}
    />
  )
}
