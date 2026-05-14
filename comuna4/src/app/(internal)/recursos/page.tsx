import { MockPage } from '@/components/mock/MockPage'

export default function RecursosPage() {
  return (
    <MockPage
      title="Recursos"
      badge="Capa interna — collaborator + supplier"
      description="Repositorio interno de enlaces frecuentes: Drive de la agencia, manuales de marca, plantillas, accesos a herramientas, links de suplidores. Organizado por categorías y buscable."
      sections={[
        {
          name: 'Categorías de recursos',
          items: [
            'Drive de la agencia — carpetas principales',
            'Manuales de marca — guidelines, logos, tipografías',
            'Plantillas — documentos, presentaciones, briefs',
            'Herramientas — accesos a plataformas (Figma, Notion, etc.)',
            'Suplidores — contactos y links de proveedores frecuentes',
          ],
        },
        {
          name: 'Funcionalidades',
          items: [
            'Búsqueda en tiempo real (client-side filter)',
            'CRUD de recursos (solo collaborators)',
            'Visibilidad por rol (collaborator limita qué ven suppliers)',
            'Cada recurso: nombre, URL, descripción corta, categoría',
          ],
        },
      ]}
      links={[
        { href: '/dashboard', label: 'Dashboard' },
      ]}
    />
  )
}
