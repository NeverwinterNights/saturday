import { useEffect, useState } from 'react'

import { toast } from 'react-toastify'

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
import { useTranslate } from '@/i18n.ts'
import { useAppSelector } from '@/store/store.ts'

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const Packs = () => {
  const t = useTranslate()
  const { data: user } = useMeQuery()
  const status = useAppSelector(state => state.appReducer.status)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [search, setSearch] = useState('')
  const [range, setRange] = useState<[number, number]>([0, 100])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState('7')
  const [sort, setSort] = useState<Sort>({ key: 'updated', direction: 'desc' })
  const sortString = sort ? `${sort.key}-${sort.direction}` : undefined
  const [tabValue, setTabValue] = useState('all')
  const { data: decks } = useGetDecksQuery({
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
    { value: 'my', title: t('My Cards') },
    { value: 'all', title: t('All Cards') },
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
    toast.warn('Filters reset')
  }

  const sendModalHandler = (modalData: AddPackFormType) => {
    const form = new FormData()

    form.append('name', modalData.name)
    modalData.isPrivate && form.append('isPrivate', 'true')

    createDeck(form)
    setIsOpenModal(false)
  }

  return (
    <Container className={s.root}>
      <AddEditPack
        title={t('Add New Pack')}
        buttonName={t('Add New Pack')}
        namePack={t('Name Pack')}
        isOpen={isOpenModal}
        onOpenChange={isOpen => setIsOpenModal(isOpen)}
        onClickDataHandler={sendModalHandler}
        defaultValue={''}
      />
      <div className={s.title}>
        <Typography variant={'large'}>{t('Packs list')}</Typography>
        <Button disabled={status === 'loading'} onClick={() => setIsOpenModal(true)}>
          {t('Add New Pack')}
        </Button>
      </div>
      <div className={s.filter}>
        <DebounceInput
          disabled={status === 'loading'}
          onValueChange={e => setSearch(e)}
          searchValue={search}
        />
        <Tab
          className={s.tab}
          tabs={options}
          label={t('Show packs cards')}
          defaultValue={'all'}
          value={tabValue}
          onValueChange={value => setTabValue(value)}
          disabled={status === 'loading'}
        />
        <div className={s.range}>
          <SliderComponent
            disabled={status === 'loading'}
            onValueCommit={setRange}
            value={rangeValue}
            setValue={setRangeValue}
            max={decks?.maxCardsCount}
          />
        </div>

        <Button disabled={status === 'loading'} variant={'secondary'} onClick={clearFilter}>
          <Trash />
          <Typography className={s.btn} variant={'subtitle2'}>
            {t('Clear Filter')}
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
