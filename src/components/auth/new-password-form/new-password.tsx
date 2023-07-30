import { memo } from 'react'

import { Button } from '../../ui/button'
import { ControlledInput } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import styles from './new-password.module.scss'
import { NewPasswordFormType, useNewPassword } from './use-new-password-form.ts'

import { useTranslate } from '@/i18n.ts'

type ForgotPasswordPropsType = {
  onSubmitHandler: (data: NewPasswordFormType) => void
}

export const NewPassword = memo(({ onSubmitHandler }: ForgotPasswordPropsType) => {
  const { handleSubmit, control } = useNewPassword()
  const t = useTranslate()
  const onSubmit = handleSubmit(data => onSubmitHandler(data))

  return (
    <form onSubmit={onSubmit} className={styles.main}>
      <Typography className={styles.title} variant="large">
        {t('Create new password')}
      </Typography>
      <div className={styles.input}>
        <ControlledInput
          label={t('Password')}
          name={'password'}
          type="password"
          control={control}
        />
      </div>

      <Typography className={styles.info} variant="body2">
        {t('Create new password and we will redirect you to login')}
      </Typography>
      <Button type={'submit'} fullWidth className={styles.button} variant="primary">
        <Typography className={styles.buttonText} variant="subtitle2">
          {t('Create new password')}
        </Typography>
      </Button>
    </form>
  )
})
