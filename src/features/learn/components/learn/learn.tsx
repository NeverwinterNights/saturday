import { useState } from 'react'

import { useParams } from 'react-router-dom'

import styles from './learn.module.scss'

import { ratingValuesType } from '@/common/constants/rating-values.ts'
import { LearnPack } from '@/components/info-cards/learn'
import { Container } from '@/components/ui/container'
import { Typography } from '@/components/ui/typography'
import {
  useGetDeckQuery,
  useGetRandomCardQuery,
  useSaveGradeCardMutation,
} from '@/features/packs/service/api/packs.api.ts'
import { useTranslate } from '@/i18n.ts'

export const Learn = () => {
  const t = useTranslate()
  const { id } = useParams<{ id: string }>()

  const ratingValues: ratingValuesType[] = [
    {
      value: '1',
      label: t('Did not know'),
    },
    {
      value: '2',
      label: t('Forgot'),
    },
    {
      value: '3',
      label: t('A lot of thought'),
    },
    {
      value: '4',
      label: t('Confused'),
    },
    {
      value: '5',
      label: t('Knew the answer'),
    },
  ]
  const { data: deck } = useGetDeckQuery(id as string)
  const [prevID, setPrevID] = useState<string | undefined>(undefined)
  const { data: card } = useGetRandomCardQuery({
    id: id as string,
    previousCardId: prevID ? prevID : undefined,
  })
  const [saveGrade] = useSaveGradeCardMutation()

  const dataHandler = (value: string) => {
    setPrevID(card?.id)
    saveGrade({ decksId: id as string, cardId: card?.id as string, grade: +value })
  }

  return (
    <Container className={styles.root}>
      {!card && <Typography variant="large">{t('There are no cards in the deck.')}</Typography>}
      {/*{t('Learn')} {id}*/}
      {deck && card && (
        <LearnPack
          // onValueChange={setRadioValue}
          answer={card.answer}
          question={card.question}
          defaultValue={card?.grade ? ratingValues[card?.grade - 1].value : undefined}
          numberEfforts={card.shots}
          packName={deck.name}
          options={ratingValues}
          dataHandler={dataHandler}
        />
      )}
    </Container>
  )
}
