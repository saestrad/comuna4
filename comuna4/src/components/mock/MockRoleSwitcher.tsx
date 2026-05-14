'use client'

import { useEffect, useState } from 'react'

export type MockRole = 'collaborator' | 'supplier' | 'client'

const STORAGE_KEY = 'c4_mock_role'

const roles: { value: MockRole; label: string; description: string }[] = [
  { value: 'collaborator', label: 'Colaborador', description: 'Acceso total' },
  { value: 'supplier', label: 'Suplidor', description: 'Sin KPIs' },
  { value: 'client', label: 'Cliente', description: 'Sin Recursos' },
]

export function getMockRole(): MockRole {
  if (typeof window === 'undefined') return 'collaborator'
  return (localStorage.getItem(STORAGE_KEY) as MockRole) ?? 'collaborator'
}

export function MockRoleSwitcher({
  currentRole,
  onRoleChange,
}: {
  currentRole: MockRole
  onRoleChange: (role: MockRole) => void
}) {
  return (
    <div className="border-t border-dashed border-neutral-700 pt-4 mt-4">
      <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Rol simulado</p>
      <div className="flex flex-col gap-1">
        {roles.map((role) => (
          <button
            key={role.value}
            onClick={() => onRoleChange(role.value)}
            className={`text-left px-2 py-1.5 rounded text-xs transition-colors ${
              currentRole === role.value
                ? 'bg-neutral-700 text-white'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <span className="font-bold">{role.label}</span>
            <span className="ml-2 opacity-60">{role.description}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export function useMockRole() {
  const [role, setRole] = useState<MockRole>('collaborator')

  useEffect(() => {
    setRole(getMockRole())
  }, [])

  const changeRole = (newRole: MockRole) => {
    localStorage.setItem(STORAGE_KEY, newRole)
    setRole(newRole)
  }

  return { role, changeRole }
}
