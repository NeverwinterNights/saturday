import { useState } from 'react'

import s from './packs-table.module.scss'

import { Play } from '@/assets/icons/Play.tsx'
import photo from '@/assets/images/react.png'
import { TablePackIcons } from '@/components/ui/table/icons/tableIcons.tsx'
import { Table } from '@/components/ui/table/table.tsx'
import { Sort, TableHeader, TableHeaderType } from '@/components/ui/table-header/table-header.tsx'

export const PacksTable = () => {
  const packsData = [
    {
      id: '01',
      name: 'Pack Name',
      deckCover: true,
      card: '4',
      userId: '1111',
      lastUpdate: '18.03.2021',
      createdBy: 'Ivan Ivanov',
    },
    {
      id: '02',
      name: 'Pack Name',
      deckCover: false,
      userId: '0000',
      card: '4',
      lastUpdate: '18.03.2021',
      createdBy: 'Ivan Ivanov',
    },
    {
      id: '03',
      name: 'Pack Name',
      deckCover: true,
      userId: '1111',
      card: '4',
      lastUpdate: '18.03.2021',
      createdBy: 'Ivan Ivanov',
    },
  ]
  const myId = '0000'
  const headersPacks: TableHeaderType[] = [
    {
      key: 'name',
      label: 'Name',
      className: `${s.name}`,
      show: true,
      isSortable: true,
    },
    {
      key: 'cards',
      label: 'Cards',
      className: `${s.cards}`,
      show: true,
      isSortable: true,
    },
    {
      key: 'updated',
      label: 'Last Updated',
      className: `${s.updated}`,
      show: true,
      isSortable: true,
    },
    {
      key: 'createdBy',
      label: 'Created by',
      className: `${s.createdBy}`,
      show: true,
      isSortable: true,
    },
    {
      key: 'icons',
      label: '',
      className: `${s.icons}`,
      show: true,
      isSortable: false,
    },
  ]
  const [sort, setSort] = useState<Sort>(null)

  return (
    <div>
      <Table.Root>
        <TableHeader headers={headersPacks} onSort={setSort} sort={sort} />
        <Table.Body>
          {packsData.map(item => (
            <Table.Row key={item.id}>
              <Table.Cell>
                <div className={s.deckCover}>
                  {item.deckCover && <img src={photo} alt="" />}
                  {item.name}
                </div>
              </Table.Cell>
              <Table.Cell>{item.card}</Table.Cell>
              <Table.Cell>{item.lastUpdate}</Table.Cell>
              <Table.Cell>{item.createdBy}</Table.Cell>
              <Table.Cell align="center">
                {/*если пак не наш, то показываем только 1 иконку*/}
                {myId !== item.userId ? <TablePackIcons /> : <Play />}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
