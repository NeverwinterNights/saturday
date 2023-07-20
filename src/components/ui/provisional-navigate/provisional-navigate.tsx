import { Link } from 'react-router-dom'

import { PATH } from '@/common'

export const ProvisionalNavigate = () => {
  return (
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
  )
}
