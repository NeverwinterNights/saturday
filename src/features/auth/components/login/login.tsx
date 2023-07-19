import { useNavigate } from 'react-router-dom'

import { PATH } from '@/common'
import { LoginForm } from '@/components/auth/login-form'
import { LoginFormType } from '@/components/auth/login-form/use-login-form.ts'
import { useLoginMutation } from '@/features/auth/service/api/auth.api.ts'

export const LoginPage = () => {
  const navigate = useNavigate()
  const [login, { data }] = useLoginMutation()

  const loginHandler = async (data: LoginFormType) => {
    try {
      const res = await login(data).unwrap()

      console.log('Login', res)
      localStorage.setItem('token', res.accessToken)
    } catch (error) {
      console.log('error Login')
    }

    // .then(data => {
    //   console.log('data.accessToken', data.accessToken)
    //   localStorage.setItem('token', data.accessToken as string)
    // })
    // .catch(() => console.log('error Login'))
  }

  if (data?.accessToken) {
    navigate(PATH.PACKS)
  }

  return <LoginForm onSubmitHandler={loginHandler} />
}
