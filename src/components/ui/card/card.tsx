import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

type CardProp = {} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProp>(({ className, ...restProps }, ref) => {
  const classNames = {
    root: clsx(s.root, className),
  }

  return <div ref={ref} className={classNames.root} {...restProps}></div>
})
