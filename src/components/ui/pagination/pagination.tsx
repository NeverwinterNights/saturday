import { memo } from 'react'

import { usePagination } from '../../../hooks/usePagination.ts'

import { NextButton } from './controlButton/NextButton.tsx'
import { PrevButton } from './controlButton/PrevButton.tsx'
import { MainPaginationButtons } from './mainPaginationButtons/MainPaginationButtons.tsx'
import styles from './pagination.module.scss'
import { PerPageSelect } from './perPageSelect/PerPageSelect.tsx'

type PaginationPropsType = {
  count: number
  page: number
  onChange: (page: number) => void
  siblings?: number
  perPage?: number // no perPage, no select
  perPageOptions?: number[] // array points in elect
  onPerPageChange?: (itemPerPage: string) => void // change from number
}

export const Pagination = memo(
  ({
    count,
    page,
    perPage,
    onChange,
    siblings,
    perPageOptions,
    onPerPageChange,
  }: PaginationPropsType) => {
    const {
      paginationRange,
      isLastPage,
      isFirstPage,
      handlePreviousPageClicked,
      handleNextPageClicked,
      handleMainPageClicked,
    } = usePagination({
      page,
      count,
      onChange,
      siblings,
    })
    const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange

    return (
      <div className={styles.main}>
        <div className={styles.numbers}>
          <PrevButton onClick={handlePreviousPageClicked} disabled={isFirstPage} />
          <MainPaginationButtons
            currentPage={page}
            onClick={handleMainPageClicked}
            paginationRange={paginationRange}
          />
          <NextButton onClick={handleNextPageClicked} disabled={isLastPage} />
        </div>
        {showPerPageSelect && (
          <PerPageSelect
            {...{
              perPage,
              perPageOptions,
              onPerPageChange,
            }}
          />
        )}
      </div>
    )
  }
)
