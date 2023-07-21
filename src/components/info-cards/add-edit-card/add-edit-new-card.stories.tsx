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
    const [selectValue, setSelectValue] = useState('Text')
    const [allData, setAllData] = useState<AllDataType>({} as AllDataType)

    console.log('modalsData', modalsData)
    console.log('allData', allData)

    const getData = (data: FormType) => {
      setModalsData(data)
      setAllData({ type: selectValue, ...data })
    }

    return (
      <AddEditNewCard
        placeholder={selectValue}
        value={selectValue}
        options={dataSelect}
        onChange={setSelectValue}
        title={'Add New Card'}
        onOpenChange={setIsOpen}
        onClickDataHandler={getData}
        isOpen={isOpen}
        buttonName={'Add New Card'}
      />
    )
  },
  args: {
    options: [],
    value: '',
    title: 'Add New Card',
    isOpen: true,
    buttonName: 'Add New Card',
  },
}

export const EditNewCardComponent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true)
    const [modalsData, setModalsData] = useState<FormType>({} as FormType)
    const [selectValue, setSelectValue] = useState('Text')
    const [allData, setAllData] = useState<AllDataType>({} as AllDataType)

    // console.log('modalsData', modalsData)
    // console.log('selectValue', selectValue)
    // console.log('allData', allData)
    // console.log('isOpen', isOpen)
    const getData = (data: FormType) => {
      setModalsData(data)
      setAllData({ type: selectValue, ...data })
    }

    return (
      <AddEditNewCard
        placeholder={selectValue}
        options={dataSelect}
        onChange={setSelectValue}
        value={selectValue}
        title={'Edit Card'}
        onOpenChange={setIsOpen}
        defaultQuestion={'Кто появился раньше курица или яйцо?'}
        defaultAnswer={'Пиво'}
        onClickDataHandler={getData}
        isOpen={isOpen}
        buttonName={'Save Changes'}
      />
    )
  },
  args: {
    options: [],
    value: '',
    title: 'Edit Card',
    isOpen: true,
    buttonName: 'Save Changes',
  },
}
