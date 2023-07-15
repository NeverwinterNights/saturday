import { configureStore } from '@reduxjs/toolkit'

import { authAPI } from '@/features/auth/service/api/auth.api.ts'

export const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware: gDM => gDM().concat(authAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
