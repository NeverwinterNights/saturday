import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://andri-flashcards-api.onrender.com/v1/'

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  credentials: 'include',
})

export const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    await baseQuery(
      {
        url: 'auth/refresh-token',
        method: 'POST',
      },
      api,
      extraOptions
    )
  }

  return result
}

export const flashCardsAPI = createApi({
  reducerPath: 'flashCardsAPI',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: ['me'],
})
