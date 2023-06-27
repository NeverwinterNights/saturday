import { ComponentPropsWithoutRef, ElementType } from 'react'

import styles from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  type?: string
  // color?: 'white' | 'disabledWhite' | 'secondary' | 'disabledSecondary'
  color?: 'inherit'
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
    | 'link1'
    | 'link2'
  className?: string
} & ComponentPropsWithoutRef<T>
export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { className = '', variant, color, as: Component = 'p', ...rest } = props

  return (
    <Component
      // className={`${Component && !variant ? styles[Component as string] : ''} ${
      className={`${variant ? styles[variant] : ''} ${styles[className] ?? ''} ${
        color ? styles[color] : ''
      }`}
      {...rest}
    />
  )
}
