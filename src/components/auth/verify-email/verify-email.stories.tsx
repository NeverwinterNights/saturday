import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { VerifyMail } from '@/components/auth/verify-email/verify-mail.tsx'
import { store } from '@/store/store.ts'

const meta = {
  title: 'Components/VerifyMail',
  component: VerifyMail,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof VerifyMail>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultVerifyMail: Story = {
  render: () => {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <VerifyMail />
        </Provider>
      </BrowserRouter>
    )
  },
  args: {},
}
