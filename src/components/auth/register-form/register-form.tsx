import { FC } from 'react'

import { PATH } from '../../../common'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import { ControlledInput } from '../../../components/ui/controlled'
import { Typography } from '../../../components/ui/typography'

import s from './register-form.module.scss'
import { RegisterFormType, useRegisterForm } from './use-register-form.ts'

type RegisterFormPropsType = {
  onSubmitHandler: (data: RegisterFormType) => void
}

export const RegisterForm: FC<RegisterFormPropsType> = ({ onSubmitHandler }) => {
  const { handleSubmit, control } = useRegisterForm()
  const onSubmit = handleSubmit(data => {
    onSubmitHandler(data)
  })

  return (
    <Card className={s.card}>
      <Typography className={s.title} as="h1" variant="large">
        Sign Up
      </Typography>
      <form onSubmit={onSubmit} className={s.form}>
        <ControlledInput label="Email" name={'email'} control={control} />
        <ControlledInput label="Password" name={'password'} type="password" control={control} />
        <ControlledInput
          label="Confirm Password"
          name={'confirm'}
          type="password"
          control={control}
        />
        <Button fullWidth className={s.button} type="submit">
          <Typography variant="subtitle2">Sign Up</Typography>
        </Button>
        <Typography className={s.subtitle} variant="body2">
          Already have an account?
        </Typography>
        <Button variant="link" as={'a'} className={s.link} href={PATH.LOGIN}>
          Sign In
        </Button>
      </form>
    </Card>
  )
}
