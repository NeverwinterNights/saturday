import { Modal, ModalType } from '../../ui/modal'
import { Typography } from '../../ui/typography'
import { ModalControl } from '../modal-control'

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
  const closedModal = () => {
    onOpenChange?.(false)
  }

  return (
    <Modal isOpen={isOpen} title={title} onOpenChange={onOpenChange}>
      <div>
        <Typography variant="subtitle1">
          Do you really want to remove{' '}
          <Typography style={{ fontWeight: '900' }} as="span">
            {itemName}?
          </Typography>
        </Typography>
        <Typography variant="subtitle1">All cards will be deleted.</Typography>
      </div>
      <ModalControl closedModal={closedModal} onSubmit={onClickDataHandler} title={buttonName} />
    </Modal>
  )
}
