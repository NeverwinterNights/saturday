import { createApi } from '@reduxjs/toolkit/query/react'

import {
  RequestDataUpdateMe,
  ResponseUpdateMe,
} from '@/features/profile/service/api/profile.types.ts'
import { baseQueryWithReauth } from '@/store/api.ts'

export const profileAPI = createApi({
  reducerPath: 'profileAPI',
  baseQuery: baseQueryWithReauth,
  endpoints: build => ({
    updateProfile: build.mutation<ResponseUpdateMe, RequestDataUpdateMe>({
      query: ({ avatar, name, email }) => ({
        url: `auth/me`,
        method: 'PATCH',
        body: { name, email, avatar },
      }),
    }),
  }),
})

export const { useUpdateProfileMutation } = profileAPI
