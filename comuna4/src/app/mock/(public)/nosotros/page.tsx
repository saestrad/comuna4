import { MockPage } from '@/components/mock/MockPage'

export default function SobrePage() {
  return (
    <MockPage
      title="Sobre Comuna 4"
      badge="Capa pública"
      description="Manifiesto, equipo, cultura y valores. Tono editorial, no corporativo. Aquí se muestra quiénes somos, cómo trabajamos y por qué somos diferentes."
      links={[
        { href: '/mock/trabajos', label: 'Ver nuestros trabajos' },
        { href: '/mock/solicitud', label: 'Trabajar con nosotros →' },
      ]}
      sections={[
        {
          name: 'Secciones de la página',
          items: [
            'Manifiesto — texto editorial de quiénes somos y qué creemos',
            'Equipo — fotos, nombre y rol de cada persona',
            'Cultura — cómo trabajamos, qué valoramos',
            'Forma de trabajar — nuestro proceso simplificado',
          ],
          suggestion: [
            'Manifiesto headline: "Hacemos marcas que crecen." — sin declaraciones vacías',
            'Equipo: foto real + nombre + especialidad + 1 línea en primera persona',
            'Proceso visible: 4 pasos (Escuchar → Estrategia → Crear → Medir)',
            'Cultura: qué valoramos con ejemplos concretos, no bullets abstractos',
          ],
        },
        {
          name: 'Tono y estilo',
          items: [
            'Directo, humano, sin jerga corporativa',
            'Sin "soluciones integrales" ni "potenciamos tu marca"',
            'Lenguaje que suena a una persona real',
          ],
          suggestion: [
            '"No somos la agencia más grande. Somos la que conecta creatividad con resultados."',
            '"Desde Puerto Rico — para el mundo hispano y el mercado americano."',
            '"Branding con disciplina. Medios con intención. Todo medido."',
          ],
        },
        {
          name: 'Lo que nos diferencia',
          isNew: true,
          items: [
            'Branding con la disciplina de Pentagram — sin el distanciamiento',
            'Webs con el craft de Locomotive — con métricas de conversión reales',
            'Activaciones con la audacia de Resn — con ROI medible',
            'Medios full-stack: Meta, Google, TikTok, TV, radio, OOH',
            'Growth Dashboard: métricas vivas, no reportes en PDF',
          ],
        },
        {
          name: 'Ventaja Puerto Rico',
          isNew: true,
          items: [
            'US market access — sin barreras regulatorias ni de moneda',
            'LATAM talento y costos — producción eficiente',
            'Cultura hispana premium — autenticidad que Londres, NY y NZ no replican',
          ],
        },
      ]}
    />
  )
}
