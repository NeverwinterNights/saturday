import { createApi } from '@reduxjs/toolkit/dist/query/react'

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
  }),
})
export const { useDeleteCardMutation } = cardAPI
