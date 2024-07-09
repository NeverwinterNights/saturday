import { Navigate, Outlet } from 'react-router-dom'

import { PATH } from '../../common'

import { MainLoader } from '@/assets/loaders/main-loader/main-loader.tsx'
import { useMeQuery } from '@/features/auth/service/api/auth.api.ts'

export const PrivateRoute = () => {
  const { data, isLoading } = useMeQuery()

  if (isLoading) return <MainLoader />

  return data ? <Outlet /> : <Navigate to={PATH.LOGIN} />
}
