import { Fragment, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import s from './cards.module.scss'

import { ArrowLeft } from '@/assets/icons/ArrowLeft.tsx'
import { Edit } from '@/assets/icons/Edit.tsx'
import { Play } from '@/assets/icons/Play.tsx'
import { Trash } from '@/assets/icons/Trash.tsx'
import cover from '@/assets/images/packs_cover.png'
import { AddEditNewCard } from '@/components/info-cards/add-edit-card'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { DebounceInput } from '@/components/ui/debounce-input'
import { Dropdown, DropdownItemWithIcon } from '@/components/ui/dropdown'
import { Image } from '@/components/ui/image/image.tsx'
import { Typography } from '@/components/ui/typography'
import { useMeQuery } from '@/features/auth/service/api/auth.api.ts'
import { CardsTable } from '@/features/cards/components/cards-table/cards-table.tsx'
import {
  useCreateCardsMutation,
  useGetCardsQuery,
  useGetDeckQuery,
} from '@/features/packs/service/api/packs.api.ts'

export const Cards = () => {
  const { id } = useParams<{ id: string }>()
  const { data: user } = useMeQuery()

  const [searchValue, setSearchValue] = useState('')
  const { data, isLoading } = useGetCardsQuery({
    decksId: id ?? '',
    question: searchValue ? searchValue : undefined,
  })
  const { data: deck } = useGetDeckQuery(id ?? '')
  const myPack = deck?.userId === user?.id
  const packsCover = ''
  const navigate = useNavigate()
  const [createCard] = useCreateCardsMutation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const createCardHandler = (data: FormData) => {
    if (deck?.id) {
      createCard({ data, decksId: deck.id })
    }
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <Container className={s.root}>
      <Typography variant={'body2'} onClick={() => navigate(-1)} className={s.backBtn}>
        <ArrowLeft />
        Back to Packs List
      </Typography>
      <AddEditNewCard
        isOpen={isModalOpen}
        title="Add New Card"
        buttonName="Add New Card"
        onClickDataHandler={createCardHandler}
        onOpenChange={() => setIsModalOpen(false)}
      />
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
        {myPack ? (
          <Button onClick={() => setIsModalOpen(!isModalOpen)}>Add New Card</Button>
        ) : (
          <Button>Learn to Pack</Button>
        )}
      </div>

      <Image src={packsCover || cover} height={107} width={170} className={s.cover} />

      {data && data.items.length ? (
        <>
          {/*<Input
            searchInput
            placeholder={'Input search'}
            className={s.input}
            value={inputValue}
            onChange={e => setInputValue(e.currentTarget.value)}
          />*/}
          <DebounceInput
            className={s.input}
            onValueChange={e => setSearchValue(e)}
            searchValue={searchValue}
          />
          <CardsTable cardsData={data.items} />
        </>
      ) : (
        <div className={s.empty}>
          <Typography variant={'body1'}>
            This pack is empty. Click add new card to fill this pack
          </Typography>
          <Button onClick={() => setIsModalOpen(!isModalOpen)}>Add New Card</Button>
        </div>
      )}
    </Container>
  )
}
