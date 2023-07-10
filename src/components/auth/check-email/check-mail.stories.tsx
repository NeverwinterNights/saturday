import type { Meta, StoryObj } from '@storybook/react'

import { CheckMail } from './index.ts'

const meta = {
  title: 'Auth/CheckMail',
  component: CheckMail,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CheckMail>

export default meta
type Story = StoryObj<typeof meta>

export const CheckMailMain: Story = {
  args: { email: 'sobaka@sobaka.by' },
}
