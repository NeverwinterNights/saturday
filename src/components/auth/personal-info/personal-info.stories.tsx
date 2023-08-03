import { I18NProvider } from '@ayub-begimkulov/i18n'
import type { Meta, StoryObj } from '@storybook/react'

import { DataType, PersonalInfo } from './personal-info.tsx'

import { i18n } from '@/i18n.ts'

const meta = {
  title: 'Auth/PersonalInfo',
  component: PersonalInfo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PersonalInfo>

export default meta
type Story = StoryObj<typeof meta>

export const PersonalInfoMain: Story = {
  render: () => {
    return (
      <I18NProvider i18n={i18n}>
        <PersonalInfo data={{} as DataType} onUpdate={() => {}} onSignOut={() => {}} />
      </I18NProvider>
    )
  },
  args: {
    data: {
      avatar: 'https://gabdrahimov.ru/img/html/img/html-adresa.jpg',
      email: 'j&johnson@gmail.com',
      name: 'Ivan',
    },
  },
}
