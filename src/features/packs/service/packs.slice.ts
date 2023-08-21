import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Sort } from '@/components/ui/table-header/table-header.tsx'

const initialState = {
  page: 1,
  pageSize: '7',
  sort: { key: 'updated', direction: 'desc' } as Sort,
  nameToSearch: '',
  minSlider: 0,
  maxSlider: 100,
  tabValue: 'all',
  range: [0, 100] as [number, number],
  isMaxCardsCountInit: true,
}

const slice = createSlice({
  name: 'decksParams',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<{ page: number }>) => {
      state.page = action.payload.page
    },
    setPageSize: (state, action: PayloadAction<{ pageSize: string }>) => {
      state.pageSize = action.payload.pageSize
    },
    setSort: (state, action: PayloadAction<{ sort: Sort }>) => {
      state.sort = action.payload.sort
    },
    setNameToSearch: (state, action: PayloadAction<{ name: string }>) => {
      state.nameToSearch = action.payload.name
    },
    setMinSlider: (state, action: PayloadAction<{ value: number }>) => {
      state.minSlider = action.payload.value
    },
    setMaxSlider: (state, action: PayloadAction<{ value: number }>) => {
      state.maxSlider = action.payload.value
    },
    setTabValue: (state, action: PayloadAction<{ value: string }>) => {
      state.tabValue = action.payload.value
    },
    setRangeValue: (state, action: PayloadAction<{ value: [number, number] }>) => {
      state.range = action.payload.value
    },
    setIsMaxCardsCountInit: (state, action: PayloadAction<{ value: boolean }>) => {
      state.isMaxCardsCountInit = action.payload.value
    },
  },
})

export const decksReducer = slice.reducer
export const decksActions = slice.actions
