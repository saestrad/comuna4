import Link from 'next/link'
import { MockHeader } from '@/components/mock/MockHeader'

export default function LoginPage() {
  return (
    <>
      <MockHeader />
      <main className="max-w-md mx-auto px-6 py-16 font-mono">
        <div className="mb-2">
          <span className="text-xs text-neutral-400 uppercase tracking-widest">v0 — mock</span>
        </div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">Iniciar sesión</h1>
        <p className="text-sm text-neutral-500 mb-8 leading-relaxed">
          Acceso al área interna de Comuna 4. En producción: email + contraseña, Google SSO, Microsoft SSO. Recuperación de contraseña y 2FA opcionales.
        </p>

        <div className="space-y-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Campo</p>
            <div className="border border-dashed border-neutral-300 rounded px-3 py-2 text-sm text-neutral-400">
              Email — validación en línea
            </div>
          </div>
          <div>
            <div className="border border-dashed border-neutral-300 rounded px-3 py-2 text-sm text-neutral-400">
              Contraseña — con toggle de visibilidad
            </div>
          </div>
          <div className="text-xs text-neutral-400">
            — Olvidé mi contraseña (link a flujo de recuperación)
          </div>
        </div>

        <div className="space-y-3 mb-8">
          <Link
            href="/dashboard"
            className="block w-full text-center text-sm font-bold bg-neutral-900 text-white px-4 py-2.5 rounded transition-colors hover:bg-neutral-700"
          >
            Ingresar [MOCK — ir a dashboard]
          </Link>
          <div className="border border-dashed border-neutral-300 rounded px-4 py-2.5 text-center text-sm text-neutral-400">
            Continuar con Google (SSO)
          </div>
          <div className="border border-dashed border-neutral-300 rounded px-4 py-2.5 text-center text-sm text-neutral-400">
            Continuar con Microsoft (SSO)
          </div>
        </div>

        <div className="pt-4 border-t border-dashed border-neutral-200 text-xs text-neutral-400">
          — En producción: Clerk maneja auth, SSO y 2FA
          <br />
          — Roles: collaborator / supplier / client
          <br />
          — Sesión con expiración automática
        </div>
      </main>
    </>
  )
}
