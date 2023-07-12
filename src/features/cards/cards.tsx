import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import s from './cards.module.scss'

import { ArrowLeft } from '@/assets/icons/ArrowLeft.tsx'
import { PATH } from '@/common'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Typography } from '@/components/ui/typography'

export const Cards = () => {
  const [cards, setCards] = useState([])
  const navigate = useNavigate()

  return (
    <Container className={s.root}>
      <Typography variant={'body2'} onClick={() => navigate(-1)} className={s.backBtn}>
        <ArrowLeft />
        Back to Packs List
      </Typography>
      <Typography variant={'large'}>Name Pack</Typography>

      {cards.length ? (
        <div>Таблица</div>
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
