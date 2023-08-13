import { FC, useState } from 'react'

import s from './cards-table.module.scss'

import { AddEditNewCard } from '@/components/info-cards/add-edit-card'
import { Grade, GradeType } from '@/components/ui/grade'
import { ReadMore } from '@/components/ui/read-more'
import { TableCardIcons } from '@/components/ui/table/icons/tableCardIcons.tsx'
import { Table } from '@/components/ui/table/table.tsx'
import { Sort, TableHeader, TableHeaderType } from '@/components/ui/table-header/table-header.tsx'
import {
  useDeleteCardMutation,
  useUpdateCardByIdMutation,
} from '@/features/cards/service/api/cards.api.ts'
import { CardType } from '@/features/packs/service/api/packs.types.ts'
import { useTranslate } from '@/i18n.ts'

// import { useSaveGradeCardMutation } from '@/features/packs/service/api/packs.api.ts'

type PropsType = {
  cardsData: CardType[]
  onSort: (sort: Sort) => void
  sort: Sort
  id?: string
}

export const CardsTable: FC<PropsType> = ({ cardsData, onSort, sort, id }) => {
  const t = useTranslate()

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
      className: `${id === cardsData[0]?.userId ? s.lastUpdatedMy : s.lastUpdatedOther}`,
      show: true,
      isSortable: true,
    },
    {
      key: 'grade',
      label: t('Grade'),
      className: `${id === cardsData[0]?.userId ? s.gradeMy : s.gradeOther}`,
      show: true,
      isSortable: true,
    },
    {
      key: 'icons',
      label: '',
      className: `${s.icons}`,
      show: id === cardsData[0]?.userId,
    },
  ]
  const [deleteCard, {}] = useDeleteCardMutation()
  // const [saveGrade] = useSaveGradeCardMutation()

  const [updateCard, {}] = useUpdateCardByIdMutation()
  // const gradeHandler = (data: SaveGradeCardType) => {
  //   saveGrade(data)
  // }
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [currentEditedCard, setCurrentEditedCard] = useState<CardType>({} as CardType)
  const updateCardHandler = (id: string) => {
    const card: CardType | undefined = cardsData.find(item => item.id === id)

    if (card) {
      setCurrentEditedCard(card)
    }
    setEditModalOpen(true)
  }

  const getData = (value: FormData) => {
    updateCard({ id: currentEditedCard.id, body: value })
    setCurrentEditedCard({} as CardType)
    setEditModalOpen(false)
  }

  return (
    <div>
      <Table.Root>
        <TableHeader headers={headers} onSort={onSort} sort={sort} />
        {currentEditedCard.answer && (
          <AddEditNewCard
            defaultQuestion={currentEditedCard.question}
            defaultAnswer={currentEditedCard.answer}
            namePack={'Name Card'}
            isOpen={editModalOpen}
            title={t('Edit Card')}
            buttonName={t('Save Changes')}
            onClickDataHandler={getData}
            onOpenChange={() => {
              setCurrentEditedCard({} as CardType)
              setEditModalOpen(false)
            }}
          />
        )}
        <Table.Body>
          {cardsData?.map(item => {
            return (
              <Table.Row key={item.id}>
                <Table.Cell>
                  <div style={{ wordWrap: 'break-word', display: 'flex', flexDirection: 'column' }}>
                    {<img className={s.image} src={item.questionImg} alt="" />}
                    <ReadMore text={item.question} maxLength={15} />
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div style={{ wordWrap: 'break-word', display: 'flex', flexDirection: 'column' }}>
                    {<img className={s.image} src={item.answerImg} alt="" />}
                    <ReadMore text={item.answer} maxLength={15} />
                  </div>
                </Table.Cell>
                <Table.Cell>{item.updated}</Table.Cell>
                <Table.Cell>
                  <Grade
                    // clickHandler={grade =>
                    //   gradeHandler({ decksId: item.deckId, cardId: item.id, grade })
                    // }
                    grade={item.grade as GradeType}
                  />
                  {/*<StarRating value={item.rating} />*/}
                </Table.Cell>
                {id === item.userId ? (
                  <Table.Cell>
                    <TableCardIcons
                      updateCard={() => updateCardHandler(item.id)}
                      deleteCard={() => deleteCard(item.id)}
                    />
                  </Table.Cell>
                ) : (
                  ''
                )}
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
