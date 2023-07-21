import { createApi } from '@reduxjs/toolkit/dist/query/react'

import { UpdateCardByIdRequestType } from '@/features/cards/service/api/cards.types.ts'
import { CardType } from '@/features/packs/service/api/packs.types.ts'
import { baseQueryWithReauth } from '@/store/api.ts'

export const cardAPI = createApi({
  reducerPath: 'cardAPI',
  baseQuery: baseQueryWithReauth,

  endpoints: build => ({
    deleteCard: build.mutation<void, string>({
      query: id => {
        return {
          method: 'DELETE',
          url: `cards/${id}`,
        }
      },
    }),
    getCardById: build.query<CardType, string>({
      query: id => {
        return {
          method: 'GET',
          url: `cards/${id}`,
        }
      },
    }),
    updateCardById: build.mutation<CardType, { id: string; body: UpdateCardByIdRequestType }>({
      query: ({ id, body }) => {
        return {
          method: 'PATCH',
          url: `cards/${id}`,
          body: body,
        }
      },
    }),
  }),
})
export const { useDeleteCardMutation, useUpdateCardByIdMutation, useGetCardByIdQuery } = cardAPI
