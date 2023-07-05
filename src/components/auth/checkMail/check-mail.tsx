import { memo } from 'react'

import { MailIcon } from '../../../assets/icons/MailIcom.tsx'
import { Button } from '../../ui/button'
import { Typography } from '../../ui/typography'

import styles from './check-mail.module.scss'

type CheckMailPropType = {
  email: string
}

export const CheckMail = memo(({ email }: CheckMailPropType) => {
  return (
    <div className={styles.main}>
      <Typography className={styles.title} variant="large">
        Check Email
      </Typography>
      <div className={styles.icon}>
        <MailIcon />
      </div>
      <Typography className={styles.info} variant="body2">
        We’ve sent an Email with instructions to {email}
      </Typography>
      <Button type={'button'} fullWidth className={styles.button} variant="primary">
        <Typography className={styles.buttonText} variant="subtitle2">
          Back to Sign In
        </Typography>
      </Button>
    </div>
  )
})