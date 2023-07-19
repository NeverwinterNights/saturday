import { useNavigate } from 'react-router-dom'

import { PATH } from '@/common'
import { LoginForm } from '@/components/auth/login-form'
import { LoginFormType } from '@/components/auth/login-form/use-login-form.ts'
import { useLoginMutation } from '@/features/auth/service/api/auth.api.ts'

export const LoginPage = () => {
  const navigate = useNavigate()
  const [login, { data }] = useLoginMutation()

  const loginHandler = async (data: LoginFormType) => {
    await login(data)
      .unwrap()
      .then(data => {
        localStorage.setItem('token', data.accessToken as string)
      })
      .catch(() => console.log('error Login'))
  }

  if (data) {
    navigate(PATH.PACKS)
  }

  return <LoginForm onSubmitHandler={loginHandler} />
}
