import { Edit } from '@/assets/icons/Edit.tsx'
import { Trash } from '@/assets/icons/Trash.tsx'

type TableCardIconsPropsType = {
  deleteCard?: () => void
  updateCard?: () => void
}

export const TableCardIcons = ({ deleteCard, updateCard }: TableCardIconsPropsType) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <button style={{ cursor: 'pointer' }} onClick={updateCard}>
        <Edit />
      </button>
      <button style={{ cursor: 'pointer' }} onClick={deleteCard}>
        <Trash />
      </button>
    </div>
  )
}
