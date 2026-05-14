export interface Project {
  slug: string
  title: string
  fullTitle: string
  category: string
  sector: string
  metric: string
  color: string
  overview: string
  challenge: string
  approach: string
  result: string
  nextSlug?: string
  prevSlug?: string
}

export const projects: Project[] = [
  {
    slug: 'restaurante-caribeno',
    title: 'Identidad para restaurante caribeño',
    fullTitle: 'Identidad completa para restaurante de cocina caribeña',
    category: 'Branding',
    sector: 'Gastronomía',
    metric: '↑ 40% reconocimiento de marca en 60 días',
    color: 'oklch(0.72 0.18 55)',
    overview:
      'Una marca de gastronomía caribeña sin identidad visual coherente necesitaba posicionarse en un mercado local saturado. En 6 semanas construimos un sistema de marca completo: desde la estrategia hasta la aplicación en todos los puntos de contacto.',
    challenge:
      'El restaurante llevaba 3 años operando con un logo hecho en Canva y sin consistencia visual en ningún canal. Los clientes no reconocían la marca fuera del local. El equipo quería crecer pero no tenía las herramientas para comunicar qué los hacía únicos.',
    approach:
      'Empezamos por definir el posicionamiento: cocina caribeña auténtica, no tropical-turística. Esa diferencia determinó toda la dirección creativa. El sistema visual parte de la tipografía editorial, una paleta de tierra y especias, y un lenguaje fotográfico de ingredientes reales.',
    result:
      'A los 60 días del lanzamiento, el reconocimiento de marca en encuestas locales subió 40%. Las reservaciones online aumentaron 2.1×. El equipo ahora tiene un brand book que pueden entregar a cualquier proveedor externo.',
    nextSlug: 'marca-moda-performance',
    prevSlug: 'consultoria-web',
  },
  {
    slug: 'marca-moda-performance',
    title: 'Performance para marca de moda local',
    fullTitle: 'Campaña Meta + TikTok para marca de moda local',
    category: 'Performance',
    sector: 'Moda',
    metric: '3.2× ROAS sostenido en 90 días',
    color: 'oklch(0.65 0.18 285)',
    overview:
      'Una marca de moda local con producto sólido pero sin estructura de performance media. En 90 días construimos el sistema completo: estructura de campañas, creativos, segmentación y optimización continua.',
    challenge:
      'La marca gastaba en pauta sin estructura: un boost aquí, una campaña de awareness allá, sin datos ni optimización. El ROAS promedio era 0.8×. El producto vendía, pero no a través de los canales pagos.',
    approach:
      'Auditamos los creativos existentes y el comportamiento de la audiencia. Rediseñamos la arquitectura de campañas separando awareness, consideración y conversión. Produjimos 12 creativos de video vertical para TikTok y Meta, optimizando por las primeras 3 segundos de retención.',
    result:
      '3.2× ROAS promedio en 90 días, con picos de 4.1× en semanas de drop. El costo por adquisición bajó 42% vs. el histórico. La marca ahora tiene un playbook de performance que el equipo interno puede operar.',
    nextSlug: 'lanzamiento-audiovisual',
    prevSlug: 'restaurante-caribeno',
  },
  {
    slug: 'lanzamiento-audiovisual',
    title: 'Producción audiovisual para lanzamiento',
    fullTitle: 'Producción audiovisual para lanzamiento de producto',
    category: 'Producción',
    sector: 'Consumo',
    metric: '2.4M impresiones orgánicas',
    color: 'oklch(0.62 0.16 220)',
    overview:
      'Un producto de consumo con un lanzamiento en 3 semanas necesitaba contenido audiovisual para todos los canales: spot principal, cortes para redes sociales y material de prensa. Todo desde el Ciclorama de C4.',
    challenge:
      'El equipo tenía el producto listo y la fecha de lanzamiento confirmada, pero sin plan de contenido ni producción definida. El presupuesto era de mid-market — no había espacio para producción externa de gran escala.',
    approach:
      'Concentramos toda la producción en 2 días en nuestro Ciclorama Profesional. Un director de fotografía, equipo de arte y 3 talentos. El resultado: 1 spot de 30s, 6 cortes para redes y 12 assets de foto de producto. Dirección creativa y postproducción in-house.',
    result:
      '2.4 millones de impresiones orgánicas en la primera semana, con el spot alcanzando 800K views en TikTok sin pauta. El producto se agotó en los primeros 4 días en los puntos de venta participantes.',
    nextSlug: 'firma-arquitectura',
    prevSlug: 'marca-moda-performance',
  },
  {
    slug: 'firma-arquitectura',
    title: 'Sistema visual para firma de arquitectura',
    fullTitle: 'Rediseño de marca para firma de arquitectura',
    category: 'Branding',
    sector: 'Servicios profesionales',
    metric: 'Sistema visual completo en 4 semanas',
    color: 'oklch(0.68 0.08 85)',
    overview:
      'Una firma de arquitectura con proyectos de alto perfil pero una identidad visual que no comunicaba su nivel. En 4 semanas entregamos un sistema de marca que posiciona a la firma donde pertenece: en conversación con las mejores del mercado.',
    challenge:
      'La firma competía por proyectos contra despachos con presupuestos de marketing diez veces mayores. Su portafolio era sólido, pero el material de presentación no lo reflejaba. Perdían licitaciones no por el trabajo sino por cómo lo presentaban.',
    approach:
      'El punto de partida fue la arquitectura misma: módulo, proporción, ritmo. El sistema visual toma prestado del lenguaje técnico de los planos — grid rigurosa, tipografía sin serif de precisión, paleta de materiales (hormigón, acero, madera). Las presentaciones siguieron la misma lógica.',
    result:
      'Sistema visual entregado en 4 semanas: logo, tipografía corporativa, paleta, plantillas de presentación y brand guidelines. En los 3 meses siguientes, la firma cerró 2 de los 3 proyectos para los que presentó propuesta.',
    nextSlug: 'ecommerce-performance-max',
    prevSlug: 'lanzamiento-audiovisual',
  },
  {
    slug: 'ecommerce-performance-max',
    title: 'Performance Max para e-commerce',
    fullTitle: 'Google Ads + Performance Max para e-commerce',
    category: 'Performance',
    sector: 'E-commerce',
    metric: '↓ 28% CPA vs. campaña anterior',
    color: 'oklch(0.70 0.18 145)',
    overview:
      'Un e-commerce con catálogo diverso necesitaba escalar sus campañas de Google sin que el CPA se disparara. En 8 semanas reestructuramos todo: feed, audiencias, campañas y creativos.',
    challenge:
      'Las campañas existentes tenían un CPA promedio insostenible para el margen del negocio. El feed de productos estaba sin optimizar, los grupos de anuncios eran demasiado amplios y no había separación entre campañas de prospección y retargeting.',
    approach:
      'Auditamos el feed completo y lo optimizamos por categoría, precio y margen. Separamos campañas por tipo de producto y etapa del funnel. Implementamos Performance Max con señales de audiencia precisas y activos creativos segmentados. Reportes semanales de ajuste.',
    result:
      'El CPA bajó 28% respecto a la campaña anterior en las mismas condiciones de gasto. El ROAS total subió de 2.1× a 3.4×. El feed optimizado también mejoró el rendimiento orgánico en Google Shopping un 19%.',
    nextSlug: 'consultoria-web',
    prevSlug: 'firma-arquitectura',
  },
  {
    slug: 'consultoria-web',
    title: 'Web para consultoría B2B',
    fullTitle: 'Sitio web para consultoría de negocios',
    category: 'Web',
    sector: 'B2B',
    metric: '↑ 55% tiempo en página',
    color: 'oklch(0.63 0.14 162)',
    overview:
      'Una consultoría de negocios con expertise real pero un sitio web genérico que no generaba leads. En 5 semanas construimos una plataforma que convierte visitas en conversaciones.',
    challenge:
      'El sitio existente tenía texto corporativo, un formulario de contacto enterrado en el footer y un diseño que podría ser el de cualquier consultora del mundo. La tasa de rebote era del 78% y el único lead que llegaba era por referidos directos.',
    approach:
      'Empezamos con el copy antes que el diseño. Entrevistamos a 5 clientes actuales para entender qué les llevó a contratar. Con ese insight construimos una narrativa centrada en resultados específicos, no en servicios genéricos. El diseño se construyó sobre esa estructura.',
    result:
      'El tiempo promedio en página subió 55% en el primer mes. La tasa de rebote bajó de 78% a 51%. Los leads de formulario pasaron de 0 a 8 al mes, con una tasa de cierre del 40% en los primeros 3 meses.',
    nextSlug: 'restaurante-caribeno',
    prevSlug: 'ecommerce-performance-max',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const project = getProject(slug)
  if (!project) return {}
  return {
    prev: project.prevSlug ? getProject(project.prevSlug) : undefined,
    next: project.nextSlug ? getProject(project.nextSlug) : undefined,
  }
}

export const featuredProjects = projects.slice(0, 3)
