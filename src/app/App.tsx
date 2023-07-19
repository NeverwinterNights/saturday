import { Link, useNavigate, useParams } from 'react-router-dom'

import { Pages } from '@/app/route-pages'
import { PATH } from '@/common'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/ui/header'
import { useLogoutMutation, useMeQuery } from '@/features/auth/service/api/auth.api.ts'

export function App() {
  const navigate = useNavigate()
  const params = useParams()
  const [logout] = useLogoutMutation()
  const { data, isLoading, refetch } = useMeQuery({})

  const signOutHandler = () => {
    logout({})
    localStorage.setItem('token', '')
    navigate(PATH.LOGIN)
  }

  console.log(data)

  return (
    <>
      <Header
        isAuth={!!data}
        onSignOut={signOutHandler}
        onSignIn={() => navigate(PATH.LOGIN)}
        onProfileClick={() => navigate(PATH.PROFILE)}
      />
      {isLoading && <div>Loading...</div>}
      <Button onClick={() => refetch()}>refetch</Button>
      <div
        style={{
          display: 'flex',
          color: 'white',
          gap: 20,
          position: 'fixed',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '20px',
        }}
      >
        <Link to={PATH.LOGIN}>Login</Link>
        <Link to={PATH.REGISTRATION}>Register</Link>
        <Link to={PATH.NEW_PASSWORD}>New password</Link>
        <Link to={PATH.PASSWORD_RECOVERY}>Password recovery</Link>
        <Link to={PATH.CHECK_EMAIL}>Check email</Link>
        <Link to={PATH.PACKS}>Packs</Link>
        <Link to={PATH.PACKS + PATH.CARDS}>Cards</Link>
        <Link to={PATH.LEARN + '/2'}>Learn</Link>
        <Link to={PATH.PROFILE}>Profile</Link>
        <Link to={PATH.ERROR}>Error</Link>
      </div>
      <Pages />
    </>
  )
}
