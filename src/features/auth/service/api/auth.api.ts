import {
  RequestLoginType,
  RequestSignUpType,
  RequestUpdateUserType,
  ResponseLoginType,
  ResponseUserType,
} from '@/features/auth/service/api/auth.types.ts'
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
    getUser: build.query<ResponseUserType, unknown>({
      query: () => ({
        url: `auth/me`,
      }),
      extraOptions: { maxRetries: false },
    }),
    updateUser: build.mutation<ResponseUserType, RequestUpdateUserType>({
      query: () => ({
        url: `auth/me`,
        method: 'PATCH',
      }),
      extraOptions: { maxRetries: false },
    }),
    logout: build.mutation({
      query: () => ({
        url: `auth/logout`,
        method: 'POST',
      }),
    }),
    signUp: build.mutation<ResponseUserType, RequestSignUpType>({
      query: (body: RequestSignUpType) => ({
        url: `auth/sign-up`,
        method: 'POST',
        body,
      }),
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
  useGetUserQuery,
  useUpdateUserMutation,
  useLogoutMutation,
  useSignUpMutation,
  useVerifyMailMutation,
  useResendEmailMutation,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
} = authAPI
