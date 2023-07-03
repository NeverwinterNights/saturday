import { FC, ReactNode } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import { Typography } from '../../../components/ui/typography'

import s from './tab.module.scss'

export type TabsType = {
  title: string
  value: string
  disabled?: boolean
}

type PropsType = {
  disabled?: boolean
  className?: string
  ariaLabel?: string
  children?: ReactNode
  onValueChange?: (value: string) => void
  tabs: TabsType[]
  value?: string
  defaultValue?: string
  fullWidth?: boolean
  label?: string
}

export const Tab: FC<PropsType> = ({
  disabled,
  ariaLabel,
  fullWidth,
  tabs,
  onValueChange,
  value,
  defaultValue,
  children,
  label,
  className,
}) => {
  const classNames = {
    root: clsx(s.root, className),
    list: clsx(s.list, disabled && s.disabled),
    trigger: clsx(s.trigger, fullWidth && s.fullWidth, disabled && s.disabled),
    label: clsx(s.label, disabled && s.disabled),
  }

  return (
    <Tabs.Root
      onValueChange={onValueChange}
      className={classNames.root}
      defaultValue={defaultValue}
      value={value}
    >
      <Typography variant={'body2'} as="label" className={classNames.label}>
        {label}
      </Typography>
      <Tabs.List className={classNames.list} aria-label={ariaLabel || 'tab switcher'}>
        {tabs.map((tab, i) => (
          <Tabs.Trigger
            className={classNames.trigger}
            value={tab.value}
            key={i}
            disabled={tab.disabled}
          >
            {tab.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <Tabs.Content value={'content'}>{children}</Tabs.Content>
    </Tabs.Root>
  )
}
