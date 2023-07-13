import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import cover from '../../assets/images/packs_cover.png'

import s from './cards.module.scss'

import { ArrowLeft } from '@/assets/icons/ArrowLeft.tsx'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Image } from '@/components/ui/image/image.tsx'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { CardsTable } from '@/features/cards/cards-table'

export const Cards = () => {
  const [inputValue, setInputValue] = useState('')
  const [cards, setCards] = useState([{}])
  const myPack = true
  const packsCover = ''
  const navigate = useNavigate()

  return (
    <Container className={s.root}>
      <Typography variant={'body2'} onClick={() => navigate(-1)} className={s.backBtn}>
        <ArrowLeft />
        Back to Packs List
      </Typography>
      <div className={s.title}>
        <Typography variant={'large'}>Name Pack</Typography>
        {myPack ? <Button>Add New Card</Button> : <Button>Learn to Pack</Button>}
      </div>
      <Image src={packsCover || cover} height={107} width={170} className={s.cover} />
      <Input
        searchInput
        placeholder={'Input search'}
        className={s.input}
        value={inputValue}
        onChange={e => setInputValue(e.currentTarget.value)}
      />
      {cards.length ? (
        <CardsTable />
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
