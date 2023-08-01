import { FC, useState } from 'react'

import s from './cards-table.module.scss'

import { Grade, GradeType } from '@/components/ui/grade'
// import { StarRating } from '@/components/ui/rating-stars'
import { ReadMore } from '@/components/ui/read-more'
import { TableCardIcons } from '@/components/ui/table/icons/tableCardIcons.tsx'
import { Table } from '@/components/ui/table/table.tsx'
import { Sort, TableHeader, TableHeaderType } from '@/components/ui/table-header/table-header.tsx'
import { useDeleteCardMutation } from '@/features/cards/service/api/cards.api.ts'
// import { useSaveGradeCardMutation } from '@/features/packs/service/api/packs.api.ts'
import { useSaveGradeCardMutation } from '@/features/packs/service/api/packs.api.ts'
import { CardType, SaveGradeCardType } from '@/features/packs/service/api/packs.types.ts'

type PropsType = {
  cardsData: CardType[]
}

export const CardsTable: FC<PropsType> = ({ cardsData }) => {
  //это типа нам данные будут приходить с сервера)
  // const cardsData = [
  //   {
  //     id: '01',
  //     question: 'How "This" works in JavaScript?',
  //     answer: 'This is how "This" works in JavaScript',
  //     lastUpdate: '18.03.2021',
  //     //это мы условно загружаем наши карточки
  //     //у нас быдет или наше Id или не наше ('0000'-'1111')
  //     userId: '1111',
  //     grade: 1,
  //   },
  //   {
  //     id: '02',
  //     question: 'How "This" works in JavaScript?',
  //     answer:
  //       'This is how "This" works in JavaScript in JavaScript in JavaScript in JavaScript in JavaScript',
  //     lastUpdate: '18.03.2021',
  //     userId: '1111',
  //     grade: 2,
  //   },
  //   {
  //     id: '03',
  //     question: 'How "This" works in JavaScript?',
  //     answer: 'This is how "This" works in JavaScript',
  //     lastUpdate: '18.03.2021',
  //     userId: '1111',
  //     grade: 3,
  //   },
  // ]
  //это мы берем наше айди, что бы понять чьи карты(откуда и как берём пока не знаю)
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
  const [sort, setSort] = useState<Sort>(null)
  const [deleteCard, {}] = useDeleteCardMutation()
  const [saveGrade] = useSaveGradeCardMutation()

  // const [updateCard, {}] = useUpdateCardByIdMutation()
  const gradeHandler = (data: SaveGradeCardType) => {
    saveGrade(data)
  }

  return (
    <div>
      <Table.Root>
        <TableHeader headers={headers} onSort={setSort} sort={sort} />
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
