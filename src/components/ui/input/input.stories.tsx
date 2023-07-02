import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['text', 'password'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const MainInput: Story = {
  args: {
    value: 'Simple input',
    label: 'Click here',
    disabled: false,
  },
}
export const InputPassword: Story = {
  args: {
    value: 'Simple input',
    label: 'Click here',
    type: 'password',
    disabled: false,
  },
}

export const InputSearch: Story = {
  args: {
    value: 'Simple input',
    label: 'Click here',
    type: 'text',
    searchInput: true,
    disabled: false,
  },
}
