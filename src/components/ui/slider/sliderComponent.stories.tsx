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
export const DefaultSlider: Story = {
  args: {},
}
