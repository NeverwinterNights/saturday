import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { authAPI } from '@/features/auth/service/api/auth.api.ts'

export const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware: gDM => gDM().concat(authAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
