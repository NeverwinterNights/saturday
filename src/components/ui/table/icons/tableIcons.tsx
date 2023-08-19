import { useNavigate } from 'react-router-dom'

import { Edit } from '@/assets/icons/Edit.tsx'
import { Play } from '@/assets/icons/Play.tsx'
import { Trash } from '@/assets/icons/Trash.tsx'
import { PATH } from '@/common'

type TablePackIconsProp = {
  deleteDeck?: () => void
  editOpenModals?: () => void
  id?: string
}

export const TablePackIcons = ({ deleteDeck, editOpenModals, id }: TablePackIconsProp) => {
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <button
        style={{ cursor: 'pointer', height: '16px' }}
        onClick={() => navigate(`${PATH.LEARN}` + `/${id}`)}
      >
        <Play />
      </button>
      <button style={{ cursor: 'pointer', height: '16px' }} onClick={editOpenModals}>
        <Edit />
      </button>
      <button style={{ cursor: 'pointer', height: '16px' }} onClick={deleteDeck}>
        <Trash />
      </button>
    </div>
  )
}
