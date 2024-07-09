import { ChangeEvent, memo, useRef, useState } from 'react'

import { Modal } from '../../ui/modal'
import { ModalControl } from '../modal-control'

import styles from './add-edit-pack.module.scss'
import { AddPackFormType, useAddEditPack } from './use-add-new-pack.ts'

import { AddMediaIcon } from '@/assets/icons/AddMediaIcon.tsx'
import { uploadHandler } from '@/common/utils/file-uploader.ts'
import { Button } from '@/components/ui/button'
import { ControlledInput } from '@/components/ui/controlled'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox.tsx'
import { useTranslate } from '@/i18n.ts'

type AddEditPackPropsType = {
  isOpen: boolean
  title: string
  buttonName: string
  onOpenChange: (value: boolean) => void
  defaultValue?: string
  namePack: string
  onClickDataHandler: (value: AddPackFormType) => void
}

export const AddEditPack = memo(
  ({
    namePack,
    onClickDataHandler,
    defaultValue,
    onOpenChange,
    buttonName,
    isOpen,
    title,
  }: AddEditPackPropsType) => {
    const { handleSubmit, setValue, reset, register, control } = useAddEditPack(defaultValue)
    const t = useTranslate()
    const [image, setImage] = useState('')

    const onSubmit = handleSubmit(data => {
      onClickDataHandler(data)
      reset()
      setImage('')
      onOpenChange?.(false)
    })

    const closedModal = () => {
      onOpenChange?.(false)
    }
    const inputRef1 = useRef<HTMLInputElement>(null)
    const addMediaFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
      uploadHandler((e.target.files as FileList)[0], base64 => {
        setImage(base64)
      })
      setValue('cover', e.target.files as FileList)
    }
    // useEffect(() => {
    //   setValue('name', defaultValue || '')
    // }, [defaultValue])

    return (
      <>
        <Modal onOpenChange={onOpenChange} title={title} isOpen={isOpen}>
          <div className={styles.content}>
            <div className={styles.item}>
              <div className={styles.imageWrap}>
                {!image ? (
                  <div>{t('No Image')}</div>
                ) : (
                  <img style={{ width: '100%', height: '100%' }} src={image} alt={'image'} />
                )}
              </div>
              <div className={styles.infoWrap}>
                <div>{t('Cover')}</div>
                <input
                  style={{ display: 'none' }}
                  type="file"
                  {...register('cover')}
                  ref={inputRef1}
                  // onChange={e => {
                  //   uploadHandler((e.target.files as FileList)[0], base64 => {
                  //     setImage({ ...image, questionImg: base64 })
                  //   })
                  //   setValue('questionImg', e.target.files as FileList)
                  // }}
                  onChange={addMediaFileHandler}
                />
                <Button
                  type={'button'}
                  variant="secondary"
                  onClick={() => inputRef1 && inputRef1.current?.click()}
                >
                  <AddMediaIcon />
                  {t('Change Cover')}
                </Button>
              </div>
            </div>
            <form onSubmit={onSubmit}>
              <div className={styles.input}>
                <ControlledInput label={namePack} name={'name'} control={control} />
              </div>
              <div>
                <ControlledCheckbox
                  className={styles.checkbox}
                  label={t('Privat Pack')}
                  name={'isPrivate'}
                  control={control}
                />
              </div>
              <ModalControl closedModal={closedModal} onSubmit={onSubmit} title={buttonName} />
            </form>
          </div>
        </Modal>
      </>
    )
  }
)
