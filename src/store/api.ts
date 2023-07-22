import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'

const baseUrl = 'https://andri-flashcards-api.onrender.com/v1/'

const mutex = new Mutex()
const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  credentials: 'include',
})

export const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  // wait until the mutex is available without locking it
  await mutex.waitForUnlock()
  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await baseQuery(
          {
            url: 'auth/refresh-token',
            method: 'POST',
          },
          api,
          extraOptions
        )

        if (refreshResult.data) {
          // retry the initial query
          await baseQuery(args, api, extraOptions)
        }
      } finally {
        // release must be called once the mutex should be released again.
        release()
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}

export const flashCardsAPI = createApi({
  reducerPath: 'flashCardsAPI',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: ['me'],
})
