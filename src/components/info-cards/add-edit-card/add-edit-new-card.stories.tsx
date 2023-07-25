import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { FormType } from './use-add-new-card.ts'

import { AddEditNewCard } from './'

type AllDataType = {
  type: string
} & FormType

const meta = {
  title: 'Modals/AddEditNewCard',
  component: AddEditNewCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AddEditNewCard>

export default meta
type Story = StoryObj<typeof meta>

const dataSelect = [
  {
    value: 'Text',
    label: 'Text',
  },
  {
    value: 'Image',
    label: 'Image',
  },
  {
    value: 'Video',
    label: 'Video',
  },
]

export const AddNewCardComponent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true)
    const [modalsData, setModalsData] = useState<FormType>({} as FormType)

    const getData = (data: FormType) => {
      setModalsData({ ...data })
      // setAllData({ type: selectValue, ...data })
    }

    return (
      <AddEditNewCard
        title={'Add New Card'}
        onOpenChange={setIsOpen}
        onClickDataHandler={getData}
        isOpen={isOpen}
        buttonName={'Add New Card'}
      />
    )
  },
  args: {
    title: 'Add New Card',
    isOpen: true,
    buttonName: 'Add New Card',
  },
}

export const EditNewCardComponent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true)
    const [modalsData, setModalsData] = useState<FormType>({} as FormType)

    const getData = (data: FormType) => {
      setModalsData(data)
    }

    return (
      <AddEditNewCard
        // value={selectValue}
        title={'Edit Card'}
        onOpenChange={setIsOpen}
        defaultQuestion={'Тестовый вопрос'}
        defaultAnswer={'Тестовый ответ'}
        questionImg={
          'https://andrii-flashcards.s3.eu-central-1.amazonaws.com/41720658-7128-4f91-94f6-99682572b640-wallpaperflare.com_wallpaper.jpg'
        }
        onClickDataHandler={getData}
        isOpen={isOpen}
        buttonName={'Save Changes'}
      />
    )
  },
  args: {
    title: 'Edit Card',
    isOpen: true,
    buttonName: 'Save Changes',
  },
}
