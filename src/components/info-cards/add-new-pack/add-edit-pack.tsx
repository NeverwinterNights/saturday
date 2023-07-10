import { memo } from 'react'

import { Button } from '../../ui/button'
import { ControlledInput } from '../../ui/controlled'
import { ControlledCheckbox } from '../../ui/controlled/controlled-checkbox.tsx'
import { Modal } from '../../ui/modal'
import { Typography } from '../../ui/typography'

import styles from './add-edit-pack.module.scss'
import { FormType, useAddEditPack } from './use-add-new-pack.ts'

type AddEditPackPropsType = {
  isOpen: boolean
  title: string
  buttonName: string
  onOpenChange?: (value: boolean) => void
  defaultValue?: string
  namePack: string
  onClickDataHandler: (value: FormType) => void
}

// export const RenderActionButton = ({ onClick }: any) => {
export const RenderActionButton = () => {
  return (
    <Button variant="primary" type={'submit'}>
      <Typography variant="subtitle2">Save Changes</Typography>
    </Button>
  )
}
export const RenderCancelButton = () => {
  return (
    <Button variant="secondary">
      <Typography variant="subtitle2">Cancel</Typography>
    </Button>
  )
}

export const AddEditPack = memo(
  ({
    namePack,
    onClickDataHandler,
    defaultValue,
    onOpenChange,
    isOpen,
    title,
  }: AddEditPackPropsType) => {
    const { handleSubmit, control } = useAddEditPack(defaultValue)
    const onSubmit = handleSubmit(data => onClickDataHandler(data))

    return (
      <>
        <Modal
          renderActionButton={RenderActionButton}
          renderCancelButton={RenderCancelButton}
          onOpenChange={onOpenChange}
          title={title}
          isOpen={isOpen}
          onConfirm={onSubmit}
        >
          <div className={styles.content}>
            <form onSubmit={onSubmit}>
              <div className={styles.input}>
                <ControlledInput label={namePack} name={'name'} control={control} />
              </div>
              <div className={styles.checkbox}>
                <ControlledCheckbox
                  className={styles.checkbox}
                  label="Privat Pack"
                  name={'private'}
                  control={control}
                />
              </div>
            </form>
          </div>
        </Modal>
      </>
    )
  }
)
