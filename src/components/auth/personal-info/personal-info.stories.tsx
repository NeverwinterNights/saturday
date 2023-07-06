import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInfo } from './personal-info.tsx'

const meta = {
  title: 'Components/PersonalInfo',
  component: PersonalInfo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PersonalInfo>

export default meta
type Story = StoryObj<typeof meta>

export const PersonalInfoMain: Story = {
  args: {
    url: 'https://gabdrahimov.ru/img/html/img/html-adresa.jpg',
    email: 'j&johnson@gmail.com',
    name: 'Ivan',
  },
}
