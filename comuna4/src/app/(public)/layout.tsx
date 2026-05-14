import { MockHeader } from '@/components/mock/MockHeader'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MockHeader />
      <main className="flex-1">{children}</main>
    </>
  )
}
