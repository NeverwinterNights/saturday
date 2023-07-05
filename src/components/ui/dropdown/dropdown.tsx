import { ComponentPropsWithoutRef, CSSProperties, FC, ReactNode, useState } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import { More } from '../../../assets/icons/More.tsx'
import { Typography } from '../typography'

import s from './dropdown.module.scss'

export type DropdownProps = {
  children: ReactNode
  align?: 'start' | 'center' | 'end'
  trigger?: ReactNode
  className?: string
  style?: CSSProperties
}

export const Dropdown = ({ children, trigger, align = 'end', className, style }: DropdownProps) => {
  const [open, setOpen] = useState(false)

  const classNames = {
    button: s.button,
    content: clsx(s.content, className),
    arrowBox: s.arrowBox,
    arrow: s.arrow,
    itemsBox: s.itemsBox,
    moreButton: s.moreButton,
  }

  return (
    <DropdownMenuRadix.Root open={open} onOpenChange={setOpen}>
      <DropdownMenuRadix.Trigger asChild>
        {trigger ?? (
          <button className={classNames.moreButton}>
            <More />
          </button>
        )}
      </DropdownMenuRadix.Trigger>
      <div>
        {open && (
          <DropdownMenuRadix.Portal forceMount>
            <DropdownMenuRadix.Content
              asChild
              forceMount
              className={classNames.content}
              align={align}
              sideOffset={8}
              style={style}
              onClick={event => event.stopPropagation()}
            >
              <div>
                <DropdownMenuRadix.Arrow className={classNames.arrowBox} asChild>
                  <div className={classNames.arrow} />
                </DropdownMenuRadix.Arrow>
                <div className={classNames.itemsBox}>{children}</div>
              </div>
            </DropdownMenuRadix.Content>
          </DropdownMenuRadix.Portal>
        )}
      </div>
    </DropdownMenuRadix.Root>
  )
}

export type DropdownItemProps = {
  children?: ReactNode
  disabled?: boolean
  onSelect: (event: Event) => void
  className?: string
  style?: CSSProperties
}

export const DropdownItem: FC<DropdownItemProps> = ({
  children,
  disabled,
  onSelect,
  className,
  style,
}) => {
  const classNames = {
    item: clsx(s.item, className),
  }

  return (
    <DropdownMenuRadix.Item
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      style={style}
      asChild
    >
      {children}
    </DropdownMenuRadix.Item>
  )
}

export type DropdownItemWithIconProps = Omit<DropdownItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<'div'>

export const DropdownItemWithIcon: FC<DropdownItemWithIconProps> = ({
  icon,
  disabled,
  onSelect,
  text,
  className,
  style,
  ...rest
}) => {
  const classNames = {
    item: clsx(s.item, className),
    itemIcon: clsx(s.itemIcon, disabled && s.disabled),
  }

  return (
    <DropdownMenuRadix.Item
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      onClick={event => event.stopPropagation()}
      style={style}
      asChild
      {...rest}
    >
      <div>
        <div className={classNames.itemIcon}>{icon}</div>
        <Typography variant="caption">{text}</Typography>
      </div>
    </DropdownMenuRadix.Item>
  )
}
