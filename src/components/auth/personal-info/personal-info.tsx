import { ChangeEvent, FC, memo, useEffect, useRef, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Avatar } from '../../ui/avatar'
import { Button } from '../../ui/button'
import { ControlledInput } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import styles from './personal-info.module.scss'

import { Edit } from '@/assets/icons/Edit.tsx'
import { LogOutIcon } from '@/assets/icons/LogOutIcon.tsx'
import s from '@/components/auth/login-form/login-form.module.scss'
import { Card } from '@/components/ui/card'
import { useTranslate } from '@/i18n.ts'

export type DataType = {
  avatar: string
  email: string
  name: string
}

export type PersonalInfoPropType = {
  file?: File
  name?: string
  email?: string
}
type FormType = z.infer<typeof schema>
const schema = z.object({
  name: z.string().trim().nonempty('Enter Your Name'),
})

type PropsType = {
  data: DataType
  onSignOut?: () => void
  onUpdate: (data: PersonalInfoPropType) => void
}

export const PersonalInfo: FC<PropsType> = memo(({ data, onUpdate, onSignOut }) => {
  const t = useTranslate()
  const [editMode, setEditMode] = useState(false)
  const [name, setTitle] = useState(data.name || '')
  const [url, setUrl] = useState(data.avatar)

  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      name: data.name,
    },
  })

  const logOut = () => {
    onSignOut?.()
  }

  const editModeHandler = () => {
    setEditMode(prev => !prev)
  }

  const SubmitHandler = (data: { name: string }) => {
    setTitle(data.name)
    editModeHandler()
    onUpdate?.({ name: data.name })
  }

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      onUpdate({ file: file })
    }
  }
  const inputRef = useRef<HTMLInputElement>(null)

  if (!data) return <div>{t('Loading...')}</div>

  useEffect(() => {
    setUrl(data.avatar)
  }, [data.avatar])

  return (
    <Card className={s.card}>
      <div className={styles.main}>
        <Typography variant="large" className={styles.title}>
          {t('Personal Information')}
        </Typography>
        <div className={styles.picture}>
          <Avatar photo={url} name="avatar" size={96} />
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
                label={t('Nickmame')}
                name={'name'}
                type="text"
                control={control}
              />
              <Button className={styles.subButton} variant="primary" fullWidth type={'submit'}>
                <Typography variant="subtitle2">{t('Save Changes')}</Typography>
              </Button>
            </form>
          </div>
        ) : (
          <div className={styles.personal}>
            <Typography className={styles.name} variant="h1">
              {name}
            </Typography>
            <div className={styles.edit} onClick={editModeHandler}>
              <Edit />
            </div>
          </div>
        )}
        {!editMode && (
          <>
            <Typography className={styles.email} variant="body2">
              {data.email || 'example@mail.com'}
            </Typography>
            <Button onClick={logOut} className={styles.button} variant="secondary">
              <LogOutIcon />
              {t('Logout')}
            </Button>
          </>
        )}
      </div>
    </Card>
  )
})
