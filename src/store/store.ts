import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { authAPI } from '@/features/auth/service/api/auth.api.ts'
import { profileAPI } from '@/features/profile/service/api/profile.api.ts'

export const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
    [profileAPI.reducerPath]: profileAPI.reducer,
  },
  middleware: gDM => gDM().concat(authAPI.middleware).concat(profileAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

setupListeners(store.dispatch)
