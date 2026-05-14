import { MockPage } from '@/components/mock/MockPage'

export default function RentaPage() {
  return (
    <MockPage
      title="Renta de espacios y equipos"
      badge="Capa pública"
      description="Catálogo visual con dos pestañas: Espacios y Equipos. Cada ítem tiene ficha propia con fotos, specs, precio por hora/día y calendario de disponibilidad en tiempo real."
      sections={[
        {
          name: 'Pestañas del catálogo',
          items: [
            'Espacios — estudios, salas de reunión, locaciones',
            'Equipos — cámaras, iluminación, audio, accesorios',
          ],
        },
        {
          name: 'Funciones requeridas',
          items: [
            'Ficha de cada ítem: fotos (galería), specs, precio por hora/día, disponibilidad (badge)',
            'Filtros: tipo, disponibilidad, precio',
            'Calendario de disponibilidad en tiempo real (FullCalendar)',
            'Carrito básico — reservar múltiples ítems en una solicitud',
            'Formulario de reserva con consentimiento (términos, política de cancelación y depósito)',
            'Confirmación automática por correo',
            'Registro automático en el panel interno',
          ],
        },
      ]}
      links={[
        { href: '/renta/estudio-principal', label: 'Ver ítem (ejemplo)' },
        { href: '/', label: 'Home' },
      ]}
    />
  )
}
