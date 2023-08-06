import { useEffect, useMemo, useState } from 'react'

import { useParams } from 'react-router-dom'

import styles from './learn.module.scss'

import { ratingValues } from '@/common/constants/rating-values.ts'
import { getRandomCard } from '@/common/utils/get-random-card.ts'
import { LearnPack } from '@/components/info-cards/learn'
import { Container } from '@/components/ui/container'
import { Typography } from '@/components/ui/typography'
import {
  useGetCardsQuery,
  useGetDeckQuery,
  useSaveGradeCardMutation,
} from '@/features/packs/service/api/packs.api.ts'
import { CardType } from '@/features/packs/service/api/packs.types.ts'
// import { useTranslate } from '@/i18n.ts'

export const Learn = () => {
  // const t = useTranslate()
  const { id } = useParams<{ id: string }>()

  // console.log('id', id)
  const { data: deck } = useGetDeckQuery(id as string)
  const { data: cards, isLoading } = useGetCardsQuery({ decksId: id ?? '' })
  const [radioValue, setRadioValue] = useState('')
  const [currentCardsArray, setCurrentCardsArray] = useState<CardType[] | undefined>(cards?.items)
  const [saveGrade] = useSaveGradeCardMutation()

  useEffect(() => {
    if (cards?.items) setCurrentCardsArray(cards?.items)
  }, [cards?.items])
  const randomCard = useMemo(() => getRandomCard(currentCardsArray), [currentCardsArray])

  console.log('length', currentCardsArray?.length)
  const dataHandler = () => {
    // console.log('value', radioValue ? radioValue : randomCard?.grade)
    // console.log('dataHandler')
    const filteredCards = currentCardsArray?.filter(item => item.id !== randomCard?.id)

    if (filteredCards) {
      setCurrentCardsArray(filteredCards)
    }
    if (id && randomCard && randomCard.id) {
      saveGrade({
        decksId: id,
        cardId: randomCard.id,
        grade: radioValue ? +radioValue : randomCard?.grade,
      })
    }
  }

  // console.log('randomCard', randomCard)
  // console.log('randomCard?.grade', randomCard?.grade)
  // console.log('state', state)
  // console.log(randomCard?.grade)
  // console.log('andomCard?.grade', ratingValues[randomCard?.grade - 1])

  return (
    <Container className={styles.root}>
      {!randomCard && !isLoading && (
        <Typography variant="large">There are no cards in the deck.</Typography>
      )}
      {/*{t('Learn')} {id}*/}
      {deck && randomCard && (
        <LearnPack
          onValueChange={setRadioValue}
          answer={randomCard.answer}
          question={randomCard.question}
          defaultValue={ratingValues[randomCard?.grade - 1].value}
          numberEfforts={randomCard.shots}
          packName={deck.name}
          options={ratingValues}
          dataHandler={dataHandler}
        />
      )}
    </Container>
  )
}
