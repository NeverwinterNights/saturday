import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.baseURL,
  credentials: 'include',
})

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: () => ({}),
})
