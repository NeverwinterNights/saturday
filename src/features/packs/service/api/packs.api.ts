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
      providesTags: ['deck'],
    }),
    getCards: build.query<GetCardsResponseType, GetCardsRequestType>({
      query: ({ decksId, ...params }) => ({
        url: `decks/${decksId}/cards`,
        params,
      }),
      providesTags: ['cards'],
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
      invalidatesTags: ['decks', 'deck'],
    }),
    createCards: build.mutation<CardType, { data: FormData; decksId: string }>({
      query: ({ decksId, data }) => ({
        url: `decks/${decksId}/cards`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['cards', 'deck'],
    }),
    // getRandomCard: build.query<CardType, { id: string; previousCardId?: string }>({
    getRandomCard: build.query<CardType, { id: string }>({
      // query: ({ id, previousCardId }) => ({
      query: ({ id }) => ({
        // url: `decks/${id}/learn${previousCardId ? `?previousCardId=${previousCardId}` : ''}`,
        url: `decks/${id}/learn`,
        method: 'GET',
      }),
    }),
    // saveGradeCard: build.mutation<CardType, SaveGradeCardType & GetCardsRequestType>({
    saveGradeCard: build.mutation<CardType, SaveGradeCardType>({
      query: ({ decksId, ...rest }) => ({
        url: `decks/${decksId}/learn`,
        method: 'POST',
        body: { ...rest },
      }),
      async onQueryStarted({ decksId }, { dispatch, queryFulfilled }) {
        const res = await queryFulfilled

        dispatch(
          decksAPI.util.updateQueryData('getRandomCard', { id: decksId }, () => {
            return res.data
          })
        )
      },
      // async onQueryStarted(
      //   { decksId, grade, cardId, orderBy, ...params },
      //   { getState, dispatch, queryFulfilled }
      // ) {
      //   const state = getState() as RootState
      //   const patchResult = dispatch(
      //     decksAPI.util.updateQueryData(
      //       'getCards',
      //       {
      //         decksId,
      //         orderBy: state.appReducer.orderBy || undefined,
      //         question: state.appReducer.question || undefined,
      //         ...params,
      //       },
      //       draft => {
      //         const card = draft.items.find(card => card.id === cardId)
      //
      //         if (card) card.grade = grade
      //         Object.assign(draft, card)
      //       }
      //     )
      //   )
      //
      //   try {
      //     await queryFulfilled
      //   } catch {
      //     patchResult.undo()
      //   }
      // },
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
  useGetRandomCardQuery,
} = decksAPI
