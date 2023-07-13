import { useState } from 'react'

import styles from './learn-pack.module.scss'

import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupType } from '@/components/ui/radio-group'
import { Typography } from '@/components/ui/typography'

type LearnPackPropsType = {
  packName: string
  question: string
  answer: string
  numberEfforts: number
} & RadioGroupType

export const LearnPack = ({
  packName,
  options,
  question,
  onValueChange,
  defaultValue,
  answer,
  numberEfforts,
}: LearnPackPropsType) => {
  const [isOpen, setIsOpen] = useState(false)

  const openAnswers = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className={styles.wrap}>
      <Typography className={styles.title} variant="large">
        Learn {packName}
      </Typography>
      <Typography className={styles.question} variant="body1">
        <Typography as="span" variant="subtitle2">
          Question:{' '}
        </Typography>
        {question}
      </Typography>
      <Typography className={styles.efforts} color="secondary" variant="body2">
        Количество попыток ответов на вопрос: {numberEfforts}
      </Typography>
      {isOpen && (
        <div>
          <Typography className={styles.mb} variant="body1">
            <Typography as="span" variant="subtitle2">
              Answer:{' '}
            </Typography>
            {answer}
          </Typography>
          <Typography className={styles.mb} variant="subtitle1">
            Rate yourself:
          </Typography>
          <div className={styles.radio}>
            <RadioGroup
              onValueChange={onValueChange}
              options={options}
              defaultValue={defaultValue}
            />
          </div>
        </div>
      )}
      <div className={styles.button}>
        <Button onClick={openAnswers} fullWidth variant="primary">
          <Typography variant="subtitle2">Show Answer</Typography>
        </Button>
      </div>
    </div>
  )
}
