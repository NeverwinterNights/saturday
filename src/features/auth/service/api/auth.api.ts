import { api } from '@/store/api.ts'

export const authAPI = api.injectEndpoints({
  endpoints: build => ({
    login: build.mutation({
      query: () => ({
        url: `login`,
        method: 'POST',
      }),
    }),
  }),
})
