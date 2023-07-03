import { KeyboardArrowLeft } from '../../../../assets/icons/KeyboardArrowLeft.tsx'

import styles from './PrevButton.module.scss'

type NavigationButtonProps = {
  onClick: () => void
  disabled?: boolean
}

export const PrevButton = ({ onClick, disabled }: NavigationButtonProps) => {
  return (
    <button className={styles.item} onClick={onClick} disabled={disabled}>
      <KeyboardArrowLeft className={styles.icon} size={16} />
    </button>
  )
}
