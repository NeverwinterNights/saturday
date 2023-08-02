import { createAction, createSlice } from '@reduxjs/toolkit'

export type StatusType = 'idle' | 'loading' | 'failed' | 'succeeded'

type AppInitialStateType = {
  status: StatusType
  question: string
  orderBy: string
}

const initialState: AppInitialStateType = {
  status: 'idle',
  question: '',
  orderBy: '',
}

export const addQuestionAC = createAction<string>('app/addQuestion')
export const addOrderByAC = createAction<string>('app/addOrderByAC')

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addQuestionAC, (state, action) => {
        state.question = action.payload
      })
      .addCase(addOrderByAC, (state, action) => {
        state.orderBy = action.payload
      })
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
