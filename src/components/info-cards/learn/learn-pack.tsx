import { useState } from 'react'

import styles from './learn-pack.module.scss'

import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupType } from '@/components/ui/radio-group'
import { Typography } from '@/components/ui/typography'
import { useTranslate } from '@/i18n.ts'

type LearnPackPropsType = {
  packName: string
  question: string
  answer: string
  numberEfforts: number
  // dataHandler: () => void
  dataHandler: (value: string) => void
} & Omit<RadioGroupType, 'onValueChange'>

export const LearnPack = ({
  packName,
  options,
  question,
  // onValueChange,
  dataHandler,
  defaultValue,
  answer,
  numberEfforts,
}: LearnPackPropsType) => {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslate()
  const [radioValue, setRadioValue] = useState('')

  const openAnswers = () => {
    setIsOpen(prev => !prev)
  }

  console.log('defaultValue', defaultValue)
  console.log('LearnPack')

  return (
    <div className={styles.wrap}>
      <Typography className={styles.title} variant="large">
        {t('Learn')} {packName}
      </Typography>
      <Typography className={styles.question} variant="body1">
        <Typography as="span" variant="subtitle2">
          {t('Question:')}
        </Typography>
        {question}
      </Typography>
      <Typography className={styles.efforts} color="secondary" variant="body2">
        {t('Количество попыток ответов на вопрос:')} {numberEfforts}
      </Typography>
      {isOpen && (
        <div>
          <Typography className={styles.mb} variant="body1">
            <Typography as="span" variant="subtitle2">
              {t('Answer:')}
            </Typography>
            {answer}
          </Typography>
          <Typography className={styles.mb} variant="subtitle1">
            {t('Rate yourself:')}
          </Typography>
          <div className={styles.radio}>
            <RadioGroup
              onValueChange={setRadioValue}
              options={options}
              defaultValue={defaultValue}
            />
          </div>
        </div>
      )}
      <div className={styles.button}>
        <Button
          onClick={isOpen ? () => dataHandler(radioValue) : openAnswers}
          fullWidth
          variant="primary"
        >
          {/*<Typography variant="subtitle2">{t('Show Answer')}</Typography>*/}
          <Typography variant="subtitle2">
            {isOpen ? t('Next Question') : t('Show Answer')}
          </Typography>
        </Button>
      </div>
    </div>
  )
}
