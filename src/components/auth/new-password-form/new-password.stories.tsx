import { I18NProvider } from '@ayub-begimkulov/i18n'
import type { Meta, StoryObj } from '@storybook/react'

import { NewPassword } from './'

import { i18n } from '@/i18n.ts'

const meta = {
  title: 'Auth/NewPassword',
  component: NewPassword,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const NewPasswordMain: Story = {
  render: () => {
    return (
      <I18NProvider i18n={i18n}>
        <NewPassword onSubmitHandler={() => {}} />
      </I18NProvider>
    )
  },

  args: {},
}
