import { Fragment, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import s from './cards.module.scss'

import { ArrowLeft } from '@/assets/icons/ArrowLeft.tsx'
import { Edit } from '@/assets/icons/Edit.tsx'
import { Play } from '@/assets/icons/Play.tsx'
import { Trash } from '@/assets/icons/Trash.tsx'
import cover from '@/assets/images/packs_cover.png'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Dropdown, DropdownItemWithIcon } from '@/components/ui/dropdown'
import { Image } from '@/components/ui/image/image.tsx'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { useMeQuery } from '@/features/auth/service/api/auth.api.ts'
import { CardsTable } from '@/features/cards/components/cards-table/cards-table.tsx'
import { useGetCardsQuery, useGetDeckQuery } from '@/features/packs/service/api/packs.api.ts'

export const Cards = () => {
  const { id } = useParams<{ id: string }>()
  const { data: user } = useMeQuery()

  console.log(id)
  const { data, isLoading } = useGetCardsQuery({ decksId: id ?? '' })
  const { data: deck } = useGetDeckQuery(id ?? '')
  const [inputValue, setInputValue] = useState('')
  const myPack = deck?.userId === user?.id
  const packsCover = ''
  const navigate = useNavigate()

  if (isLoading) return <div>Loading...</div>

  return (
    <Container className={s.root}>
      <Typography variant={'body2'} onClick={() => navigate(-1)} className={s.backBtn}>
        <ArrowLeft />
        Back to Packs List
      </Typography>

      <div className={s.title}>
        <div className={s.namePack}>
          <Typography variant={'large'}>Name Pack</Typography>
          {myPack && (
            <Dropdown>
              <Fragment key=".0">
                <DropdownItemWithIcon
                  icon={<Play />}
                  onSelect={() => alert('learn card')}
                  text="Learn"
                />
                <DropdownItemWithIcon
                  icon={<Edit />}
                  onSelect={() => alert('edit card')}
                  text="Edit"
                />
                <DropdownItemWithIcon
                  icon={<Trash />}
                  onSelect={() => alert('delete card')}
                  text="Delete"
                />
              </Fragment>
            </Dropdown>
          )}
        </div>
        {myPack ? <Button>Add New Card</Button> : <Button>Learn to Pack</Button>}
      </div>

      <Image src={packsCover || cover} height={107} width={170} className={s.cover} />

      {data && data.items.length ? (
        <>
          <Input
            searchInput
            placeholder={'Input search'}
            className={s.input}
            value={inputValue}
            onChange={e => setInputValue(e.currentTarget.value)}
          />
          <CardsTable cardsData={data.items} />
        </>
      ) : (
        <div className={s.empty}>
          <Typography variant={'body1'}>
            This pack is empty. Click add new card to fill this pack
          </Typography>
          <Button onClick={() => alert('должна появится модалка')}>Add New Card</Button>
        </div>
      )}
    </Container>
  )
}
