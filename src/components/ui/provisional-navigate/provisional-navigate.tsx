import { Link } from 'react-router-dom'

import { PATH } from '@/common'

export const ProvisionalNavigate = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        gap: 20,
        position: 'fixed',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '20px',
      }}
    >
      <Link to={PATH.LOGIN}>Login</Link>
      <Link to={PATH.REGISTRATION}>Register</Link>
      <Link to={PATH.NEW_PASSWORD}>New password</Link>
      <Link to={PATH.PASSWORD_RECOVERY}>Password recovery</Link>
      <Link to={PATH.CHECK_EMAIL}>Check email</Link>
      <Link to={PATH.PACKS}>Packs</Link>
      <Link to={PATH.PACKS + PATH.CARDS + '/2'}>Cards</Link>
      <Link to={PATH.LEARN + '/2'}>Learn</Link>
      <Link to={PATH.PROFILE}>Profile</Link>
      <Link to={PATH.ERROR}>Error</Link>
    </div>
  )
}
