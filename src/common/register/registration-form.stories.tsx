import { ChangeEvent, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { RegistrationForm } from './registration-form'

const meta = {
  title: 'features/RegistrationForm',
  component: RegistrationForm,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['text', 'password'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof RegistrationForm>

export default meta
type Story = StoryObj<typeof meta>

const RegistrationFormStories = () => {
  const [value, setValue] = useState('')
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  return <RegistrationForm />
}

export const RegistrationFormSt: Story = {
  render: () => <RegistrationFormStories />,
}
