import { FC } from 'react'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledInput } from '../../ui/controlled'
import { ControlledCheckbox } from '../../ui/controlled/controlled-checkbox.tsx'
import { Typography } from '../../ui/typography'

import s from './login-form.module.scss'
import { LoginFormType, useLoginForm } from './use-login-form.ts'

import { PATH } from '@/common'

type PropsType = {
  onSubmitHandler: (data: LoginFormType) => void
}

export const LoginForm: FC<PropsType> = ({ onSubmitHandler }) => {
  const { handleSubmit, control } = useLoginForm()
  const onSubmit = handleSubmit(data => onSubmitHandler(data))

  return (
    <Card className={s.card}>
      <Typography className={s.title} as="h1" variant="large">
        Sign In
      </Typography>
      <form onSubmit={onSubmit}>
        <div className={s.form}>
          <ControlledInput label="Email" name={'email'} control={control} />
          <ControlledInput label="Password" name={'password'} type="password" control={control} />
          <ControlledCheckbox
            className={s.checkbox}
            label="Remember me"
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
          Forgot Password?
        </Typography>
        <Button fullWidth className={s.button} type="submit">
          <Typography variant="subtitle2">Sign In</Typography>
        </Button>
        <Typography className={s.caption} variant="body2">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account?
        </Typography>
        <Typography variant="link1" as={'a'} className={s.signUpLink} href={PATH.REGISTRATION}>
          Sign Up
        </Typography>
      </form>
    </Card>
  )
}
