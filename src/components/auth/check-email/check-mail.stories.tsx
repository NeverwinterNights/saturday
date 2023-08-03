import { I18NProvider } from '@ayub-begimkulov/i18n'
import type { Meta, StoryObj } from '@storybook/react'

import { CheckMail } from './index.ts'

import { i18n } from '@/i18n.ts'

const meta = {
  title: 'Auth/CheckMail',
  component: CheckMail,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CheckMail>

export default meta
type Story = StoryObj<typeof meta>

export const CheckMailMain: Story = {
  render: () => {
    return (
      <I18NProvider i18n={i18n}>
        <CheckMail email="sobaka@sobaka.by" />
      </I18NProvider>
    )
  },

  args: { email: 'sobaka@sobaka.by' },
}
