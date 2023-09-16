import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '../typography'

import { Button } from './'

import { LogOutIcon } from '@/assets/icons/LogOutIcon.tsx'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false,
  },
}
export const PrimaryWithTypography: Story = {
  args: {
    variant: 'primary',
    children: (
      <Typography color="inherit" variant="subtitle2">
        Button Primary
      </Typography>
    ),
    disabled: false,
  },
}

export const PrimaryWithChildren: Story = {
  args: {
    variant: 'primary',
    children: (
      <>
        <LogOutIcon />
        Primary Button
      </>
    ),
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    disabled: false,
  },
}
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
    disabled: false,
  },
}
export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
    disabled: false,
  },
}

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
  },
}

export const AsLink: Story = {
  args: {
    variant: 'primary',
    children: 'Link that looks like a button',
    as: 'a',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled',
    disabled: true,
  },
}
