import type { Meta } from '@storybook/react'

import { RadioGroup } from './'

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

const optionsPrimary = [
  {
    value: 'apple',
    label: 'Apple',
  },
  {
    value: 'banana',
    label: 'Banana',
  },
  {
    value: 'blueberry',
    label: 'Blueberry',
  },
  {
    value: 'grapes',
    label: 'Grapes',
  },
]

export const Simple = {
  args: {
    options: optionsPrimary,
    onValueChange: () => {},
    defaultValue: 'apple',
  },
}

export const Disabled = {
  args: {
    options: optionsPrimary,
    onValueChange: () => {},
    defaultValue: 'apple',
    disabled: true,
  },
}
