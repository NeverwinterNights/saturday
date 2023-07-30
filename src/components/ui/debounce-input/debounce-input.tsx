import { ChangeEvent, useEffect, useState } from 'react'

import { useDebounce } from '@/common/hooks/useDebounce.ts'
import { Input } from '@/components/ui/input'
import { useTranslate } from '@/i18n.ts'

type DebounceInputTypes = {
  onValueChange: (e: string) => void
  searchValue: string
  className?: string
}

export const DebounceInput = ({ onValueChange, searchValue, className }: DebounceInputTypes) => {
  const t = useTranslate()
  const [value, setValue] = useState<string>(searchValue)
  const debouncedValue = useDebounce<string>(value, 500)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  useEffect(() => {
    if (value === searchValue) return
    setValue(searchValue)
  }, [searchValue])

  useEffect(() => {
    if (value === searchValue) return
    onValueChange(value)
  }, [debouncedValue])

  return (
    <>
      <Input
        placeholder={t('Input search')}
        searchInput
        onChange={handleChange}
        value={value}
        className={className}
      />
    </>
  )
}
