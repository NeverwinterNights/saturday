import {
  RequestDataUpdateMe,
  ResponseUpdateMe,
} from '@/features/profile/service/api/profile.types.ts'
import { flashCardsAPI } from '@/store/api.ts'

export const profileAPI = flashCardsAPI.injectEndpoints({
  endpoints: build => ({
    updateProfile: build.mutation<ResponseUpdateMe, RequestDataUpdateMe>({
      query: body => ({
        url: `auth/me`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['me'],
    }),
  }),
})

export const { useUpdateProfileMutation } = profileAPI
