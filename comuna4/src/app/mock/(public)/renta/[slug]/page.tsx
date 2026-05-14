import { MockPage } from '@/components/mock/MockPage'

export default async function RentaItemPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params

  return (
    <MockPage
      title={`Ítem: ${slug}`}
      badge="Capa pública — detalle de renta"
      breadcrumb={[
        { href: '/mock', label: 'Inicio' },
        { href: '/mock/renta', label: 'Renta' },
      ]}
      description="Ficha detallada de un espacio o equipo rentable. Incluye galería, especificaciones técnicas, precios y disponibilidad en tiempo real."
      sections={[
        {
          name: 'Contenido de la ficha',
          items: [
            'Galería de fotos (slider)',
            'Nombre y descripción',
            'Especificaciones técnicas',
            'Precio por hora y por día',
            'Badge de disponibilidad',
            'Calendario de disponibilidad (FullCalendar, tiempo real)',
            'Botón "Reservar" → agrega al carrito o inicia el formulario de reserva',
          ],
        },
        {
          name: 'Formulario de reserva',
          items: [
            'Selección de fecha y hora (date range picker)',
            'Resumen de precio estimado',
            'Datos de contacto (nombre, email, teléfono)',
            'Consentimiento: términos de uso, política de cancelación y depósito',
            'Confirmación automática por correo (Resend)',
          ],
        },
      ]}
      links={[
        { href: '/mock/renta', label: '← Catálogo de renta' },
      ]}
    />
  )
}
