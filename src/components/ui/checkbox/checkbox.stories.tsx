import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxItem } from './'

const meta = {
  title: 'Components/Checkbox',
  component: CheckboxItem,
  tags: ['autodocs'],
  argTypes: {
    label: [''],
  },
} satisfies Meta<typeof CheckboxItem>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: { label: 'Click me' },
}
export const CheckboxControlled: Story = {
  render: () => {
    const [value, setValue] = useState(true)
    const onChange = (value: boolean) => {
      setValue(value)
    }

    return <CheckboxItem checked={value} onChange={onChange} />
  },
  args: {},
}
