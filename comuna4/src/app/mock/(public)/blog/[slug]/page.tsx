import { MockPage } from '@/components/mock/MockPage'

export default async function BlogArticlePage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params

  return (
    <MockPage
      title={`Artículo: ${slug}`}
      badge="Capa pública — editorial"
      breadcrumb={[
        { href: '/mock', label: 'Inicio' },
        { href: '/mock/blog', label: 'Blog' },
      ]}
      description="Artículo editorial de Comuna 4. Perspectiva práctica, datos reales, sin contenido genérico de agencia."
      sections={[
        {
          name: 'Estructura del artículo',
          items: [
            'Hero: imagen de portada + categoría (badge) + título + fecha + autor + tiempo de lectura',
            'Cuerpo: texto editorial en MDX — headings, párrafos, imágenes embebidas, bloques de datos',
            'Sidebar (desktop): tabla de contenidos + CTA de solicitud',
            'Footer del artículo: perfil del autor + artículos relacionados (3) + CTA final',
          ],
          suggestion: [
            'Hero: imagen real del proyecto o gráfica de datos propios — nunca stock genérico',
            'Cuerpo: estructura opinionada — punto de vista claro, no "por un lado... por el otro"',
            'Datos: métricas reales de clientes (anonimizadas si es necesario) o benchmarks de industria con fuente',
            'CTA sidebar: "¿Tu marca necesita esto? Cuéntanos." → /solicitud pre-cargado con categoría del artículo',
            'Footer: "Escrito por [Nombre], [Rol] en Comuna 4" + LinkedIn del autor',
          ],
        },
        {
          name: 'Temas 2026 — artículos planificados',
          isNew: true,
          items: [
            'AI Overviews y el fin del SEO de contenido genérico — cómo adaptarse',
            'Branding en la era post-logo: sistemas visuales que funcionan en cualquier superficie',
            'TikTok Shop para el mercado hispano: qué vende y por qué',
            'Producción audiovisual con IA: lo que aceleramos y lo que no delegamos',
            'Métricas que importan en 2026: por qué el CTR ya no es suficiente',
            'Puerto Rico como hub creativo: ventajas reales para marcas americanas y latinoamericanas',
          ],
        },
        {
          name: 'CMS (v1+)',
          items: [
            'Contenido desde Sanity — rich text, imágenes con alt text, bloques de código',
            'Previsualización en borrador para el equipo antes de publicar',
            'Open Graph automático por artículo (título, imagen, descripción)',
            'RSS feed para distribución',
          ],
        },
      ]}
      links={[
        { href: '/mock/blog', label: '← Todos los artículos' },
        { href: '/mock/solicitud', label: 'Trabajar con nosotros' },
      ]}
    />
  )
}
