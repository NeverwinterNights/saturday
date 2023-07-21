import { useState } from 'react'

import s from './packs.module.scss'

import { Trash } from '@/assets/icons/Trash.tsx'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination'
import { Tab } from '@/components/ui/tabs'
import { Typography } from '@/components/ui/typography'
import { PacksTable } from '@/features/packs/components/packs-table/packs-table.tsx'
import { useGetDecksQuery } from '@/features/packs/service/api/packs.api.ts'

export const Packs = () => {
  const { data, isLoading } = useGetDecksQuery()

  const [value] = useState<[number, number]>([0, 1])
  const options = [
    { value: 'my', title: 'My Cards' },
    { value: 'all', title: 'All Cards' },
  ]

  if (isLoading) return <div>Loading...</div>

  return (
    <Container className={s.root}>
      <div className={s.title}>
        <Typography variant={'large'}>Packs list</Typography>
        <Button>Add New Pack</Button>
      </div>
      <div className={s.filter}>
        <Input placeholder={'Input search'} width={'300px'} searchInput />
        <Tab tabs={options} label={'Show packs cards'} defaultValue={'all'} />
        {/*<SliderComponent defaultValue={value} value={value} setValue={e => console.log(e)} />*/}
        <Button variant={'secondary'}>
          <Trash />
          <Typography variant={'subtitle2'}>Clear Filter</Typography>
        </Button>
      </div>
      {data && <PacksTable decks={data.items} />}
      <Pagination
        count={7}
        onChange={function ro() {}}
        onPerPageChange={function ro() {}}
        page={3}
        perPage={10}
        perPageOptions={[5, 10, 15]}
      />
    </Container>
  )
}
