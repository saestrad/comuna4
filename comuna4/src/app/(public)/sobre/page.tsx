import { MockPage } from '@/components/mock/MockPage'

export default function SobrePage() {
  return (
    <MockPage
      title="Sobre Comuna 4"
      badge="Capa pública"
      description="Manifiesto, equipo, cultura y valores. Tono editorial, no corporativo. Aquí se muestra quiénes somos, cómo trabajamos y por qué somos diferentes."
      sections={[
        {
          name: 'Secciones de la página',
          items: [
            'Manifiesto — texto editorial de quiénes somos y qué creemos',
            'Equipo — fotos, nombre y rol de cada persona',
            'Cultura — cómo trabajamos, qué valoramos',
            'Forma de trabajar — nuestro proceso simplificado',
          ],
        },
        {
          name: 'Tono y estilo',
          items: [
            'Directo, humano, sin jerga corporativa',
            'Sin "soluciones integrales" ni "potenciamos tu marca"',
            'Lenguaje que suena a una persona real',
          ],
        },
      ]}
      links={[
        { href: '/contacto', label: 'Contacto' },
        { href: '/trabajos', label: 'Ver nuestros trabajos' },
        { href: '/', label: 'Home' },
      ]}
    />
  )
}
