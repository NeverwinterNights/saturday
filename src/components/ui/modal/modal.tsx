import { ComponentProps, FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { CloseModal } from '../../../assets/icons/CloseModal.tsx'
import { Typography } from '../typography'

import s from './modal.module.scss'

export type ModalType = {
  children?: ReactNode
  title?: string
  renderCancelButton?: () => ReactNode
  renderActionButton?: () => ReactNode
  onOpenChange?: (value: boolean) => void
  isOpen: boolean
  onConfirm: () => void
} & ComponentProps<'div'>

export const Modal: FC<ModalType> = ({
  children,
  title,
  onOpenChange,
  renderActionButton,
  renderCancelButton,
  isOpen,
}) => {
  return (
    <Dialog.Root onOpenChange={onOpenChange} open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.DialogOverlay} />
        <Dialog.Content className={s.DialogContent}>
          <div className={s.header}>
            <Dialog.Title>
              <Typography variant={'h2'}>{title}</Typography>
            </Dialog.Title>
            <Dialog.Close className={s.IconButton} aria-label="Close">
              <CloseModal />
            </Dialog.Close>
          </div>

          <div className={s.content}>{children}</div>

          <div className={s.footer}>
            <Dialog.Close asChild>{renderCancelButton?.()}</Dialog.Close>
            <Dialog.Close asChild className={s.actionBtn}>
              {renderActionButton?.()}
            </Dialog.Close>

            {/*{RenderCancelButton && (*/}
            {/*  <RenderCancelButton onClick={onOpenChange ? e => onOpenChange(false) : () => {}} />*/}
            {/*)}*/}
            {/*<Dialog.Close asChild className={s.actionBtn}>*/}
            {/*  {RenderActionButton && <RenderActionButton />}*/}
            {/*</Dialog.Close>*/}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
