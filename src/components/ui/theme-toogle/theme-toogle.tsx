import { useState } from 'react'

import * as RadixToggle from '@radix-ui/react-toggle'

import s from './theme-toogle.module.scss'

import { Moon } from '@/assets/icons/MoonIcon.tsx'
import { Sun } from '@/assets/icons/SunIcon.tsx'

export const ThemeToggle = () => {
  const [isSun, setIsSun] = useState(false)

  function handleThemeChanged(isDark: boolean) {
    document.body.classList.toggle('dark-mode', isDark)
    setIsSun(!isSun)
  }

  return (
    <>
      <RadixToggle.Root
        onPressedChange={handleThemeChanged}
        className={s.Toggle}
        aria-label="Toggle italic"
      >
        {isSun ? <Sun /> : <Moon />}
      </RadixToggle.Root>
    </>
  )
}
