import { LoginForm } from '../../../components/auth/login-form'

export const LoginPage = () => {
  return <LoginForm onSubmitHandler={e => console.log('Вы авторизовались', e)} />
}
