import { RegisterForm } from '@/components/auth/register-form'

export const RegisterPage = () => {
  return <RegisterForm onSubmitHandler={e => console.log('Вы зарегистрировались', e)} />
}
