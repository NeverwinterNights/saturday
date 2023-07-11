import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { DeletePack } from './delete-pack.tsx'

const meta = {
  title: 'Modals/DeletePack',
  component: DeletePack,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DeletePack>

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
      <DeletePack
        onClickDataHandler={onClickDeleteHandler}
        packName={'Beer from your life'}
        buttonName={'Delete Pack'}
        onOpenChange={setIsOpen}
        isOpen={isOpen}
        onConfirm={onClickDeleteHandler}
        title={'Delete  Pack'}
      />
    )
  },
  args: {
    isOpen: true,
    title: 'Delete  Pack',
    buttonName: 'Edit  Pack',
    packName: 'Beer from your life',
  },
}
