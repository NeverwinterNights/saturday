import { useEffect, useState } from 'react'

import s from './packs.module.scss'

import { Trash } from '@/assets/icons/Trash.tsx'
import { AddEditPack } from '@/components/info-cards/add-new-pack'
import { AddPackFormType } from '@/components/info-cards/add-new-pack/use-add-new-pack.ts'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { DebounceInput } from '@/components/ui/debounce-input/debounce-input.tsx'
import { Pagination } from '@/components/ui/pagination'
import { SliderComponent } from '@/components/ui/slider'
import { Tab } from '@/components/ui/tabs'
import { Typography } from '@/components/ui/typography'
import { useMeQuery } from '@/features/auth/service/api/auth.api.ts'
import { PacksTable } from '@/features/packs/components/packs-table/packs-table.tsx'
import { useCreateDeckMutation, useGetDecksQuery } from '@/features/packs/service/api/packs.api.ts'

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const Packs = () => {
  const { data: user } = useMeQuery()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [search, setSearch] = useState('')
  const [range, setRange] = useState<[number, number]>([0, 100])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState('7')
  const [sort, setSort] = useState<Sort>({ key: 'updated', direction: 'desc' })
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

  const [rangeValue, setRangeValue] = useState<[number, number]>([0, 1])
  const [createDeck] = useCreateDeckMutation()

  const options = [
    { value: 'my', title: 'My Cards' },
    { value: 'all', title: 'All Cards' },
  ]

  useEffect(() => {
    if (rangeValue[1] !== decks?.maxCardsCount) {
      setRangeValue(prev => [prev[0], decks?.maxCardsCount || 100])
    }
  }, [decks?.maxCardsCount])

  const clearFilter = () => {
    setSearch('')
    setTabValue('all')
    setRange([0, 100])
    if (decks) {
      setRangeValue([0, decks.maxCardsCount])
    }
  }

  const sendModalHandler = (modalData: AddPackFormType) => {
    const form = new FormData()

    form.append('name', modalData.name)
    modalData.isPrivate && form.append('isPrivate', 'true')

    createDeck(form)
    setIsOpenModal(false)
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <Container className={s.root}>
      <AddEditPack
        title={'Add New Pack'}
        buttonName={'Add New Pack'}
        namePack={'Name Pack'}
        isOpen={isOpenModal}
        onOpenChange={isOpen => setIsOpenModal(isOpen)}
        onClickDataHandler={sendModalHandler}
        defaultValue={'Name'}
      />
      <div className={s.title}>
        <Typography variant={'large'}>Packs list</Typography>
        <Button onClick={() => setIsOpenModal(true)}>Add New Pack</Button>
      </div>
      <div className={s.filter}>
        <DebounceInput onValueChange={e => setSearch(e)} searchValue={search} />
        <Tab
          className={s.tab}
          tabs={options}
          label={'Show packs cards'}
          defaultValue={'all'}
          value={tabValue}
          onValueChange={value => setTabValue(value)}
        />
        <div className={s.range}>
          <SliderComponent
            onValueCommit={setRange}
            value={rangeValue}
            setValue={setRangeValue}
            max={decks?.maxCardsCount}
          />
        </div>

        <Button variant={'secondary'} onClick={clearFilter}>
          <Trash />
          <Typography className={s.btn} variant={'subtitle2'}>
            Clear Filter
          </Typography>
        </Button>
      </div>

      {decks && <PacksTable id={user?.id} decks={decks.items} sort={sort} onSort={setSort} />}

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
        <Pagination
          count={decks?.pagination.totalPages ?? 10}
          onChange={page => setCurrentPage(page)}
          onPerPageChange={itemsPerPage => setItemsPerPage(itemsPerPage)}
          page={decks?.pagination.currentPage ?? 1}
          perPage={decks?.pagination.itemsPerPage}
          perPageOptions={[4, 7, 10]}
        />
      </div>
    </Container>
  )
}
