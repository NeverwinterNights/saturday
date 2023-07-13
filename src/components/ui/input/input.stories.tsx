import { ChangeEvent, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['text', 'password'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// export const MainInput: Story = {
//   args: {
//     value: 'Simple input',
//     label: 'Click here',
//     disabled: false,
//   },
// }
export const InputPassword: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value)
    }

    return <Input type={'password'} onChange={onChange} value={value} />
  },
  args: {
    value: '',
    label: 'Click here',
    type: 'password',
    disabled: false,
  },
}

// export const InputSearch: Story = {
//   render: () => {
//     const [value, setValue] = useState('')
//     const onChange = (event: ChangeEvent<HTMLInputElement>) => {
//       setValue(event.currentTarget.value)
//     }
//
//     return <Input searchInput={true} onChange={onChange} value={value} />
//   },
//   args: {
//     value: '',
//     label: 'Click here',
//     type: 'text',
//     disabled: false,
//   },
// }
export const InputWithPlaceHolderAndSearch: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value)
    }
    const onClickClearInput = () => {
      setValue('')
    }

    return (
      <Input
        searchInput={true}
        onChange={onChange}
        value={value}
        onClickClearInput={onClickClearInput}
      />
    )
  },
  args: {
    value: 'Simple input',
    label: 'Click here',
    type: 'text',
    placeholder: 'Placeholder',
    searchInput: true,
    disabled: false,
  },
}
