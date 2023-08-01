import { FC, useState } from 'react'

import s from './cards-table.module.scss'

import { StarRating } from '@/components/ui/rating-stars'
import { ReadMore } from '@/components/ui/read-more'
import { TableCardIcons } from '@/components/ui/table/icons/tableCardIcons.tsx'
import { Table } from '@/components/ui/table/table.tsx'
import { Sort, TableHeader, TableHeaderType } from '@/components/ui/table-header/table-header.tsx'
import { useDeleteCardMutation } from '@/features/cards/service/api/cards.api.ts'
import { CardType } from '@/features/packs/service/api/packs.types.ts'
import { useTranslate } from '@/i18n.ts'
// import { useSaveGradeCardMutation } from '@/features/packs/service/api/packs.api.ts'
import { useSaveGradeCardMutation } from '@/features/packs/service/api/packs.api.ts'
import { CardType, SaveGradeCardType } from '@/features/packs/service/api/packs.types.ts'

type PropsType = {
  cardsData: CardType[]
  onSort: (sort: Sort) => void
  sort: Sort
  id?: string
}

export const CardsTable: FC<PropsType> = ({ cardsData, onSort, sort, id }) => {
  const t = useTranslate()
  const myId = '0000'
  const headers: TableHeaderType[] = [
    {
      key: 'question',
      label: t('Question'),
      className: `${s.question}`,
      show: true,
      isSortable: true,
    },
    {
      key: 'answer',
      label: t('Answer'),
      show: true,
      className: `${s.answer}`,
      isSortable: true,
    },
    {
      key: 'updated',
      label: t('Last updated'),
      className: `${s.lastUpdatedMy} ${myId === cardsData[0]?.userId ? s.lastUpdatedOther : ''}`,
      show: true,
      isSortable: true,
    },
    {
      key: 'grade',
      label: t('Grade'),
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
  const [saveGrade] = useSaveGradeCardMutation()

  // const [updateCard, {}] = useUpdateCardByIdMutation()
  const gradeHandler = (data: SaveGradeCardType) => {
    saveGrade(data)
  }

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
                <Grade
                  clickHandler={grade =>
                    gradeHandler({ decksId: item.deckId, cardId: item.id, grade })
                  }
                  grade={item.grade as GradeType}
                />
                {/*<StarRating value={item.rating} />*/}
              </Table.Cell>
              <Table.Cell>
                {id === item.userId ? (
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
