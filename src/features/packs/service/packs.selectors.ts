import { RootState } from '@/store/store.ts'

export const selectDecksPage = (state: RootState) => state.decksReducer.page
export const selectDecksPageSize = (state: RootState) => state.decksReducer.pageSize
export const selectDecksSort = (state: RootState) => state.decksReducer.sort
export const selectDeckNameToSearch = (state: RootState) => state.decksReducer.nameToSearch
export const selectTabValue = (state: RootState) => state.decksReducer.tabValue
export const selectRange = (state: RootState) => state.decksReducer.range
export const selectIsMaxCardsCountInit = (state: RootState) =>
  state.decksReducer.isMaxCardsCountInit
export const selectAuthorId = (state: RootState) => state.decksReducer.authorId
export const selectMinSlider = (state: RootState) => state.decksReducer.minSlider
export const selectMaxSlider = (state: RootState) => state.decksReducer.maxSlider
