import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react'

import { Control } from 'react-hook-form'
import { toast } from 'react-toastify'

import { AddMediaIcon } from '@/assets/icons/AddMediaIcon.tsx'
import { convertFileToBase64 } from '@/common/utils'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

type TypeVideoProp = {
  control?: Control<{ questionVideo: string; answerVideo: string }, any>
  questionURL?: string
  answerURL?: string
}

export const TypeVideo = ({ questionURL, answerURL }: TypeVideoProp) => {
  const inputRef1 = useRef<HTMLInputElement>(null)
  const inputRef2 = useRef<HTMLInputElement>(null)
  const [URLQuestion, setURLQuestion] = useState(questionURL)
  const [URLAnswer, setURLAnswer] = useState(answerURL)

  const uploadHandler = (
    e: ChangeEvent<HTMLInputElement>,
    updater: Dispatch<SetStateAction<string | undefined>>
  ) => {
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

  return (
    <>
      <div style={{ marginBottom: '30px' }}>
        <Typography style={{ marginBottom: '24px' }} variant="subtitle2">
          Question:
        </Typography>
        <div
          style={{
            width: '100%',
            height: '270px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {URLQuestion && URLQuestion.length <= 0 ? (
            <Typography variant="subtitle2">No Video</Typography>
          ) : (
            <video src={URLQuestion} width={'100%'} height="100%" controls />
          )}
        </div>
        <Button
          variant="secondary"
          type={'button'}
          fullWidth
          onClick={() => inputRef1 && inputRef1.current?.click()}
        >
          <AddMediaIcon />
          Change Cover
        </Button>
        <input
          ref={inputRef1}
          type="file"
          onChange={event => uploadHandler(event, setURLQuestion)}
          style={{ display: 'none' }}
        />
      </div>
      <div style={{ marginBottom: '30px' }}>
        <Typography style={{ marginBottom: '24px' }} variant="subtitle2">
          Answer:
        </Typography>
        <div
          style={{
            width: '100%',
            height: '270px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {URLAnswer && URLAnswer.length <= 0 ? (
            <Typography variant="subtitle2">No Video</Typography>
          ) : (
            <video src={URLAnswer} width={'100%'} height="100%" controls />
          )}
        </div>

        <Button
          variant="secondary"
          type={'button'}
          fullWidth
          onClick={() => inputRef2 && inputRef2.current?.click()}
        >
          <AddMediaIcon />
          Change Cover
        </Button>
        <input
          ref={inputRef2}
          type="file"
          onChange={event => uploadHandler(event, setURLAnswer)}
          style={{ display: 'none' }}
        />
      </div>
    </>
  )
}
