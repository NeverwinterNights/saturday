import { Modal, ModalType } from '../../ui/modal'
import { Typography } from '../../ui/typography'
import { ModalControl } from '../modal-control'

import { useTranslate } from '@/i18n.ts'

type DeleteItemPropsType = {
  isOpen: boolean
  onClickDataHandler: () => void
  itemName: string
  buttonName: string
} & ModalType

export const DeleteItem = ({
  isOpen,
  onOpenChange,
  onClickDataHandler,
  itemName,
  buttonName,
  title,
}: DeleteItemPropsType) => {
  const t = useTranslate()
  const closedModal = () => {
    onOpenChange?.(false)
  }

  return (
    <Modal isOpen={isOpen} title={title} onOpenChange={onOpenChange}>
      <div>
        <Typography variant="subtitle1">
          {t('Do you really want to remove')}
          <Typography style={{ fontWeight: '900' }} as="span">
            {itemName}?
          </Typography>
        </Typography>
        <Typography variant="subtitle1">{t('All cards will be deleted.')}</Typography>
      </div>
      <ModalControl closedModal={closedModal} onSubmit={onClickDataHandler} title={buttonName} />
    </Modal>
  )
}
