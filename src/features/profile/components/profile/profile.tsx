import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { PATH } from '@/common'
import { PersonalInfo, PersonalInfoPropType } from '@/components/auth/personal-info'
import { useLogoutMutation, useMeQuery, util } from '@/features/auth/service/api/auth.api.ts'
import { useUpdateProfileMutation } from '@/features/profile/service/api/profile.api.ts'
import { useAppDispatch } from '@/store/store.ts'

export const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { data, isLoading } = useMeQuery()
  const [updateMe] = useUpdateProfileMutation()
  const [logout] = useLogoutMutation()

  const updateProfile = (data: PersonalInfoPropType) => {
    const transformData = { name: data.name, email: data.email, avatar: data.url }

    updateMe(transformData)
  }

  const logOut = () => {
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

  if (isLoading) return <div>Loading...</div>

  return (
    <PersonalInfo
      onUpdate={updateProfile}
      onSignOut={logOut}
      email={data?.email || ''}
      name={data?.name || ''}
      url={data?.avatar || ''}
    />
  )
}
