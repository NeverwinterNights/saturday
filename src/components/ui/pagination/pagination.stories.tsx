import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const PaginationMain: Story = {
  args: {
    count: 7,
    page: 3,
    perPage: 10,
    perPageOptions: [5, 10, 15],
  },
}
export const PaginationWithControl: Story = {
  render: () => {
    const [page, setPage] = useState(5)
    const [count, setCount] = useState(10)
    const onChangePage = (value: number) => {
      setPage(value)
    }
    const onChangeCount = (value: string) => {
      setCount(+value)
    }

    return (
      <Pagination
        page={page}
        count={count}
        onChange={onChangePage}
        onPerPageChange={onChangeCount}
        perPage={count}
        perPageOptions={[5, 10, 50]}
      />
    )
  },
  args: {
    count: 10,
    page: 1,
    onChange: () => {},
  },
}
