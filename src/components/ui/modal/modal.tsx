import { ComponentProps, FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { Typography } from '../typography'

import s from './modal.module.scss'

import { CloseModal } from '@/assets/icons/CloseModal.tsx'
import { useTranslate } from '@/i18n.ts'

export type ModalType = {
  children?: ReactNode
  title?: string
  onOpenChange?: (value: boolean) => void
  isOpen: boolean
  renderActionButton?: () => JSX.Element
  renderCancelButton?: () => JSX.Element
} & ComponentProps<'div'>

export const Modal: FC<ModalType> = ({ children, title, onOpenChange, isOpen }) => {
  const t = useTranslate()

  return (
    <Dialog.Root onOpenChange={onOpenChange} open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.DialogOverlay} />
        <Dialog.Content className={s.DialogContent}>
          <div className={s.header}>
            <Dialog.Title>
              <Typography variant={'h2'}>{title}</Typography>
            </Dialog.Title>
            <Dialog.Close className={s.IconButton} aria-label={t('Close')}>
              <CloseModal />
            </Dialog.Close>
          </div>
          <div className={s.content}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
