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
          description="Agencia creativa en Puerto Rico. Branding + medios + web + producción + innovación. Todo bajo un mismo techo. Todo con métricas vivas."
          links={[
            { href: '/solicitud', label: 'Solicitar servicio →' },
            { href: '/trabajos', label: 'Ver trabajos' },
          ]}
          sections={[
            {
              name: 'Secciones de la página',
              items: [
                'Hero — manifiesto: "Crecimiento con status." + CTA primario (Solicitar) + CTA secundario (Ver trabajos)',
                'Ticker animado — servicios en loop: Branding · Medios · Web · Producción · Innovación',
                'Trabajos destacados — 3-4 casos con resultado medible visible en la card',
                'El hueco que ocupamos — comparativa visual vs. agencias solo de diseño vs. solo de medios',
                'Renta de espacios — bloque con CTA directo al catálogo',
                'Clientes — logos o testimonios con resultado concreto (no "nos encantó trabajar con ellos")',
                'CTA final — "Cuéntanos tu proyecto"',
              ],
            },
            {
              name: 'Tono de voz (anti-clichés)',
              items: [
                'No: "Potenciamos tu marca con soluciones integrales"',
                'Sí: "Construimos lo que necesitas para crecer, y lo medimos."',
                'No: "Somos apasionados del diseño"',
                'Sí: "Hacemos branding, medios y producción bajo un mismo techo — desde Puerto Rico."',
              ],
            },
            {
              name: 'Animaciones (v3)',
              items: [
                'Scroll narrativo — secciones que se revelan con propósito (Locomotive)',
                'Hover en trabajos — overlay con resultado del proyecto + CTA (Resn)',
                'Ticker — pausa en hover, velocidad configurable',
                'Cursor personalizado desktop (Resn)',
                'Page transitions (Framer Motion)',
              ],
            },
          ]}
        />
      </main>
    </>
  )
}
