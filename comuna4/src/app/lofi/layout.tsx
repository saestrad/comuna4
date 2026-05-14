import Link from 'next/link'
import { LofiHeader } from '@/components/lofi/LofiHeader'

export default function LofiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LofiHeader />
      <main className="flex-1">{children}</main>
    </>
  )
}
