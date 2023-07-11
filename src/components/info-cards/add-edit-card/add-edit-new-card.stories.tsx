import {useState} from 'react'

import type {Meta, StoryObj} from '@storybook/react'

import {FormType} from './use-add-new-card.ts'

import {AddEditNewCard} from './'

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
        value: 'text',
        label: 'Apple',
    },
    {
        value: 'banana',
        label: 'Banana',
    }
}

export const AddNewCardComponent: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(true)
        const [modalsData, setModalsData] = useState<FormType>({} as FormType)

        console.log('modalsData', modalsData)

        return (
            <AddEditNewCard
                title={'Add New Card'}
                onOpenChange={setIsOpen}
                onClickDataHandler={setModalsData}
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

        console.log('modalsData', modalsData)

        return (
            <AddEditNewCard
                title={'Edit Card'}
                onOpenChange={setIsOpen}
                onClickDataHandler={setModalsData}
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
