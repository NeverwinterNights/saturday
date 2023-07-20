import { Pages } from '@/app/route-pages'
import { Layout } from '@/components/layout/layout.tsx'
import { ProvisionalNavigate } from '@/components/ui/provisional-navigate/provisional-navigate.tsx'

export function App() {
  return (
    <>
      <Layout />
      <Pages />
      <ProvisionalNavigate />
    </>
  )
}
