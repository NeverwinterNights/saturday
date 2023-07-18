import { ForgotPassword } from '@/components/auth/forgot-password-form'

export const ForgotPasswordPage = () => {
  return <ForgotPassword onSubmitHandler={e => console.log('на вашу почту отправлено письмо', e)} />
}
