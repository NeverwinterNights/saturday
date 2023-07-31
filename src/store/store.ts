import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { appReducer } from '@/app/app.slice.ts'
import { authAPI } from '@/features/auth/service/api/auth.api.ts'
import { cardAPI } from '@/features/cards/service/api/cards.api.ts'
import { decksAPI } from '@/features/packs/service/api/packs.api.ts'
import { profileAPI } from '@/features/profile/service/api/profile.api.ts'

export const store = configureStore({
  reducer: {
    appReducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [profileAPI.reducerPath]: profileAPI.reducer,
    [cardAPI.reducerPath]: cardAPI.reducer,
    [decksAPI.reducerPath]: decksAPI.reducer,
  },
  // middleware: gDM => gDM().concat(authAPI.middleware).concat(profileAPI.middleware),
  middleware: gDM =>
    gDM().concat(
      authAPI.middleware,
      profileAPI.middleware,
      cardAPI.middleware,
      decksAPI.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

setupListeners(store.dispatch)
