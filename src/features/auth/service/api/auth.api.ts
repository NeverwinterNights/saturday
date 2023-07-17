import { RequestLoginType, ResponseLoginType } from '@/features/auth/service/api/auth.types.ts'
import { api } from '@/store/api.ts'

export const authAPI = api.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<ResponseLoginType, RequestLoginType>({
      query: body => ({
        url: `auth/login`,
        method: 'POST',
        body,
      }),
    }),
    me: build.query({
      query: () => ({
        url: `auth/me`,
        method: 'GET',
      }),
      extraOptions: { maxRetries: false },
    }),
    logout: build.mutation({
      query: () => ({
        url: `auth/logout`,
        method: 'POST',
      }),
    }),
  }),
})

export const { useLoginMutation, useMeQuery, useLogoutMutation } = authAPI
