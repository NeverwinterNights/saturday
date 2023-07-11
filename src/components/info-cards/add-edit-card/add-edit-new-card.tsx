import { memo } from 'react'

import { ControlledInput } from '../../ui/controlled'
import { Modal } from '../../ui/modal'
import { Select } from '../../ui/select'
import { RenderActionButton } from '../cards-buttons/RenderActionButton.tsx'
import { RenderCancelButton } from '../cards-buttons/RenderCancelButton.tsx'

import styles from './add-edit-new-card.module.scss'
import { FormType, useAddEditCard } from './use-add-new-card.ts'

type AddEditNewCardPropsType = {
  isOpen: boolean
  title: string
  buttonName: string
  onOpenChange?: (value: boolean) => void
  defaultQuestion?: string
  defaultAnswer?: string
  namePack?: string
  onClickDataHandler: (value: FormType) => void
  selectValue: string
  setSelectValue: (value: string) => void
  selectLabel: string
}

export const AddEditNewCard = memo(
  ({
    onOpenChange,
    buttonName,
    // namePack,
    title,
    selectValue,
    selectLabel,
    isOpen,
    defaultQuestion,
    defaultAnswer,
    setSelectValue,
    onClickDataHandler,
  }: AddEditNewCardPropsType) => {
    const { handleSubmit, control } = useAddEditCard(defaultQuestion, defaultAnswer)

    const onSubmit = handleSubmit(data => {
      onClickDataHandler(data)
      onOpenChange?.(false)
    })

    return (
      <>
        <Select
          label={selectLabel}
          options={}
          value={selectValue}
          width={'100%'}
          onChange={setSelectValue}
        />
        <Modal
          renderActionButton={() => <RenderActionButton title={buttonName} onclick={onSubmit} />}
          renderCancelButton={RenderCancelButton}
          onOpenChange={onOpenChange}
          title={title}
          isOpen={isOpen}
          onConfirm={onSubmit}
        >
          <div className={styles.content}>
            <form onSubmit={onSubmit}>
              <div className={styles.input}>
                <ControlledInput label={'Question'} name={'question'} control={control} />
              </div>
              <div className={styles.input}>
                <ControlledInput label={'Answer'} name={'answer'} control={control} />
              </div>
            </form>
          </div>
        </Modal>
      </>
    )
  }
)
