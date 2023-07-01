import { memo } from 'react'

import styles from './card.module.scss'

export const Card = memo(() => {
  return <div className={styles.container}></div>
})
