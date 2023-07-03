import { Select } from '../../select'

import styles from './PerPageSelect.module.scss'

export type PerPageSelectProps = {
  perPage: number
  perPageOptions: number[]
  onPerPageChange: (itemPerPage: string) => void
}

export const PerPageSelect = ({ perPage, perPageOptions, onPerPageChange }: PerPageSelectProps) => {
  const selectOptions = perPageOptions.map(value => ({
    label: value.toString(),
    value: value.toString(),
  }))

  return (
    <div className={styles.selectBox}>
      Показать
      <Select
        className={styles.select}
        value={perPage.toString()}
        options={selectOptions}
        onChange={onPerPageChange}
        variant="pagination"
      />
      на странице
    </div>
  )
}
