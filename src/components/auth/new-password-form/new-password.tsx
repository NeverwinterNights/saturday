import { memo } from 'react'

import { Button } from '../../ui/button'
import { ControlledInput } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import styles from './new-password.module.scss'
import { useNewPassword } from './use-new-password-form.ts'

type ForgotPasswordPropsType = {
  onChangeInput?: (value: string) => void
}

export const NewPassword = memo(({}: ForgotPasswordPropsType) => {
  const { handleSubmit, control } = useNewPassword()

  return (
    <form onSubmit={handleSubmit(data => console.log('data', data))} className={styles.main}>
      <Typography className={styles.title} variant="large">
        Create new password
      </Typography>
      <div className={styles.input}>
        <ControlledInput label="Password" name={'password'} type="password" control={control} />
      </div>

      <Typography className={styles.info} variant="body2">
        Create new password and we will send you further instructions to email
      </Typography>
      <Button type={'submit'} fullWidth className={styles.button} variant="primary">
        <Typography className={styles.buttonText} variant="subtitle2">
          Create New Password
        </Typography>
      </Button>
    </form>
  )
})
