import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from './index.ts'

const meta = {
  title: 'Components/ForgotPassword',
  component: ForgotPassword,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordMain: Story = {}
