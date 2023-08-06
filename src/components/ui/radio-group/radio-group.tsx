import { FC } from 'react'

import * as Radio from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

import { Typography } from '@/components/ui/typography'

type Option = {
  label: string
  value: string
}

export type RadioGroupType = {
  disabled?: boolean
  onValueChange: (value: string) => void
  options: Option[]
  defaultValue?: string
  value?: string
  ariaLabel?: string
  name?: string
}

export const RadioGroup: FC<RadioGroupType> = ({ options, disabled, ...rest }) => {
  return (
    <Radio.Root className={s.root} {...rest} disabled={disabled}>
      {options.map(option => (
        <Radio.Item
          defaultValue={rest.defaultValue}
          className={s.RadioGroupItem}
          // checked={rest.defaultValue === option.value}
          value={option.value}
          key={option.value}
          disabled={disabled}
        >
          <div className={s.RadioGroupIndicator} />
          <Typography variant={'body2'} as={'label'} className={s.label}>
            {option.label}
          </Typography>
        </Radio.Item>
      ))}
    </Radio.Root>
  )
}
