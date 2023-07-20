import { Outlet, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { PATH } from '@/common'
import { Header } from '@/components/ui/header'
import { useLogoutMutation, useMeQuery, util } from '@/features/auth/service/api/auth.api.ts'
import { useAppDispatch } from '@/store/store.ts'

export const Layout = () => {
  const { data } = useMeQuery()
  const [logout] = useLogoutMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  console.log('layout')
  const onSignOut = () => {
    logout()
      .unwrap()
      .then(() => {
        dispatch(util?.resetApiState())
        navigate(PATH.LOGIN)
      })
      .catch(error => {
        toast(error)
      })
  }

  return (
    <div>
      <Header
        isAuth={!!data}
        onSignOut={onSignOut}
        onSignIn={() => navigate(PATH.LOGIN)}
        onProfileClick={() => navigate(PATH.PROFILE)}
      />
      <Outlet />
    </div>
  )
}
