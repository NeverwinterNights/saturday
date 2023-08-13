import { Fragment, useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import s from './cards.module.scss'

import { addOrderByAC, addQuestionAC } from '@/app/app.slice.ts'
import { ArrowLeft } from '@/assets/icons/ArrowLeft.tsx'
import { Edit } from '@/assets/icons/Edit.tsx'
import { Play } from '@/assets/icons/Play.tsx'
import { Trash } from '@/assets/icons/Trash.tsx'
import { MainLoader } from '@/assets/loaders/main-loader/main-loader.tsx'
import { PATH } from '@/common'
import { AddEditNewCard } from '@/components/info-cards/add-edit-card'
import { AddEditPack } from '@/components/info-cards/add-new-pack'
import { AddPackFormType } from '@/components/info-cards/add-new-pack/use-add-new-pack.ts'
import { DeleteItem } from '@/components/info-cards/delete-item'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { DebounceInput } from '@/components/ui/debounce-input'
import { Dropdown, DropdownItemWithIcon } from '@/components/ui/dropdown'
import { Image } from '@/components/ui/image/image.tsx'
import { Typography } from '@/components/ui/typography'
import { Sort } from '@/features'
import { useMeQuery } from '@/features/auth/service/api/auth.api.ts'
import { CardsTable } from '@/features/cards/components/cards-table/cards-table.tsx'
import {
  useCreateCardsMutation,
  useDeleteDeckMutation,
  useGetCardsQuery,
  useGetDeckQuery,
  useUpdateDeckMutation,
} from '@/features/packs/service/api/packs.api.ts'
import { useTranslate } from '@/i18n.ts'
import { useAppDispatch } from '@/store/store.ts'

export const Cards = () => {
  const t = useTranslate()
  const { id } = useParams<{ id: string }>()
  const { data: user } = useMeQuery()

  const [sort, setSort] = useState<Sort>({ key: 'question', direction: 'desc' })
  const sortString = sort ? `${sort.key}-${sort.direction}` : undefined
  const [searchValue, setSearchValue] = useState('')
  const { data, isLoading } = useGetCardsQuery({
    decksId: id ?? '',
    question: searchValue ? searchValue : undefined,
    // orderBy: sortString,
    orderBy: sortString ? sortString : undefined,
  })
  const dispatch = useAppDispatch()

  // const { id } = useParams<{ id: string }>()
  useEffect(() => {
    dispatch(addQuestionAC(searchValue))
    if (sortString) {
      dispatch(addOrderByAC(sortString))
    }
  }, [searchValue, sortString])

  const { data: deck } = useGetDeckQuery(id ?? '')
  const myPack = deck?.userId === user?.id
  const packsCover = ''
  const navigate = useNavigate()
  const [createCard] = useCreateCardsMutation()
  const [updateDeck] = useUpdateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalEditOpen, setIsModalEditOpen] = useState(false)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
  const createCardHandler = (data: FormData) => {
    if (deck?.id) {
      createCard({ data, decksId: deck.id })
    }
  }

  const updateDeckHandler = (data: AddPackFormType) => {
    const form = new FormData()

    form.append('name', data.name)

    data.cover && form.append('cover', data?.cover?.[0])

    data.isPrivate && form.append('isPrivate', 'true')

    if (form && deck?.id) {
      updateDeck({ id: deck?.id, data: form })
    }
    setIsModalEditOpen(false)
  }

  const onDeckDeleteHandler = () => {
    if (deck?.id) {
      deleteDeck(deck.id)
    }
    setIsModalDeleteOpen(false)
    navigate(-1)
  }

  if (isLoading) return <MainLoader />

  return (
    <Container className={s.root}>
      <Typography variant={'body2'} onClick={() => navigate(-1)} className={s.backBtn}>
        <ArrowLeft />
        {t('Back to Packs List')}
      </Typography>
      <AddEditNewCard
        isOpen={isModalOpen}
        title={t('Add New Card')}
        buttonName={t('Add New Card')}
        onClickDataHandler={createCardHandler}
        onOpenChange={() => setIsModalOpen(false)}
      />
      <AddEditPack
        defaultValue={deck?.name}
        namePack={'Name Pack'}
        isOpen={isModalEditOpen}
        title={t('Edit Pack')}
        buttonName={t('Save Changes')}
        onClickDataHandler={updateDeckHandler}
        onOpenChange={() => setIsModalEditOpen(false)}
      />
      <DeleteItem
        title={t('Delete Pack')}
        isOpen={isModalDeleteOpen}
        onClickDataHandler={onDeckDeleteHandler}
        buttonName={t('Delete Pack')}
        itemName={` ${deck?.name}` as string}
        onOpenChange={() => setIsModalDeleteOpen(false)}
      />
      <div className={s.title}>
        <div className={s.namePack}>
          <Typography variant={'large'}>
            {/*{t('Name Pack')}*/}
            {`${deck?.name}`}
          </Typography>
          {myPack && (
            <Dropdown>
              <Fragment key=".0">
                <DropdownItemWithIcon
                  icon={<Play />}
                  onSelect={() => navigate(`${PATH.LEARN}/${id}`)}
                  // onSelect={() => {}}
                  text={t('Learn')}
                />
                <DropdownItemWithIcon
                  icon={<Edit />}
                  onSelect={() => setIsModalEditOpen(true)}
                  text={t('Edit')}
                />
                <DropdownItemWithIcon
                  icon={<Trash />}
                  onSelect={() => setIsModalDeleteOpen(true)}
                  text={t('Delete')}
                />
              </Fragment>
            </Dropdown>
          )}
        </div>
        {myPack ? (
          <Button onClick={() => setIsModalOpen(!isModalOpen)}>{t('Add New Card')}</Button>
        ) : (
          data?.items.length !== 0 && (
            <Button onClick={() => navigate(`${PATH.LEARN}/${id}`)}>{t('Learn to Pack')}</Button>
          )
        )}
      </div>

      <Image
        src={packsCover}
        height={107}
        width={170}
        className={`${s.cover} ${packsCover ? '' : s.noneCover}`}
      />

      {data && data.items.length ? (
        <>
          <DebounceInput
            className={s.input}
            onValueChange={e => setSearchValue(e)}
            searchValue={searchValue}
          />
          <CardsTable id={user?.id} sort={sort} onSort={setSort} cardsData={data.items} />
        </>
      ) : (
        <div className={s.empty}>
          <Typography variant={'body1'}>
            {t('This pack is empty. Click add new card to fill this pack')}
          </Typography>
          {myPack && (
            <Button onClick={() => setIsModalOpen(!isModalOpen)}>{t('Add New Card')}</Button>
          )}
        </div>
      )}
    </Container>
  )
}
