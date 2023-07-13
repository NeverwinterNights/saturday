import { ActionButton } from './cards-buttons/ActionButton.tsx'
import { CancelButton } from './cards-buttons/CancelButton.tsx'
import styles from './modal-control.module.scss'

type ModalControlPropType = {
  closedModal: () => void
  onSubmit: () => void
  title: string
}

export const ModalControl = ({ closedModal, onSubmit, title }: ModalControlPropType) => {
  return (
    <div className={styles.footer}>
      <CancelButton onClick={closedModal} />
      <ActionButton onClick={onSubmit} title={title} />
    </div>
  )
}
