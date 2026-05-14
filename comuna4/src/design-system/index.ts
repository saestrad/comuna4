/**
 * Entry point del sistema de diseño de Comuna 4.
 * Jerarquía: primitivos → semánticos → componente → stage activo.
 */

export * from './tokens/base'
export * from './tokens/semantic'
export * from './tokens/component'

export { v0Tokens } from './stages/v0-mock'
export { v1Tokens } from './stages/v1-low'
export { v3Tokens } from './stages/v3-high'

export type Stage = 'v0-mock' | 'v1-low' | 'v3-high'
export type { StatusVariant } from './tokens/semantic'

export const CURRENT_STAGE: Stage = 'v0-mock'
