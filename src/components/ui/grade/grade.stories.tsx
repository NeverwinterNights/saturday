import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Grade, GradeType } from '@/components/ui/grade/grade.tsx'

const meta = {
  title: 'Components/Grade',
  component: Grade,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Grade>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => {
    const [value, setValue] = useState<GradeType>(3)

    return <Grade grade={value} clickHandler={setValue} />
  },
  args: {
    grade: 0,
  },
}
