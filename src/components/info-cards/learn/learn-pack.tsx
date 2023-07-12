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
      <div className={styles.title}>
        <Typography variant="large">Learn {packName}</Typography>
      </div>
      <div className={styles.question}>
        <Typography variant="body1">
          <Typography as="span" variant="subtitle2">
            Question:{' '}
          </Typography>
          {question}
        </Typography>
      </div>
      <div style={{ marginBottom: '35px' }}>
        <Typography color="secondary" className={styles.efforts} variant="body2">
          Количество попыток ответов на вопрос: {numberEfforts}
        </Typography>
      </div>
      {isOpen && (
        <div>
          <div style={{ marginBottom: '12px' }}>
            <Typography variant="body1">
              <Typography as="span" variant="subtitle2">
                Answer:{' '}
              </Typography>
              {answer}
            </Typography>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <Typography variant="subtitle1">Rate yourself:</Typography>
          </div>
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
