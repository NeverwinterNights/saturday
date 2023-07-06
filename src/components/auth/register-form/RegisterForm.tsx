import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { registerSchema } from '../../../common/schema'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import { ControlledInput } from '../../../components/ui/controlled'
import { Typography } from '../../../components/ui/typography'

import s from './registerForm.module.scss'

type RegisterFormType = z.infer<typeof registerSchema>

type RegisterFormPropsType = {
  linkPath: string
  onSubmitHandler: (data: RegisterFormType) => void
}

export const RegisterForm: FC<RegisterFormPropsType> = ({ linkPath, onSubmitHandler }) => {
  const { handleSubmit, control } = useForm<RegisterFormType>({
    resolver: zodResolver(registerSchema),
    mode: 'onSubmit',
  })

  const onSubmit = handleSubmit(data => {
    console.log(data)
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
        <Button variant="link" as={'a'} className={s.link} href={linkPath}>
          Sign In
        </Button>
      </form>
    </Card>
  )
}
