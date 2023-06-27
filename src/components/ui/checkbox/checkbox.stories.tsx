import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['large', 'body1', 'body2', 'subtitle1', 'subtitle2', 'overline', 'link1', 'link2'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'Large Checkbox',
  },
}

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Body1',
    disabled: false,
  },
}

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Body2 Checkbox',
  },
}
export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: 'Subtitle1 Checkbox',
  },
}
export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: 'Subtitle2 Checkbox',
  },
}

export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'Overline Checkbox',
  },
}
export const Link1: Story = {
  args: {
    variant: 'link1',
    children: 'Link1 Checkbox',
  },
}
export const Link2: Story = {
  args: {
    variant: 'link2',
    children: 'Link2 Checkbox',
  },
}

export const AsH1: Story = {
  args: {
    children: 'Looks like a H1',
    as: 'h1',
  },
}
export const AsH2: Story = {
  args: {
    children: 'Looks like a H2',
    as: 'h2',
  },
}
export const AsH3: Story = {
  args: {
    children: 'Looks like a H3',
    as: 'h3',
  },
}
export const AsP: Story = {
  args: {
    children: 'Looks like a paragraph',
    as: 'p',
  },
}
