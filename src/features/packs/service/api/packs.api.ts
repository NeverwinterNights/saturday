import {
  CardType,
  CreateDeckRequestType,
  DecksType,
  GetCardsRequestType,
  GetCardsResponseType,
  GetDecksRequestType,
  GetDecksResponseType,
  SaveGradeCardType,
  UpdateDeckRequestType,
} from '@/features/packs/service/api/packs.types.ts'
import { flashCardsAPI } from '@/store/api.ts'

export const decksAPI = flashCardsAPI.injectEndpoints({
  endpoints: build => ({
    getDecks: build.query<GetDecksResponseType, GetDecksRequestType | void>({
      query: params => ({
        url: 'decks',
        method: 'GET',
        params: { ...params },
      }),
      providesTags: ['decks'],
    }),
    createDeck: build.mutation<DecksType, CreateDeckRequestType>({
      query: data => ({
        url: 'decks',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['decks'],
    }),
    getDeck: build.query<DecksType, string>({
      query: id => ({
        url: `decks/${id}`,
        method: 'GET',
      }),
    }),
    deleteDeck: build.mutation<DecksType, string>({
      query: id => ({
        url: `decks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['decks'],
    }),
    updateDeck: build.mutation<DecksType, { id: string; data: UpdateDeckRequestType }>({
      query: ({ id, data }) => ({
        url: `decks/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['decks'],
    }),
    getCards: build.query<GetCardsResponseType, GetCardsRequestType>({
      query: ({ decksId, question, orderBy }) => ({
        url: `decks/${decksId}/cards`,
        params: { question, orderBy },
      }),
      providesTags: ['cards'],
    }),
    createCards: build.mutation<CardType, { data: FormData; decksId: string }>({
      query: ({ decksId, data }) => ({
        url: `decks/${decksId}/cards`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['cards'],
    }),
    getRandomCard: build.query<CardType, string>({
      query: id => ({
        url: `decks/${id}/learn`,
        method: 'GET',
      }),
    }),
    getCards: build.query<GetCardsResponseType, GetCardsRequestType>({
      query: ({ decksId, ...params }) => ({
        url: `decks/${decksId}/cards`,
        params,
      }),
      providesTags: ['cards'],
    }),
    saveGradeCard: build.mutation<void, SaveGradeCardType & GetCardsRequestType>({
      query: ({ decksId, ...rest }) => ({
        url: `decks/${decksId}/learn`,
        method: 'POST',
        body: { ...rest },
      }),
      async onQueryStarted({ decksId, grade, cardId, ...params }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          decksAPI.util.updateQueryData('getCards', { decksId, ...params }, draft => {
            const card = draft.items.find(card => card.id === cardId)

            if (card) card.grade = grade
            Object.assign(draft, card)
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),
  }),
})

export const {
  useGetDeckQuery,
  useCreateDeckMutation,
  useUpdateDeckMutation,
  useGetDecksQuery,
  useGetCardsQuery,
  useDeleteDeckMutation,
  useCreateCardsMutation,
  useSaveGradeCardMutation,
} = decksAPI
