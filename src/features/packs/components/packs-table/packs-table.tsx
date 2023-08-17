import { FC, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import s from './packs-table.module.scss'

import { Play } from '@/assets/icons/Play.tsx'
import { PATH } from '@/common'
import { AddEditPack } from '@/components/info-cards/add-new-pack'
import { AddPackFormType } from '@/components/info-cards/add-new-pack/use-add-new-pack.ts'
import { DeleteItem } from '@/components/info-cards/delete-item'
import { TablePackIcons } from '@/components/ui/table/icons/tableIcons.tsx'
import { Table } from '@/components/ui/table/table.tsx'
import { Sort, TableHeader, TableHeaderType } from '@/components/ui/table-header/table-header.tsx'
import {
  useDeleteDeckMutation,
  useUpdateDeckMutation,
} from '@/features/packs/service/api/packs.api.ts'
import { DecksType } from '@/features/packs/service/api/packs.types.ts'
import { useTranslate } from '@/i18n.ts'

type PropsType = {
  decks: DecksType[]
  onSort: (sort: Sort) => void
  sort: Sort
  id?: string
}
type DeckData = {
  name: string
  id: string
}
export const PacksTable: FC<PropsType> = ({ decks, id, onSort, sort }) => {
  const t = useTranslate()
  const myId = id
  const navigate = useNavigate()
  const headersPacks: TableHeaderType[] = [
    {
      key: 'name',
      label: t('Name'),
      className: `${s.name}`,
      show: true,
      isSortable: true,
    },
    {
      key: 'cardsCount',
      label: t('Cards'),
      className: `${s.cards}`,
      show: true,
      isSortable: true,
    },
    {
      key: 'updated',
      label: t('Last Updated'),
      className: `${s.updated}`,
      show: true,
      isSortable: true,
    },
    {
      key: 'created',
      label: t('Created by'),
      className: `${s.createdBy}`,
      show: true,
      isSortable: true,
    },
    {
      key: 'icons',
      label: '',
      className: `${s.icons}`,
      show: true,
      isSortable: false,
    },
  ]

  const [deleteDeck] = useDeleteDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
  const [deckData, setDeckData] = useState<DeckData>({} as DeckData)
  const modalHandler = (data: AddPackFormType) => {
    const form = new FormData()

    form.append('name', data.name)
    if (data?.cover?.[0]) {
      form.append('cover', data?.cover?.[0])
    }
    if (data?.isPrivate) {
      form.append('isPrivate', JSON.stringify(data?.isPrivate))
    }
    updateDeck({ id: deckData.id, data: form })
  }
  const deletModalHandler = () => {
    deleteDeck(deckData.id)
      .unwrap()
      .then(() => {
        toast.success(t('Deleted'))
      })
    setIsModalDeleteOpen(false)
  }

  const openModalHandler = (name: string, id: string) => {
    setDeckData({ name, id })
    setIsModalOpen(true)
  }
  const openDeletModalHandler = (name: string, id: string) => {
    setDeckData({ name, id })
    setIsModalDeleteOpen(true)
  }

  return (
    <div>
      <AddEditPack
        defaultValue={deckData.name}
        namePack={'Name Pack'}
        title={'Edit Pack'}
        onClickDataHandler={modalHandler}
        buttonName={'Save Changes'}
        onOpenChange={setIsModalOpen}
        isOpen={isModalOpen}
      />
      <DeleteItem
        title={t('Delete Pack')}
        isOpen={isModalDeleteOpen}
        onClickDataHandler={deletModalHandler}
        buttonName={t('Delete Pack')}
        itemName={` ${deckData?.name}` as string}
        onOpenChange={() => setIsModalDeleteOpen(false)}
      />
      <Table.Root>
        <TableHeader headers={headersPacks} onSort={onSort} sort={sort} />
        <Table.Body>
          {decks &&
            decks.map(item => (
              <Table.Row key={item.id}>
                <Table.Cell onClick={() => navigate(`${PATH.PACKS}${PATH.CARDS}/${item.id}`)}>
                  <div className={s.deckCover}>
                    {<img className={s.image} src={item.cover} alt="" />}
                    {item.name}
                  </div>
                </Table.Cell>
                <Table.Cell>{item.cardsCount}</Table.Cell>
                <Table.Cell>{new Date(item.updated).toLocaleString()}</Table.Cell>
                <Table.Cell>{item.author.name}</Table.Cell>
                <Table.Cell align="center">
                  {myId !== item.userId ? (
                    <Play
                      style={{ cursor: 'pointer' }}
                      onClick={() => navigate(`${PATH.LEARN}` + `/${item.id}`)}
                    />
                  ) : (
                    <TablePackIcons
                      id={item.id}
                      editOpenModals={() => openModalHandler(item.name, item.id)}
                      deleteDeck={() => openDeletModalHandler(item.name, item.id)}
                    />
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
