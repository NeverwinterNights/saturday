import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { LearnPack } from './'

const meta = {
  title: 'Modals/LearnPack',
  component: LearnPack,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LearnPack>

export default meta
type Story = StoryObj<typeof meta>

const optionsPrimary = [
  {
    value: 'Did not know',
    label: 'Did not know',
  },
  {
    value: 'Forgot',
    label: 'Forgot',
  },
  {
    value: 'A lot of thought',
    label: 'A lot of thought',
  },
  {
    value: 'Confused',
    label: 'Confused',
  },
  {
    value: 'Knew the answer',
    label: 'Knew the answer',
  },
]

export const LearnPackComponent: Story = {
  render: () => {
    const [radioValue, setRadioValue] = useState('Did not know')

    return (
      <LearnPack
        options={optionsPrimary}
        defaultValue={radioValue}
        onValueChange={setRadioValue}
        answer={'This is how "This" works in JavaScript'}
        numberEfforts={10}
        question={'How "This" works in JavaScript?'}
        packName={'React Language'}
      />
    )
  },
  args: {
    options: [],
    packName: '',
    question: '',
    numberEfforts: 0,
    answer: '',
  },
}
