import { UpdateCardByIdRequestType } from '@/features/cards/service/api/cards.types.ts'
import { CardType } from '@/features/packs/service/api/packs.types.ts'
import { flashCardsAPI } from '@/store/api.ts'

export const cardAPI = flashCardsAPI.injectEndpoints({
  endpoints: build => ({
    deleteCard: build.mutation<void, string>({
      query: id => ({
        method: 'DELETE',
        url: `cards/${id}`,
      }),
      invalidatesTags: ['cards'],
    }),
    getCardById: build.query<CardType, string>({
      query: id => ({
        method: 'GET',
        url: `cards/${id}`,
      }),
      // providesTags: ['cards'],
    }),
    updateCardById: build.mutation<CardType, { id: string; body: UpdateCardByIdRequestType }>({
      query: ({ id, body }) => ({
        method: 'PATCH',
        url: `cards/${id}`,
        body: body,
      }),
      invalidatesTags: ['cards'],
    }),
  }),
})
export const { useDeleteCardMutation, useUpdateCardByIdMutation, useGetCardByIdQuery } = cardAPI
