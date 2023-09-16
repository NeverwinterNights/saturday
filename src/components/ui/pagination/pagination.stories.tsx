import { useState } from 'react'

import { I18NProvider } from '@ayub-begimkulov/i18n'
import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './'

import { i18n } from '@/i18n.ts'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

// export const PaginationMain: Story = {
//   args: {
//     count: 7,
//     page: 3,
//     perPage: 10,
//     perPageOptions: [5, 10, 15],
//   },
// }
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
      <I18NProvider i18n={i18n}>
        <Pagination
          page={page}
          count={count}
          onChange={onChangePage}
          onPerPageChange={onChangeCount}
          perPage={count}
          perPageOptions={[5, 10, 50]}
        />
      </I18NProvider>
    )
  },
  args: {
    count: 10,
    page: 1,
    onChange: () => {},
  },
}
