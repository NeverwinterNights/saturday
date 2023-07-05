import { memo } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../../ui/button'
import { ControlledInput } from '../../../ui/controlled'
import { Typography } from '../../../ui/typography'

import styles from './forgotPassword.module.scss'

const schema = z.object({
  email: z.string().trim().email('Invalid Email Address!').nonempty('Enter Email!'),
})

type FormType = z.infer<typeof schema>

type ForgotPasswordPropsType = {
  onChangeInput?: (value: string) => void
}

export const ForgotPassword = memo(({}: ForgotPasswordPropsType) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  return (
    <form onSubmit={handleSubmit(data => console.log('data', data))} className={styles.main}>
      <Typography className={styles.title} variant="large">
        Forgot your password?
      </Typography>
      <div className={styles.input}>
        <ControlledInput label="Email" name={'email'} control={control} />
      </div>

      <Typography className={styles.info} variant="body2">
        Enter your email address and we will send you further instructions{' '}
      </Typography>
      <Button
        onClick={() => console.log('value')}
        type={'submit'}
        fullWidth
        className={styles.button}
        variant="primary"
      >
        <Typography className={styles.buttonText} variant="subtitle2">
          Send Instructions
        </Typography>
      </Button>
      <Typography className={styles.sub} variant="body2">
        Did you remember your password?
      </Typography>
      <Typography className={styles.log}>Try logging in</Typography>
    </form>
  )
})
