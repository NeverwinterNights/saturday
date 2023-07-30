import { Select } from '../../select'

import styles from './PerPageSelect.module.scss'

import { useTranslate } from '@/i18n.ts'

export type PerPageSelectProps = {
  perPage: number
  perPageOptions: number[]
  onPerPageChange: (itemPerPage: string) => void
}

export const PerPageSelect = ({ perPage, perPageOptions, onPerPageChange }: PerPageSelectProps) => {
  const t = useTranslate()
  const selectOptions = perPageOptions.map(value => ({
    label: value.toString(),
    value: value.toString(),
  }))

  return (
    <div className={styles.selectBox}>
      {t('show')}
      <Select
        className={styles.select}
        value={perPage.toString()}
        options={selectOptions}
        onChange={onPerPageChange}
        variant="pagination"
      />
      {t('In page')}
    </div>
  )
}
