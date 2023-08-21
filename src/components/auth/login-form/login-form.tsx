import { FC } from 'react'

import { Link } from 'react-router-dom'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledInput } from '../../ui/controlled'
import { ControlledCheckbox } from '../../ui/controlled/controlled-checkbox.tsx'
import { Typography } from '../../ui/typography'

import s from './login-form.module.scss'
import { LoginFormType, useLoginForm } from './use-login-form.ts'

import { PATH } from '@/common'
import { useTranslate } from '@/i18n.ts'

type PropsType = {
  onSubmitHandler: (data: LoginFormType) => void
}

export const LoginForm: FC<PropsType> = ({ onSubmitHandler }) => {
  const t = useTranslate()
  const { handleSubmit, control } = useLoginForm()
  const onSubmit = handleSubmit(data => onSubmitHandler(data))

  // console.log ("value", value)
  return (
    <Card className={s.card}>
      <Typography className={s.title} as="h1" variant="large">
        {t('Sign In')}
      </Typography>
      <form onSubmit={onSubmit}>
        <div className={s.form}>
          <ControlledInput label={t('Email')} name={'email'} control={control} />
          <ControlledInput
            label={t('Password')}
            name={'password'}
            type="password"
            control={control}
          />
          <ControlledCheckbox
            className={s.checkbox}
            label={t('Remember me')}
            name={'rememberMe'}
            control={control}
          />
        </div>
        <Typography
          variant="body2"
          as={'a'}
          className={s.recoverPasswordLink}
          href={PATH.PASSWORD_RECOVERY}
        >
          {t('Forgot Password?')}
        </Typography>
        <Button fullWidth className={s.button} type="submit">
          <Typography variant="subtitle2">{t('Sign In')}</Typography>
        </Button>
        <Typography className={s.caption} variant="body2">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          {t("Don't have an account?")}
        </Typography>
        <Typography variant="link1" as={Link} className={s.signUpLink} to={PATH.REGISTRATION}>
          {t('Sign Up')}
        </Typography>
      </form>
    </Card>
  )
}
