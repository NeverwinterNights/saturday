import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  color?: 'primary' | 'secondary' | 'inherit' | 'error'
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'overline'
    | 'caption'
    | 'link1'
    | 'link2'
    | 'error'
  className?: string
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { variant = 'body1', color = 'inherit', className, as: Component = 'p', ...rest } = props

  return <Component className={`${s[variant]} ${s[color]} ${className ?? ''}`} {...rest} />
}
