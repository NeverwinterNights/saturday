import { ComponentPropsWithoutRef, forwardRef } from 'react'

import styles from './card.module.scss'

type CardProp = {} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProp>(({ className, ...restProps }, ref) => {
  return <div ref={ref} className={styles.container} {...restProps}></div>
})
