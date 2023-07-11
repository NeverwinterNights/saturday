import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { SliderOmponent } from './'

const meta = {
  title: 'Components/SliderOmponent',
  component: SliderOmponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SliderOmponent>

export default meta
type Story = StoryObj<typeof meta>
export const DefaultSlider: Story = {
  args: {
    value: [0, 75],
    defaultValue: [0, 75],
  },
}
export const SliderRangeController: Story = {
  render: () => {
    const [value, setValue] = useState<[number, number]>([0, 75])

    return <SliderOmponent defaultValue={value} setValue={setValue} value={value} />
  },
  args: {
    value: [0, 75],
    setValue: () => {},
    defaultValue: [0, 15],
  },
}
