export type GetDecksRequestType = {
  minCardsCount?: string
  maxCardsCount?: string
  name?: string
  authorId?: string
  orderBy?: string
  currentPage?: string
  itemsPerPage?: string
}
export type GetDecksResponseType = {
  items: DecksType[]
  pagination: PaginationType
  maxCardsCount: number
}

export type UpdateDeckRequestType = FormData

export type CreateDeckRequestType = FormData

export type ItemsAuthor = {
  id: string
  name: string
}
export type DecksType = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover: string
  rating: number
  created: string
  updated: string
  cardsCount: number
  author: ItemsAuthor
}
export type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type GetCardsResponseType = {
  pagination: PaginationType
  items: CardType[]
}

export type CardType = {
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  answerImg: string
  questionImg: string
  rating: number
  created: string
  updated: string
  grade: number
}

export type CreateCardType = {
  decksId: string
  question: string
  answer: string
  questionImg?: string
  answerImg?: string
  questionVideo?: string
  answerVideo?: string
}

export type SaveGradeCardType = {
  decksId: string
  cardId: string
  grade: number
}
export type GetCardsRequestType = {
  decksId: string
  question?: string
  answer?: string
  orderBy?: string
  currentPage?: string
  itemsPerPage?: string
}
