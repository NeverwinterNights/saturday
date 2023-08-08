import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    isAuth: {
      options: [true, false],
      control: { type: 'radio' },
    },
    name: [],
    avatar: [''],
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>
export const HeaderWithButton: Story = {
  args: {
    isAuth: false,
    isLoading: 'succeeded',
  },
}

export const HeaderWithAvatar: Story = {
  args: {
    isAuth: true,
    isLoading: 'succeeded',
    // children: 'Primary Button',
    name: 'Planet',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-P8bA7CjEhkhrfV_4YB-nrGOFRs0gB4OOw&usqp=CAU',
    email: 'coolP1anet@gmail.com',
  },
}
// @ts-ignore
export const ControlStoryWithDefalt: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Header
        isLoading="succeeded"
        name="DefaultName"
        email="coolDefault@gmail.com"
        onSignIn={() => setOpen(!open)}
        onSignOut={() => setOpen(!open)}
        onProfileClick={() => alert('Redirect to profile')}
        isAuth={open}
      />
    )
  },
}
