import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { PATH } from '@/common'
import { PersonalInfo, PersonalInfoPropType } from '@/components/auth/personal-info'
import { useLogoutMutation, useMeQuery, util } from '@/features/auth/service/api/auth.api.ts'
import { useUpdateProfileMutation } from '@/features/profile/service/api/profile.api.ts'
import { ResponseUpdateMe } from '@/features/profile/service/api/profile.types.ts'
import { useAppDispatch } from '@/store/store.ts'

export const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { data: meData, isLoading } = useMeQuery()
  const [updateMe] = useUpdateProfileMutation()
  const [logout] = useLogoutMutation()
  const [data, setData] = useState<ResponseUpdateMe>(meData!)

  const updateProfile = (updatedData: PersonalInfoPropType) => {
    const form = new FormData()

    updatedData.name && form.append('name', updatedData.name)
    updatedData.file && form.append('avatar', updatedData.file)

    updateMe(form)
      .unwrap()
      .then(data => setData(data))
      .catch(err => toast(err))
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

  return <PersonalInfo onUpdate={updateProfile} onSignOut={logOut} data={data} />
}
