import { useState } from 'react'

import StarEmpty from '../../../assets/icons/StarEmpty.tsx'
import StarFilled from '../../../assets/icons/StarFilled.tsx'

import s from './rating-stars.module.scss'

type StarRatingPropsType = {
  value: number
  isInteractive?: boolean
  onChanged?: () => void
}
export const StarRating = (props: StarRatingPropsType) => {
  const { value = 0, isInteractive = false, onChanged } = props

  const [rating, setRating] = useState<number>(value)

  return (
    <div className={s.root}>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1

        return (
          <label key={i}>
            {isInteractive && (
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
                onChange={onChanged}
              />
            )}
            {ratingValue <= rating ? <StarFilled /> : <StarEmpty />}
          </label>
        )
      })}
    </div>
  )
}
