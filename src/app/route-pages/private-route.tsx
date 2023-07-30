import { Navigate, Outlet } from 'react-router-dom'

import { PATH } from '../../common'

import { useMeQuery } from '@/features/auth/service/api/auth.api.ts'
import { useTranslate } from '@/i18n.ts'

export const PrivateRoute = () => {
  const t = useTranslate()
  const { data, isLoading } = useMeQuery()

  if (isLoading) return <div>{t('Loading...')}</div>

  return data ? <Outlet /> : <Navigate to={PATH.LOGIN} />
}
