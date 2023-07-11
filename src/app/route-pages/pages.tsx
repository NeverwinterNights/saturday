import { Route, Routes } from 'react-router-dom'

import { PATH } from '../../common'
import { CheckEmailPage } from '../../features/auth/check-email'
import { LoginPage } from '../../features/auth/login'
import { NewPasswordPage } from '../../features/auth/new-password'
import { ForgotPasswordPage } from '../../features/auth/password-recovery'
import { RegisterPage } from '../../features/auth/register'
import { Cards } from '../../features/cards'
import { Learn } from '../../features/learn'
import { Packs } from '../../features/packs'
import { Profile } from '../../features/profile'

import { PrivateRoute } from './private-route.tsx'

export const Pages = () => {
  return (
    <Routes>
      <Route path={PATH.LOGIN} element={<LoginPage />} />
      <Route path={PATH.REGISTRATION} element={<RegisterPage />} />
      <Route path={PATH.PASSWORD_RECOVERY} element={<ForgotPasswordPage />} />
      <Route path={PATH.CHECK_EMAIL} element={<CheckEmailPage />} />
      <Route path={PATH.NEW_PASSWORD} element={<NewPasswordPage />} />
      <Route path={PATH.ERROR} element={<h1>error 404</h1>} />

      <Route element={<PrivateRoute />}>
        <Route index path={'/'} element={<Packs />} />
        <Route path={PATH.PACKS} element={<Packs />} />
        <Route path={PATH.PROFILE} element={<Profile />} />
        <Route path={PATH.PACKS + PATH.CARDS} element={<Cards />} />
        <Route path={PATH.LEARN + PATH.ID} element={<Learn />} />
      </Route>
    </Routes>
  )
}
