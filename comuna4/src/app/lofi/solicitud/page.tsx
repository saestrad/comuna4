'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const serviceGroups = [
  { label: 'Agencia', items: ['Branding', 'Performance Media', 'Web', 'Estrategia'] },
  { label: 'Producción & Espacio', items: ['Producción audiovisual', 'Renta de estudio/equipo'] },
]
const budgets = ['Menos de $2,000', '$2,000 – $5,000', '$5,000 – $15,000', '$15,000 – $50,000', 'Más de $50,000']
const channels = ['Email', 'WhatsApp', 'Llamada']
const steps = ['Servicio', 'Brief', 'Contacto', 'Revisar y enviar']
const consentLabels = ['Acepto los términos y condiciones', 'Acepto la política de privacidad', 'Autorizo el uso de mis datos']

export default function LofiSolicitud() {
  return (
    <Suspense>
      <SolicitudForm />
    </Suspense>
  )
}

function SolicitudForm() {
  const searchParams = useSearchParams()
  const [step, setStep] = useState(0)
  const [selectedService, setSelectedService] = useState('')
  const [selectedBudget, setSelectedBudget] = useState('')
  const [customBudget, setCustomBudget] = useState('')
  const [showCustomBudget, setShowCustomBudget] = useState(false)
  const [selectedChannel, setSelectedChannel] = useState('Email')

  useEffect(() => {
    const espacio = searchParams.get('espacio')
    const fecha = searchParams.get('fecha')
    if (espacio) setSelectedService('Renta de estudio/equipo')
    if (fecha) setObjetivo(`Espacio: ${espacio ?? ''}\nFecha solicitada: ${fecha}`)
  }, [searchParams])
  const [objetivo, setObjetivo] = useState('')
  const [audiencia, setAudiencia] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [consents, setConsents] = useState([false, false, false])
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const isLast = step === steps.length - 1

  function validate(): boolean {
    const next: Record<string, string> = {}
    if (step === 0 && !selectedService) next.service = 'Selecciona un servicio para continuar.'
    if (step === 1 && !selectedBudget) next.budget = 'Indica un rango de inversión para continuar.'
    if (step === 2) {
      if (!name.trim()) next.name = 'Ingresa tu nombre.'
      if (!email.trim()) next.email = 'Ingresa tu email.'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Ingresa un email válido.'
    }
    if (step === 3 && !consents.every(Boolean)) next.consents = 'Debes aceptar todos los términos para enviar.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function advance() {
    if (validate()) setStep((s) => s + 1)
  }

  function submit() {
    if (validate()) setSubmitted(true)
  }

  function toggleConsent(i: number) {
    setConsents((prev) => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
    setErrors((prev) => ({ ...prev, consents: '' }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">Solicitud enviada</p>
          <h1 className="text-4xl font-black text-neutral-900 tracking-tight leading-none mb-4">
            Recibido.
          </h1>
          <p className="text-sm text-neutral-500 leading-relaxed mb-8">
            Te respondemos en menos de 24 horas al email que nos dejaste.
          </p>
          <Link
            href="/lofi"
            className="inline-block bg-c4-brand text-white text-sm font-medium px-8 py-4 rounded-full transition-colors hover:bg-c4-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-c4-brand focus-visible:ring-offset-2"
          >
            Volver al inicio →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 md:px-12 py-[104px]">

        {/* Progress */}
        <div className="mb-10">
          <div className="flex gap-1.5 mb-3">
            {steps.map((_, i) => (
              <div
                key={i}
                className={[
                  'flex-1 h-1 rounded-full transition-colors',
                  i <= step ? 'bg-neutral-900' : 'bg-neutral-200',
                ].join(' ')}
              />
            ))}
          </div>
          <p className="text-xs text-neutral-500 font-mono">
            Paso {step + 1} de {steps.length} — {steps[step]}
          </p>
        </div>

        {/* Step 0: Service */}
        {step === 0 && (
          <div>
            <h1 className="text-4xl font-black text-neutral-900 tracking-tight leading-none mb-3">
              ¿Qué necesitas?
            </h1>
            <p className="text-sm text-neutral-500 mb-8 leading-relaxed">
              Selecciona el servicio. Puedes volver y cambiar antes de enviar.
            </p>
            <div className="flex flex-col gap-6">
              {serviceGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2.5">{group.label}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.items.map((s) => (
                      <button
                        key={s}
                        type="button"
                        aria-pressed={selectedService === s}
                        onClick={() => { setSelectedService(s); setErrors({}) }}
                        className={[
                          'text-sm text-center px-4 py-3 rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1',
                          selectedService === s
                            ? 'border-neutral-900 bg-neutral-900 text-white'
                            : 'border-neutral-200 text-neutral-700 hover:border-neutral-400',
                        ].join(' ')}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {errors.service && (
              <p className="text-xs text-red-600 mt-4">{errors.service}</p>
            )}
          </div>
        )}

        {/* Step 1: Brief */}
        {step === 1 && (
          <div>
            <h1 className="text-4xl font-black text-neutral-900 tracking-tight leading-none mb-3">
              Cuéntanos el proyecto.
            </h1>
            <p className="text-sm text-neutral-500 mb-8 leading-relaxed">
              4 preguntas. Sin formularios eternos.
            </p>
            <div className="flex flex-col gap-6">
              <div>
                <label htmlFor="objetivo" className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                  Objetivo del proyecto
                </label>
                <textarea
                  id="objetivo"
                  rows={3}
                  value={objetivo}
                  onChange={(e) => setObjetivo(e.target.value)}
                  placeholder="¿Qué quieres lograr?"
                  className="w-full text-sm border border-neutral-200 rounded-lg px-4 py-3 placeholder:text-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 focus:border-neutral-500 resize-none"
                />
              </div>
              <div>
                <label htmlFor="audiencia" className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                  Audiencia objetivo
                </label>
                <textarea
                  id="audiencia"
                  rows={2}
                  value={audiencia}
                  onChange={(e) => setAudiencia(e.target.value)}
                  placeholder="¿A quién le habla tu marca?"
                  className="w-full text-sm border border-neutral-200 rounded-lg px-4 py-3 placeholder:text-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 focus:border-neutral-500 resize-none"
                />
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                  Rango de inversión <span className="normal-case tracking-normal">(USD)</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      aria-pressed={selectedBudget === b}
                      onClick={() => { setSelectedBudget(b); setShowCustomBudget(false); setErrors((prev) => ({ ...prev, budget: '' })) }}
                      className={[
                        'text-xs text-center px-3 py-2.5 rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1',
                        selectedBudget === b && !showCustomBudget
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-200 text-neutral-600 hover:border-neutral-400',
                      ].join(' ')}
                    >
                      {b}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => { setShowCustomBudget(true); setSelectedBudget(''); setErrors((prev) => ({ ...prev, budget: '' })) }}
                    className={[
                      'text-xs text-center px-3 py-2.5 rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1',
                      showCustomBudget
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-200 text-neutral-600 hover:border-neutral-400',
                    ].join(' ')}
                  >
                    Cuéntanos →
                  </button>
                </div>
                {showCustomBudget && (
                  <textarea
                    rows={2}
                    value={customBudget}
                    onChange={(e) => { setCustomBudget(e.target.value); setSelectedBudget(e.target.value) }}
                    placeholder="Describe tu presupuesto o situación"
                    className="mt-3 w-full text-sm border border-neutral-200 rounded-lg px-4 py-3 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-500 resize-none"
                    autoFocus
                  />
                )}
                {errors.budget && (
                  <p className="text-xs text-red-600 mt-3">{errors.budget}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Contact */}
        {step === 2 && (
          <div>
            <h1 className="text-4xl font-black text-neutral-900 tracking-tight leading-none mb-3">
              ¿Cómo te contactamos?
            </h1>
            <p className="text-sm text-neutral-500 mb-8 leading-relaxed">
              Solo lo necesario para darte seguimiento.
            </p>
            <div className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                  Nombre completo *
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value); if (errors.name) setErrors((prev) => ({ ...prev, name: '' })) }}
                  onBlur={() => { if (!name.trim()) setErrors((prev) => ({ ...prev, name: 'Ingresa tu nombre.' })) }}
                  placeholder="Tu nombre"
                  className={[
                    'w-full text-sm border rounded-lg px-4 py-3 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-500',
                    errors.name ? 'border-red-400' : 'border-neutral-200',
                  ].join(' ')}
                />
                {errors.name && (
                  <p className="text-xs text-red-600 mt-1.5">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((prev) => ({ ...prev, email: '' })) }}
                  onBlur={() => {
                    if (!email.trim()) setErrors((prev) => ({ ...prev, email: 'Ingresa tu email.' }))
                    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) setErrors((prev) => ({ ...prev, email: 'Ingresa un email válido.' }))
                  }}
                  placeholder="tu@empresa.com"
                  className={[
                    'w-full text-sm border rounded-lg px-4 py-3 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-500',
                    errors.email ? 'border-red-400' : 'border-neutral-200',
                  ].join(' ')}
                />
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1.5">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="empresa" className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                  Empresa (opcional)
                </label>
                <input
                  id="empresa"
                  type="text"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  placeholder="Nombre de tu empresa"
                  className="w-full text-sm border border-neutral-200 rounded-lg px-4 py-3 placeholder:text-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 focus:border-neutral-500"
                />
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                  Canal preferido
                </label>
                <div className="flex gap-2">
                  {channels.map((c) => (
                    <button
                      key={c}
                      type="button"
                      aria-pressed={selectedChannel === c}
                      onClick={() => setSelectedChannel(c)}
                      className={[
                        'text-xs px-4 py-2.5 rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1',
                        selectedChannel === c
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-200 text-neutral-600 hover:border-neutral-400',
                      ].join(' ')}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Review */}
        {step === 3 && (
          <div>
            <h1 className="text-4xl font-black text-neutral-900 tracking-tight leading-none mb-3">
              Revisa y envía.
            </h1>
            <p className="text-sm text-neutral-500 mb-8 leading-relaxed">
              Te respondemos en menos de 24 horas.
            </p>
            <div className="border border-neutral-200 rounded-xl p-6 mb-8 flex flex-col gap-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1">Servicio</p>
                  <p className="text-sm text-neutral-800">{selectedService || '—'}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="text-xs text-neutral-400 hover:text-neutral-700 underline underline-offset-2 shrink-0 transition-colors"
                >
                  Editar
                </button>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1">Inversión estimada</p>
                  <p className="text-sm text-neutral-800">{selectedBudget || '—'}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-neutral-400 hover:text-neutral-700 underline underline-offset-2 shrink-0 transition-colors"
                >
                  Editar
                </button>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1">Contacto</p>
                  <p className="text-sm text-neutral-800">{name}{empresa ? ` · ${empresa}` : ''}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{email} · {selectedChannel}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs text-neutral-400 hover:text-neutral-700 underline underline-offset-2 shrink-0 transition-colors"
                >
                  Editar
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3 mb-8">
              {consentLabels.map((t, i) => (
                <label key={t} className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consents[i]}
                    onChange={() => toggleConsent(i)}
                    className="mt-0.5 shrink-0 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 rounded"
                  />
                  <span className="text-xs text-neutral-500">{t}</span>
                </label>
              ))}
              {errors.consents && (
                <p className="text-xs text-red-600">{errors.consents}</p>
              )}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center gap-3 pt-8 border-t border-neutral-200 mt-8">
          <Link href="/lofi" className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors mr-2">
            Cancelar
          </Link>
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="text-sm text-neutral-500 hover:text-neutral-900 border border-neutral-200 px-4 py-2.5 rounded-full transition-colors"
            >
              ← Anterior
            </button>
          )}
          {!isLast ? (
            <button
              type="button"
              onClick={advance}
              className="ml-auto text-sm font-medium bg-c4-brand text-white px-6 py-2.5 rounded-full transition-colors hover:bg-c4-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-c4-brand focus-visible:ring-offset-2"
            >
              Siguiente →
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              className="ml-auto text-sm font-medium bg-c4-brand text-white px-6 py-2.5 rounded-full transition-colors hover:bg-c4-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-c4-brand focus-visible:ring-offset-2"
            >
              Enviar solicitud →
            </button>
          )}
        </div>

      </div>
    </div>
  )
}
