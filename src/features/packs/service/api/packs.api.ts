import {
  CardType,
  CreateDeckRequestType,
  DecksType,
  GetCardsRequestType,
  GetCardsResponseType,
  GetDecksRequestType,
  GetDecksResponseType,
  SaveGradeCardType,
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
      query: decksId => ({
        url: `decks/${decksId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['decks'],
    }),
    updateDeck: build.mutation<DecksType, string>({
      query: id => ({
        url: `decks/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['decks'],
    }),
    getCards: build.query<GetCardsResponseType, GetCardsRequestType>({
      query: ({ decksId }) => ({
        url: `decks/${decksId}/cards`,
        method: 'GET',
        // body: { ...rest },
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
    saveGradeCard: build.mutation<void, SaveGradeCardType>({
      query: ({ decksId, ...rest }) => ({
        url: `decks/${decksId}/learn`,
        method: 'POST',
        bode: { ...rest },
      }),
    }),
  }),
})

export const {
  useGetDeckQuery,
  useCreateDeckMutation,
  useGetDecksQuery,
  useGetCardsQuery,
  useDeleteDeckMutation,
  useCreateCardsMutation,
} = decksAPI
