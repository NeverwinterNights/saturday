import { Outlet, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { PATH } from '@/common'
import { Header } from '@/components/ui/header'
import { useLogoutMutation, useMeQuery, util } from '@/features/auth/service/api/auth.api.ts'
import { useAppDispatch, useAppSelector } from '@/store/store.ts'

export const Layout = () => {
  const status = useAppSelector(state => state.appReducer.status)
  const { data } = useMeQuery()
  const [logout] = useLogoutMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

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
        isLoading={status}
        isAuth={!!data}
        email={data?.email}
        name={data?.name}
        avatar={data?.avatar}
        onSignOut={onSignOut}
        onSignIn={() => navigate(PATH.LOGIN)}
        onProfileClick={() => navigate(PATH.PROFILE)}
      />
      <Outlet />
    </div>
  )
}
