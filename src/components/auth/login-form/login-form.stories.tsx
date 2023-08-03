import { I18NProvider } from '@ayub-begimkulov/i18n'
import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './'

import { i18n } from '@/i18n.ts'

const meta = {
  title: 'Auth/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const LoginFormMain: Story = {
  render: () => {
    return (
      <I18NProvider i18n={i18n}>
        <LoginForm onSubmitHandler={() => {}} />
      </I18NProvider>
    )
  },

  args: {},
}
