import type { Meta } from '@storybook/react'

import { Tab } from './'

export default {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  args: {
    tabs: [
      { value: 'apple', title: 'Apple' },
      { value: 'banana', title: 'Banana' },
      { value: 'blueberry', title: 'Blueberry' },
      { value: 'grapes', title: 'Grapes' },
    ],
    defaultValue: 'banana',
  },
} satisfies Meta<typeof Tab>

export const Simple = {
  args: {
    tabs: [
      { value: 'apple', title: 'Apple' },
      { value: 'banana', title: 'Banana' },
      { value: 'blueberry', title: 'Blueberry' },
      { value: 'grapes', title: 'Grapes' },
    ],
  },
}

export const TabWithDisabled = {
  args: {
    tabs: [
      { value: 'apple', title: 'Apple', disabled: true },
      { value: 'banana', title: 'Banana' },
      { value: 'blueberry', title: 'Blueberry', disabled: true },
      { value: 'grapes', title: 'Grapes' },
    ],
  },
}

export const TabFullWidth = {
  args: {
    tabs: [
      { value: 'apple', title: 'Apple' },
      { value: 'banana', title: 'Banana' },
    ],
    fullWidth: true,
  },
}

export const TabWithLabel = {
  args: {
    tabs: [
      { value: 'apple', title: 'Apple' },
      { value: 'banana', title: 'Banana' },
      { value: 'grapes', title: 'Grapes' },
    ],
    label: 'fruits',
  },
}
