import { createSlice } from '@reduxjs/toolkit'

export type StatusType = 'idle' | 'loading' | 'failed' | 'succeeded'

type AppInitialStateType = {
  status: StatusType
}

const initialState: AppInitialStateType = {
  status: 'idle',
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        action => {
          return action.type.endsWith('/pending')
        },
        state => {
          state.status = 'loading'
        }
      )
      .addMatcher(
        action => {
          return action.type.endsWith('/rejected')
        },
        state => {
          state.status = 'failed'
        }
      )
      .addMatcher(
        action => {
          return action.type.endsWith('/fulfilled')
        },
        state => {
          state.status = 'succeeded'
        }
      )
  },
})

export const { reducer: appReducer, actions: appActions } = appSlice
