import { Navigate, Outlet } from 'react-router-dom'

import { PATH } from '../../common'

export const PrivateRoute = () => {
  //let isAuth = useAppSelector(isLoggedInSelector)
  const isAuth = true

  return isAuth ? <Outlet /> : <Navigate to={PATH.LOGIN} />
}
