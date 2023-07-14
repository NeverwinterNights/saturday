import { ComponentPropsWithoutRef, MouseEventHandler } from 'react'

import s from './table-header.module.scss'

import { Table } from '@/components/ui/table/table.tsx'

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export type TableHeaderType = {
  key: string
  label: string
  width?: string
  className?: string
  show?: boolean
  align: 'left' | 'center' | 'right'
  isSortable?: boolean
}
type Props = Omit<
  ComponentPropsWithoutRef<'thead'> & {
    headers: TableHeaderType[]
    sort: Sort
    onSort: (sort: Sort) => void
  },
  'children'
>

const dataAttributes = {
  sortable: 'data-sortable',
  name: 'data-name',
} as const

export const TableHeader = ({ headers, onSort, sort }: Props) => {
  const handleSorting: MouseEventHandler<HTMLTableHeaderCellElement> = e => {
    const isSortable = e.currentTarget.getAttribute(dataAttributes.sortable)
    const key = e.currentTarget.getAttribute(dataAttributes.name)

    if (key === null) throw new Error('No data-name found')
    if (!isSortable) return
    if (key !== sort?.key) {
      return onSort({ key, direction: 'asc' })
    }
    if (sort.direction === 'asc') {
      return onSort({ key, direction: 'desc' })
    }
    onSort(null)
  }

  return (
    <Table.Head className={s.root}>
      <Table.Row>
        {headers.map(header => {
          const showSort = header.isSortable && sort && sort.key === header.key

          return (
            header.show && (
              <Table.HeadCell
                {...{
                  [dataAttributes.sortable]: header.isSortable,
                  [dataAttributes.name]: header.key,
                }}
                onClick={handleSorting}
                key={header.key}
                style={{ width: header.width }}
                className={header.className}
                align={header.align}
              >
                {header.label}
                {showSort && <span>{sort.direction === 'asc' ? '▲' : '▼'}</span>}
              </Table.HeadCell>
            )
          )
        })}
      </Table.Row>
    </Table.Head>
  )
}
