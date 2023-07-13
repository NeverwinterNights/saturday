import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { SliderComponent } from './'

const meta = {
  title: 'Components/SliderComponent',
  component: SliderComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SliderComponent>

export default meta
type Story = StoryObj<typeof meta>
// export const DefaultSlider: Story = {
//   args: {
//     value: [0, 75],
//     defaultValue: [0, 75],
//   },
// }
export const SliderRangeController: Story = {
  render: () => {
    const [value, setValue] = useState<[number, number]>([0, 75])

    return <SliderComponent defaultValue={value} setValue={setValue} value={value} />
  },
  args: {
    value: [0, 75],
    defaultValue: [0, 15],
  },
}
export const SliderRangeControllerWithLabel: Story = {
  render: () => {
    const [value, setValue] = useState<[number, number]>([0, 75])

    return (
      <SliderComponent
        defaultValue={value}
        label={'Number of cards'}
        setValue={setValue}
        value={value}
      />
    )
  },
  args: {
    value: [0, 75],
    defaultValue: [0, 15],
  },
}
