import { useEffect } from 'react'

import { Link, useParams } from 'react-router-dom'

import styles from './verify-email.module.scss'

import { PATH } from '@/common'
import { Typography } from '@/components/ui/typography'
import { useVerifyMailMutation } from '@/features/auth/service/api/auth.api.ts'

export const VerifyMail = () => {
  const { code } = useParams()
  const [verifyMail] = useVerifyMailMutation()

  useEffect(() => {
    if (code) {
      verifyMail({ code })
    }
  }, [code])

  return (
    <div className={styles.root}>
      <Typography className={styles.title} as="h1" variant="large">
        Your Email is Verified
      </Typography>
      <Typography className={styles.subtitle} variant="subtitle2">
        Thank you for registering with our service. Your email address has been verified.
      </Typography>
      <Typography className={styles.subtitle} variant="subtitle2">
        Go to{' '}
        <Link className={styles.link} to={PATH.LOGIN}>
          login
        </Link>{' '}
        page.
      </Typography>
    </div>
  )
}
