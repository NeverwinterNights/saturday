import { memo } from 'react'

import { Modal } from '../../ui/modal'
import { ModalControl } from '../modal-control'

import styles from './add-edit-pack.module.scss'
import { AddPackFormType, useAddEditPack } from './use-add-new-pack.ts'

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
    const { handleSubmit, reset, control, setValue } = useAddEditPack(defaultValue)
    const t = useTranslate()
    const onSubmit = handleSubmit(data => {
      onClickDataHandler(data)
      reset()
      onOpenChange?.(false)
    })

    const closedModal = () => {
      onOpenChange?.(false)
    }

    // useEffect(() => {
    //   setValue('name', defaultValue || '')
    // }, [defaultValue])

    return (
      <>
        <Modal onOpenChange={onOpenChange} title={title} isOpen={isOpen}>
          <div className={styles.content}>
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
