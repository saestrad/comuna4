import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <header className="px-6 py-4 flex items-center justify-between border-b border-dashed border-neutral-300">
        <Link href="/mock" className="font-mono font-bold text-sm tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">
          ← [C4]
        </Link>
        <Link href="/mock/solicitud" className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors">
          ¿Cliente nuevo? Solicitar servicio
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-sm font-mono">
          <div className="mb-6">
            <span className="text-xs text-neutral-400 uppercase tracking-widest">v0 — mock</span>
            <h1 className="text-2xl font-bold text-neutral-900 mt-1">Área interna</h1>
            <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
              Acceso para colaboradores, suplidores y clientes de Comuna 4.
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <div className="border border-dashed border-neutral-300 rounded px-3 py-2.5 text-sm text-neutral-400">
              Email
            </div>
            <div className="border border-dashed border-neutral-300 rounded px-3 py-2.5 text-sm text-neutral-400">
              Contraseña — con toggle de visibilidad
            </div>
            <div className="text-xs text-neutral-400 text-right">
              <span className="underline cursor-pointer">Olvidé mi contraseña</span>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <Link
              href="/mock/dashboard"
              className="block w-full text-center text-sm font-bold bg-neutral-900 text-white px-4 py-2.5 rounded hover:bg-neutral-700 transition-colors"
            >
              Ingresar [MOCK]
            </Link>
            <div className="border border-dashed border-neutral-300 rounded px-4 py-2.5 text-center text-sm text-neutral-400">
              Continuar con Google
            </div>
            <div className="border border-dashed border-neutral-300 rounded px-4 py-2.5 text-center text-sm text-neutral-400">
              Continuar con Microsoft
            </div>
          </div>

          <p className="text-xs text-neutral-400 text-center">
            En producción: Clerk · SSO · 2FA · Roles: collaborator / supplier / client
          </p>
        </div>
      </main>
    </div>
  )
}
