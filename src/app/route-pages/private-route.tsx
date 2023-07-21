import { Navigate, Outlet } from 'react-router-dom'

import { PATH } from '../../common'

import { useMeQuery } from '@/features/auth/service/api/auth.api.ts'

export const PrivateRoute = () => {
  const { data, isLoading } = useMeQuery()

  if (isLoading) return <div>Loading...</div>

  return data ? <Outlet /> : <Navigate to={PATH.LOGIN} />
}
