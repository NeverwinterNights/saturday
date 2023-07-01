import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>
export const DefaultCard: Story = {}
