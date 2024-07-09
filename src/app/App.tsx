import { Pages } from '@/app/route-pages'
import { Layout } from '@/components/layout/layout.tsx'
import { ThemeToggle } from '@/components/ui/theme-toogle/theme-toogle.tsx'
import { LangSwitcher } from '@/languge-select/lang-switcher.tsx'

export function App() {
  return (
    <>
      <LangSwitcher />
      <Layout />
      <Pages />
      <ThemeToggle />
    </>
  )
}
