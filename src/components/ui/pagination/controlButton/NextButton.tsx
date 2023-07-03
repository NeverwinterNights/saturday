import KeyboardArrowRight from '../../../../assets/icons/KeyboardArrowRight.tsx'

import styles from './PrevButton.module.scss'

type NavigationButtonProps = {
  onClick: () => void
  disabled?: boolean
}
export const NextButton = ({ onClick, disabled }: NavigationButtonProps) => {
  return (
    <button className={styles.item} onClick={onClick} disabled={disabled}>
      <KeyboardArrowRight className={styles.icon} size={16} />
    </button>
  )
}
