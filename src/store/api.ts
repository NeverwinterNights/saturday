import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://andri-flashcards-api.onrender.com/v1/'

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  // credentials: 'include',
  prepareHeaders: headers => {
    const accessToken = localStorage.getItem('token')

    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`)
    }

    return headers
  },
})

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    const refreshResult = (await baseQuery(
      {
        url: 'auth/refresh-token',
        method: 'POST',
      },
      api,
      extraOptions
    )) as { data: { accessToken: string } }

    if (refreshResult.data.accessToken) {
      localStorage.setItem('token', refreshResult.data.accessToken as string)

      // retry the initial query
      result = await baseQuery(args, api, extraOptions)
    } else {
      await baseQuery(
        {
          url: 'auth/logout',
          method: 'POST',
        },
        api,
        extraOptions
      )
    }
  }

  return result
}
