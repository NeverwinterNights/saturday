import { Edit } from '@/assets/icons/Edit.tsx'
import { Play } from '@/assets/icons/Play.tsx'
import { Trash } from '@/assets/icons/Trash.tsx'

type TablePackIconsProp = {
  deleteDeck?: () => void
  editOpenModals?: () => void
}

export const TablePackIcons = ({ deleteDeck, editOpenModals }: TablePackIconsProp) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <button style={{ cursor: 'pointer' }} onClick={() => alert('ad')}>
        <Play />
      </button>
      <button style={{ cursor: 'pointer' }} onClick={editOpenModals}>
        <Edit />
      </button>
      <button style={{ cursor: 'pointer' }} onClick={deleteDeck}>
        <Trash />
      </button>
    </div>
  )
}
