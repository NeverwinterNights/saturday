import { memo } from 'react'

import { Modal, ModalType } from '../../ui/modal'
import { Typography } from '../../ui/typography'
import { RenderActionButton } from '../cards-buttons/RenderActionButton.tsx'
import { RenderCancelButton } from '../cards-buttons/RenderCancelButton.tsx'

type DeletePackPropsType = {
  isOpen: boolean
  onClickDataHandler: () => void
  buttonName: string
  packName: string
} & ModalType

export const DeletePack = memo(
  ({
    isOpen,
    onConfirm,
    buttonName,
    packName,
    onOpenChange,
    onClickDataHandler,
  }: DeletePackPropsType) => {
    return (
      <Modal
        actionButton={
          <RenderActionButton onClick={onClickDataHandler}>{buttonName}</RenderActionButton>
        }
        renderCancelButton={RenderCancelButton}
        isOpen={isOpen}
        title={'Delete  Pack'}
        onOpenChange={onOpenChange}
        onConfirm={onConfirm}
      >
        <div>
          <Typography variant="subtitle1">
            Do you really want to remove{' '}
            <Typography style={{ fontWeight: '900' }} as="span">
              {packName}?
            </Typography>
          </Typography>
          <Typography variant="subtitle1">All cards will be deleted.</Typography>
        </div>
      </Modal>
    )
  }
)
