import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  type?: string
  // color?: 'white' | 'disabledWhite' | 'secondary' | 'disabledSecondary'
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
  className?: string
} & ComponentPropsWithoutRef<T>
export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { className = '', style, variant, color, as: Component = 'p', ...rest } = props

  const styles = { ...style }

  return (
    <Component
      // className={`${variant ? styles[variant] : ''} ${className ?? ''} ${
      //   color ? styles[color] : ''
      // }`}
      style={styles}
      className={`${variant ? s[variant] : ''} ${className ?? ''}`}
      {...rest}
    />
  )
}
