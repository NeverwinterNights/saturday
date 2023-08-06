import { memo } from 'react'

import { Link } from 'react-router-dom'

import { MailIcon } from '../../../assets/icons/MailIcom.tsx'
import { PATH } from '../../../common'
import { Button } from '../../ui/button'
import { Typography } from '../../ui/typography'

import styles from './check-mail.module.scss'

import { useTranslate } from '@/i18n.ts'

type CheckMailPropType = {
  email: string
}

export const CheckMail = memo(({ email }: CheckMailPropType) => {
  const t = useTranslate()

  return (
    <div className={styles.main}>
      <Typography className={styles.title} variant="large">
        {t('Check Email')}
      </Typography>
      <div className={styles.icon}>
        <MailIcon />
      </div>
      <Typography className={styles.info} variant="body2">
        {t('We’ve sent an Email with instructions to')} {email}
      </Typography>
      <Button as={Link} fullWidth className={styles.button} variant="primary" to={PATH.LOGIN}>
        <Typography className={styles.buttonText} variant="subtitle2">
          {t('Back to Sign In')}
        </Typography>
      </Button>
    </div>
  )
})
