import { MockPage } from '@/components/mock/MockPage'

export default function CalendarioPage() {
  return (
    <MockPage
      title="Calendario"
      badge="Capa interna — todos los roles"
      description="Calendario compartido con eventos de clientes, suplidores y el equipo interno. Integrado con Google Calendar y Outlook (bidireccional)."
      sections={[
        {
          name: 'Funcionalidades',
          items: [
            'Vistas: mensual, semanal, lista',
            'Filtros: por tipo de evento, suplidor, cliente, proyecto',
            'Click en evento → modal con detalle, notas y archivos adjuntos',
            'Crear/editar evento — formulario modal',
            'Integración Google Calendar API (bidireccional)',
            'Supplier y client ven solo sus eventos',
          ],
        },
        {
          name: 'Tipos de eventos',
          items: [
            'Evento de cliente (reunión, entrega, revisión)',
            'Evento de suplidor (sesión, producción)',
            'Evento interno (equipo)',
            'Reserva de espacio o equipo',
          ],
        },
      ]}
    />
  )
}
