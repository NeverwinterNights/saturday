import s from './error-page.module.scss'

import { Error_404 } from '@/assets/icons/Error-404.tsx'
import { PATH } from '@/common'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { useTranslate } from '@/i18n.ts'

export const ErrorPage = () => {
  const t = useTranslate()

  return (
    <div className={s.root}>
      <Error_404 />
      <Typography variant={'body1'}>{t('Sorry! Page not found!')}</Typography>
      <Button as={'a'} href={PATH.PACKS}>
        {t('Back to home page')}
      </Button>
    </div>
  )
}
