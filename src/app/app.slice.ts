import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export type StatusType = 'idle' | 'loading' | 'failed' | 'succeeded'

type AppInitialStateType = {
  status: StatusType
  error: string
}

const initialState: AppInitialStateType = {
  status: 'idle',
  error: '0',
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
        action => action.type.endsWith('executeMutation/rejected'),
        (state, action) => {
          console.log(action.payload.data)
          if (action.payload.data) {
            toast.error(action.payload.data.errorMessages[0].message)
            state.error = '1'
          } else {
            toast.error(`🦕${action.payload.error}`)
            state.error = '1'
          }
        }
      )
      .addMatcher(
        action => action.type.endsWith('flashCardsAPI/executeQuery/rejected'),
        (state, action) => {
          if (state.error === '0') {
            toast.error(`🦕${action?.payload?.error}`)
            state.error = '1'
          }
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
