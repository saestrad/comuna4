import { MockHeader } from '@/components/mock/MockHeader'
import { MockPage } from '@/components/mock/MockPage'

export default function Home() {
  return (
    <>
      <MockHeader />
      <main>
        <MockPage
          title="Home"
          badge="Capa pública"
          description="Comunica quiénes somos en menos de 3 segundos. CTA principal hacia solicitud de servicios, secundario hacia el portafolio de trabajos."
          sections={[
            {
              name: 'Secciones de la página',
              items: [
                'Hero — frase de manifiesto + CTA primario (Solicitar servicio) + CTA secundario (Ver trabajos)',
                'Ticker animado — servicios principales en loop horizontal',
                'Proyectos destacados — grid con hover cinematográfico (3-4 casos)',
                'Renta de espacios — bloque visual con CTA directo al catálogo',
                'Clientes / Testimonios — logos o citas',
                'CTA final — iniciar conversación',
              ],
            },
            {
              name: 'Animaciones requeridas (v2+)',
              items: [
                'Scroll narrativo — secciones que revelan al entrar en viewport',
                'Hover en proyectos — overlay con detalle del proyecto',
                'Ticker — velocidad configurable, pausa en hover',
                'Cursor personalizado (desktop)',
                'Page transitions (Framer Motion)',
              ],
            },
          ]}
          links={[
            { href: '/servicios', label: 'Servicios' },
            { href: '/trabajos', label: 'Trabajos' },
            { href: '/renta', label: 'Renta' },
            { href: '/solicitud', label: 'Solicitar servicio' },
            { href: '/sobre', label: 'Sobre nosotros' },
            { href: '/contacto', label: 'Contacto' },
            { href: '/login', label: 'Área interna' },
          ]}
        />
      </main>
    </>
  )
}
