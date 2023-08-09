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
  // console.log('id', id)
  const { data: deck } = useGetDeckQuery(id as string)
  const [prevID, setPrevID] = useState<string | undefined>(undefined)
  const { data: card } = useGetRandomCardQuery({
    id: id as string,
    previousCardId: prevID ? prevID : undefined,
  })
  const [saveGrade] = useSaveGradeCardMutation()

  // const { data: cards, isLoading } = useGetCardsQuery({ decksId: id ?? '' })
  // // const [radioValue, setRadioValue] = useState('')
  // const [currentCardsArray, setCurrentCardsArray] = useState<CardType[] | undefined>(cards?.items)
  // const [saveGrade] = useSaveGradeCardMutation()
  //
  // // useEffect(() => {
  // //   if (cards?.items) setCurrentCardsArray(cards?.items)
  // // }, [cards?.items])
  // const randomCard = useMemo(() => getRandomCard(currentCardsArray), [currentCardsArray])
  //
  // const dataHandler = (value: string) => {
  //   // console.log('value', radioValue ? radioValue : randomCard?.grade)
  //   // console.log('dataHandler')
  //   const filteredCards = currentCardsArray?.filter(item => item.id !== randomCard?.id)
  //
  //   if (filteredCards) {
  //     setCurrentCardsArray(filteredCards)
  //   }
  //   if (id && randomCard && randomCard.id) {
  //     saveGrade({
  //       decksId: id,
  //       cardId: randomCard.id,
  //       grade: value ? +value : randomCard?.grade,
  //     })
  //   }
  // }

  const dataHandler = (value: string) => {
    setPrevID(card?.id)
    // saveGrade({ decksId: id as string, cardId: card?.id as string, grade: +value }).then(res => {
    //   console.log('res', res)
    // })
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
// http://localhost:3000/learn/clksraeqa00puyw2pfxug40eq
// http://localhost:3000/learn/clkmx6au500d8sg2of7o5vcbo
