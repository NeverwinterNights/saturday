import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledInput } from '../../ui/controlled'
import { ControlledCheckbox } from '../../ui/controlled/controlled-checkbox.tsx'
import { Typography } from '../../ui/typography'

import s from './login-form.module.scss'

const schema = z.object({
  email: z.string().trim().nonempty('Enter email').email('Invalid email address'),
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional(),
})

type Form = z.infer<typeof schema>
export const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  console.log(errors)
  const onSubmit = handleSubmit(data => console.log(data))

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
        <Typography variant="body2" as={'a'} className={s.recoverPasswordLink}>
          Forgot Password?
        </Typography>
        <Button fullWidth className={s.button} type="submit">
          <Typography variant="subtitle2">Sign In</Typography>
        </Button>
        <Typography className={s.caption} variant="body2">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account?
        </Typography>
        <Typography variant="link1" as={'a'} className={s.signUpLink}>
          Sign Up
        </Typography>
      </form>
    </Card>
  )
}
