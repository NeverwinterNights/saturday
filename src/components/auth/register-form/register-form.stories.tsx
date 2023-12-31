import { I18NProvider } from '@ayub-begimkulov/i18n'
import type { Meta } from '@storybook/react'

import { RegisterForm } from './'

import { i18n } from '@/i18n.ts'

const meta = {
  title: 'Auth/RegisterForm',
  component: RegisterForm,
  tags: ['autodocs'],
} satisfies Meta<typeof RegisterForm>

export default meta

export const RegisterFormMain = {
  render: () => {
    return (
      <I18NProvider i18n={i18n}>
        <RegisterForm onSubmitHandler={() => {}} />
      </I18NProvider>
    )
  },

  args: {},
}
