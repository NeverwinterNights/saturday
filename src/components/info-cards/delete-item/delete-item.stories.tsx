import { useState } from 'react'

import { I18NProvider } from '@ayub-begimkulov/i18n'
import type { Meta, StoryObj } from '@storybook/react'

import { DeleteItem } from './delete-item.tsx'

import { i18n } from '@/i18n.ts'

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
      <I18NProvider i18n={i18n}>
        <DeleteItem
          onClickDataHandler={onClickDeleteHandler}
          itemName={'Beer from your life'}
          onOpenChange={setIsOpen}
          isOpen={isOpen}
          title={'Delete  Pack'}
          buttonName={'Delete Pack'}
        />
      </I18NProvider>
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
      <I18NProvider i18n={i18n}>
        <DeleteItem
          onClickDataHandler={onClickDeleteHandler}
          itemName={'Beer from your life'}
          onOpenChange={setIsOpen}
          isOpen={isOpen}
          title={'Delete  Card'}
          buttonName={'Delete Card'}
        />
      </I18NProvider>
    )
  },
  args: {
    isOpen: true,
    title: '',
    itemName: '',
    buttonName: '',
  },
}
