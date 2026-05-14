import { MockPage } from '@/components/mock/MockPage'

export default async function TrabajoDetallePage(props: PageProps<'/trabajos/[slug]'>) {
  const { slug } = await props.params

  return (
    <MockPage
      title={`Caso: ${slug}`}
      badge="Capa pública — caso de estudio"
      breadcrumb={[
        { href: '/mock', label: 'Inicio' },
        { href: '/mock/trabajos', label: 'Trabajos' },
      ]}
      description="Página de detalle de un proyecto del portafolio. Estructura editorial con contexto del cliente, reto, proceso, solución y resultados medibles."
      sections={[
        {
          name: 'Estructura del caso',
          items: [
            'Imagen hero o video del proyecto',
            'Cliente, industria, año, tipo de servicio',
            'Contexto — quién es el cliente y cuál era su situación',
            'Reto — qué problema había que resolver',
            'Solución — qué hicimos y por qué',
            'Resultados — métricas o impacto medible',
            'Créditos del equipo',
            'Proyectos relacionados (3 máximo)',
          ],
        },
      ]}
      links={[
        { href: '/mock/trabajos', label: '← Todos los trabajos' },
        { href: '/mock/solicitud', label: 'Trabajar con nosotros' },
      ]}
    />
  )
}
