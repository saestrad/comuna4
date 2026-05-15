'use client'

import { useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { FormStepper } from '@/components/lofi/FormStepper'
import { FormNav } from '@/components/lofi/FormNav'
import { OptionButton } from '@/components/lofi/OptionButton'

const SPACES: Record<string, string> = {
  'ciclorama-profesional': 'Ciclorama Profesional',
  'estudio-cocina': 'Estudio de Cocina',
  'estudio-multiusos': 'Estudio Multiusos',
  'sony-fx3': 'Sony FX3 Full-Frame Cinema',
  'kit-led-3-puntos': 'Kit de iluminación LED — 3 puntos',
  'rode-ntg5': 'Rode NTG5 + grabadora portátil',
}

const TIPO_OPTIONS = [
  'Foto de producto',
  'Video publicitario',
  'Contenido para redes',
  'Entrevista / Podcast',
  'Evento privado',
  'Otro',
]

const steps = ['Producción', 'Contacto', 'Confirmar']

function RentaSolicitudInner() {
  const params = useSearchParams()
  const router = useRouter()

  const espacioSlug = params.get('espacio') ?? ''
  const duracion = params.get('duracion') ?? 'hora'
  const espacioName = SPACES[espacioSlug] ?? espacioSlug

  const [step, setStep] = useState(0)
  const [tipo, setTipo] = useState('')
  const [personas, setPersonas] = useState('')
  const [equipo, setEquipo] = useState('')
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [notas, setNotas] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [done, setDone] = useState(false)

  function validate(): boolean {
    const next: Record<string, string> = {}
    if (step === 0 && !tipo) next.tipo = 'Selecciona el tipo de producción para continuar.'
    if (step === 1) {
      if (!nombre.trim()) next.nombre = 'Ingresa tu nombre.'
      if (!email.trim()) next.email = 'Ingresa tu email.'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Ingresa un email válido.'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function advance() {
    if (validate()) setStep((s) => s + 1)
  }

  function submit() {
    if (validate()) setDone(true)
  }

  if (done) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-6 mx-auto">
            <Check size={20} className="text-white" />
          </div>
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">Solicitud enviada</p>
          <h1 className="text-4xl font-display font-semibold text-neutral-900 tracking-tight leading-none mb-4">
            Recibido.
          </h1>
          <p className="text-sm text-neutral-500 leading-relaxed mb-8">
            Confirmamos disponibilidad en menos de 2 horas. Revisa tu correo.
          </p>
          <Link
            href="/lofi/renta"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-medium px-8 py-4 rounded-full transition-colors hover:opacity-90"
          >
            Volver a espacios
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 md:px-12 py-[104px]">

        <FormStepper steps={steps} current={step} />

        {/* Resumen de reserva */}
        <div className="flex flex-wrap gap-6 mb-10 pb-8 border-b border-neutral-100">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">Espacio</p>
            <p className="text-sm font-semibold text-neutral-800">{espacioName || '—'}</p>
          </div>
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">Duración</p>
            <p className="text-sm font-semibold text-neutral-800">Por {duracion}</p>
          </div>
        </div>

        {/* Step 0 — Producción */}
        {step === 0 && (
          <div>
            <h1 className="text-4xl font-display font-semibold text-neutral-900 tracking-tight leading-none mb-3">
              ¿Qué vas a producir?
            </h1>
            <p className="text-sm text-neutral-500 mb-8 leading-relaxed">
              Esto nos ayuda a preparar el espacio para tu llegada.
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2.5">Tipo de producción</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {TIPO_OPTIONS.map((t) => (
                    <OptionButton
                      key={t}
                      label={t}
                      selected={tipo === t}
                      onClick={() => { setTipo(t); setErrors({}) }}
                    />
                  ))}
                </div>
                {errors.tipo && <p className="text-xs text-destructive mt-3">{errors.tipo}</p>}
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                  Personas en el equipo
                </label>
                <input
                  type="number"
                  min="1"
                  value={personas}
                  onChange={e => setPersonas(e.target.value)}
                  placeholder="ej. 4"
                  className="w-full text-sm border border-neutral-200 rounded-lg px-4 py-3 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-500"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                  Equipo adicional necesario (opcional)
                </label>
                <input
                  type="text"
                  value={equipo}
                  onChange={e => setEquipo(e.target.value)}
                  placeholder="ej. Cámara FX3, trípode..."
                  className="w-full text-sm border border-neutral-200 rounded-lg px-4 py-3 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 1 — Contacto */}
        {step === 1 && (
          <div>
            <h1 className="text-4xl font-display font-semibold text-neutral-900 tracking-tight leading-none mb-3">
              ¿Cómo te contactamos?
            </h1>
            <p className="text-sm text-neutral-500 mb-8 leading-relaxed">
              Confirmamos disponibilidad en menos de 2 horas.
            </p>

            <div className="flex flex-col gap-5">
              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  value={nombre}
                  onChange={e => { setNombre(e.target.value); if (errors.nombre) setErrors(p => ({ ...p, nombre: '' })) }}
                  placeholder="Tu nombre"
                  className={['w-full text-sm border rounded-lg px-4 py-3 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-500', errors.nombre ? 'border-destructive' : 'border-neutral-200'].join(' ')}
                />
                {errors.nombre && <p className="text-xs text-destructive mt-1.5">{errors.nombre}</p>}
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); if (errors.email) setErrors(p => ({ ...p, email: '' })) }}
                  placeholder="tu@correo.com"
                  className={['w-full text-sm border rounded-lg px-4 py-3 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-500', errors.email ? 'border-destructive' : 'border-neutral-200'].join(' ')}
                />
                {errors.email && <p className="text-xs text-destructive mt-1.5">{errors.email}</p>}
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                  Teléfono (opcional)
                </label>
                <input
                  type="text"
                  value={telefono}
                  onChange={e => setTelefono(e.target.value)}
                  placeholder="+1 787 000 0000"
                  className="w-full text-sm border border-neutral-200 rounded-lg px-4 py-3 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-500"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                  Notas adicionales (opcional)
                </label>
                <textarea
                  value={notas}
                  onChange={e => setNotas(e.target.value)}
                  rows={3}
                  placeholder="Cualquier detalle que debamos saber..."
                  className="w-full text-sm border border-neutral-200 rounded-lg px-4 py-3 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-500 resize-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2 — Confirmar */}
        {step === 2 && (
          <div>
            <h1 className="text-4xl font-display font-semibold text-neutral-900 tracking-tight leading-none mb-3">
              Revisa y envía.
            </h1>
            <p className="text-sm text-neutral-500 mb-8 leading-relaxed">
              Sin cargos hasta la confirmación.
            </p>

            <div className="border border-neutral-200 rounded-xl p-6 mb-8 flex flex-col gap-5">
              {[
                { label: 'Espacio', value: espacioName, goTo: undefined },
                { label: 'Duración', value: `Por ${duracion}`, goTo: undefined },
                { label: 'Tipo de producción', value: tipo, goTo: 0 },
                ...(personas ? [{ label: 'Equipo', value: `${personas} personas`, goTo: 0 }] : []),
                { label: 'Contacto', value: nombre, goTo: 1 },
                { label: 'Email', value: email, goTo: 1 },
                ...(telefono ? [{ label: 'Teléfono', value: telefono, goTo: 1 }] : []),
              ].map(({ label, value, goTo }) => (
                <div key={label} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1">{label}</p>
                    <p className="text-sm text-neutral-800">{value || '—'}</p>
                  </div>
                  {goTo !== undefined && (
                    <button
                      type="button"
                      onClick={() => setStep(goTo)}
                      className="text-xs text-neutral-400 hover:text-neutral-700 underline underline-offset-2 shrink-0 transition-colors"
                    >
                      Editar
                    </button>
                  )}
                </div>
              ))}
            </div>

            <p className="text-xs text-neutral-400">
              Al enviar aceptas que te contactemos para confirmar la reserva.
            </p>
          </div>
        )}

        <FormNav
          step={step}
          isLast={step === steps.length - 1}
          cancelHref={`/lofi/renta/${espacioSlug}`}
          onBack={() => setStep(s => s - 1)}
          onNext={step === steps.length - 1 ? submit : advance}
        />

      </div>
    </div>
  )
}

export default function RentaSolicitud() {
  return (
    <Suspense>
      <RentaSolicitudInner />
    </Suspense>
  )
}
