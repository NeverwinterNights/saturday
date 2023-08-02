import { CardType } from '@/features/packs/service/api/packs.types.ts'

export const getRandomCard = (cards: CardType[] | undefined) => {
  if (!cards) return undefined
  const invertedGradeSum = cards.reduce((acc, el) => {
    return acc + 6 - el.grade
  }, 0)
  const randomNumber = Math.random() * invertedGradeSum
  let sum = 0
  let i = 0

  while (sum < randomNumber) {
    sum += 6 - cards[i].grade
    i += 1
  }

  return cards[i - 1]
}
// how to use
//в компоненте вставить   const test = useMemo(() => getRandomCard(data?.items), [data?.items])
