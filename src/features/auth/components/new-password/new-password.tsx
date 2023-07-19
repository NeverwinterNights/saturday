import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { PATH } from '@/common'
import { NewPassword } from '@/components/auth/new-password-form'
import { NewPasswordFormType } from '@/components/auth/new-password-form/use-new-password-form.ts'
import { useResetPasswordMutation } from '@/features/auth/service/api/auth.api.ts'

export const NewPasswordPage = () => {
  const navigate = useNavigate()
  const { token } = useParams()
  const [resetPassword, { isLoading, error }] = useResetPasswordMutation()
  const resetPassworHandler = async (data: NewPasswordFormType) => {
    if (token) {
      await resetPassword({ token, ...data })
        .unwrap()
        .then(() => {
          toast('🦄 Wow so easy!')
          navigate(PATH.LOGIN)
        })
        .catch(e => {
          toast.error(e.data.message)
          console.log(e.data.message)
        })
    }
  }

  return <NewPassword onSubmitHandler={resetPassworHandler} />
}
