import { MockPage } from '@/components/mock/MockPage'

export default function Home() {
  return (
    <MockPage
          title="Home"
          badge="Capa pública — v0 mock"
          description="Comunica quiénes somos en menos de 3 segundos. CTA principal hacia solicitud de servicios, secundario hacia el portafolio de trabajos."
          links={[
            { href: '/mock/solicitud', label: 'Solicitar servicio →' },
            { href: '/mock/trabajos', label: 'Ver trabajos' },
          ]}
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
              suggestion: [
                'Hero headline: "Hacemos que tu marca crezca." — directo, sin jerga',
                'Hero sub: "Branding, medios y producción bajo un mismo techo. Desde Puerto Rico."',
                'CTA primario: "Empieza hoy" → wizard de solicitud',
                'CTA secundario: "Ver nuestro trabajo" → /trabajos',
                'Ticker: Branding · Performance Media · Web · Producción · AI Ads · TV & Digital',
                'Proyectos: mostrar resultado en la card — "↑38% leads en 90 días"',
                'Clientes: cita con resultado concreto, no "nos encantó trabajar con ellos"',
                'CTA final: "¿Tienes un proyecto? Cuéntanos." + campo de email inline',
              ],
            },
            {
              name: 'Animaciones requeridas (v3)',
              items: [
                'Scroll narrativo — secciones que revelan al entrar en viewport',
                'Hover en proyectos — overlay con detalle del proyecto',
                'Ticker — velocidad configurable, pausa en hover',
                'Cursor personalizado (desktop)',
                'Page transitions (Framer Motion)',
              ],
            },
            {
              name: 'Tono de voz',
              isNew: true,
              items: [
                '"No vendemos diseño. Vendemos crecimiento con status."',
                '"Una sola agencia. Branding que posiciona. Medios que convierten. Web que retiene."',
                '"Trabajamos con marcas que quieren crecer de verdad — no solo verse bien."',
                '"Métricas vivas. Siempre. No reportes mensuales en PDF."',
              ],
            },
          ]}
        />
  )
}
