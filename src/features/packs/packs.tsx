import { useState } from 'react'

import s from './packs.module.scss'

import { Trash } from '@/assets/icons/Trash.tsx'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Input } from '@/components/ui/input'
import { SliderComponent } from '@/components/ui/slider'
import { Tab } from '@/components/ui/tabs'
import { Typography } from '@/components/ui/typography'
import { PacksTable } from '@/features/packs/packs-table'

export const Packs = () => {
  const [value, setValue] = useState<[number, number]>([0, 1])
  const options = [
    { value: 'my', title: 'My Cards' },
    { value: 'all', title: 'All Cards' },
  ]

  return (
    <Container className={s.root}>
      <div className={s.title}>
        <Typography variant={'large'}>Packs list</Typography>
        <Button>Add New Pack</Button>
      </div>
      <div className={s.filter}>
        <Input placeholder={'Input search'} width={'300px'} searchInput />
        <Tab tabs={options} label={'Show packs cards'} defaultValue={'all'} />
        <SliderComponent defaultValue={value} value={value} setValue={e => console.log(e)} />
        <Button variant={'secondary'}>
          <Trash />
          Clear Filter
        </Button>
      </div>
      <PacksTable />
    </Container>
  )
}
