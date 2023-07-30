import { FC } from 'react'

import s from './lang-switcher.module.scss'

import { useI18n, useTranslate } from '@/i18n.ts'

interface Props {
  className?: string
}

export const LangSwitcher: FC<Props> = () => {
  const t = useTranslate()
  const i18n = useI18n()
  const updateLang = () => {
    i18n.setLang(i18n.getLang() === 'en' ? 'ru' : 'en')
  }

  return (
    <button onClick={updateLang} className={s.button}>
      {t('lang')}
    </button>
  )
}
