import { ChangeEvent, memo, useRef, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { z } from 'zod'

import { Avatar } from '../../ui/avatar'
import { Button } from '../../ui/button'
import { ControlledInput } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import styles from './personal-info.module.scss'

import { Edit } from '@/assets/icons/Edit.tsx'
import { LogOutIcon } from '@/assets/icons/LogOutIcon.tsx'
import { PATH } from '@/common'
import s from '@/components/auth/login-form/login-form.module.scss'
import { Card } from '@/components/ui/card'
import { useLogoutMutation, util } from '@/features/auth/service/api/auth.api.ts'
import { useAppDispatch } from '@/store/store.ts'

type PersonalInfoPropType = {
  url: string
  name: string
  email: string
}
type FormType = z.infer<typeof schema>
const schema = z.object({
  name: z.string().trim().nonempty('Enter Your Name'),
})

export const PersonalInfo = memo(({ name, email, url }: PersonalInfoPropType) => {
  const dispatch = useAppDispatch()
  const [logout] = useLogoutMutation()
  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(name)
  const [URL, setURL] = useState(url)
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      name: 'Ivan',
    },
  })
  const navigate = useNavigate()
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

  const editModeHandler = () => {
    setEditMode(prev => !prev)
  }

  const SubmitHandler = (data: any) => {
    setTitle(data.name)
    editModeHandler()
  }
  const convertFileToBase64 = (file: File, callBack: (value: string) => void) => {
    const reader = new FileReader()

    reader.onloadend = () => {
      const file64 = reader.result as string

      callBack(file64)
    }
    reader.readAsDataURL(file)
  }
  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      if (file.size < 4000000) {
        convertFileToBase64(file, (file64: string) => {
          setURL(file64)
        })
      } else {
        alert('Error with adding photo')
      }
    }
  }
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Card className={s.card}>
      <div className={styles.main}>
        <Typography variant="large" className={styles.title}>
          Personal Information
        </Typography>
        <div className={styles.picture}>
          <Avatar photo={URL} name="avatar" size={96} />
          <div className={styles.editIcon}>
            <Edit onClick={() => inputRef && inputRef.current?.click()} />
            <input
              ref={inputRef}
              type="file"
              onChange={uploadHandler}
              style={{ display: 'none' }}
            />
          </div>
        </div>

        {editMode ? (
          <div className={styles.form}>
            <form onSubmit={handleSubmit(SubmitHandler)}>
              <ControlledInput
                autoFocus
                label="Nickmame"
                name={'name'}
                type="text"
                control={control}
              />
              <Button className={styles.subButton} variant="primary" fullWidth type={'submit'}>
                <Typography variant="subtitle2">Save Changes</Typography>
              </Button>
            </form>
          </div>
        ) : (
          <div className={styles.personal}>
            <Typography className={styles.name} variant="h1">
              {title}
            </Typography>
            <div className={styles.edit} onClick={editModeHandler}>
              <Edit />
            </div>
          </div>
        )}
        {editMode ? null : (
          <>
            <Typography className={styles.email} variant="body2">
              {email}
            </Typography>
            <Button onClick={logOut} className={styles.button} variant="secondary">
              <LogOutIcon />
              Logout
            </Button>
          </>
        )}
      </div>
    </Card>
  )
})
