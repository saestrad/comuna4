'use client'

import { useState } from 'react'
import Link from 'next/link'

const steps = [
  {
    number: 1,
    title: 'Tipo de servicio',
    description: 'El usuario selecciona el servicio que necesita. Puede venir pre-seleccionado desde /servicios/[slug].',
    fields: ['Selección de servicio (cards o select)', 'Puede venir pre-seleccionado desde la página del servicio'],
  },
  {
    number: 2,
    title: 'Brief corto',
    description: '4-6 preguntas clave para entender el proyecto sin abrumar al usuario.',
    fields: [
      'Objetivo del proyecto (textarea, max 500 chars)',
      'Audiencia objetivo (textarea, max 300 chars)',
      'Deadline (date picker, opcional)',
      'Rango de inversión (select con rangos, opcional)',
      'Archivos de referencia (upload, max 5 archivos 10MB, opcional)',
    ],
  },
  {
    number: 3,
    title: 'Datos de contacto',
    description: 'Información mínima necesaria para dar seguimiento a la solicitud.',
    fields: [
      'Nombre completo (requerido)',
      'Empresa (opcional)',
      'Email (requerido, validación en línea)',
      'Teléfono (opcional)',
      'Canal preferido: email / WhatsApp / llamada',
    ],
  },
  {
    number: 4,
    title: 'Consentimiento',
    description: 'Pantalla de revisión antes del envío. El botón "Enviar" permanece deshabilitado hasta que los 3 checkboxes estén marcados.',
    fields: [
      'Resumen de la solicitud',
      'Checkbox: acepto términos y condiciones (requerido)',
      'Checkbox: acepto política de privacidad (requerido)',
      'Checkbox: autorizo uso de mis datos (requerido)',
      'Botón "Enviar solicitud" — deshabilitado hasta aceptar los 3',
    ],
  },
  {
    number: 5,
    title: 'Confirmación',
    description: 'Pantalla final. La solicitud fue enviada. El usuario recibe un correo automático con el número de ticket.',
    fields: [
      'Número de ticket generado (C4-YYYY-XXXX)',
      'Resumen de la solicitud enviada',
      'Próximos pasos esperados',
      'Email automático al solicitante',
      'Notificación interna al equipo',
    ],
  },
]

export function WizardMock() {
  const [currentStep, setCurrentStep] = useState(0)
  const step = steps[currentStep]
  const isLast = currentStep === steps.length - 1
  const isFirst = currentStep === 0

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 font-mono">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Barra de progreso — siempre visible</p>
        <div className="flex items-center gap-2">
          {steps.map((s, i) => (
            <button
              key={s.number}
              onClick={() => setCurrentStep(i)}
              className={`flex-1 h-1.5 rounded-full transition-colors ${
                i <= currentStep ? 'bg-neutral-800' : 'bg-neutral-200'
              }`}
              title={`Paso ${s.number}: ${s.title}`}
            />
          ))}
        </div>
        <p className="text-xs text-neutral-400 mt-2">
          Paso {step.number} de {steps.length}
        </p>
      </div>

      <div className="mb-2">
        <span className="text-xs text-neutral-400 uppercase tracking-widest">v0 — mock</span>
      </div>
      <h1 className="text-2xl font-bold text-neutral-900 mb-2">
        Paso {step.number} — {step.title}
      </h1>
      <p className="text-sm text-neutral-500 leading-relaxed mb-8">{step.description}</p>

      <div className="mb-10">
        <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
          Campos / contenido de este paso
        </h2>
        <ul className="space-y-2 border-l-2 border-dashed border-neutral-200 pl-4">
          {step.fields.map((field) => (
            <li key={field} className="text-sm text-neutral-600">
              — {field}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-3 pt-6 border-t border-dashed border-neutral-200">
        {!isFirst && (
          <button
            onClick={() => setCurrentStep((s) => s - 1)}
            className="text-sm text-neutral-500 hover:text-neutral-900 border border-dashed border-neutral-300 px-4 py-2 rounded transition-colors"
          >
            ← Anterior
          </button>
        )}
        {!isLast ? (
          <button
            onClick={() => setCurrentStep((s) => s + 1)}
            className="text-sm text-neutral-900 border border-dashed border-neutral-700 px-4 py-2 rounded transition-colors hover:bg-neutral-900 hover:text-white ml-auto"
          >
            Siguiente →
          </button>
        ) : (
          <Link
            href="/"
            className="text-sm text-neutral-900 border border-dashed border-neutral-700 px-4 py-2 rounded transition-colors hover:bg-neutral-900 hover:text-white ml-auto"
          >
            Volver al inicio ↩
          </Link>
        )}
      </div>
    </div>
  )
}
