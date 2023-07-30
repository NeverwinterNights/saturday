import { FC } from 'react'

import s from './cards-table.module.scss'

import { StarRating } from '@/components/ui/rating-stars'
import { ReadMore } from '@/components/ui/read-more'
import { TableCardIcons } from '@/components/ui/table/icons/tableCardIcons.tsx'
import { Table } from '@/components/ui/table/table.tsx'
import { Sort, TableHeader, TableHeaderType } from '@/components/ui/table-header/table-header.tsx'
import { useDeleteCardMutation } from '@/features/cards/service/api/cards.api.ts'
import { CardType } from '@/features/packs/service/api/packs.types.ts'

type PropsType = {
  cardsData: CardType[]
  onSort: (sort: Sort) => void
  sort: Sort
}

export const CardsTable: FC<PropsType> = ({ cardsData, onSort, sort }) => {
  const myId = '0000'
  const headers: TableHeaderType[] = [
    {
      key: 'question',
      label: 'Question',
      className: `${s.question}`,
      show: true,
      isSortable: true,
    },
    {
      key: 'answer',
      label: 'Answer',
      show: true,
      className: `${s.answer}`,
      isSortable: true,
    },
    {
      key: 'updated',
      label: 'Last updated',
      className: `${s.lastUpdatedMy} ${myId === cardsData[0]?.userId ? s.lastUpdatedOther : ''}`,
      show: true,
      isSortable: true,
    },
    {
      key: 'grade',
      label: 'Grade',
      className: `${s.gradeMy} ${myId === cardsData[0]?.userId ? s.gradeOther : ''}`,
      show: true,
      isSortable: true,
    },
    {
      key: 'icons',
      label: '',
      className: `${s.icons}`,
      show: myId !== cardsData[0]?.userId,
    },
  ]
  const [deleteCard, {}] = useDeleteCardMutation()
  // const [updateCard, {}] = useUpdateCardByIdMutation()

  return (
    <div>
      <Table.Root>
        <TableHeader headers={headers} onSort={onSort} sort={sort} />
        <Table.Body>
          {cardsData?.map(item => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.question}</Table.Cell>
              <Table.Cell>
                <ReadMore text={item.answer} maxLength={60} />
              </Table.Cell>
              <Table.Cell>{item.updated}</Table.Cell>
              <Table.Cell>
                <StarRating value={item.rating} />
              </Table.Cell>
              <Table.Cell>
                {myId === item.userId ? (
                  <TableCardIcons
                    // updateCard={() => updateCard(item.id)}
                    deleteCard={() => deleteCard(item.id)}
                  />
                ) : (
                  ''
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
