import { useNavigate } from 'react-router-dom'

import { PATH } from '@/common'
import { htmlCodeResetPassword } from '@/common/constants/html-mail-reset-password.ts'
import { ForgotPassword } from '@/components/auth/forgot-password-form'
import { ForgotPasswordFormType } from '@/components/auth/forgot-password-form/use-forgot-password.ts'
import { useRecoverPasswordMutation } from '@/features/auth/service/api/auth.api.ts'

export const ForgotPasswordPage = () => {
  const navigate = useNavigate()
  const [recoverPassword] = useRecoverPasswordMutation()

  const recoverPasswordHandler = async (data: ForgotPasswordFormType) => {
    const RequestData = {
      html: htmlCodeResetPassword,
      email: data.email,
    }

    await recoverPassword(RequestData)
      .unwrap()
      .then(() => {
        navigate(PATH.CHECK_EMAIL)
      })
      .catch(e => {
        throw new Error(e)
      })
  }

  return <ForgotPassword onSubmitHandler={recoverPasswordHandler} />
}
