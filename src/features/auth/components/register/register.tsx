import { useNavigate } from 'react-router-dom'

import { PATH } from '@/common'
import { RegisterForm } from '@/components/auth/register-form'
import { RegisterFormType } from '@/components/auth/register-form/use-register-form.ts'
import { useRegistrationMutation } from '@/features/auth/service/api/auth.api.ts'

export const RegisterPage = () => {
  const navigate = useNavigate()
  const [register, { data }] = useRegistrationMutation()

  const registerHandler = (data: RegisterFormType) => {
    const transformData = { password: data.password, email: data.email, name: data.email }

    register(transformData)
      .unwrap()
      .catch(error => console.log(error, 'Error Register'))
  }

  if (data) {
    navigate(PATH.LOGIN)
  }

  return <RegisterForm onSubmitHandler={registerHandler} />
}
