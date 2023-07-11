import { NewPassword } from '../../../components/auth/new-password-form'

export const NewPasswordPage = () => {
  return <NewPassword onSubmitHandler={e => console.log('создан новый пароль', e)} />
}
