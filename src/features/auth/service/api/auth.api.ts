import { createApi } from '@reduxjs/toolkit/query/react'

import {
  RequestLoginType,
  RequestSignUpType,
  RequestUpdateUserType,
  ResponseLoginType,
  ResponseUserType,
} from '@/features/auth/service/api/auth.types.ts'
import { baseQueryWithReauth } from '@/store/api.ts'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: baseQueryWithReauth,

  endpoints: build => ({
    me: build.query<ResponseUserType, void>({
      query: () => {
        return {
          method: 'GET',
          url: 'auth/me',
          params: {},
        }
      },
    }),
    login: build.mutation<ResponseLoginType, RequestLoginType>({
      query: ({ email, password }) => {
        return {
          method: 'POST',
          url: 'auth/login',
          body: { email, password },
        }
      },
    }),
    registration: build.mutation<ResponseUserType, RequestSignUpType>({
      query: (body: RequestSignUpType) => ({
        url: `auth/sign-up`,
        method: 'POST',
        body,
      }),
    }),
    logout: build.mutation<void, void>({
      query: () => {
        return {
          method: 'POST',
          url: 'auth/logout',
        }
      },
    }),

    // move to profile
    updateUser: build.mutation<ResponseUserType, RequestUpdateUserType>({
      query: () => ({
        url: `auth/me`,
        method: 'PATCH',
      }),
      extraOptions: { maxRetries: false },
    }),

    verifyMail: build.mutation<unknown, { code: string }>({
      query: (body: { code: string }) => ({
        url: `auth/verify-email`,
        method: 'POST',
        body,
      }),
    }),

    resendEmail: build.mutation<unknown, { userId: string }>({
      query: (body: { userId: string }) => ({
        url: `auth/resend-verification-email`,
        method: 'POST',
        body,
      }),
    }),
    recoverPassword: build.mutation<unknown, { email: string }>({
      query: (body: { email: string }) => ({
        url: `auth/recover-password`,
        method: 'POST',
        body,
      }),
    }),
    resetPassword: build.mutation<unknown, { token: string; password: string }>({
      query: ({ token, password }) => ({
        url: `auth/reset-password/${token}`,
        method: 'POST',
        body: { password },
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useUpdateUserMutation,
  useLogoutMutation,
  util,
  useMeQuery,
  useRegistrationMutation,
  useVerifyMailMutation,
  useResendEmailMutation,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
} = authAPI
