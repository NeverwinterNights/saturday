import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.baseURL,
  credentials: 'include',
  // prepareHeaders: (headers, { getState }) => {
  //   const {
  //     auth: {
  //       user: { accessToken },
  //     },
  //   } = getState() as RootState
  //
  //   if (accessToken) {
  //     headers.set('authorization', `Bearer ${accessToken}`)
  //   }
  //
  //   return headers
  // },
})

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult = await baseQuery('/refreshToken', api, extraOptions)

    if (refreshResult.data) {
      // store the new token
      // api.dispatch(tokenReceived(refreshResult.data))
      // retry the initial query
      result = await baseQuery(args, api, extraOptions)
    } else {
      // api.dispatch(loggedOut())
    }
  }

  return result
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
})
