import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { Select, SelectProps } from './'

export default {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

const optionsPrimary = [
  {
    value: 'apple',
    label: 'Apple',
  },
  {
    value: 'banana',
    label: 'Banana',
  },
  {
    value: 'blueberry',
    label: 'Blueberry',
  },
  {
    value: 'grapes',
    label: 'Grapes',
  },
]
const optionsPagination = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
]

export const Simple = {
  render: (args: SelectProps) => {
    const [value, setValue] = useState('')

    return <Select {...args} value={value} onChange={setValue} />
  },

  args: {
    options: optionsPrimary,
  },
}

export const SimpleWithLabel = {
  render: (args: SelectProps) => {
    const [value, setValue] = useState('')

    return <Select {...args} value={value} onChange={setValue} />
  },

  args: {
    placeholder: 'select...',
    options: optionsPrimary,
    label: 'Select',
  },
}

export const Error = {
  render: (args: SelectProps) => {
    const [value, setValue] = useState('')

    return <Select {...args} value={value} onChange={setValue} />
  },

  args: {
    placeholder: 'select...',
    options: optionsPrimary,
    label: 'Select',
    errorMessage: 'error',
  },
}
export const Pagination = {
  render: (args: SelectProps) => {
    const [value, setValue] = useState('')

    return <Select {...args} value={value} onChange={setValue} />
  },

  args: {
    options: optionsPagination,
    label: 'pagination',
    variant: 'pagination',
    placeholder: '1',
  },
}

export const FullWidth = {
  render: (args: SelectProps) => {
    const [value, setValue] = useState('')

    return <Select {...args} value={value} onChange={setValue} />
  },

  args: {
    options: optionsPrimary,
    variant: 'primary',
    width: '100%',
  },
}
