import { MockPage } from '@/components/mock/MockPage'

export default function ContactoPage() {
  return (
    <MockPage
      title="Contacto"
      badge="Capa pública"
      description="Múltiples vías de contacto para que cada persona elija su canal preferido. Sin formulario único — opciones directas y rápidas."
      sections={[
        {
          name: 'Canales de contacto',
          items: [
            'Formulario corto (nombre, email, mensaje)',
            'WhatsApp — link directo',
            'Correo electrónico — link mailto',
            'Ubicación — mapa embebido',
            'Horario de atención',
          ],
        },
        {
          name: 'Comportamiento',
          items: [
            'El formulario corto envía email al equipo (Resend)',
            'Cada canal está claramente diferenciado visualmente',
            'Mobile-first — fácil de contactar desde cualquier dispositivo',
          ],
        },
      ]}
      links={[
        { href: '/mock/solicitud', label: 'Solicitar servicio' },
        { href: '/mock', label: 'Home' },
      ]}
    />
  )
}
