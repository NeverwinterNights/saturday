import { ChangeEvent, useRef, useState } from 'react'

import { Modal } from '../../ui/modal'
import { ModalControl } from '../modal-control'

import styles from './add-edit-new-card.module.scss'
import { useAddEditCard } from './use-add-new-card.ts'

import { AddMediaIcon } from '@/assets/icons/AddMediaIcon.tsx'
import { uploadHandler } from '@/common/utils/file-uploader.ts'
import { Button } from '@/components/ui/button'
import { ControlledInput } from '@/components/ui/controlled'

type ImageType = {
  questionImg?: string
  answerImg?: string
  questionVideo?: string
  answerVideo?: string
}

type AddEditNewCardPropsType = {
  isOpen: boolean
  title: string
  buttonName: string
  onOpenChange?: (value: boolean) => void
  defaultQuestion?: string
  defaultAnswer?: string
  namePack?: string
  questionImg?: string | undefined
  answerImg?: string | undefined
  questionVideo?: FileList | undefined
  answerVideo?: FileList | undefined
  onClickDataHandler: (value: FormData) => void
}

export const AddEditNewCard = ({
  onOpenChange,
  buttonName,
  title,

  defaultQuestion,
  questionImg,
  answerImg,
  answerVideo,
  questionVideo,
  defaultAnswer,
  onClickDataHandler,
  isOpen,
}: AddEditNewCardPropsType) => {
  const { handleSubmit, setValue, control, register } = useAddEditCard(
    defaultQuestion,
    defaultAnswer,
    // questionImg,
    // answerImg,
    answerVideo,
    questionVideo
  )

  const inputRef1 = useRef<HTMLInputElement>(null)
  const inputRef2 = useRef<HTMLInputElement>(null)
  const inputRef3 = useRef<HTMLInputElement>(null)
  const inputRef4 = useRef<HTMLInputElement>(null)

  const [image, setImage] = useState<ImageType>({ questionImg, answerImg })
  const onSubmit = handleSubmit(data => {
    const form = new FormData()

    form.append('question', data.question)
    form.append('answer', data.answer)

    if (data?.questionImg?.[0]) {
      form.append('questionImg', data?.questionImg?.[0])
    }
    if (data?.answerImg?.[0]) {
      form.append('answerImg', data?.answerImg?.[0])
    }
    if (data?.questionVideo?.[0]) {
      form.append('questionVideo', data?.questionVideo?.[0])
      // uploadHandler(data?.questionVideo?.[0], base64 => {
      //   form.append('questionVideo', base64)
      // })
    }
    if (data?.answerVideo?.[0]) {
      form.append('answerVideo', data?.answerVideo?.[0])
    }
    onClickDataHandler(form)

    onOpenChange?.(false)
  })

  const closedModal = () => {
    onOpenChange?.(false)
  }

  const addMediaFileHandler = (
    e: ChangeEvent<HTMLInputElement>,
    key: 'question' | 'answer' | 'questionImg' | 'answerImg' | 'questionVideo' | 'answerVideo'
  ) => {
    uploadHandler((e.target.files as FileList)[0], base64 => {
      setImage({ ...image, [key]: base64 })
    })
    setValue(key, e.target.files as FileList)
  }

  return (
    <>
      <Modal onOpenChange={onOpenChange} title={title} isOpen={isOpen}>
        <div className={styles.content}>
          <form onSubmit={onSubmit}>
            <div className={styles.info}>
              <div className={styles.input}>
                <ControlledInput label={'Question'} name={'question'} control={control} />
              </div>
              <div className={styles.input}>
                <ControlledInput label={'Answer'} name={'answer'} control={control} />
              </div>

              <div className={styles.item}>
                <div className={styles.imageWrap}>
                  {!image.questionImg ? (
                    <div>No Image</div>
                  ) : (
                    <img
                      style={{ width: '100%', height: '100%' }}
                      src={image.questionImg}
                      alt={'image'}
                    />
                  )}
                </div>
                <div className={styles.infoWrap}>
                  <div>Image Question</div>
                  <input
                    style={{ display: 'none' }}
                    type="file"
                    {...register('questionImg')}
                    ref={inputRef1}
                    // onChange={e => {
                    //   uploadHandler((e.target.files as FileList)[0], base64 => {
                    //     setImage({ ...image, questionImg: base64 })
                    //   })
                    //   setValue('questionImg', e.target.files as FileList)
                    // }}
                    onChange={e => addMediaFileHandler(e, 'questionImg')}
                  />
                  <Button
                    type={'button'}
                    variant="secondary"
                    onClick={() => inputRef1 && inputRef1.current?.click()}
                  >
                    <AddMediaIcon />
                    Change Cover
                  </Button>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.imageWrap}>
                  {!image.answerImg ? (
                    <div>No Image</div>
                  ) : (
                    <img
                      style={{ width: '100%', height: '100%' }}
                      src={image.answerImg}
                      alt={'image'}
                    />
                  )}
                </div>
                <div className={styles.infoWrap}>
                  <div>Image Answer</div>
                  <input
                    style={{ display: 'none' }}
                    type="file"
                    {...register('answerImg')}
                    ref={inputRef2}
                    onChange={e => addMediaFileHandler(e, 'answerImg')}
                  />
                  <Button
                    type={'button'}
                    variant="secondary"
                    onClick={() => inputRef2 && inputRef2.current?.click()}
                  >
                    <AddMediaIcon />
                    Change Cover
                  </Button>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.imageWrap}>
                  {!image.questionVideo ? (
                    <div>No Image</div>
                  ) : (
                    <img
                      style={{ width: '100%', height: '100%' }}
                      src={image.questionVideo}
                      alt={'image'}
                    />
                  )}
                </div>
                <div className={styles.infoWrap}>
                  <div>Video Answer</div>
                  <input
                    style={{ display: 'none' }}
                    type="file"
                    {...register('questionVideo')}
                    ref={inputRef3}
                    onChange={e => addMediaFileHandler(e, 'questionVideo')}
                  />
                  <Button
                    type={'button'}
                    variant="secondary"
                    onClick={() => inputRef3 && inputRef3.current?.click()}
                  >
                    <AddMediaIcon />
                    Change Cover
                  </Button>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.imageWrap}>
                  {!image.answerVideo ? (
                    <div>No Image</div>
                  ) : (
                    <img
                      style={{ width: '100%', height: '100%' }}
                      src={image.answerVideo}
                      alt={'image'}
                    />
                  )}
                </div>
                <div className={styles.infoWrap}>
                  <div>Video Answer</div>
                  <input
                    style={{ display: 'none' }}
                    type="file"
                    {...register('answerVideo')}
                    ref={inputRef4}
                    onChange={e => addMediaFileHandler(e, 'answerVideo')}
                  />
                  <Button
                    type={'button'}
                    variant="secondary"
                    onClick={() => inputRef4 && inputRef4.current?.click()}
                  >
                    <AddMediaIcon />
                    Change Cover
                  </Button>
                </div>
              </div>
            </div>
            <ModalControl closedModal={closedModal} title={buttonName} onSubmit={onSubmit} />
          </form>
        </div>
      </Modal>
    </>
  )
}
