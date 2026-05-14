import { MockSidebar } from '@/components/mock/MockSidebar'

export default function InternalLayout({ children }: { children: React.ReactNode }) {
  return <MockSidebar>{children}</MockSidebar>
}
