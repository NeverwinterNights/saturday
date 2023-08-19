import { useState } from 'react'

import { I18NProvider } from '@ayub-begimkulov/i18n'
import type { Meta, StoryObj } from '@storybook/react'

import { AddEditNewCard } from './'

import { i18n } from '@/i18n.ts'

// type AllDataType = {
//   type: string
// } & FormType

const meta = {
  title: 'Modals/AddEditNewCard',
  component: AddEditNewCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AddEditNewCard>

export default meta
type Story = StoryObj<typeof meta>

// const dataSelect = [
//   {
//     value: 'Text',
//     label: 'Text',
//   },
//   {
//     value: 'Image',
//     label: 'Image',
//   },
//   {
//     value: 'Video',
//     label: 'Video',
//   },
// ]

export const AddNewCardComponent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true)
    const [modalsData, setModalsData] = useState<FormData>({} as FormData)

    const getData = (value: FormData) => {
      setModalsData({ ...value })
      // setAllData({ type: selectValue, ...data })
    }

    return (
      <I18NProvider i18n={i18n}>
        <AddEditNewCard
          title={'Add New Card'}
          onOpenChange={setIsOpen}
          onClickDataHandler={getData}
          isOpen={isOpen}
          buttonName={'Add New Card'}
        />
      </I18NProvider>
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
    const [modalsData, setModalsData] = useState<FormData>({} as FormData)

    const getData = (value: FormData) => {
      setModalsData(value)
    }

    return (
      <I18NProvider i18n={i18n}>
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
      </I18NProvider>
    )
  },
  args: {
    title: 'Edit Card',
    isOpen: true,
    buttonName: 'Save Changes',
  },
}
