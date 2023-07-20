import { ChangeEvent, FC, memo, useRef, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

import { Avatar } from '../../ui/avatar'
import { Button } from '../../ui/button'
import { ControlledInput } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import styles from './personal-info.module.scss'

import { Edit } from '@/assets/icons/Edit.tsx'
import { LogOutIcon } from '@/assets/icons/LogOutIcon.tsx'
import { convertFileToBase64 } from '@/common/utils/convert-file-to-base-64.ts'
import s from '@/components/auth/login-form/login-form.module.scss'
import { Card } from '@/components/ui/card'

export type PersonalInfoPropType = {
  url: string
  name: string
  email: string
}
type FormType = z.infer<typeof schema>
const schema = z.object({
  name: z.string().trim().nonempty('Enter Your Name'),
})

type PropsType = {
  url: string
  name: string
  email: string
  onSignOut?: () => void
  onUpdate?: (data: PersonalInfoPropType) => void
}

export const PersonalInfo: FC<PropsType> = memo(({ name, email, url, onUpdate, onSignOut }) => {
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
  const logOut = () => {
    onSignOut?.()
  }

  const editModeHandler = () => {
    setEditMode(prev => !prev)
  }

  const SubmitHandler = (data: any) => {
    setTitle(data.name)
    editModeHandler()
    onUpdate?.({ name: title, email: email, url: URL })
  }

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      if (file.size < 4000000) {
        convertFileToBase64(file, (file64: string) => {
          setURL(file64)
          onUpdate?.({ name: title, email: email, url: URL })
        })
      } else {
        toast('Error with adding photo')
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
