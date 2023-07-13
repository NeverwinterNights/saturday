import { ControlledInput } from '../../ui/controlled'
import { Modal } from '../../ui/modal'
import { Select, SelectProps } from '../../ui/select'
import { ModalControl } from '../modal-control'

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
} & SelectProps

export const AddEditNewCard = ({
  onOpenChange,
  buttonName,
  title,
  isOpen,
  defaultQuestion,
  defaultAnswer,
  options,
  onChange,
  value,
  onClickDataHandler,
}: AddEditNewCardPropsType) => {
  const { handleSubmit, control } = useAddEditCard(defaultQuestion, defaultAnswer)

  const onSubmit = handleSubmit(data => {
    onClickDataHandler(data)
    onOpenChange?.(false)
  })

  const closedModal = () => {
    onOpenChange?.(false)
  }

  return (
    <>
      <Modal onOpenChange={onOpenChange} title={title} isOpen={isOpen}>
        <div className={styles.content}>
          <div className={styles.selectWrap}>
            <Select
              placeholder={value}
              variant="primary"
              className={styles.select}
              label={'Choose a question format'}
              options={options}
              value={value}
              width={'100%'}
              onChange={onChange}
            />
          </div>
          <form onSubmit={onSubmit}>
            <div className={styles.info}>
              <div className={styles.input}>
                <ControlledInput label={'Question'} name={'question'} control={control} />
              </div>
              <div className={styles.input}>
                <ControlledInput label={'Answer'} name={'answer'} control={control} />
              </div>
            </div>
            <ModalControl closedModal={closedModal} title={buttonName} onSubmit={onSubmit} />
          </form>
        </div>
      </Modal>
    </>
  )
}
