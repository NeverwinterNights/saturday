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
    img: [''],
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>
export const HeaderWithButton: Story = {
  args: {
    isAuth: false,
  },
}
export const HeaderWithAvatar: Story = {
  args: {
    isAuth: true,
    // children: 'Primary Button',
    name: 'Mickel',
    img: 'https://pngicon.ru/file/uploads/gory.png',
  },
}
