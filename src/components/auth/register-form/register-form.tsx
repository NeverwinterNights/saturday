import { FC } from 'react'

import { Link } from 'react-router-dom'

import s from './register-form.module.scss'
import { RegisterFormType, useRegisterForm } from './use-register-form.ts'

import { PATH } from '@/common'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledInput } from '@/components/ui/controlled'
import { Typography } from '@/components/ui/typography'
import { useTranslate } from '@/i18n.ts'

type RegisterFormPropsType = {
  onSubmitHandler: (data: RegisterFormType) => void
}

export const RegisterForm: FC<RegisterFormPropsType> = ({ onSubmitHandler }) => {
  const t = useTranslate()

  const { handleSubmit, control } = useRegisterForm()
  const onSubmit = handleSubmit(data => {
    onSubmitHandler(data)
  })

  return (
    <Card className={s.card}>
      <Typography className={s.title} as="h1" variant="large">
        {t('Sign Up')}
      </Typography>
      <form onSubmit={onSubmit} className={s.form}>
        <ControlledInput label={t('Email')} name={'email'} control={control} />
        <ControlledInput
          label={t('Password')}
          name={'password'}
          type="password"
          control={control}
        />
        <ControlledInput
          label={t('Confirm Password')}
          name={'confirm'}
          type="password"
          control={control}
        />
        <Button fullWidth className={s.button} type="submit">
          <Typography variant="subtitle2">{t('Sign Up')}</Typography>
        </Button>
        <Typography className={s.subtitle} variant="body2">
          {t('Already have an account?')}
        </Typography>
        <Button variant="link" as={Link} className={s.link} to={PATH.LOGIN}>
          {t('Sign In')}
        </Button>
      </form>
    </Card>
  )
}
