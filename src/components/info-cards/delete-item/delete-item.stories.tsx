import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { DeleteItem } from './delete-item.tsx'

const meta = {
  title: 'Modals/DeleteItem',
  component: DeleteItem,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DeleteItem>

export default meta
type Story = StoryObj<typeof meta>

export const DeletePackComponent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true)
    const onClickDeleteHandler = () => {
      console.log('Delete')
      setIsOpen(false)
    }

    return (
      <DeleteItem
        onClickDataHandler={onClickDeleteHandler}
        itemName={'Beer from your life'}
        onOpenChange={setIsOpen}
        isOpen={isOpen}
        title={'Delete  Pack'}
        buttonName={'Delete Pack'}
      />
    )
  },
  args: {
    isOpen: true,
    title: '',
    itemName: '',
    buttonName: '',
  },
}

export const DeleteCardComponent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true)
    const onClickDeleteHandler = () => {
      console.log('Delete')
      setIsOpen(false)
    }

    return (
      <DeleteItem
        onClickDataHandler={onClickDeleteHandler}
        itemName={'Beer from your life'}
        onOpenChange={setIsOpen}
        isOpen={isOpen}
        title={'Delete  Card'}
        buttonName={'Delete Card'}
      />
    )
  },
  args: {
    isOpen: true,
    title: '',
    itemName: '',
    buttonName: '',
  },
}
