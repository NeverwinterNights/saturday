import s from './error-page.module.scss'

import { Error_404 } from '@/assets/icons/Error-404.tsx'
import { PATH } from '@/common'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

export const ErrorPage = () => {
  return (
    <div className={s.root}>
      <Error_404 />
      <Typography variant={'body1'}>Sorry! Page not found!</Typography>
      <Button as={'a'} href={PATH.PACKS}>
        Back to home page
      </Button>
    </div>
  )
}
