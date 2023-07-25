import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { AddPackFormType } from './use-add-new-pack.ts'

import { AddEditPack } from './'

const meta = {
  title: 'Modals/AddEditPack',
  component: AddEditPack,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AddEditPack>

export default meta
type Story = StoryObj<typeof meta>

export const AddPackComponent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true)
    const [modalsData, setModalsData] = useState<AddPackFormType>({} as AddPackFormType)

    return (
      <AddEditPack
        namePack={'Name Pack'}
        onOpenChange={setIsOpen}
        isOpen={isOpen}
        title={'Add New Pack'}
        buttonName={'Add New Pack'}
        onClickDataHandler={setModalsData}
      />
    )
  },
  args: {
    isOpen: true,
    title: 'Add New Pack',
    buttonName: 'Add New Pack',
    namePack: 'namePack',
  },
}
export const EditPackComponent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true)
    const [modalsData, setModalsData] = useState<AddPackFormType>({} as AddPackFormType)

    console.log('modalsData', modalsData)

    return (
      <AddEditPack
        onClickDataHandler={setModalsData}
        namePack={'Name Pack'}
        onOpenChange={setIsOpen}
        isOpen={isOpen}
        title={'Edit  Pack'}
        buttonName={'Edit Pack'}
        defaultValue={'Name'}
      />
    )
  },
  args: {
    isOpen: true,
    title: 'Edit  Pack',
    buttonName: 'Edit  Pack',
    namePack: 'Name Pack',
    defaultValue: 'Name',
  },
}
