import type { Meta, StoryObj } from '@storybook/react'

import { NewPassword } from './'

const meta = {
  title: 'Auth/NewPassword',
  component: NewPassword,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const NewPasswordMain: Story = {}
