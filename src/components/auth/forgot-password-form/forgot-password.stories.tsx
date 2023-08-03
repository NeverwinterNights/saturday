import { I18NProvider } from '@ayub-begimkulov/i18n'
import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from './index.ts'

import { i18n } from '@/i18n.ts'

const meta = {
  title: 'Auth/ForgotPassword',
  component: ForgotPassword,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordMain: Story = {
  render: () => {
    return (
      <I18NProvider i18n={i18n}>
        <ForgotPassword onSubmitHandler={() => {}} />
      </I18NProvider>
    )
  },

  args: {},
}
