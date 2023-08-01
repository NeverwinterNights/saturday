import { ReactNode } from 'react'

import { clsx } from 'clsx'

import styles from './grade.module.scss'

type StarItemProps = {
  id: number
  starType: ReactNode
  className?: string
  onClick: (id: number) => void
  onMouseEnter: (id: number) => void
  onMouseLeave: (id: number) => void
}
export const StarItem = ({
  starType,
  onMouseLeave,
  onMouseEnter,
  className,
  id,
  onClick,
}: StarItemProps) => {
  const style = clsx(styles.starItem, className)

  return (
    <div
      className={style}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave(0)}
      onClick={() => onClick(id)}
    >
      {starType}
    </div>
  )
}
