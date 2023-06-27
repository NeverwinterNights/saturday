import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxItem } from './'

const meta = {
  title: 'Components/Checkbox',
  component: CheckboxItem,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['large', 'body1', 'body2', 'subtitle1', 'subtitle2', 'overline', 'link1', 'link2'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof CheckboxItem>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    variant: 'large',
    children: 'Large Checkbox',
  },
}
