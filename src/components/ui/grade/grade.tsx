import { useState } from 'react'

import { clsx } from 'clsx'

import styles from './grade.module.scss'

import StarEmpty from '@/assets/icons/StarEmpty.tsx'
import StarFilled from '@/assets/icons/StarFilled.tsx'
import { StarItem } from '@/components/ui/grade/star-item.tsx'

export type GradeType = 0 | 1 | 2 | 3 | 4 | 5
type GradePropsType = {
  clickHandler?: (grade: GradeType) => void
  grade: GradeType
  maxStarNumber?: number
}
export const Grade = ({ grade, clickHandler, maxStarNumber = 5 }: GradePropsType) => {
  const [mouseStarId, setMouseStarId] = useState<number>(0)

  const emptyStars = maxStarNumber - grade
  const stars = [...Array(grade).fill(<StarFilled />), ...Array(emptyStars).fill(<StarEmpty />)]

  return (
    <div className={styles.stars}>
      {stars.map((item, id) => {
        const style = clsx(id + 1 <= mouseStarId && clickHandler && styles.overStar)

        const starClickHandle = () => {
          if (grade !== mouseStarId) {
            clickHandler?.((id + 1) as GradeType)
          }
          // if (grade === 1 && mouseStarId === 1) {
          //   clickHandler?.(0)
          // } else {
          //   clickHandler?.((id + 1) as GradeType)
          // }
        }

        return (
          <StarItem
            key={id}
            id={id + 1}
            starType={item}
            onClick={starClickHandle}
            onMouseEnter={setMouseStarId}
            onMouseLeave={setMouseStarId}
            className={style}
          />
        )
      })}
    </div>
  )
}
