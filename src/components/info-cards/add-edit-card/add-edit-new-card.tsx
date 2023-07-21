import { Modal } from '../../ui/modal'
import { Select, SelectProps } from '../../ui/select'
import { ModalControl } from '../modal-control'

import styles from './add-edit-new-card.module.scss'
import { FormType, useAddEditCard } from './use-add-new-card.ts'

import { TypeImage } from '@/components/info-cards/add-edit-card/edit-card-image-type/TypeText.tsx'
import { TypeText } from '@/components/info-cards/add-edit-card/edit-card-text-type/TypeText.tsx'

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
              {value === 'Text' && <TypeText control={control} />}
              {value === 'Image' && (
                <TypeImage
                  answerURL={
                    'https://img.freepik.com/free-photo/lavender-field-at-sunset-near-valensole_268835-3910.jpg'
                  }
                  questionURL="https://avatars.mds.yandex.net/i?id=c13961e7e24c4b651ce04ebffe58677cf3ac42bb-9182438-images-thumbs&n=13"
                />
              )}
            </div>

            <ModalControl closedModal={closedModal} title={buttonName} onSubmit={onSubmit} />
          </form>
        </div>
      </Modal>
    </>
  )
}
