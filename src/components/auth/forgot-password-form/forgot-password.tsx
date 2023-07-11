import { memo } from 'react'

import { PATH } from '../../../common'
import { Button } from '../../ui/button'
import { ControlledInput } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import styles from './forgot-password.module.scss'
import { ForgotPasswordFormType, useForgotPassword } from './use-forgot-password.ts'

type ForgotPasswordPropsType = {
  onSubmitHandler: (data: ForgotPasswordFormType) => void
}

export const ForgotPassword = memo(({ onSubmitHandler }: ForgotPasswordPropsType) => {
  const { handleSubmit, control } = useForgotPassword()
  const onSubmit = handleSubmit(data => onSubmitHandler(data))

  return (
    <form onSubmit={onSubmit} className={styles.main}>
      <Typography className={styles.title} variant="large">
        Forgot your password?
      </Typography>
      <div className={styles.input}>
        <ControlledInput label="Email" name={'email'} control={control} />
      </div>

      <Typography className={styles.info} variant="body2">
        Enter your email address and we will send you further instructions{' '}
      </Typography>
      <Button type={'submit'} fullWidth className={styles.button} variant="primary">
        <Typography className={styles.buttonText} variant="subtitle2">
          Send Instructions
        </Typography>
      </Button>
      <Typography className={styles.sub} variant="body2">
        Did you remember your password?
      </Typography>
      <Typography className={styles.log} as={'a'} href={PATH.LOGIN}>
        Try logging in
      </Typography>
    </form>
  )
})
