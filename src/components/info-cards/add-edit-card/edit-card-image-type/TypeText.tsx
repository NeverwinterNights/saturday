import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react'

import { Control } from 'react-hook-form'
import { toast } from 'react-toastify'

import { AddMediaIcon } from '@/assets/icons/AddMediaIcon.tsx'
import { convertFileToBase64 } from '@/common/utils'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

type TypeImageProp = {
  control?: Control<{ question: string; answer: string }, any>
  questionURL: string
  answerURL: string
}

export const TypeImage = ({ questionURL, answerURL }: TypeImageProp) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [URLQuestion, setURLQuestion] = useState(questionURL)
  const [URLAnswer, setURLAnswer] = useState(answerURL)

  const uploadHandler = (
    e: ChangeEvent<HTMLInputElement>,
    updater: Dispatch<SetStateAction<string>>
  ) => {
    console.log('value')
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      if (file.size < 4000000) {
        convertFileToBase64(file, (file64: string) => {
          updater(file64)
        })
      } else {
        toast('Error with adding photo')
      }
    }
  }

  console.log('URLQuestion', URLQuestion)
  console.log('URLAnswer', URLAnswer)

  return (
    <>
      <div style={{ marginBottom: '30px' }}>
        <Typography style={{ marginBottom: '24px' }} variant="subtitle2">
          Question:
        </Typography>
        <img
          src={URLQuestion}
          style={{ width: '484px', height: '119px', marginBottom: '24px' }}
          alt={'question'}
        />
        <Button
          variant="secondary"
          type={'button'}
          fullWidth
          onClick={() => inputRef && inputRef.current?.click()}
        >
          <AddMediaIcon />
          Change Cover
        </Button>
        <input
          ref={inputRef}
          type="file"
          onChange={event => uploadHandler(event, setURLQuestion)}
          style={{ display: 'none' }}
        />
      </div>
      <div style={{ marginBottom: '30px' }}>
        <Typography style={{ marginBottom: '24px' }} variant="subtitle2">
          Answer:
        </Typography>
        <img
          src={URLAnswer}
          style={{ width: '484px', height: '119px', marginBottom: '24px' }}
          alt={'question'}
        />
        <Button
          variant="secondary"
          type={'button'}
          fullWidth
          onClick={() => inputRef && inputRef.current?.click()}
        >
          <AddMediaIcon />
          Change Cover
        </Button>
        <input
          ref={inputRef}
          type="file"
          onChange={event => uploadHandler(event, setURLAnswer)}
          style={{ display: 'none' }}
        />
      </div>
    </>
  )
}
