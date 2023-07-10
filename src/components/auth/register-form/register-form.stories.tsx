import type { Meta } from '@storybook/react'

import { RegisterForm } from './'

const meta = {
  title: 'Auth/RegisterForm',
  component: RegisterForm,
  tags: ['autodocs'],
} satisfies Meta<typeof RegisterForm>

export default meta

export const RegisterFormMain = {}
