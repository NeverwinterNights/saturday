import { ComponentProps, FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { CloseModal } from '../../../assets/icons/CloseModal.tsx'
import { Typography } from '../../../components/ui/typography'

import s from './modals.module.scss'

export type ModalsType = {
  children?: ReactNode
  title?: string
  renderCancelButton?: () => ReactNode
  renderActionButton?: () => ReactNode
  onOpenChange?: (value: boolean) => void
} & ComponentProps<'div'>

export const Modals: FC<ModalsType> = ({
  children,
  title,
  onOpenChange,
  renderActionButton,
  renderCancelButton,
}) => {
  return (
    <Dialog.Root open onOpenChange={onOpenChange}>
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
            <Dialog.Close>{renderCancelButton?.()}</Dialog.Close>
            <Dialog.Close className={s.actionBtn}>{renderActionButton?.()}</Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
