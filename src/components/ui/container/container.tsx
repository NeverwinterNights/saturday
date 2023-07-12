import { FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './container.module.scss'

type PropsType = {
  children?: ReactNode
  className?: string
}

export const Container: FC<PropsType> = ({ children, className }) => {
  return <div className={clsx(s.container, className)}>{children}</div>
}
