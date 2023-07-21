import { FC, useState } from 'react'

import s from './packs-table.module.scss'

import { Play } from '@/assets/icons/Play.tsx'
import photo from '@/assets/images/react.png'
import { TablePackIcons } from '@/components/ui/table/icons/tableIcons.tsx'
import { Table } from '@/components/ui/table/table.tsx'
import { Sort, TableHeader, TableHeaderType } from '@/components/ui/table-header/table-header.tsx'
import { DecksType } from '@/features/packs/service/api/packs.types.ts'

type PropsType = {
  decks: DecksType[]
}

export const PacksTable: FC<PropsType> = ({ decks }) => {
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
          {decks &&
            decks.map(item => (
              <Table.Row key={item.id}>
                <Table.Cell>
                  <div className={s.deckCover}>
                    {item.cover && <img src={photo} alt="" />}
                    {item.name}
                  </div>
                </Table.Cell>
                <Table.Cell>{item.cardsCount}</Table.Cell>
                <Table.Cell>{item.updated}</Table.Cell>
                <Table.Cell>{item.author.name}</Table.Cell>
                <Table.Cell align="center">
                  {/*если пак не наш, то показываем только 1 иконку*/}
                  {myId !== item.userId ? <Play /> : <TablePackIcons />}
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
