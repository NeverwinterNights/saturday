import { useNavigate } from 'react-router-dom'

import { PATH } from '@/common'
import { LoginForm } from '@/components/auth/login-form'
import { LoginFormType } from '@/components/auth/login-form/use-login-form.ts'
import { useLoginMutation, util } from '@/features/auth/service/api/auth.api.ts'
import { useAppDispatch } from '@/store/store.ts'

export const LoginPage = () => {
  const navigate = useNavigate()
  const [login] = useLoginMutation()
  const dispatch = useAppDispatch()
  const loginHandler = async (data: LoginFormType) => {
    await login(data)
      .unwrap()
      .then(() => {
        dispatch(util?.resetApiState())
        navigate(PATH.PACKS)
      })
      .catch(error => console.log(error))
  }

  return <LoginForm onSubmitHandler={loginHandler} />
}
