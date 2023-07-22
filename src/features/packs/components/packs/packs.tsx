import { useEffect, useState } from 'react'

import s from './packs.module.scss'

import { Trash } from '@/assets/icons/Trash.tsx'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination'
import { SliderComponent } from '@/components/ui/slider'
import { Tab } from '@/components/ui/tabs'
import { Typography } from '@/components/ui/typography'
import { useMeQuery } from '@/features/auth/service/api/auth.api.ts'
import { PacksTable } from '@/features/packs/components/packs-table/packs-table.tsx'
import { useGetDecksQuery } from '@/features/packs/service/api/packs.api.ts'

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const Packs = () => {
  const { data: user } = useMeQuery()
  const [search, setSearch] = useState('')
  const [range, setRange] = useState<[number, number]>([0, 100])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState('7')
  const [sort, setSort] = useState<Sort>({ key: 'updated', direction: 'asc' })
  const sortString = sort ? `${sort.key}-${sort.direction}` : undefined
  const [tabValue, setTabValue] = useState('all')
  const { data: decks, isLoading } = useGetDecksQuery({
    minCardsCount: range[0].toString(),
    maxCardsCount: range[1].toString(),
    authorId: tabValue === 'my' ? user?.id : undefined,
    orderBy: sortString,
    name: search,
    currentPage: currentPage.toString(),
    itemsPerPage: itemsPerPage,
  })

  const options = [
    { value: 'my', title: 'My Cards' },
    { value: 'all', title: 'All Cards' },
  ]

  useEffect(() => {
    if (range[1] !== decks?.maxCardsCount) {
      setRange(prev => [prev[0], decks?.maxCardsCount || 100])
    }
  }, [decks?.maxCardsCount])

  const clearFilter = () => {
    setSearch('')
    setTabValue('all')
    setRange([0, decks?.maxCardsCount || 100])
  }

  const onValueChange = (value: [number, number]) => {
    setRange(value)
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <Container className={s.root}>
      <div className={s.title}>
        <Typography variant={'large'}>Packs list</Typography>
        <Button>Add New Pack</Button>
      </div>
      <div className={s.filter}>
        <Input
          placeholder={'Input search'}
          width={'300px'}
          searchInput
          onValueChange={e => setSearch(e)}
          value={search}
        />
        <Tab
          tabs={options}
          label={'Show packs cards'}
          defaultValue={'all'}
          value={tabValue}
          onValueChange={value => setTabValue(value)}
        />
        <SliderComponent
          defaultValue={range}
          value={range}
          setValue={onValueChange}
          max={decks?.maxCardsCount}
        />
        <Button variant={'secondary'} onClick={clearFilter}>
          <Trash />
          <Typography variant={'subtitle2'}>Clear Filter</Typography>
        </Button>
      </div>
      {decks && <PacksTable decks={decks.items} onSort={setSort} />}
      <Pagination
        count={decks?.pagination.totalPages ?? 10}
        onChange={page => setCurrentPage(page)}
        onPerPageChange={itemsPerPage => setItemsPerPage(itemsPerPage)}
        page={decks?.pagination.currentPage ?? 1}
        perPage={decks?.pagination.itemsPerPage}
        perPageOptions={[4, 7, 10]}
      />
    </Container>
  )
}
